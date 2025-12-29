from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
resend.api_key = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL', 'info@profiremanager.ca')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Health check endpoint (required for Kubernetes deployment)
@app.get("/health")
async def health_check():
    return {"status": "healthy"}


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactRequest(BaseModel):
    name: str
    organization: str
    email: EmailStr
    phone: Optional[str] = None
    firefighters: Optional[str] = None
    message: Optional[str] = None
    language: Optional[str] = "fr"

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


@api_router.post("/contact")
async def send_contact_request(request: ContactRequest):
    """Send contact form submission via email"""
    try:
        # Build email content
        subject = f"Nouvelle demande de démo - {request.organization}"
        
        html_content = f"""
        <html>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #D9072B; color: white; padding: 20px; text-align: center;">
                <h1 style="margin: 0;">ProFireManager</h1>
                <p style="margin: 5px 0 0 0;">Nouvelle demande de démonstration</p>
            </div>
            
            <div style="padding: 20px; background-color: #f9f9f9;">
                <h2 style="color: #333; border-bottom: 2px solid #D9072B; padding-bottom: 10px;">Informations du contact</h2>
                
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold; color: #666; width: 150px;">Nom:</td>
                        <td style="padding: 10px 0; color: #333;">{request.name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold; color: #666;">Organisation:</td>
                        <td style="padding: 10px 0; color: #333;">{request.organization}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold; color: #666;">Email:</td>
                        <td style="padding: 10px 0; color: #333;"><a href="mailto:{request.email}" style="color: #D9072B;">{request.email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold; color: #666;">Téléphone:</td>
                        <td style="padding: 10px 0; color: #333;">{request.phone or 'Non fourni'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold; color: #666;">Nombre de pompiers:</td>
                        <td style="padding: 10px 0; color: #333;">{request.firefighters or 'Non spécifié'}</td>
                    </tr>
                </table>
                
                <h3 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 10px; margin-top: 20px;">Message</h3>
                <p style="color: #333; line-height: 1.6; background-color: white; padding: 15px; border-radius: 5px;">
                    {request.message or 'Aucun message'}
                </p>
            </div>
            
            <div style="padding: 15px; background-color: #333; color: #999; text-align: center; font-size: 12px;">
                <p style="margin: 0;">Ce message a été envoyé depuis le formulaire de contact de profiremanager.ca</p>
            </div>
        </body>
        </html>
        """
        
        params = {
            "from": SENDER_EMAIL,
            "to": [RECIPIENT_EMAIL],
            "subject": subject,
            "html": html_content,
            "reply_to": request.email
        }
        
        # Send email asynchronously
        email_response = await asyncio.to_thread(resend.Emails.send, params)
        
        logger.info(f"Contact email sent successfully: {email_response}")
        
        return {
            "status": "success",
            "message": "Votre demande a été envoyée avec succès" if request.language == "fr" else "Your request has been sent successfully"
        }
        
    except Exception as e:
        logger.error(f"Failed to send contact email: {str(e)}")
        raise HTTPException(
            status_code=500, 
            detail=f"Échec de l'envoi: {str(e)}" if request.language == "fr" else f"Failed to send: {str(e)}"
        )


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()