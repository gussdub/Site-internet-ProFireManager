# Site vitrine ProFireManager

Site web public (vitrine marketing) de **ProFireManager**, le logiciel de gestion
pour services d'incendie au Québec. Bilingue FR/EN.

- **En ligne :** https://www.profiremanager.com
- **Application (séparée) :** https://www.profiremanager.ca

> ⚠️ Ce dépôt = le **site vitrine** uniquement. L'application SaaS est un projet distinct.

## Stack

- **Frontend :** React 19 (Create React App + CRACO), Tailwind CSS, shadcn/ui, React Router
- **Internationalisation :** contexte i18n maison (`frontend/src/i18n/`)
- **Formulaire de contact :** fonction serverless (`frontend/api/contact.js`) → API Resend
- **Analytics :** PostHog
- **Hébergement :** Vercel (déploiement automatique depuis ce dépôt)

## Développement local

```bash
cd frontend
yarn install
yarn start      # http://localhost:3000
```

## Déploiement

Le site est hébergé sur **Vercel** (Root Directory = `frontend/`, framework Create React App).
Chaque push sur une branche génère une URL de prévisualisation ; la fusion sur `main`
met le site en production.

### Variable d'environnement requise (sur Vercel)

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Clé API Resend pour l'envoi du courriel du formulaire de contact |

Variables optionnelles : `SENDER_EMAIL` (défaut `ProFireManager <demande@profiremanager.ca>`),
`RECIPIENT_EMAIL` (défaut `info@profiremanager.ca`).

## Documentation

- [docs/migration-vercel.md](docs/migration-vercel.md) — plan de migration Emergent → Vercel
- [docs/PRD.md](docs/PRD.md) — exigences produit du site
