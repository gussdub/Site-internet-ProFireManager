import React from 'react';
import { CheckCircle, Building, Zap, Shield, Smartphone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n/translations';

const Strengths = () => {
  const { language } = useLanguage();
  const strengthsData = t(language, 'strengths');
  
  const iconMap = {
    CheckCircle,
    Building,
    Zap,
    Shield,
    Smartphone,
    MapPin
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {strengthsData.title}
          </h2>
          <p className="text-lg text-gray-300">
            {strengthsData.subtitle}
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {strengthsData.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#D9072B]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#D9072B] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
