export const translations = {
  fr: {
    // Navigation
    nav: {
      features: 'Fonctionnalités',
      modules: 'Modules',
      benefits: 'Avantages',
      pricing: 'Tarification',
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
        { name: '0 à 30 pompiers', count: 30 },
        { name: '31 à 50 pompiers', count: 40 },
        { name: '51+ pompiers', count: 50 }
      ],
      billedAnnually: 'facturé annuellement',
      annualSavings: 'Facturé annuellement - Économie de 10%',
      startNow: 'Commencer maintenant',
      includedTitle: 'Modules Inclus',
      includedItems: [
        'Gestion des gardes avec attribution automatique',
        'Planification intelligente et calendrier',
        'Gestion complète du personnel',
        'Module EPI conforme NFPA 1851',
        'Module Formations conforme NFPA 1500',
        'Interventions et cartes d\'appel',
        'Module Paie intégré',
        'Tableaux de bord et rapports',
        'Multi-tenant et gestion des rôles',
        'Support par email',
        'Mises à jour automatiques'
      ],
      optionalTitle: 'Module Optionnel',
      optionalModule: 'Module Prévention: +3$/pompier/mois',
      offerTitle: 'Offre de Lancement',
      offerItems: [
        '-30% sur les 3 premiers mois',
        'Formation initiale de 2h OFFERTE (valeur 400$)'
      ],
      offerValidity: 'Offre valable pour toute souscription avant le 31 mars 2026',
      offerBtn: 'Profiter de l\'offre maintenant'
    },

    // CTA
    cta: {
      title: 'Prêt à Transformer Votre Gestion ?',
      subtitle: 'Rejoignez les services d\'incendie québécois qui ont déjà optimisé leur gestion avec ProFireManager.',
      benefits: [
        { value: '30 min', label: 'Démonstration gratuite' },
        { value: '1-2 sem', label: 'Configuration rapide' },
        { value: '60 jours', label: 'Garantie satisfait ou remboursé' }
      ],
      btn: 'Démarrer votre essai gratuit',
      trust: 'Configuration en 1-2 semaines • Support dédié • Solution québécoise'
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

    // Modules
    modules: {
      badge: '14 Modules Intégrés',
      title: 'Une Solution Complète',
      subtitle: 'Tous les outils nécessaires pour gérer l\'ensemble des opérations de votre service d\'incendie.',
      items: [
        {
          title: 'Tableau de Bord',
          shortDesc: 'Vue d\'ensemble des activités avec KPI et alertes en temps réel.',
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
          shortDesc: 'Dossiers employés complets, grades, équipes et compétences.',
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
          shortDesc: 'Véhicules, EPI, équipements médicaux et matériel d\'intervention.',
          access: 'Tous les utilisateurs',
          features: [
            'Véhicules et équipements de protection',
            'Suivi des inspections et maintenances',
            'Alertes d\'expiration automatiques',
            'Codes-barres et QR codes',
            'Rapports d\'état détaillés'
          ]
        },
        {
          title: 'Interventions',
          shortDesc: 'Cartes d\'appel, rapports d\'intervention et DSI.',
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
          title: 'Module Paie',
          shortDesc: 'Calcul automatique des heures et gestion des taux horaires.',
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
          shortDesc: 'Calendrier interactif et rotation automatique des équipes.',
          access: 'Tous les utilisateurs',
          features: [
            'Calendrier multi-vues (jour, semaine, mois)',
            'Rotation automatique des équipes',
            'Rotations 24h, 48h, hebdomadaire',
            'Détection des conflits',
            'Export et impression'
          ]
        },
        {
          title: 'Remplacements',
          shortDesc: 'Demandes en ligne et workflow d\'approbation automatisé.',
          access: 'Tous les utilisateurs',
          features: [
            'Demandes de remplacement en ligne',
            'Workflow d\'approbation automatisé',
            'Notifications automatiques',
            'Gestion des congés personnalisable',
            'Délégation automatique des responsabilités'
          ]
        },
        {
          title: 'Formations',
          shortDesc: 'Catalogue, certifications et alertes de renouvellement.',
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
          title: 'Prévention',
          shortDesc: 'Gestion des bâtiments, visites d\'inspection et non-conformités.',
          access: 'Préventionnistes',
          features: [
            'Registre des bâtiments à risque',
            'Visites d\'inspection planifiées',
            'Suivi des non-conformités',
            'Workflow de résolution',
            'Rapports par secteur'
          ]
        },
        {
          title: 'Disponibilités',
          shortDesc: 'Déclaration hebdomadaire pour temps partiels et temporaires.',
          access: 'Temps partiels, Temporaires',
          features: [
            'Déclaration hebdomadaire',
            'Calendrier interactif de saisie',
            'Validation par superviseurs',
            'Intégration avec le planning',
            'Historique des disponibilités'
          ]
        },
        {
          title: 'Mes EPI',
          shortDesc: 'Consultation et inspection mensuelle des équipements personnels.',
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
          title: 'Mon Profil',
          shortDesc: 'Gestion des informations personnelles et préférences.',
          access: 'Tous les utilisateurs',
          features: [
            'Consultation des informations',
            'Modification des coordonnées',
            'Changement de mot de passe',
            'Préférences de notification',
            'Historique des connexions'
          ]
        },
        {
          title: 'Rapports',
          shortDesc: 'Rapports d\'heures, statistiques et exports personnalisables.',
          access: 'Administrateurs',
          features: [
            'Rapports d\'heures par période',
            'Statistiques d\'interventions',
            'Rapports de conformité',
            'Exports PDF et Excel',
            'Graphiques et visualisations'
          ]
        },
        {
          title: 'Paramètres',
          shortDesc: 'Configuration générale et gestion des utilisateurs.',
          access: 'Administrateurs',
          features: [
            'Configuration de l\'organisation',
            'Paramètres par module',
            'Gestion des utilisateurs',
            'Attribution des rôles',
            'Templates et personnalisation'
          ]
        }
      ],
      highlights: [
        { value: '14', label: 'Modules intégrés' },
        { value: '100%', label: 'Cloud sécurisé' },
        { value: '24/7', label: 'Accessible partout' }
      ]
    },

    // Points Forts
    strengths: {
      title: 'Points Forts',
      subtitle: 'Ce qui distingue ProFireManager des autres solutions.',
      items: [
        { icon: 'CheckCircle', title: 'Solution tout-en-un', desc: 'Un seul outil pour toutes les opérations' },
        { icon: 'Building', title: 'Multi-tenant', desc: 'Idéal pour les regroupements et MRC' },
        { icon: 'Zap', title: 'Automatisation', desc: 'Calculs de paie, rotations, alertes' },
        { icon: 'Shield', title: 'Conformité', desc: 'DSI, inspections, certifications' },
        { icon: 'Smartphone', title: 'Mobilité', desc: 'Accessible partout, tous les appareils' },
        { icon: 'MapPin', title: 'Support local', desc: 'Développé au Canada, en français' }
      ]
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
        { name: '0 to 30 firefighters', count: 30 },
        { name: '31 to 50 firefighters', count: 40 },
        { name: '51+ firefighters', count: 50 }
      ],
      billedAnnually: 'billed annually',
      annualSavings: 'Billed annually - 10% savings',
      startNow: 'Start Now',
      includedTitle: 'All Modules Included',
      includedItems: [
        'Shift management with automatic assignment',
        'Smart planning and calendar',
        'Complete personnel management',
        'PPE Module - NFPA 1851 compliant',
        'Training Module - NFPA 1500 compliant',
        'Advanced dashboards and reports',
        'Multi-tenant and role management',
        'Email support',
        'Automatic updates'
      ],
      offerTitle: 'Launch Offer',
      offerItems: [
        '-30% on first 3 months',
        '2h initial training INCLUDED ($400 value)'
      ],
      offerValidity: 'Offer valid for any subscription before March 31, 2026',
      offerBtn: 'Take Advantage of the Offer'
    },

    // CTA
    cta: {
      title: 'Ready to Transform Your Management?',
      subtitle: 'Join Quebec fire departments that have already optimized their management with ProFireManager.',
      benefits: [
        { value: '30 min', label: 'Free demo' },
        { value: '1-2 wks', label: 'Quick setup' },
        { value: '60 days', label: 'Money-back guarantee' }
      ],
      btn: 'Start Your Free Trial',
      trust: 'Setup in 1-2 weeks • Dedicated support • Quebec solution'
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

    // Modules
    modules: {
      badge: '14 Integrated Modules',
      title: 'A Complete Solution',
      subtitle: 'All the tools you need to manage your entire fire department operations.',
      items: [
        {
          title: 'Dashboard',
          shortDesc: 'Overview of activities with KPIs and real-time alerts.',
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
          shortDesc: 'Complete employee files, ranks, teams and skills.',
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
          shortDesc: 'Vehicles, PPE, medical equipment and intervention gear.',
          access: 'All users',
          features: [
            'Vehicles and protective equipment',
            'Inspection and maintenance tracking',
            'Automatic expiration alerts',
            'Barcodes and QR codes',
            'Detailed status reports'
          ]
        },
        {
          title: 'Interventions',
          shortDesc: 'Call cards, intervention reports and fire declarations.',
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
          title: 'Payroll Module',
          shortDesc: 'Automatic hour calculation and hourly rate management.',
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
          shortDesc: 'Interactive calendar and automatic team rotation.',
          access: 'All users',
          features: [
            'Multi-view calendar (day, week, month)',
            'Automatic team rotation',
            '24h, 48h, weekly rotations',
            'Conflict detection',
            'Export and print'
          ]
        },
        {
          title: 'Replacements',
          shortDesc: 'Online requests and automated approval workflow.',
          access: 'All users',
          features: [
            'Online replacement requests',
            'Automated approval workflow',
            'Automatic notifications',
            'Customizable leave management',
            'Automatic responsibility delegation'
          ]
        },
        {
          title: 'Training',
          shortDesc: 'Catalog, certifications and renewal alerts.',
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
          title: 'Prevention',
          shortDesc: 'Building management, inspection visits and non-conformities.',
          access: 'Fire prevention officers',
          features: [
            'At-risk building registry',
            'Scheduled inspection visits',
            'Non-conformity tracking',
            'Resolution workflow',
            'Reports by sector'
          ]
        },
        {
          title: 'Availability',
          shortDesc: 'Weekly declaration for part-time and temporary staff.',
          access: 'Part-time, Temporary',
          features: [
            'Weekly declaration',
            'Interactive entry calendar',
            'Supervisor validation',
            'Planning integration',
            'Availability history'
          ]
        },
        {
          title: 'My PPE',
          shortDesc: 'View and monthly inspection of personal equipment.',
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
          title: 'My Profile',
          shortDesc: 'Personal information and preferences management.',
          access: 'All users',
          features: [
            'Information viewing',
            'Contact modification',
            'Password change',
            'Notification preferences',
            'Login history'
          ]
        },
        {
          title: 'Reports',
          shortDesc: 'Hour reports, statistics and customizable exports.',
          access: 'Administrators',
          features: [
            'Hour reports by period',
            'Intervention statistics',
            'Compliance reports',
            'PDF and Excel exports',
            'Charts and visualizations'
          ]
        },
        {
          title: 'Settings',
          shortDesc: 'General configuration and user management.',
          access: 'Administrators',
          features: [
            'Organization configuration',
            'Module settings',
            'User management',
            'Role assignment',
            'Templates and customization'
          ]
        }
      ],
      highlights: [
        { value: '14', label: 'Integrated modules' },
        { value: '100%', label: 'Secure cloud' },
        { value: '24/7', label: 'Accessible anywhere' }
      ]
    },

    // Strengths
    strengths: {
      title: 'Key Strengths',
      subtitle: 'What sets ProFireManager apart from other solutions.',
      items: [
        { icon: 'CheckCircle', title: 'All-in-one solution', desc: 'One tool for all operations' },
        { icon: 'Building', title: 'Multi-tenant', desc: 'Ideal for groups and regional municipalities' },
        { icon: 'Zap', title: 'Automation', desc: 'Payroll calculations, rotations, alerts' },
        { icon: 'Shield', title: 'Compliance', desc: 'DSI, inspections, certifications' },
        { icon: 'Smartphone', title: 'Mobility', desc: 'Accessible anywhere, all devices' },
        { icon: 'MapPin', title: 'Local support', desc: 'Developed in Canada, in French' }
      ]
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
