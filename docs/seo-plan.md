# Plan SEO + visibilité IA (GEO) — www.profiremanager.com

> **Phase 2** du chantier (après la migration Vercel). Objectifs : (1) optimiser le SEO,
> (2) se positionner sur « ICO Solution » et « Beeon », (3) renforcer la visibilité dans
> les IA (ChatGPT, Claude, Perplexity).

Date : 2026-06-16

---

## 0. Trouvaille stratégique centrale (vérifiée)

- **`beeon.com` redirige (HTTP 301) vers `icosolutions.com`** → **BeeON et ICO Solution sont la même entreprise** (un seul concurrent, pas deux). Vérifié par requête directe.
- Selon la recherche (⚠️ *à confirmer*), ce groupe (Harris Computer) détiendrait aussi **Première Ligne** → quasi-monopole sur le marché incendie au Québec.
- « BeeON » est un terme quasi abandonné par l'entreprise → **mot-clé peu concurrentiel, facile à capter**.

**Angle de positionnement :** *ProFireManager, l'alternative québécoise indépendante et moderne au monopole Harris/ICO* — prix transparent, sans verrouillage, taillée pour les petites/moyennes casernes.

---

## 1. État réel du site (corrigé après vérification)

> ⚠️ Une recherche automatique avait confondu ce dépôt avec celui de l'app (`pfm/frontend`).
> Faits **réels** du dépôt vitrine, vérifiés :

- ✅ `public/index.html` : `lang="fr-CA"`, vrai titre québécois statique, 3 blocs JSON-LD (SoftwareApplication, Product, Organization), hreflang fr-CA/en-CA/x-default.
- ✅ `robots.txt` : `User-agent: * / Allow: /` → les robots IA ne sont **pas** bloqués.
- ✅ Routes existantes : `/fr`, `/fr/faq`, `/fr/migration-premiere-ligne`, etc. + équivalents `/en`. **La page migration Première Ligne est le gabarit à répliquer.**
- ⚠️ Titre/canonical **par sous-page** = définis en JavaScript (et seulement la page Migration le fait via `document.title`). Les autres sous-pages héritent du `<head>` de l'accueil pour les robots sans JS.
- ⚠️ Le **contenu du corps** (Hero, fonctionnalités…) est rendu par React → **absent du HTML brut**, donc peu lu par les crawlers IA.
- ⚠️ `sitemap.xml` : `lastmod` figé au 2025-01-01.
- ⚠️ JSON-LD `aggregateRating` 4.8/25 sans page d'avis visible → risque de signalement Google.

---

## 2. Le verrou « visibilité IA » : pré-rendu (react-snap) — DÉCIDÉ

Les robots des IA (GPTBot, ClaudeBot, PerplexityBot) **n'exécutent pas le JavaScript**. Comme le contenu est rendu côté client, ils voient peu de chose. **Décision validée : ajouter le pré-rendu.**

- **Solution retenue : `react-snap`** (post-build CRA, sans migration). Au build, il visite chaque route et écrit un HTML statique avec le contenu déjà rendu.
- Ajouter dans `frontend/package.json` : dépendance `react-snap` + script `"postbuild": "react-snap"`, et la config des routes à pré-rendre.
- **Critère de succès :** `curl -A "GPTBot" https://www.profiremanager.com/fr/alternative-ico-solution` doit retourner le H1, le tableau et la FAQ **dans le HTML brut** (sans JS).
- Alternative long terme si le volume de pages explose : extraire la vitrine vers **Next.js** (SSG). Pas nécessaire au départ.

---

## 3. Pages à créer (cœur de la stratégie concurrents)

Réplique du gabarit `/fr/migration-premiere-ligne`.

| URL FR | URL EN | Angle |
|---|---|---|
| `/fr/alternative-ico-solution` | `/en/ico-solution-alternative` | Alternative québécoise indépendante à ICO |
| `/fr/alternative-beeon` | `/en/beeon-alternative` | Capter le terme abandonné (faible concurrence) + clarifier « BeeON = ICO » |
| `/fr/comparatif/profiremanager-vs-ico-solution` | `/en/compare/profiremanager-vs-ico-solution` | Comparatif factuel module par module |

**Contenu type d'une page « Alternative » :**
- `<title>` ciblé + meta description unique (FR et EN).
- **H1 honnête** : « ProFireManager : l'alternative québécoise à ICO Solution » (jamais d'affiliation suggérée).
- **Résumé de 40-60 mots en tête** (format que les IA extraient et citent).
- **Tableau comparatif factuel** — ⚠️ ne **rien inventer** sur ICO ; marquer « à vérifier auprès du fournisseur » quand l'info n'est pas publique.
- Section **« Quand choisir l'un ou l'autre »** (reconnaître les forces d'ICO → crédibilité + auto-citation IA).
- **FAQ structurée** avec JSON-LD `FAQPage` (« BeeON et ICO, est-ce pareil ? », « Prix d'ICO ? », « Alternative québécoise à ICO ? »).
- CTA : Demandez une démo.

---

## 4. Correctifs on-page / techniques

**Rapides :**
- Canonical **auto-référent** par route (corriger l'héritage vers `/fr`).
- `title` + meta description **uniques et traduits** par route (dans le HTML pré-rendu).
- JSON-LD `FAQPage` sur `/fr/faq` et `/en/faq`.
- `sitemap.xml` : `lastmod` réels + ajouter les nouvelles pages ; resoumettre dans Google Search Console + Bing Webmaster Tools.
- `aggregateRating` : créer une vraie page d'avis/témoignages **ou** retirer la note tant qu'elle n'est pas justifiée.
- `Organization.sameAs` : ajouter LinkedIn et autres profils.

**Moyen terme :**
- Pages « fonctionnalités » par module (longue traîne) : paie pompiers, horaire de gardes, échange/remplacement, inspection EPI NFPA 1851, suivi APRIA, interventions DSI, formations, app mobile, multi-caserne MRC.
- Maillage interne : footer → hub `/alternatives` + `/comparatif` + pages fonctionnalités.

---

## 5. GEO — citations par les IA

- **Format réponse** : résumé de 40-60 mots + listes/tableaux (lisibilité machine) + stats sourcées.
- **FAQ structurée partout**.
- **Profils tiers** (levier majeur) : G2, Capterra, GetApp — fiche complète, viser 50+ avis ≥ 4,0 (ICO/BeeON en a très peu → opportunité).
- **Entité** : Wikidata, `sameAs` rempli, E-E-A-T (auteurs, sources NFPA/normes QC, dates de mise à jour).
- **Blog/ressources FR** long-forme (continu).

---

## 6. Risques à éviter

- **Pas de bourrage** du nom du concurrent (Google = spam → pénalité). Usage modéré et naturel : title, un H1/H2, le tableau, quelques mentions.
- **Jamais induire en erreur** : toujours clair que c'est ProFireManager qui parle ; toute affirmation sur ICO/BeeON doit être exacte et sourçable. (Usage légal et courant des marques concurrentes en comparatif.)
- **Ne pas déclarer un gagnant absolu** : reconnaître les forces d'ICO.

---

## 7. Ordre d'exécution (Phase 2)

1. `react-snap` (débloque la visibilité IA) + correctifs rapides (canonical, lang/title par route, FAQ schema, robots IA explicites).
2. Page `/fr/alternative-ico-solution` (+ `/en`).
3. `/fr/alternative-beeon`, comparatif, hub `/alternatives`.
4. Pages fonctionnalités + maillage interne ; correction `aggregateRating`/`sameAs`/`lastmod`.
5. Profils G2/Capterra/GetApp.
6. (Continu) Wikidata, blog/ressources, E-E-A-T.

**À confirmer avant la rédaction des pages concurrents** : faits exacts sur ICO/BeeON (modules, cible, prix s'il est public) et lien réel avec Première Ligne.
