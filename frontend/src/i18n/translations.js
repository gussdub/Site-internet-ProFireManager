export const translations = {
  fr: {
    // Navigation
    nav: {
      features: 'Fonctionnalités',
      benefits: 'Avantages',
      pricing: 'Tarification',
      contact: 'Contact',
      requestDemo: 'Demander une démo'
    },
    
    // Hero Section
    hero: {
      badge: 'Solution québécoise pour services d\'incendie',
      title: 'Optimisez la gestion de votre',
      titleHighlight: 'service d\'incendie',
      subtitle: 'ProFireManager automatise la planification des gardes, la gestion du personnel et des équipements pour votre caserne.',
      benefits: [
        'Attribution automatique des gardes',
        'Gestion complète des EPI',
        'Suivi des formations'
      ],
      ctaPrimary: 'Demander une démo gratuite',
      ctaSecondary: 'Découvrir les fonctionnalités',
      trustBadge: 'Développé spécifiquement pour les casernes québécoises',
      stats: {
        demo: '30 min',
        demoLabel: 'Démo gratuite',
        cloud: '100%',
        cloudLabel: 'Cloud',
        support: '24/7',
        supportLabel: 'Support'
      }
    },
    
    // Footer
    footer: {
      description: 'Solution québécoise de gestion pour services d\'incendie. Optimisez la planification, le personnel et les équipements de votre caserne.',
      navigation: 'Navigation',
      support: 'Support',
      documentation: 'Documentation',
      faq: 'FAQ',
      tutorials: 'Tutoriels',
      technicalSupport: 'Support Technique',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation',
      rights: 'Tous droits réservés.'
    }
  },
  
  en: {
    // Navigation
    nav: {
      features: 'Features',
      benefits: 'Benefits',
      pricing: 'Pricing',
      contact: 'Contact',
      requestDemo: 'Request a Demo'
    },
    
    // Hero Section
    hero: {
      badge: 'Quebec solution for fire departments',
      title: 'Optimize the management of your',
      titleHighlight: 'fire department',
      subtitle: 'ProFireManager automates shift planning, personnel and equipment management for your fire station.',
      benefits: [
        'Automatic shift assignment',
        'Complete PPE management',
        'Training tracking'
      ],
      ctaPrimary: 'Request a Free Demo',
      ctaSecondary: 'Discover Features',
      trustBadge: 'Specifically developed for Quebec fire stations',
      stats: {
        demo: '30 min',
        demoLabel: 'Free Demo',
        cloud: '100%',
        cloudLabel: 'Cloud',
        support: '24/7',
        supportLabel: 'Support'
      }
    },
    
    // Footer
    footer: {
      description: 'Quebec management solution for fire departments. Optimize planning, personnel and equipment for your station.',
      navigation: 'Navigation',
      support: 'Support',
      documentation: 'Documentation',
      faq: 'FAQ',
      tutorials: 'Tutorials',
      technicalSupport: 'Technical Support',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved.'
    }
  }
};

export const t = (language, key) => {
  const keys = key.split('.');
  let value = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};
