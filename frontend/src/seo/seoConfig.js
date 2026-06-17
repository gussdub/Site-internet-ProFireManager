// Configuration SEO centralisée — une entrée par route (FR + EN).
// Source unique de vérité pour le <title>, la meta description, le canonical et la
// langue du document. Le hook useSeo (voir useSeo.js) l'applique pour chaque route.
// Pour une nouvelle page : ajouter simplement une entrée ici.

import { CATEGORY_PAGES } from '../content/categoryPages';

export const SITE_URL = 'https://www.profiremanager.com';

// Clé = pathname exact de la route (sans barre oblique finale).
export const SEO_BY_PATH = {
  // --- Accueil ---
  '/fr': {
    lang: 'fr-CA',
    title: "Logiciel de gestion pour services d'incendie au Québec | ProFireManager",
    description:
      "ProFireManager — la plateforme québécoise tout-en-un pour gérer personnel, interventions, EPI, paie, formations et prévention incendie. Web, iOS, Android. Demandez une démo.",
  },
  '/en': {
    lang: 'en-CA',
    title: 'Fire Department Management Software in Quebec | ProFireManager',
    description:
      'ProFireManager — the all-in-one Quebec platform to manage staff, incidents, PPE, payroll, training and fire prevention. Web, iOS, Android. Request a demo.',
  },

  // --- FAQ ---
  '/fr/faq': {
    lang: 'fr-CA',
    title: 'Questions fréquentes (FAQ) — Logiciel pompier | ProFireManager',
    description:
      "Réponses aux questions fréquentes sur ProFireManager : fonctionnement, tarification, mise en place et sécurité du logiciel de gestion pour services d'incendie au Québec.",
  },
  '/en/faq': {
    lang: 'en-CA',
    title: 'Frequently Asked Questions (FAQ) — Fire Software | ProFireManager',
    description:
      'Answers to common questions about ProFireManager: how it works, pricing, setup and security of the fire department management software for Quebec.',
  },

  // --- Documentation ---
  '/fr/documentation': {
    lang: 'fr-CA',
    title: 'Documentation | ProFireManager',
    description:
      "Documentation de ProFireManager, le logiciel de gestion pour services d'incendie au Québec : modules, fonctionnalités et guides d'utilisation.",
  },
  '/en/documentation': {
    lang: 'en-CA',
    title: 'Documentation | ProFireManager',
    description:
      'ProFireManager documentation — fire department management software for Quebec: modules, features and user guides.',
  },

  // --- Support technique ---
  '/fr/support-technique': {
    lang: 'fr-CA',
    title: 'Support technique | ProFireManager',
    description:
      "Besoin d'aide ? Contactez le support technique de ProFireManager, le logiciel de gestion pour services d'incendie au Québec. Support en français.",
  },
  '/en/technical-support': {
    lang: 'en-CA',
    title: 'Technical Support | ProFireManager',
    description:
      'Need help? Contact ProFireManager technical support — the fire department management software for Quebec.',
  },

  // --- Tutoriels ---
  '/fr/tutoriels': {
    lang: 'fr-CA',
    title: 'Tutoriels | ProFireManager',
    description:
      "Tutoriels et guides pas à pas pour tirer le meilleur de ProFireManager, le logiciel de gestion pour services d'incendie au Québec.",
  },
  '/en/tutorials': {
    lang: 'en-CA',
    title: 'Tutorials | ProFireManager',
    description:
      'Step-by-step tutorials and guides to get the most out of ProFireManager, the fire department management software for Quebec.',
  },

  // --- Politique de confidentialité ---
  '/fr/politique-de-confidentialite': {
    lang: 'fr-CA',
    title: 'Politique de confidentialité | ProFireManager',
    description:
      'Politique de confidentialité de ProFireManager : comment nous protégeons et traitons vos données.',
  },
  '/en/privacy-policy': {
    lang: 'en-CA',
    title: 'Privacy Policy | ProFireManager',
    description: 'ProFireManager privacy policy: how we protect and process your data.',
  },

  // --- Conditions d'utilisation ---
  '/fr/conditions-utilisation': {
    lang: 'fr-CA',
    title: "Conditions d'utilisation | ProFireManager",
    description: "Conditions d'utilisation du service ProFireManager.",
  },
  '/en/terms-of-service': {
    lang: 'en-CA',
    title: 'Terms of Service | ProFireManager',
    description: 'ProFireManager terms of service.',
  },

  // --- Migration Première Ligne ---
  '/fr/migration-premiere-ligne': {
    lang: 'fr-CA',
    title: 'Migrer de Première Ligne vers ProFireManager — Transfert 100 % des données',
    description:
      "Vous utilisez Première Ligne ? ProFireManager récupère 100 % de vos données : employés, équipements, interventions, prévention. Forfait fixe 10 000 $ CAD.",
  },
  '/en/migration-from-premiere-ligne': {
    lang: 'en-CA',
    title: 'Migrate from Première Ligne to ProFireManager — 100% Data Transfer',
    description:
      'Using Première Ligne? ProFireManager recovers 100% of your data: employees, equipment, interventions, prevention. Flat fee of $10,000 CAD.',
  },
};

// --- Pages de catégorie (SEO) ---
// Mapping pathname -> { clé de contenu, langue }. Réutilisé par App.js (routage) et le sitemap.
export const CATEGORY_ROUTES = {
  '/fr/logiciel-gestion-caserne': { key: 'gestion-caserne', lang: 'fr-CA', l: 'fr' },
  '/en/fire-station-management-software': { key: 'gestion-caserne', lang: 'en-CA', l: 'en' },
  '/fr/logiciel-horaire-garde-pompiers': { key: 'horaire-garde', lang: 'fr-CA', l: 'fr' },
  '/en/firefighter-scheduling-software': { key: 'horaire-garde', lang: 'en-CA', l: 'en' },
  '/fr/logiciel-paie-pompiers': { key: 'paie-pompiers', lang: 'fr-CA', l: 'fr' },
  '/en/firefighter-payroll-software': { key: 'paie-pompiers', lang: 'en-CA', l: 'en' },
  '/fr/logiciel-inspection-epi-nfpa': { key: 'inspection-epi-nfpa', lang: 'fr-CA', l: 'fr' },
  '/en/ppe-inspection-software-nfpa': { key: 'inspection-epi-nfpa', lang: 'en-CA', l: 'en' },
  '/fr/logiciel-gestion-interventions-dsi': { key: 'gestion-interventions', lang: 'fr-CA', l: 'fr' },
  '/en/fire-incident-management-software': { key: 'gestion-interventions', lang: 'en-CA', l: 'en' },
  '/fr/logiciel-remplacement-garde-pompiers': { key: 'remplacement-gardes', lang: 'fr-CA', l: 'fr' },
  '/en/firefighter-shift-replacement-software': { key: 'remplacement-gardes', lang: 'en-CA', l: 'en' },
};

// Génère les entrées SEO des pages de catégorie depuis leur contenu (zéro duplication).
Object.entries(CATEGORY_ROUTES).forEach(([path, { key, lang, l }]) => {
  const c = CATEGORY_PAGES[key] && CATEGORY_PAGES[key][l];
  if (c) {
    SEO_BY_PATH[path] = { lang, title: c.metaTitle, description: c.metaDescription };
  }
});

// Retourne l'entrée SEO pour un pathname donné (barre oblique finale ignorée).
export function getSeoForPath(pathname) {
  if (!pathname) return null;
  const key = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return SEO_BY_PATH[key] || null;
}
