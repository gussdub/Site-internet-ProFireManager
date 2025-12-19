#!/usr/bin/env python3
"""
Backend API Testing for ProFireManager Contact Form
Tests all contact form API endpoints with comprehensive scenarios
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Get API base URL from frontend .env file
def get_api_base_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    base_url = line.split('=', 1)[1].strip()
                    return f"{base_url}/api"
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

API_BASE_URL = get_api_base_url()
if not API_BASE_URL:
    print("❌ Could not determine API base URL from frontend/.env")
    sys.exit(1)

print(f"🔗 Testing API at: {API_BASE_URL}")

class ContactAPITester:
    def __init__(self):
        self.base_url = API_BASE_URL
        self.test_results = []
        self.created_contact_ids = []
        
    def log_result(self, test_name, success, message, details=None):
        """Log test result"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}: {message}")
        if details:
            print(f"   Details: {details}")
        
        self.test_results.append({
            'test': test_name,
            'success': success,
            'message': message,
            'details': details
        })
    
    def test_1_create_contact_all_fields(self):
        """Test 1: Create a new contact with all fields"""
        test_name = "POST /api/contact (all fields)"
        
        contact_data = {
            "name": "Jean Dupont",
            "organization": "Service d'Incendie de Montréal",
            "email": "jean.dupont@sim.montreal.ca",
            "phone": "+1-514-555-0123",
            "firefighters": "45",
            "message": "Nous sommes intéressés par une démonstration de ProFireManager pour notre service de 45 pompiers.",
            "language": "fr"
        }
        
        try:
            response = requests.post(f"{self.base_url}/contact", json=contact_data, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                # Verify response structure
                required_fields = ['id', 'name', 'organization', 'email', 'status', 'created_at']
                missing_fields = [field for field in required_fields if field not in data]
                
                if missing_fields:
                    self.log_result(test_name, False, f"Missing fields in response: {missing_fields}")
                    return
                
                # Verify data integrity
                if (data['name'] == contact_data['name'] and 
                    data['organization'] == contact_data['organization'] and
                    data['email'] == contact_data['email'] and
                    data['phone'] == contact_data['phone'] and
                    data['firefighters'] == contact_data['firefighters'] and
                    data['message'] == contact_data['message'] and
                    data['language'] == contact_data['language'] and
                    data['status'] == 'new'):
                    
                    self.created_contact_ids.append(data['id'])
                    self.log_result(test_name, True, "Contact created successfully with all fields", 
                                  f"ID: {data['id']}, Status: {data['status']}")
                else:
                    self.log_result(test_name, False, "Data mismatch in response")
            else:
                self.log_result(test_name, False, f"HTTP {response.status_code}", response.text)
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def test_2_create_contact_required_only(self):
        """Test 2: Create a contact with only required fields"""
        test_name = "POST /api/contact (required fields only)"
        
        contact_data = {
            "name": "Sarah Johnson",
            "organization": "Toronto Fire Services",
            "email": "sarah.johnson@toronto.ca"
        }
        
        try:
            response = requests.post(f"{self.base_url}/contact", json=contact_data, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if (data['name'] == contact_data['name'] and 
                    data['organization'] == contact_data['organization'] and
                    data['email'] == contact_data['email'] and
                    data['status'] == 'new' and
                    data['language'] == 'fr'):  # Default language should be 'fr'
                    
                    self.created_contact_ids.append(data['id'])
                    self.log_result(test_name, True, "Contact created with required fields only", 
                                  f"ID: {data['id']}, Default language: {data['language']}")
                else:
                    self.log_result(test_name, False, "Data mismatch or missing defaults")
            else:
                self.log_result(test_name, False, f"HTTP {response.status_code}", response.text)
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def test_3_get_all_contacts(self):
        """Test 3: Get all contacts and verify count"""
        test_name = "GET /api/contact (all contacts)"
        
        try:
            response = requests.get(f"{self.base_url}/contact", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list):
                    # Verify we have at least the contacts we created
                    created_count = len([c for c in data if c['id'] in self.created_contact_ids])
                    
                    if created_count >= len(self.created_contact_ids):
                        self.log_result(test_name, True, f"Retrieved {len(data)} contacts", 
                                      f"Found {created_count} of our created contacts")
                    else:
                        self.log_result(test_name, False, f"Missing created contacts. Expected {len(self.created_contact_ids)}, found {created_count}")
                else:
                    self.log_result(test_name, False, "Response is not a list")
            else:
                self.log_result(test_name, False, f"HTTP {response.status_code}", response.text)
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def test_4_get_specific_contact(self):
        """Test 4: Get a specific contact by ID"""
        test_name = "GET /api/contact/{id} (specific contact)"
        
        if not self.created_contact_ids:
            self.log_result(test_name, False, "No contact IDs available for testing")
            return
        
        contact_id = self.created_contact_ids[0]
        
        try:
            response = requests.get(f"{self.base_url}/contact/{contact_id}", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if data['id'] == contact_id:
                    self.log_result(test_name, True, f"Retrieved specific contact", 
                                  f"ID: {contact_id}, Name: {data['name']}")
                else:
                    self.log_result(test_name, False, "ID mismatch in response")
            else:
                self.log_result(test_name, False, f"HTTP {response.status_code}", response.text)
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def test_5_update_contact_status(self):
        """Test 5: Update a contact's status"""
        test_name = "PATCH /api/contact/{id}/status (update status)"
        
        if not self.created_contact_ids:
            self.log_result(test_name, False, "No contact IDs available for testing")
            return
        
        contact_id = self.created_contact_ids[0]
        new_status = "contacted"
        
        try:
            response = requests.patch(f"{self.base_url}/contact/{contact_id}/status?status={new_status}", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if 'message' in data and data.get('status') == new_status:
                    # Verify the status was actually updated
                    verify_response = requests.get(f"{self.base_url}/contact/{contact_id}", timeout=10)
                    if verify_response.status_code == 200:
                        verify_data = verify_response.json()
                        if verify_data['status'] == new_status:
                            self.log_result(test_name, True, f"Status updated successfully", 
                                          f"ID: {contact_id}, New status: {new_status}")
                        else:
                            self.log_result(test_name, False, f"Status not updated in database. Expected: {new_status}, Got: {verify_data['status']}")
                    else:
                        self.log_result(test_name, False, "Could not verify status update")
                else:
                    self.log_result(test_name, False, "Invalid response format")
            else:
                self.log_result(test_name, False, f"HTTP {response.status_code}", response.text)
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def test_6_get_nonexistent_contact(self):
        """Test 6: Try to get a non-existent contact (should 404)"""
        test_name = "GET /api/contact/{id} (non-existent, expect 404)"
        
        fake_id = str(uuid.uuid4())
        
        try:
            response = requests.get(f"{self.base_url}/contact/{fake_id}", timeout=10)
            
            if response.status_code == 404:
                self.log_result(test_name, True, "Correctly returned 404 for non-existent contact", 
                              f"Fake ID: {fake_id}")
            else:
                self.log_result(test_name, False, f"Expected 404, got HTTP {response.status_code}", response.text)
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def test_7_update_invalid_status(self):
        """Test 7: Try to update with invalid status (should 400)"""
        test_name = "PATCH /api/contact/{id}/status (invalid status, expect 400)"
        
        if not self.created_contact_ids:
            self.log_result(test_name, False, "No contact IDs available for testing")
            return
        
        contact_id = self.created_contact_ids[0]
        invalid_status = "invalid_status"
        
        try:
            response = requests.patch(f"{self.base_url}/contact/{contact_id}/status?status={invalid_status}", timeout=10)
            
            if response.status_code == 400:
                self.log_result(test_name, True, "Correctly returned 400 for invalid status", 
                              f"Invalid status: {invalid_status}")
            else:
                self.log_result(test_name, False, f"Expected 400, got HTTP {response.status_code}", response.text)
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def test_8_update_nonexistent_contact_status(self):
        """Test 8: Try to update status of non-existent contact (should 404)"""
        test_name = "PATCH /api/contact/{id}/status (non-existent contact, expect 404)"
        
        fake_id = str(uuid.uuid4())
        valid_status = "contacted"
        
        try:
            response = requests.patch(f"{self.base_url}/contact/{fake_id}/status?status={valid_status}", timeout=10)
            
            if response.status_code == 404:
                self.log_result(test_name, True, "Correctly returned 404 for non-existent contact", 
                              f"Fake ID: {fake_id}")
            else:
                self.log_result(test_name, False, f"Expected 404, got HTTP {response.status_code}", response.text)
                
        except Exception as e:
            self.log_result(test_name, False, f"Request failed: {str(e)}")
    
    def run_all_tests(self):
        """Run all contact API tests"""
        print("🚀 Starting Contact Form API Tests")
        print("=" * 60)
        
        # Run tests in order
        self.test_1_create_contact_all_fields()
        self.test_2_create_contact_required_only()
        self.test_3_get_all_contacts()
        self.test_4_get_specific_contact()
        self.test_5_update_contact_status()
        self.test_6_get_nonexistent_contact()
        self.test_7_update_invalid_status()
        self.test_8_update_nonexistent_contact_status()
        
        # Summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        
        passed = sum(1 for result in self.test_results if result['success'])
        total = len(self.test_results)
        
        print(f"Total Tests: {total}")
        print(f"Passed: {passed}")
        print(f"Failed: {total - passed}")
        print(f"Success Rate: {(passed/total)*100:.1f}%")
        
        if total - passed > 0:
            print("\n❌ FAILED TESTS:")
            for result in self.test_results:
                if not result['success']:
                    print(f"  • {result['test']}: {result['message']}")
        
        print(f"\n🆔 Created Contact IDs: {self.created_contact_ids}")
        
        return passed == total

if __name__ == "__main__":
    tester = ContactAPITester()
    success = tester.run_all_tests()
    
    if success:
        print("\n🎉 All tests passed!")
        sys.exit(0)
    else:
        print("\n💥 Some tests failed!")
        sys.exit(1)