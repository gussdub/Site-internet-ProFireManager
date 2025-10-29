import React from 'react';
import { Calendar, Users, Shield, GraduationCap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Features = () => {
  const features = [
    {
      icon: Calendar,
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
      icon: Users,
      title: 'Remplacements Automatisés',
      description: "Système intelligent de remplacement qui trouve automatiquement le meilleur candidat selon les compétences requises et l'équité des heures.",
      benefits: [
        'Matching intelligent',
        'Notifications automatiques',
        'Historique complet',
        'Respect des contraintes'
      ]
    },
    {
      icon: Shield,
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
      icon: GraduationCap,
      title: 'Gestion des Formations - NFPA 1500',
      description: 'Suivi des certifications conforme NFPA 1500 avec alertes de renouvellement automatiques. Inscription directe aux formations par l\'application.',
      benefits: [
        'Suivi des certifications',
        'Inscription directe aux formations',
        'Alertes de renouvellement',
        'Conformité NFPA 1500'
      ]
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fonctionnalités Complètes
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce dont vous avez besoin pour gérer efficacement votre service d'incendie, centralisé dans une seule plateforme.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-2 border-gray-200 hover:border-[#D9072B] transition-all duration-300 hover:shadow-xl group"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-[#D9072B] transition-colors duration-300">
                      <Icon className="w-8 h-8 text-[#D9072B] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#D9072B] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features Banner */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-red-50 rounded-2xl p-8 border border-gray-200">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Et bien plus encore...
            </h3>
            <p className="text-gray-700 mb-6">
              Module Prévention avec import CSV, grilles d'inspection conformes au Code de sécurité du Québec, gestion multi-tenant, tableaux de bord avancés, et rapports personnalisables.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Module Prévention', 'Import CSV', 'Grilles d\'inspection', 'Multi-tenant', 'Tableaux de bord', 'Rapports'].map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;