# Migration du site vitrine ProFireManager — d'Emergent vers Vercel

> Objectif : sortir le site vitrine **profiremanager.com** de la plateforme Emergent et
> le faire passer entièrement sous gestion via **ton compte Vercel** + **GitHub**, pour
> que les mises à jour se fassent désormais par Claude (code) + toi (validation).
>
> ⚠️ Hors scope : **profiremanager.ca = l'application de production**. On n'y touche pas.

Date : 2026-06-16

---

## 1. Architecture — avant / après

| Élément | Avant (Emergent) | Après (Vercel) |
|---|---|---|
| Site (frontend React) | Servi par Emergent, derrière Cloudflare | Statique sur **ton Vercel**, déploiement auto depuis GitHub |
| Formulaire de contact | POST vers `https://emergency-shifts-1.emergent.host/api/contact` (FastAPI sur Emergent) | **Fonction serverless Vercel** `/api/contact` (même domaine) |
| Envoi du courriel | Resend → `info@profiremanager.ca` (depuis `demande@profiremanager.ca`) | Identique : Resend → `info@profiremanager.ca` (depuis `demande@profiremanager.ca`) |
| Base de données MongoDB | Présente mais **inutilisée** (code mort) | ❌ Supprimée |
| Backend FastAPI | Serveur Python sur Emergent | ❌ Supprimé (remplacé par la fonction serverless) |
| Scripts Emergent | `emergent-main.js`, rrweb, badge « Made with Emergent » | ❌ Retirés |
| PostHog (stats visiteurs) | Présent | ✅ Conservé |
| DNS | Name.com → Cloudflare/Emergent | Name.com → Vercel |
| Domaine principal | apex (www redirige vers apex) | **www.profiremanager.com** (apex redirige vers www) |
| Coût | ~50 crédits/mois Emergent | **0 $** (offres gratuites Vercel + Resend) |

---

## 2. Décisions validées

1. **Tout sur Vercel** : site statique + fonction serverless pour le formulaire. Pas de Render, pas de MongoDB, pas de FastAPI.
2. **PostHog conservé**, scripts Emergent retirés.
3. **Resend** : envoi depuis `demande@profiremanager.ca` (domaine `profiremanager.ca` vérifié dans Resend) vers `info@profiremanager.ca` — identique à l'actuel.
4. **Domaine principal** : `www.profiremanager.com`.

---

## 3. Changements de code (réalisés par Claude, sur une branche → Pull Request)

Tous dans le dossier `frontend/`.

### 3.1 Formulaire de contact — URL relative et rétrocompatible
`frontend/src/components/Contact.jsx` : l'appel devient
```js
const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
fetch(`${backendUrl}/api/contact`, …)
```
- Sur Vercel : `REACT_APP_BACKEND_URL` non défini → URL relative `/api/contact` → frappe la fonction serverless (même domaine, zéro CORS).
- Sur Emergent (si jamais il reconstruit) : la variable reste définie → comportement actuel inchangé.
- ➡️ **Aucune fenêtre de panne** quel que soit l'ordre de bascule.

### 3.2 Nouvelle fonction serverless `frontend/api/contact.js`
- Reçoit le POST du formulaire (nom, organisation, courriel, téléphone, nb pompiers, message, langue).
- Reconstruit **le même gabarit de courriel HTML** que l'actuel backend FastAPI.
- Envoie via l'API Resend (`https://api.resend.com/emails`) :
  - `from`: `ProFireManager <demande@profiremanager.ca>` (identique à l'actuel)
  - `to`: `info@profiremanager.ca`
  - `reply_to`: courriel du prospect
- Réponses succès/erreur bilingues (fr/en) identiques à aujourd'hui.
- Le gabarit HTML (en-tête rouge, tableau « Informations du contact », message, pied de page) est **répliqué à l'identique**.
- Dépendance : aucune (utilise `fetch` natif de Node 18+ sur Vercel).

### 3.3 Nettoyage `frontend/public/index.html`
- Retirer : `emergent-main.js`, les 2 scripts rrweb (enregistrement de session), le bloc visual-edits (`REACT_APP_ENABLE_VISUAL_EDITS`), et le badge flottant **« Made with Emergent »**.
- Conserver : toutes les balises SEO/Schema.org **et le bloc PostHog**.

### 3.4 Détails mineurs
- Le courriel reste **strictement identique** à l'actuel (y compris le pied de page « … profiremanager.ca »).
- `backend/`, `.emergent/`, `test_result.md`, fichiers parasites (`=2.0.0`) : devenus inutiles. **Suppression optionnelle**, à confirmer (sans risque car Vercel ne build que `frontend/`).

---

## 4. Étapes côté Vercel & DNS (réalisées par toi, guidé pas à pas par Claude)

### 4.1 Créer le projet Vercel
1. Vercel → **Add New… → Project** → importer le dépôt GitHub `gussdub/Site-internet-ProFireManager`.
2. **Root Directory** = `frontend`.
3. **Framework Preset** = Create React App (détecté automatiquement).
4. **Environment Variables** : ajouter `RESEND_API_KEY` = (ta clé Resend).
5. Déployer → obtenir une URL de test `…vercel.app`.

### 4.2 Tester sur l'URL de prévisualisation
- Vérifier l'affichage (FR/EN, pages, images).
- **Tester le formulaire** → confirmer la réception du courriel à `info@profiremanager.ca`.

### 4.3 Brancher le domaine
1. Dans le projet Vercel → **Settings → Domains** → ajouter `www.profiremanager.com` (principal) et `profiremanager.com` (redirige vers www).
2. Vercel affiche les enregistrements DNS exacts à créer.

### 4.4 Repointer le DNS chez Name.com
1. Se connecter à **Name.com** → DNS de `profiremanager.com`.
2. Appliquer les enregistrements indiqués par Vercel :
   - `www` → CNAME `cname.vercel-dns.com`
   - apex `profiremanager.com` → enregistrement A/redirection fourni par Vercel
3. **Supprimer** les anciens enregistrements pointant vers Emergent/Cloudflare.
4. Attendre la propagation (5–30 min) + certificat SSL automatique Vercel.

---

## 5. Ordre de bascule (sans interruption de service)

1. Claude prépare la branche + PR avec tous les changements du §3.
2. Tu crées le projet Vercel (§4.1) et on teste sur l'URL `vercel.app` (§4.2).
3. Une fois le test concluant : fusion de la PR dans `main`.
4. On branche le domaine sur Vercel (§4.3) puis on repointe le DNS (§4.4).
5. On vérifie que `www.profiremanager.com` est bien servi par Vercel et que le formulaire fonctionne en production.
6. **Seulement après confirmation** : décommissionner Emergent (§6).

Grâce à l'URL rétrocompatible (§3.1), le site reste fonctionnel à chaque étape, sur Emergent comme sur Vercel.

---

## 6. Décommissionnement d'Emergent (dernière étape)

- Dans l'interface Emergent : **arrêter le déploiement** du site vitrine pour cesser les ~50 crédits/mois.
- Conserver l'app Emergent en pause comme **filet de sécurité** quelques jours.
- Une fois confiant : supprimer définitivement.

---

## 7. Plan de retour arrière (rollback)

- Avant la bascule DNS : rien n'a changé en production, le risque est nul.
- Après la bascule DNS : en cas de problème, **remettre les anciens enregistrements DNS** chez Name.com (le déploiement Emergent est toujours là tant qu'on ne l'a pas supprimé).
- Côté code : la PR peut être annulée (revert) ; Vercel permet aussi de revenir à un déploiement précédent en un clic.

---

## 8. Workflow des mises à jour (après migration)

1. Claude crée une **branche** et applique la modification.
2. **Pull Request** → Vercel génère automatiquement une **URL de prévisualisation**.
3. **Tu valides** sur cette URL.
4. Fusion → mise en ligne automatique sur `www.profiremanager.com`.

---

## 9. Récapitulatif « qui fait quoi »

| Étape | Claude | Toi |
|---|---|---|
| Changements de code (§3) | ✅ | — |
| Créer projet Vercel + variable Resend (§4.1) | guide | ✅ clique |
| Tester l'URL de prévisualisation (§4.2) | guide | ✅ vérifie |
| Brancher domaine Vercel (§4.3) | guide | ✅ clique |
| Modifier DNS Name.com (§4.4) | guide | ✅ clique |
| Décommissionner Emergent (§6) | guide | ✅ clique |
