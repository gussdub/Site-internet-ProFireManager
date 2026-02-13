import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, Truck, Bell, DollarSign, Calendar, 
  RefreshCw, GraduationCap, Flame, ClipboardList, Shield, 
  User, BarChart3, Settings, ChevronDown, ChevronUp
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n/translations';

const Modules = () => {
  const { language } = useLanguage();
  const modulesData = t(language, 'modules');
  const [expandedModule, setExpandedModule] = useState(null);
  
  const icons = [
    LayoutDashboard, Users, Truck, Bell, DollarSign, Calendar,
    RefreshCw, GraduationCap, Flame, ClipboardList, Shield,
    User, BarChart3, Settings
  ];

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <section id="modules" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-red-50 text-[#D9072B] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {modulesData.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {modulesData.title}
          </h2>
          <p className="text-xl text-gray-600">
            {modulesData.subtitle}
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {modulesData.items.map((module, index) => {
            const Icon = icons[index];
            const isExpanded = expandedModule === index;
            
            return (
              <Card
                key={index}
                className={`border-2 transition-all duration-300 cursor-pointer ${
                  isExpanded 
                    ? 'border-[#D9072B] shadow-xl bg-red-50/30' 
                    : 'border-gray-200 hover:border-[#D9072B] hover:shadow-lg'
                }`}
                onClick={() => toggleModule(index)}
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isExpanded ? 'bg-[#D9072B]' : 'bg-red-50'
                      }`}>
                        <Icon className={`w-6 h-6 transition-colors ${
                          isExpanded ? 'text-white' : 'text-[#D9072B]'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {module.title}
                        </h3>
                        <span className="text-xs text-gray-500">{module.access}</span>
                      </div>
                    </div>
                    <div className="text-gray-400">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-gray-600 text-sm mb-3">
                    {module.shortDesc}
                  </p>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-200 animate-in fade-in duration-200">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        {language === 'fr' ? 'Fonctionnalités:' : 'Features:'}
                      </h4>
                      <ul className="space-y-1">
                        {module.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-[#D9072B] rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Modules;
