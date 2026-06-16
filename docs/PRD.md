# ProFireManager — Product Requirements Document

## Original Problem Statement
Build a professional, conversion-optimized **bilingual (FR/EN)** SaaS landing page for **ProFireManager**, a fire department management software (version 2.0). The product offers 12 integrated modules covering fire department operations.

## User
- **Primary user**: Guillaume Dubeau (gussdub)
- **Preferred language**: French (fr-CA)
- **Domain**: www.profiremanager.com (FR) / app.profiremanager.com (App)
- **Brand**: ProFireManager (Quebec/Canadian)

## Core Requirements
1. Fully bilingual (FR/EN) SaaS landing page (URL-based routing /fr, /en)
2. Lead generation: working contact form via Resend → info@profiremanager.ca
3. Display the **12 official modules** (Dashboard, Personnel, Assets, Interventions, Payroll, Schedule, Replacements, Training, Prevention, Availability, My PPE, Reports)
4. **Pricing**: 3 tiers (12/20/27 $ CAD per firefighter/month) + setup fees (1500/2500/3500 $ CAD one-time)
5. **Migration from Première Ligne**: dedicated section + dedicated page (5 000 $ CAD flat)
6. SEO optimized for "logiciel pompier Québec", "alternative Première Ligne", etc.

## Architecture
- Frontend: React + Tailwind CSS + Shadcn UI, React Router, custom i18n context
- Backend: FastAPI + Resend API (`/api/contact`), MongoDB
- Deployment: Emergent platform (custom domain configured)

## What's Implemented (CHANGELOG)
- **2026-05 (latest)**: Applied directives + SEO plan:
  - 14 modules → **12 modules** (removed Mon Profil, Paramètres)
  - Updated all module descriptions to match official directive
  - Removed "Offre de Lancement" promotional section (kept monthly/annual toggle)
  - Added **setup fees** display on each pricing tier (1500/2500/3500 $ CAD)
  - Added **setup fees disclaimer note** below pricing cards
  - New **Migration** section on homepage (Première Ligne → ProFireManager, 5000 $ CAD flat)
  - New **dedicated page** `/fr/migration-premiere-ligne` and `/en/migration-from-premiere-ligne` with FAQ (FAQPage JSON-LD)
  - **Strengths**: 6 → 8 items (added biometric auth, push notifications, scalability)
  - **SEO**: New title "Logiciel de gestion pour services d'incendie au Québec | ProFireManager", new meta description, hreflang fr-CA/en-CA/x-default, Product + AggregateOffer JSON-LD, multi-tier Offer schema, updated sitemap.xml
  - Added **Migration** to header nav (desktop + mobile) and footer
- **Prior** (handoff): Bilingual system, branding (Canadian), Resend contact form, `/health` endpoint, `.gitignore` fix for .env in production.

## Pending / Verification
- 🟡 **Contact form in production** — awaiting user verification after redeploy (pre-existing item from handoff)

## Backlog (Future)
- P1: Split `/app/frontend/src/i18n/translations.js` into `fr.js` / `en.js` (file is large)
- P2: Create separate `/fr/fonctionnalites`, `/fr/tarifs` dedicated pages (from SEO plan P0)
- P2: Create `/fr/application-mobile`, `/fr/mrc-regroupements`, `/fr/conformite-dsi` pages (SEO plan P1)
- P2: Blog (12 articles planned from SEO calendar)
- P2: Google Business Profile, Bing Places, Capterra/GetApp/Software Advice listings
- P2: pytest tests for `/api/contact` endpoint

## Key Endpoints
- `POST /api/contact` — sends email via Resend to info@profiremanager.ca
- `GET /health` — required for Emergent deployments

## Files Reference
- `/app/frontend/src/i18n/translations.js` — all bilingual content
- `/app/frontend/src/components/Migration.jsx` — homepage migration section
- `/app/frontend/src/pages/MigrationPage.jsx` — dedicated migration page with FAQ JSON-LD
- `/app/frontend/src/components/Pricing.jsx` — 3 tiers with setup fees
- `/app/frontend/src/components/Modules.jsx` — 12 module cards
- `/app/frontend/src/components/Strengths.jsx` — 8 strengths
- `/app/frontend/public/index.html` — meta + Schema.org (SoftwareApplication, Product, Organization)
- `/app/frontend/public/sitemap.xml` — includes migration pages
- `/app/backend/server.py` — `/health` + `/api/contact` (Resend)
- `/app/backend/.env` — RESEND_API_KEY, SENDER_EMAIL, RECIPIENT_EMAIL

## 3rd Party Integrations
- **Resend** (transactional email) — API key in `/app/backend/.env`

## Notes for Next Agent
- User speaks French — always respond in French
- Pricing **promotions are forbidden** by user directive (only setup fees + standard monthly/annual toggle allowed)
- Première Ligne is a third-party brand — always include the disclaimer "marque tierce mentionnée à titre informatif uniquement"
