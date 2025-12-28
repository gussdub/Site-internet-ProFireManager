import React from 'react';
import { Calendar, Users, Shield, GraduationCap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n/translations';

const Features = () => {
  const { language } = useLanguage();
  const featuresData = t(language, 'features');
  
  const icons = [Calendar, Users, Shield, GraduationCap];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {featuresData.title}
          </h2>
          <p className="text-xl text-gray-600">
            {featuresData.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuresData.items.map((feature, index) => {
            const Icon = icons[index];
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
              {featuresData.additionalTitle}
            </h3>
            <p className="text-gray-700 mb-6">
              {featuresData.additionalDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {featuresData.additionalTags.map((tag, idx) => (
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
