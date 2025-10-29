import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annual'
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const calculatePrice = (basePrice) => {
    if (billingCycle === 'annual') {
      return (basePrice * 0.9).toFixed(0); // 10% discount
    }
    return basePrice;
  };

  const pricingTiers = [
    {
      name: '0 à 30 pompiers',
      basePrice: 12,
      example: (count) => `${(calculatePrice(12) * count).toFixed(0)}$/${billingCycle === 'monthly' ? 'mois' : 'an'} (${count} pompiers)`,
      popular: false
    },
    {
      name: '31 à 50 pompiers',
      basePrice: 20,
      example: (count) => `${(calculatePrice(20) * count).toFixed(0)}$/${billingCycle === 'monthly' ? 'mois' : 'an'} (${count} pompiers)`,
      popular: true
    },
    {
      name: '51+ pompiers',
      basePrice: 27,
      example: (count) => `${(calculatePrice(27) * count).toFixed(0)}$/${billingCycle === 'monthly' ? 'mois' : 'an'} (${count} pompiers)`,
      popular: false
    }
  ];

  const includedFeatures = [
    'Gestion des gardes avec attribution automatique',
    'Planification intelligente et calendrier',
    'Gestion complète du personnel',
    'Module EPI conforme NFPA 1851',
    'Module Formations conforme NFPA 1500',
    'Tableaux de bord et rapports avancés',
    'Multi-tenant et gestion des rôles',
    'Support par email',
    'Mises à jour automatiques'
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tarification Simple et Transparente
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Payez uniquement pour le nombre de pompiers actifs.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1 mb-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-md font-medium transition-all relative ${
                billingCycle === 'annual'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              Annuel
              <span className="absolute -top-2 -right-2 bg-[#D9072B] text-white text-xs px-2 py-0.5 rounded-full">
                -10%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative border-2 ${
                tier.popular
                  ? 'border-[#D9072B] shadow-xl scale-105'
                  : 'border-gray-200 hover:border-[#D9072B]'
              } transition-all duration-300`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#D9072B] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Le plus populaire
                  </span>
                </div>
              )}
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tier.name}</h3>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-[#D9072B]">
                      {calculatePrice(tier.basePrice)}$
                    </span>
                    <span className="text-gray-600">/pompier/{billingCycle === 'monthly' ? 'mois' : 'an'}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {tier.example(index === 0 ? 30 : index === 1 ? 40 : 50)}
                  </p>
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-green-600 mt-1 font-medium">
                      Économie annuelle incluse
                    </p>
                  )}
                </div>
                <Button
                  onClick={scrollToContact}
                  className={`w-full ${
                    tier.popular
                      ? 'bg-[#D9072B] hover:bg-[#B00623] text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Commencer maintenant
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Included Features */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Tous les Modules Inclus
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#D9072B] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Special Offer */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-[#D9072B]">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Offre de Lancement
              </h3>
              <div className="space-y-3 mb-6">
                <p className="text-xl text-gray-700">
                  <strong>-30% sur les 3 premiers mois</strong>
                </p>
                <p className="text-xl text-gray-700">
                  <strong>Formation initiale de 2h OFFERTE</strong> (valeur 400$)
                </p>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Offre valable pour toute souscription avant le 31 mars 2026
              </p>
              <Button
                onClick={scrollToContact}
                className="bg-[#D9072B] hover:bg-[#B00623] text-white px-8 py-6 text-lg font-semibold"
              >
                Profiter de l'offre maintenant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;