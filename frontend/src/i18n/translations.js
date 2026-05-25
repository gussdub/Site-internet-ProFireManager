export const translations = {
  fr: {
    // Navigation
    nav: {
      features: 'Fonctionnalités',
      modules: 'Modules',
      benefits: 'Avantages',
      pricing: 'Tarification',
      migration: 'Migration',
      contact: 'Contact',
      requestDemo: 'Demander une démo'
    },
    
    // Hero Section
    hero: {
      badge: 'Solution canadienne pour services d\'incendie',
      title: 'Optimisez la gestion de votre',
      titleHighlight: 'service d\'incendie',
      subtitle: 'ProFireManager centralise la gestion du personnel, des interventions, de la paie, des équipements et de la prévention dans une seule plateforme.',
      benefits: [
        'Gestion du personnel et des gardes',
        'Interventions et cartes d\'appel',
        'Module paie intégré',
        'Suivi des EPI et formations',
        'Prévention incendie',
        'Rapports et statistiques'
      ],
      ctaPrimary: 'Demander une démo gratuite',
      ctaSecondary: 'Découvrir les modules',
      trustBadge: 'Développé spécifiquement pour les casernes canadiennes',
      stats: {
        demo: '30 min',
        demoLabel: 'Démo gratuite',
        cloud: '100%',
        cloudLabel: 'Cloud',
        support: '24/7',
        supportLabel: 'Support'
      }
    },

    // Features
    features: {
      title: 'Fonctionnalités Complètes',
      subtitle: 'Tout ce dont vous avez besoin pour gérer efficacement votre service d\'incendie, centralisé dans une seule plateforme.',
      items: [
        {
          title: 'Gestion Intelligente des Horaires',
          description: 'Attribution automatique des gardes basée sur les compétences, le grade et la disponibilité. Gestion complète des temps pleins et temps partiel. Calendrier interactif avec vue mensuelle et codes couleur.',
          benefits: [
            'Planification automatisée',
            'Gestion temps plein/partiel',
            'Équité de distribution',
            'Export et impression'
          ]
        },
        {
          title: 'Remplacements Automatisés',
          description: 'Système intelligent de remplacement qui trouve automatiquement le meilleur candidat selon les compétences requises et l\'équité des heures.',
          benefits: [
            'Matching intelligent',
            'Notifications automatiques',
            'Historique complet',
            'Respect des contraintes'
          ]
        },
        {
          title: 'Gestion des EPI - NFPA 1851',
          description: 'Suivi centralisé conforme NFPA 1851. Inspection de routine directement par les pompiers dans l\'application. Demandes de remplacement simplifiées.',
          benefits: [
            'Inventaire complet',
            'Inspection de routine dans l\'app',
            'Demande de remplacement',
            'Conformité NFPA 1851'
          ]
        },
        {
          title: 'Gestion des Formations - NFPA 1500',
          description: 'Suivi des certifications conforme NFPA 1500 avec alertes de renouvellement automatiques. Inscription directe aux formations par l\'application.',
          benefits: [
            'Suivi des certifications',
            'Inscription directe aux formations',
            'Alertes de renouvellement',
            'Conformité NFPA 1500'
          ]
        }
      ],
      additionalTitle: 'Module Prévention (Optionnel)',
      additionalDesc: 'Module complémentaire avec import CSV, grilles d\'inspection conformes au Code de sécurité du Québec, gestion des préventionnistes et tableaux de bord avancés.',
      additionalTags: ['Import CSV', 'Grilles d\'inspection', 'Gestion préventionnistes', 'Tableaux de bord']
    },

    // Benefits
    benefits: {
      title: 'Pourquoi Choisir ProFireManager ?',
      subtitle: 'Des résultats mesurables et un retour sur investissement rapide pour votre service d\'incendie.',
      items: [
        { title: 'Gain de Temps', desc: 'Réduction de 80% du temps de planification', stat: '6h30', label: 'économisées/semaine' },
        { title: 'Amélioration', desc: 'Vision globale en temps réel', stat: '100%', label: 'traçabilité' },
        { title: 'Équité', desc: 'Distribution équitable automatique', stat: '0', label: 'conflit' },
        { title: 'Optimisation', desc: 'Réduction des heures supplémentaires', stat: '-25%', label: 'heures sup.' },
        { title: 'Accessibilité', desc: 'Interface responsive 24/7', stat: '24/7', label: 'disponible' },
        { title: 'Conformité', desc: 'Code de sécurité du Québec', stat: '100%', label: 'conforme' }
      ],
      roiTitle: 'ROI Positif dès la Première Année',
      roiSubtitle: 'Économie annuelle moyenne pour une caserne de 30 pompiers',
      roiStats: [
        { value: '8h', label: 'Temps admin économisé/semaine' },
        { value: '14 560$', label: 'Économie annuelle estimée' },
        { value: '3 660$', label: 'Coût annuel (15 pompiers)' }
      ]
    },

    // Pricing
    pricing: {
      title: 'Tarification Simple et Transparente',
      subtitle: 'Payez uniquement pour le nombre de pompiers actifs.',
      monthly: 'Mensuel',
      annual: 'Annuel',
      discount: '-10%',
      perFirefighter: '/pompier/mois',
      popular: 'Le plus populaire',
      tiers: [
        { name: '0 à 30 pompiers', count: 30, setupFee: 1500 },
        { name: '31 à 50 pompiers', count: 40, setupFee: 2500 },
        { name: '51+ pompiers', count: 50, setupFee: 3500 }
      ],
      billedAnnually: 'facturé annuellement',
      annualSavings: 'Facturé annuellement - Économie de 10%',
      startNow: 'Demander une démo',
      setupFeeLabel: 'Paramétrage initial',
      setupFeeSuffix: '(unique)',
      setupFeeCurrency: '$ CAD',
      includedTitle: 'Modules Inclus',
      includedItems: [
        'Tableau de bord temps réel (KPI, alertes, messages internes)',
        'Gestion du personnel et des équipes de garde',
        'Gestion des actifs (véhicules, EPI, équipements)',
        'Interventions et cartes d\'appel (import SFTP, DSI, signature)',
        'Module Paie intégré (calcul automatique, exports)',
        'Horaire / Planning avec rotation automatique',
        'Remplacements (workflow d\'approbation)',
        'Formations et certifications',
        'Disponibilités (temps partiels/temporaires)',
        'Mes EPI (inspection mensuelle par l\'employé)',
        'Rapports personnalisables (PDF/Excel)',
        'Multi-tenant et gestion des rôles',
        'Applications iOS et Android (Face ID / Touch ID)',
        'Notifications push en temps réel',
        'Support par email et mises à jour automatiques'
      ],
      optionalTitle: 'Module Optionnel',
      optionalModule: 'Module Prévention : +3$/pompier/mois',
      setupFeeNote: 'Les frais de paramétrage couvrent : la configuration initiale de votre organisation, l\'import de vos employés et équipements, le paramétrage des équipes de garde, la configuration de la paie et des notifications, ainsi que la formation initiale de vos administrateurs. Frais uniques, payables au lancement. Prix en dollars canadiens, taxes en sus.'
    },

    // CTA
    cta: {
      title: 'Prêt à Transformer Votre Gestion ?',
      subtitle: 'Rejoignez les services d\'incendie canadiens qui ont déjà optimisé leur gestion avec ProFireManager.',
      benefits: [
        { value: '30 min', label: 'Démonstration gratuite' },
        { value: '1-2 sem', label: 'Configuration rapide' },
        { value: '60 jours', label: 'Garantie satisfait ou remboursé' }
      ],
      btn: 'Demander une démo gratuite',
      trust: 'Configuration en 1-2 semaines • Support dédié • Solution canadienne'
    },

    // Contact
    contact: {
      title: 'Contactez-Nous',
      subtitle: 'Réservez votre démo gratuite ou posez-nous vos questions. Notre équipe vous répondra rapidement.',
      formTitle: 'Demander une Démonstration',
      name: 'Nom complet',
      organization: 'Organisation',
      email: 'Email',
      phone: 'Téléphone',
      firefighters: 'Nombre de pompiers',
      message: 'Message',
      messagePlaceholder: 'Parlez-nous de vos besoins...',
      send: 'Envoyer la demande',
      infoTitle: 'Informations de Contact',
      emailSupport: 'Support par Email',
      emailDesc: 'Réponse sous 24h',
      phoneSupport: 'Support Téléphonique',
      phoneDesc: 'Lun-Ven : 8h-18h EST',
      hours: 'Heures d\'Ouverture',
      hoursWeekdays: 'Lundi - Vendredi',
      hoursWeekdaysTime: '8h00 - 18h00 (EST)',
      hoursWeekend: 'Samedi - Dimanche',
      hoursWeekendTime: 'Fermé (Email uniquement)',
      stats: [
        { value: '< 24h', label: 'Temps de réponse' },
        { value: '30 min', label: 'Démo gratuite' },
        { value: '1-2 sem', label: 'Configuration' },
        { value: '100%', label: 'Canadien' }
      ]
    },
    
    // Footer
    footer: {
      description: 'Solution canadienne de gestion pour services d\'incendie. Optimisez la planification, le personnel et les équipements de votre caserne.',
      navigation: 'Navigation',
      support: 'Support',
      documentation: 'Documentation',
      faq: 'FAQ',
      tutorials: 'Tutoriels',
      technicalSupport: 'Support Technique',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation',
      migration: 'Migration depuis Première Ligne',
      rights: 'Tous droits réservés.'
    },

    // Screenshots
    screenshots: {
      title: 'Aperçu de l\'Application',
      subtitle: 'Découvrez l\'interface intuitive de ProFireManager à travers ces captures d\'écran réelles.',
      items: [
        { title: 'Gestion des Formations', desc: 'Inscription directe aux formations, suivi des certifications et planification en un clic.' },
        { title: 'Inventaire EPI - NFPA 1851', desc: 'Suivi complet de tous les équipements avec inspection de routine et demandes de remplacement.' },
        { title: 'Planning des Gardes', desc: 'Attribution automatique intelligente et vue d\'ensemble claire de la planification.' },
        { title: 'Gestion des Disponibilités', desc: 'Calendrier intuitif pour gérer les disponibilités et indisponibilités de chaque pompier.' }
      ]
    },

    // Modules (12 modules officiels)
    modules: {
      badge: '12 Modules Intégrés',
      title: 'Une Solution Complète',
      subtitle: 'Tous les outils nécessaires pour gérer l\'ensemble des opérations de votre service d\'incendie.',
      items: [
        {
          title: 'Tableau de Bord',
          shortDesc: 'Vue d\'ensemble en temps réel : KPI, alertes, calendrier, messages internes.',
          access: 'Tous les utilisateurs',
          features: [
            'Indicateurs clés de performance (KPI)',
            'Alertes et notifications en temps réel',
            'Calendrier des événements',
            'Messages de diffusion interne',
            'Statistiques des interventions'
          ]
        },
        {
          title: 'Gestion du Personnel',
          shortDesc: 'Dossiers employés, grades, équipes de garde avec rotation automatique, compétences.',
          access: 'Administrateurs, Superviseurs',
          features: [
            'Dossiers employés complets',
            'Gestion des grades et fonctions',
            'Équipes de garde avec rotation automatique',
            'Suivi des compétences et certifications',
            'Export PDF et Excel'
          ]
        },
        {
          title: 'Gestion des Actifs',
          shortDesc: 'Véhicules, EPI, équipements médicaux et de communication. Inspections, QR codes.',
          access: 'Tous les utilisateurs',
          features: [
            'Véhicules et équipements de protection',
            'Équipements médicaux et de communication',
            'Inspections planifiées et alertes d\'expiration',
            'Codes-barres et QR codes',
            'Rapports d\'état détaillés'
          ]
        },
        {
          title: 'Interventions (cartes d\'appel)',
          shortDesc: 'Import SFTP automatique, rapport complet, DSI, signature électronique, fausses alarmes.',
          access: 'Tous les utilisateurs',
          features: [
            'Import automatique via SFTP (XML)',
            'Chronologie détaillée des interventions',
            'Déclaration de Sinistre Incendie (DSI)',
            'Signature électronique des rapports',
            'Facturation des fausses alarmes'
          ]
        },
        {
          title: 'Paie',
          shortDesc: 'Calcul automatique des heures, taux multiples (régulier, supplémentaire, primes), exports.',
          access: 'Administrateurs, Superviseurs',
          features: [
            'Calcul automatique des heures',
            'Taux régulier et temps supplémentaire',
            'Primes de nuit/week-end',
            'Intégration avec les interventions',
            'Export pour logiciels de paie'
          ]
        },
        {
          title: 'Horaire / Planning',
          shortDesc: 'Calendrier multi-vues, rotation automatique (24h, 48h, hebdo, personnalisé), conflits.',
          access: 'Tous les utilisateurs',
          features: [
            'Calendrier multi-vues (jour, semaine, mois)',
            'Rotation automatique des équipes',
            'Rotations 24h, 48h, hebdomadaire, personnalisé',
            'Détection des conflits',
            'Export et impression'
          ]
        },
        {
          title: 'Remplacements',
          shortDesc: 'Demandes en ligne, workflow d\'approbation, offres aux remplaçants, gestion des congés.',
          access: 'Tous les utilisateurs',
          features: [
            'Demandes de remplacement en ligne',
            'Workflow d\'approbation automatisé',
            'Offres aux remplaçants par notification',
            'Gestion des congés personnalisable',
            'Délégation automatique des responsabilités'
          ]
        },
        {
          title: 'Formations',
          shortDesc: 'Catalogue, certifications, alertes d\'expiration, planification, attestations.',
          access: 'Tous les utilisateurs',
          features: [
            'Catalogue des formations',
            'Suivi des certifications',
            'Alertes avant expiration',
            'Planification des sessions',
            'Documents et attestations'
          ]
        },
        {
          title: 'Prévention (optionnel)',
          shortDesc: 'Bâtiments à risque, visites d\'inspection, non-conformités, géolocalisation.',
          access: 'Préventionnistes',
          features: [
            'Registre des bâtiments à risque',
            'Visites d\'inspection planifiées',
            'Suivi des non-conformités',
            'Géolocalisation et avis officiels',
            'Rapports par secteur'
          ]
        },
        {
          title: 'Disponibilités',
          shortDesc: 'Saisie hebdomadaire pour temps partiels et temporaires, validation, planning.',
          access: 'Temps partiels, Temporaires',
          features: [
            'Saisie hebdomadaire des disponibilités',
            'Calendrier interactif',
            'Validation par superviseurs',
            'Intégration au planning',
            'Historique des disponibilités'
          ]
        },
        {
          title: 'Mes EPI',
          shortDesc: 'Inspection mensuelle obligatoire par l\'employé, signalement, rappels automatiques.',
          access: 'Tous les employés',
          features: [
            'Liste des EPI assignés',
            'Inspection mensuelle obligatoire',
            'Formulaire d\'auto-inspection',
            'Signalement des problèmes',
            'Rappels automatiques'
          ]
        },
        {
          title: 'Rapports',
          shortDesc: 'Heures, interventions, conformité. Exports PDF/Excel personnalisables.',
          access: 'Administrateurs',
          features: [
            'Rapports d\'heures par période',
            'Statistiques d\'interventions',
            'Rapports de conformité',
            'Exports PDF et Excel personnalisables',
            'Graphiques et visualisations'
          ]
        }
      ],
      highlights: [
        { value: '12', label: 'Modules intégrés' },
        { value: '100%', label: 'Cloud sécurisé' },
        { value: '24/7', label: 'Accessible partout' }
      ]
    },

    // Points Forts (8 éléments officiels)
    strengths: {
      title: 'Points Forts',
      subtitle: 'Ce qui distingue ProFireManager des autres solutions.',
      items: [
        { icon: 'CheckCircle', title: 'Solution tout-en-un', desc: 'Un seul outil pour toutes les opérations' },
        { icon: 'Building', title: 'Multi-tenant', desc: 'Idéal pour les regroupements et MRC' },
        { icon: 'Smartphone', title: 'Multi-plateforme', desc: 'Web, iOS, Android (PWA + applications natives)' },
        { icon: 'Fingerprint', title: 'Authentification biométrique', desc: 'Face ID / Touch ID sur mobile' },
        { icon: 'Bell', title: 'Notifications push', desc: 'Alertes en temps réel sur tous les appareils' },
        { icon: 'MapPin', title: 'Support local', desc: 'Développé au Québec, en français' },
        { icon: 'Shield', title: 'Conformité DSI', desc: 'Déclaration de Sinistre Incendie automatisée' },
        { icon: 'Layers', title: 'Évolutif', desc: 'Modules activables selon vos besoins' }
      ]
    },

    // Migration depuis Première Ligne
    migration: {
      badge: 'Migration sans douleur',
      title: 'Vous utilisez Première Ligne ? Migrez sans rien perdre.',
      subtitle: 'Vous utilisez actuellement le logiciel Première Ligne ? Aucun problème — ProFireManager est 100 % compatible.',
      intro: 'Nous récupérons l\'intégralité de vos données :',
      items: [
        'Dossiers employés et historiques',
        'Équipements et inspections passées',
        'Cartes d\'appel et rapports d\'intervention archivés',
        'Bâtiments en prévention et visites antérieures',
        'Formations et certifications',
        'Historique de paie'
      ],
      feeLabel: 'Service de transfert complet',
      feeValue: '5 000 $ CAD',
      feeDetail: 'Forfait fixe — taxes en sus, paiement unique',
      promise1: 'Votre historique reste intact. Aucune donnée perdue.',
      promise2: 'Notre équipe s\'occupe de tout. Vous repartez là où vous étiez.',
      cta: 'Demander une démo de migration',
      learnMore: 'En savoir plus sur la migration',
      disclaimer: 'Première Ligne est une marque tierce mentionnée à titre informatif uniquement.',
      badge100: '100 % des données transférées'
    },

    // Migration Page (page dédiée)
    migrationPage: {
      hero: {
        badge: 'Migration Première Ligne → ProFireManager',
        title: 'Migrez de Première Ligne vers ProFireManager sans rien perdre',
        subtitle: 'ProFireManager récupère 100 % de vos données : employés, équipements, interventions, prévention, paie. Forfait fixe 5 000 $ CAD.',
        cta: 'Demander une démo de migration'
      },
      whyTitle: 'Pourquoi migrer vers ProFireManager ?',
      whyItems: [
        { title: 'Solution moderne', desc: 'Plateforme web responsive + applications natives iOS et Android avec authentification biométrique (Face ID / Touch ID).' },
        { title: 'Tout-en-un', desc: 'Personnel, interventions, EPI, paie, formations, prévention, planning — un seul outil pour toutes vos opérations.' },
        { title: 'Conformité DSI', desc: 'Déclaration de Sinistre Incendie automatisée, signature électronique, facturation des fausses alarmes.' },
        { title: 'Notifications push', desc: 'Alertes temps réel sur mobile pour interventions, remplacements et expirations d\'EPI.' },
        { title: 'Support local', desc: 'Développé au Québec, en français, par et pour les services incendie québécois.' },
        { title: 'Multi-tenant', desc: 'Idéal pour les regroupements de casernes et les MRC.' }
      ],
      processTitle: 'Notre processus de migration en 4 étapes',
      processSteps: [
        { step: '1', title: 'Audit de vos données', desc: 'Analyse complète de votre base Première Ligne et de votre historique.' },
        { step: '2', title: 'Plan de transfert', desc: 'Plan personnalisé approuvé par votre direction avant la migration.' },
        { step: '3', title: 'Migration sécurisée', desc: 'Transfert chiffré de l\'ensemble de vos données vers ProFireManager.' },
        { step: '4', title: 'Validation et formation', desc: 'Vérification des données migrées et formation initiale de vos administrateurs.' }
      ],
      includedTitle: 'Ce qui est inclus dans le forfait de 5 000 $ CAD',
      includedItems: [
        'Récupération de 100 % de vos données historiques',
        'Mapping personnalisé Première Ligne → ProFireManager',
        'Transfert chiffré et sécurisé',
        'Validation et rapprochement des données',
        'Formation initiale de vos administrateurs (2h)',
        'Support dédié pendant toute la migration',
        'Rapport de migration détaillé',
        'Garantie d\'intégrité des données'
      ],
      faqTitle: 'Questions fréquentes sur la migration',
      faqItems: [
        {
          q: 'Combien de temps prend une migration depuis Première Ligne ?',
          a: 'La majorité des migrations sont complétées en 2 à 4 semaines, selon le volume de données. Notre équipe vous fournit un calendrier précis dès l\'audit initial.'
        },
        {
          q: 'Mes données seront-elles inaccessibles pendant la migration ?',
          a: 'Non. Vous continuez à utiliser Première Ligne pendant toute la durée de la migration. Le basculement vers ProFireManager se fait à une date convenue.'
        },
        {
          q: 'Que se passe-t-il si certaines données ne peuvent pas être migrées ?',
          a: 'Notre processus prévoit un mapping exhaustif. Dans le cas rare où certains champs personnalisés ne peuvent être transférés automatiquement, nous proposons une solution manuelle ou un archivage sécurisé.'
        },
        {
          q: 'Le forfait de 5 000 $ CAD est-il vraiment fixe ?',
          a: 'Oui. C\'est un forfait unique, taxes en sus, valable quel que soit le volume de données. Aucun frais caché.'
        },
        {
          q: 'Puis-je conserver mon historique de paie ?',
          a: 'Oui. L\'historique de paie fait partie intégrante du forfait de migration.'
        }
      ],
      ctaTitle: 'Prêt à migrer vers ProFireManager ?',
      ctaSubtitle: 'Discutons de votre projet et obtenez un calendrier précis.',
      ctaButton: 'Demander une démo de migration'
    },

    // Integrations
    integrations: {
      title: 'Intégrations',
      items: [
        { name: 'Import SFTP', desc: 'Récupération automatique des cartes d\'appel XML' },
        { name: 'Export', desc: 'PDF et Excel pour tous les rapports' },
        { name: 'API REST', desc: 'Intégration avec systèmes externes' },
        { name: 'Email', desc: 'Notifications automatiques' }
      ]
    }
  },
  
  en: {
    // Navigation
    nav: {
      features: 'Features',
      modules: 'Modules',
      benefits: 'Benefits',
      pricing: 'Pricing',
      migration: 'Migration',
      contact: 'Contact',
      requestDemo: 'Request a Demo'
    },
    
    // Hero Section
    hero: {
      badge: 'Canadian solution for fire departments',
      title: 'Optimize the management of your',
      titleHighlight: 'fire department',
      subtitle: 'ProFireManager centralizes personnel, interventions, payroll, equipment and fire prevention management in one platform.',
      benefits: [
        'Personnel & shift management',
        'Interventions & call cards',
        'Integrated payroll module',
        'PPE & training tracking',
        'Fire prevention',
        'Reports & statistics'
      ],
      ctaPrimary: 'Request a Free Demo',
      ctaSecondary: 'Discover Modules',
      trustBadge: 'Specifically developed for Canadian fire stations',
      stats: {
        demo: '30 min',
        demoLabel: 'Free Demo',
        cloud: '100%',
        cloudLabel: 'Cloud',
        support: '24/7',
        supportLabel: 'Support'
      }
    },

    // Features
    features: {
      title: 'Complete Features',
      subtitle: 'Everything you need to effectively manage your fire department, centralized in one platform.',
      items: [
        {
          title: 'Intelligent Schedule Management',
          description: 'Automatic shift assignment based on skills, rank and availability. Complete full-time and part-time management. Interactive calendar with monthly view and color codes.',
          benefits: [
            'Automated planning',
            'Full-time/part-time management',
            'Fair distribution',
            'Export and print'
          ]
        },
        {
          title: 'Automated Replacements',
          description: 'Intelligent replacement system that automatically finds the best candidate based on required skills and hour equity.',
          benefits: [
            'Smart matching',
            'Automatic notifications',
            'Complete history',
            'Constraint compliance'
          ]
        },
        {
          title: 'PPE Management - NFPA 1851',
          description: 'Centralized tracking compliant with NFPA 1851. Routine inspection directly by firefighters in the app. Simplified replacement requests.',
          benefits: [
            'Complete inventory',
            'Routine inspection in app',
            'Replacement request',
            'NFPA 1851 compliance'
          ]
        },
        {
          title: 'Training Management - NFPA 1500',
          description: 'Certification tracking compliant with NFPA 1500 with automatic renewal alerts. Direct enrollment in training through the app.',
          benefits: [
            'Certification tracking',
            'Direct training enrollment',
            'Renewal alerts',
            'NFPA 1500 compliance'
          ]
        }
      ],
      additionalTitle: 'Prevention Module (Optional)',
      additionalDesc: 'Complementary module with CSV import, inspection grids compliant with Quebec Safety Code, fire prevention officer management and advanced dashboards.',
      additionalTags: ['CSV Import', 'Inspection Grids', 'Officer Management', 'Dashboards']
    },

    // Benefits
    benefits: {
      title: 'Why Choose ProFireManager?',
      subtitle: 'Measurable results and rapid return on investment for your fire department.',
      items: [
        { title: 'Time Savings', desc: '80% reduction in planning time', stat: '6h30', label: 'saved/week' },
        { title: 'Improvement', desc: 'Real-time global vision', stat: '100%', label: 'traceability' },
        { title: 'Equity', desc: 'Automatic fair distribution', stat: '0', label: 'conflict' },
        { title: 'Optimization', desc: 'Overtime reduction', stat: '-25%', label: 'overtime' },
        { title: 'Accessibility', desc: '24/7 responsive interface', stat: '24/7', label: 'available' },
        { title: 'Compliance', desc: 'Quebec Safety Code', stat: '100%', label: 'compliant' }
      ],
      roiTitle: 'Positive ROI from First Year',
      roiSubtitle: 'Average annual savings for a 30-firefighter station',
      roiStats: [
        { value: '8h', label: 'Admin time saved/week' },
        { value: '$14,560', label: 'Estimated annual savings' },
        { value: '$3,660', label: 'Annual cost (15 firefighters)' }
      ]
    },

    // Pricing
    pricing: {
      title: 'Simple and Transparent Pricing',
      subtitle: 'Pay only for the number of active firefighters.',
      monthly: 'Monthly',
      annual: 'Annual',
      discount: '-10%',
      perFirefighter: '/firefighter/month',
      popular: 'Most Popular',
      tiers: [
        { name: '0 to 30 firefighters', count: 30, setupFee: 1500 },
        { name: '31 to 50 firefighters', count: 40, setupFee: 2500 },
        { name: '51+ firefighters', count: 50, setupFee: 3500 }
      ],
      billedAnnually: 'billed annually',
      annualSavings: 'Billed annually - 10% savings',
      startNow: 'Request a Demo',
      setupFeeLabel: 'Initial setup',
      setupFeeSuffix: '(one-time)',
      setupFeeCurrency: 'CAD',
      includedTitle: 'Included Modules',
      includedItems: [
        'Real-time dashboard (KPIs, alerts, internal messages)',
        'Personnel and guard team management',
        'Asset management (vehicles, PPE, equipment)',
        'Interventions and call cards (SFTP import, DSI, signature)',
        'Integrated Payroll module (automatic calculation, exports)',
        'Schedule / Planning with automatic rotation',
        'Replacements (approval workflow)',
        'Training and certifications',
        'Availability (part-time/temporary staff)',
        'My PPE (mandatory monthly inspection)',
        'Customizable reports (PDF/Excel)',
        'Multi-tenant and role management',
        'iOS and Android apps (Face ID / Touch ID)',
        'Real-time push notifications',
        'Email support and automatic updates'
      ],
      optionalTitle: 'Optional Module',
      optionalModule: 'Prevention Module: +$3/firefighter/month',
      setupFeeNote: 'Setup fees cover: initial configuration of your organization, import of your employees and equipment, configuration of guard teams, payroll and notification setup, and initial training of your administrators. One-time fee, payable at launch. Prices in Canadian dollars, taxes extra.'
    },

    // CTA
    cta: {
      title: 'Ready to Transform Your Management?',
      subtitle: 'Join Canadian fire departments that have already optimized their management with ProFireManager.',
      benefits: [
        { value: '30 min', label: 'Free demo' },
        { value: '1-2 wks', label: 'Quick setup' },
        { value: '60 days', label: 'Money-back guarantee' }
      ],
      btn: 'Request a Free Demo',
      trust: 'Setup in 1-2 weeks • Dedicated support • Canadian solution'
    },

    // Contact
    contact: {
      title: 'Contact Us',
      subtitle: 'Book your free demo or ask us your questions. Our team will respond quickly.',
      formTitle: 'Request a Demo',
      name: 'Full Name',
      organization: 'Organization',
      email: 'Email',
      phone: 'Phone',
      firefighters: 'Number of firefighters',
      message: 'Message',
      messagePlaceholder: 'Tell us about your needs...',
      send: 'Send Request',
      infoTitle: 'Contact Information',
      emailSupport: 'Email Support',
      emailDesc: 'Response within 24h',
      phoneSupport: 'Phone Support',
      phoneDesc: 'Mon-Fri: 8am-6pm EST',
      hours: 'Business Hours',
      hoursWeekdays: 'Monday - Friday',
      hoursWeekdaysTime: '8:00am - 6:00pm (EST)',
      hoursWeekend: 'Saturday - Sunday',
      hoursWeekendTime: 'Closed (Email only)',
      stats: [
        { value: '< 24h', label: 'Response time' },
        { value: '30 min', label: 'Free demo' },
        { value: '1-2 wks', label: 'Setup' },
        { value: '100%', label: 'Canadian' }
      ]
    },
    
    // Footer
    footer: {
      description: 'Canadian management solution for fire departments. Optimize planning, personnel and equipment for your station.',
      navigation: 'Navigation',
      support: 'Support',
      documentation: 'Documentation',
      faq: 'FAQ',
      tutorials: 'Tutorials',
      technicalSupport: 'Technical Support',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      migration: 'Migration from Première Ligne',
      rights: 'All rights reserved.'
    },

    // Screenshots
    screenshots: {
      title: 'Application Overview',
      subtitle: 'Discover ProFireManager\'s intuitive interface through these real screenshots.',
      items: [
        { title: 'Training Management', desc: 'Direct training enrollment, certification tracking and one-click planning.' },
        { title: 'PPE Inventory - NFPA 1851', desc: 'Complete tracking of all equipment with routine inspection and replacement requests.' },
        { title: 'Shift Planning', desc: 'Intelligent automatic assignment and clear overview of planning.' },
        { title: 'Availability Management', desc: 'Intuitive calendar to manage each firefighter\'s availability and unavailability.' }
      ]
    },

    // Modules (12 official modules)
    modules: {
      badge: '12 Integrated Modules',
      title: 'A Complete Solution',
      subtitle: 'All the tools you need to manage your entire fire department operations.',
      items: [
        {
          title: 'Dashboard',
          shortDesc: 'Real-time overview: KPIs, alerts, calendar, internal messages.',
          access: 'All users',
          features: [
            'Key performance indicators (KPIs)',
            'Real-time alerts and notifications',
            'Event calendar',
            'Internal broadcast messages',
            'Intervention statistics'
          ]
        },
        {
          title: 'Personnel Management',
          shortDesc: 'Employee files, ranks, guard teams with auto-rotation, skills.',
          access: 'Administrators, Supervisors',
          features: [
            'Complete employee files',
            'Rank and function management',
            'Guard teams with automatic rotation',
            'Skills and certifications tracking',
            'PDF and Excel export'
          ]
        },
        {
          title: 'Asset Management',
          shortDesc: 'Vehicles, PPE, medical and communication equipment. Inspections, QR codes.',
          access: 'All users',
          features: [
            'Vehicles and protective equipment',
            'Medical and communication equipment',
            'Scheduled inspections and expiration alerts',
            'Barcodes and QR codes',
            'Detailed status reports'
          ]
        },
        {
          title: 'Interventions (call cards)',
          shortDesc: 'Auto SFTP import, full report, DSI, electronic signature, false alarms billing.',
          access: 'All users',
          features: [
            'Automatic import via SFTP (XML)',
            'Detailed intervention timeline',
            'Fire Incident Declaration (DSI)',
            'Electronic report signatures',
            'False alarm billing'
          ]
        },
        {
          title: 'Payroll',
          shortDesc: 'Automatic hour calculation, multiple rates (regular, overtime, bonuses), exports.',
          access: 'Administrators, Supervisors',
          features: [
            'Automatic hour calculation',
            'Regular and overtime rates',
            'Night/weekend bonuses',
            'Integration with interventions',
            'Export for payroll software'
          ]
        },
        {
          title: 'Schedule / Planning',
          shortDesc: 'Multi-view calendar, auto rotation (24h, 48h, weekly, custom), conflict detection.',
          access: 'All users',
          features: [
            'Multi-view calendar (day, week, month)',
            'Automatic team rotation',
            '24h, 48h, weekly, custom rotations',
            'Conflict detection',
            'Export and print'
          ]
        },
        {
          title: 'Replacements',
          shortDesc: 'Online requests, approval workflow, offers to replacements, leave management.',
          access: 'All users',
          features: [
            'Online replacement requests',
            'Automated approval workflow',
            'Notifications to replacements',
            'Customizable leave management',
            'Automatic responsibility delegation'
          ]
        },
        {
          title: 'Training',
          shortDesc: 'Catalog, certifications, expiration alerts, session planning, certificates.',
          access: 'All users',
          features: [
            'Training catalog',
            'Certification tracking',
            'Pre-expiration alerts',
            'Session planning',
            'Documents and certificates'
          ]
        },
        {
          title: 'Prevention (optional)',
          shortDesc: 'At-risk buildings, inspection visits, non-conformities, geolocation.',
          access: 'Fire prevention officers',
          features: [
            'At-risk building registry',
            'Scheduled inspection visits',
            'Non-conformity tracking',
            'Geolocation and official notices',
            'Reports by sector'
          ]
        },
        {
          title: 'Availability',
          shortDesc: 'Weekly entry for part-time and temporary staff, validation, planning.',
          access: 'Part-time, Temporary',
          features: [
            'Weekly availability entry',
            'Interactive calendar',
            'Supervisor validation',
            'Planning integration',
            'Availability history'
          ]
        },
        {
          title: 'My PPE',
          shortDesc: 'Mandatory monthly self-inspection by employee, reporting, automatic reminders.',
          access: 'All employees',
          features: [
            'List of assigned PPE',
            'Mandatory monthly inspection',
            'Self-inspection form',
            'Problem reporting',
            'Automatic reminders'
          ]
        },
        {
          title: 'Reports',
          shortDesc: 'Hours, interventions, compliance. Customizable PDF/Excel exports.',
          access: 'Administrators',
          features: [
            'Hour reports by period',
            'Intervention statistics',
            'Compliance reports',
            'Customizable PDF and Excel exports',
            'Charts and visualizations'
          ]
        }
      ],
      highlights: [
        { value: '12', label: 'Integrated modules' },
        { value: '100%', label: 'Secure cloud' },
        { value: '24/7', label: 'Accessible anywhere' }
      ]
    },

    // Strengths (8 official items)
    strengths: {
      title: 'Key Strengths',
      subtitle: 'What sets ProFireManager apart from other solutions.',
      items: [
        { icon: 'CheckCircle', title: 'All-in-one solution', desc: 'One tool for all operations' },
        { icon: 'Building', title: 'Multi-tenant', desc: 'Ideal for groups and regional municipalities' },
        { icon: 'Smartphone', title: 'Multi-platform', desc: 'Web, iOS, Android (PWA + native apps)' },
        { icon: 'Fingerprint', title: 'Biometric auth', desc: 'Face ID / Touch ID on mobile' },
        { icon: 'Bell', title: 'Push notifications', desc: 'Real-time alerts on all devices' },
        { icon: 'MapPin', title: 'Local support', desc: 'Developed in Quebec, in French' },
        { icon: 'Shield', title: 'DSI compliance', desc: 'Automated Fire Incident Declaration' },
        { icon: 'Layers', title: 'Scalable', desc: 'Activate modules based on your needs' }
      ]
    },

    // Migration from Première Ligne
    migration: {
      badge: 'Painless migration',
      title: 'Using Première Ligne? Migrate without losing anything.',
      subtitle: 'Currently using Première Ligne? No problem — ProFireManager is 100% compatible.',
      intro: 'We recover all your data:',
      items: [
        'Employee files and histories',
        'Equipment and past inspections',
        'Call cards and archived intervention reports',
        'Prevention buildings and previous visits',
        'Training and certifications',
        'Payroll history'
      ],
      feeLabel: 'Complete transfer service',
      feeValue: '$5,000 CAD',
      feeDetail: 'Flat fee — taxes extra, one-time payment',
      promise1: 'Your history stays intact. No data lost.',
      promise2: 'Our team handles everything. You pick up where you left off.',
      cta: 'Request a migration demo',
      learnMore: 'Learn more about migration',
      disclaimer: 'Première Ligne is a third-party brand mentioned for informational purposes only.',
      badge100: '100% of data transferred'
    },

    // Migration Page (dedicated page)
    migrationPage: {
      hero: {
        badge: 'Première Ligne → ProFireManager Migration',
        title: 'Migrate from Première Ligne to ProFireManager without losing anything',
        subtitle: 'ProFireManager recovers 100% of your data: employees, equipment, interventions, prevention, payroll. Flat fee of $5,000 CAD.',
        cta: 'Request a migration demo'
      },
      whyTitle: 'Why migrate to ProFireManager?',
      whyItems: [
        { title: 'Modern solution', desc: 'Responsive web platform + native iOS and Android apps with biometric authentication (Face ID / Touch ID).' },
        { title: 'All-in-one', desc: 'Personnel, interventions, PPE, payroll, training, prevention, planning — one tool for all your operations.' },
        { title: 'DSI compliance', desc: 'Automated Fire Incident Declaration, electronic signature, false alarm billing.' },
        { title: 'Push notifications', desc: 'Real-time mobile alerts for interventions, replacements and PPE expirations.' },
        { title: 'Local support', desc: 'Developed in Quebec, in French, by and for Quebec fire departments.' },
        { title: 'Multi-tenant', desc: 'Ideal for fire station groups and regional municipalities (MRCs).' }
      ],
      processTitle: 'Our 4-step migration process',
      processSteps: [
        { step: '1', title: 'Data audit', desc: 'Comprehensive analysis of your Première Ligne database and history.' },
        { step: '2', title: 'Transfer plan', desc: 'Custom plan approved by your management before migration.' },
        { step: '3', title: 'Secure migration', desc: 'Encrypted transfer of all your data to ProFireManager.' },
        { step: '4', title: 'Validation & training', desc: 'Migrated data verification and initial admin training.' }
      ],
      includedTitle: 'What\'s included in the $5,000 CAD flat fee',
      includedItems: [
        'Recovery of 100% of your historical data',
        'Custom mapping Première Ligne → ProFireManager',
        'Encrypted and secure transfer',
        'Data validation and reconciliation',
        'Initial admin training (2h)',
        'Dedicated support throughout migration',
        'Detailed migration report',
        'Data integrity guarantee'
      ],
      faqTitle: 'Frequently asked questions about migration',
      faqItems: [
        {
          q: 'How long does a migration from Première Ligne take?',
          a: 'Most migrations complete in 2 to 4 weeks, depending on data volume. Our team provides a precise schedule after the initial audit.'
        },
        {
          q: 'Will my data be inaccessible during migration?',
          a: 'No. You continue using Première Ligne throughout the migration. The switch to ProFireManager happens on an agreed date.'
        },
        {
          q: 'What if some data cannot be migrated?',
          a: 'Our process includes comprehensive mapping. In the rare case where certain custom fields cannot be transferred automatically, we offer a manual solution or secure archiving.'
        },
        {
          q: 'Is the $5,000 CAD fee really flat?',
          a: 'Yes. It is a one-time flat fee, taxes extra, regardless of data volume. No hidden charges.'
        },
        {
          q: 'Can I keep my payroll history?',
          a: 'Yes. Payroll history is fully included in the migration package.'
        }
      ],
      ctaTitle: 'Ready to migrate to ProFireManager?',
      ctaSubtitle: 'Let\'s discuss your project and get a precise timeline.',
      ctaButton: 'Request a migration demo'
    },

    // Integrations
    integrations: {
      title: 'Integrations',
      items: [
        { name: 'SFTP Import', desc: 'Automatic XML call card retrieval' },
        { name: 'Export', desc: 'PDF and Excel for all reports' },
        { name: 'REST API', desc: 'Integration with external systems' },
        { name: 'Email', desc: 'Automatic notifications' }
      ]
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
