import React from 'react';
import { Clock, TrendingUp, Scale, DollarSign, Smartphone, FileCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n/translations';

const Benefits = () => {
  const { language } = useLanguage();
  const benefitsData = t(language, 'benefits');
  
  const icons = [Clock, TrendingUp, Scale, DollarSign, Smartphone, FileCheck];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {benefitsData.title}
          </h2>
          <p className="text-xl text-gray-600">
            {benefitsData.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefitsData.items.map((benefit, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#D9072B] transition-all duration-300 hover:shadow-lg group"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-[#D9072B] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#D9072B] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                  {benefit.desc}
                </p>

                {/* Stat */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-3xl font-bold text-[#D9072B] mb-1">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-gray-600">
                    {benefit.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ROI Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#D9072B] to-[#B00623] rounded-2xl p-10 text-white shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">{benefitsData.roiTitle}</h3>
              <p className="text-lg text-white/90">
                {benefitsData.roiSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              {benefitsData.roiStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
