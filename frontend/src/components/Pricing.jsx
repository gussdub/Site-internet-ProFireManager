import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n/translations';

const Pricing = () => {
  const { language } = useLanguage();
  const pricingData = t(language, 'pricing');
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const calculatePrice = (basePrice) => {
    if (billingCycle === 'annual') {
      return (basePrice * 0.9).toFixed(0);
    }
    return basePrice;
  };

  const basePrices = [12, 20, 27];
  const counts = [30, 40, 50];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {pricingData.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {pricingData.subtitle}
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
              {pricingData.monthly}
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-md font-medium transition-all relative ${
                billingCycle === 'annual'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              {pricingData.annual}
              <span className="absolute -top-2 -right-2 bg-[#D9072B] text-white text-xs px-2 py-0.5 rounded-full">
                {pricingData.discount}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {pricingData.tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative border-2 ${
                index === 1
                  ? 'border-[#D9072B] shadow-xl scale-105'
                  : 'border-gray-200 hover:border-[#D9072B]'
              } transition-all duration-300`}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#D9072B] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {pricingData.popular}
                  </span>
                </div>
              )}
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tier.name}</h3>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-[#D9072B]">
                      {calculatePrice(basePrices[index])}$
                    </span>
                    <span className="text-gray-600">{pricingData.perFirefighter}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {(calculatePrice(basePrices[index]) * counts[index]).toFixed(0)}$/{billingCycle === 'monthly' ? (language === 'fr' ? 'mois' : 'month') : pricingData.billedAnnually} ({counts[index]} {language === 'fr' ? 'pompiers' : 'firefighters'})
                  </p>
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-green-600 mt-1 font-medium">
                      {pricingData.annualSavings}
                    </p>
                  )}
                </div>
                <Button
                  onClick={scrollToContact}
                  className={`w-full ${
                    index === 1
                      ? 'bg-[#D9072B] hover:bg-[#B00623] text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {pricingData.startNow}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Included Features */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {pricingData.includedTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {pricingData.includedItems.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#D9072B] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Optional Module */}
            <div className="mt-6 pt-6 border-t border-gray-300">
              <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                {pricingData.optionalTitle}
              </h4>
              <div className="flex items-center justify-center gap-3 bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
                <span className="text-gray-700 font-medium">{pricingData.optionalModule}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Special Offer */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-[#D9072B]">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {pricingData.offerTitle}
              </h3>
              <div className="space-y-3 mb-6">
                {pricingData.offerItems.map((item, index) => (
                  <p key={index} className="text-xl text-gray-700">
                    <strong>{item}</strong>
                  </p>
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-6">
                {pricingData.offerValidity}
              </p>
              <Button
                onClick={scrollToContact}
                className="bg-[#D9072B] hover:bg-[#B00623] text-white px-8 py-6 text-lg font-semibold"
              >
                {pricingData.offerBtn}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
