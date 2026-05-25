import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Database } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n/translations';

const Migration = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const data = t(language, 'migration');

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToMigrationPage = () => {
    const path = language === 'fr' ? '/fr/migration-premiere-ligne' : '/en/migration-from-premiere-ligne';
    navigate(path);
    window.scrollTo({ top: 0 });
  };

  return (
    <section id="migration" className="py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-[#3a0a14]" aria-labelledby="migration-title">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <h2 id="migration-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                {data.title}
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {data.subtitle}
              </p>

              <p className="text-base text-white font-semibold mb-3">
                {data.intro}
              </p>
              <ul className="space-y-2.5 mb-8" data-testid="migration-items-list">
                {data.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-200">
                    <CheckCircle2 className="text-[#FF6B7E] w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-2 mb-8">
                <p className="text-gray-100 font-medium">{data.promise1}</p>
                <p className="text-gray-100 font-medium">{data.promise2}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={scrollToContact}
                  data-testid="migration-cta-demo"
                  className="bg-[#D9072B] hover:bg-[#B00623] text-white px-6 py-6 text-base font-semibold shadow-lg"
                >
                  {data.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  onClick={goToMigrationPage}
                  data-testid="migration-learn-more"
                  variant="outline"
                  className="border-2 border-white/30 hover:border-white text-white hover:text-white hover:bg-white/10 px-6 py-6 text-base font-semibold bg-transparent"
                >
                  {data.learnMore}
                </Button>
              </div>

              <p className="text-xs text-gray-500 mt-6 italic" data-testid="migration-disclaimer">
                {data.disclaimer}
              </p>
            </div>

            {/* Right side - Visual */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
                {/* Flow visual */}
                <div className="flex items-center justify-between mb-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Database className="w-10 h-10 text-gray-300" />
                    </div>
                    <p className="text-gray-300 font-semibold text-sm">Première Ligne</p>
                  </div>

                  <div className="flex-1 px-4">
                    <div className="relative">
                      <div className="h-0.5 bg-gradient-to-r from-gray-500 via-[#D9072B] to-[#D9072B] w-full"></div>
                      <ArrowRight className="absolute -top-3 right-0 text-[#D9072B] w-7 h-7" />
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[#D9072B]/30 p-3 border-2 border-[#D9072B]">
                      <img src="/assets/logos/logo-header.png" alt="ProFireManager" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-white font-semibold text-sm">ProFireManager</p>
                  </div>
                </div>

                {/* Fee card */}
                <div className="bg-gradient-to-br from-[#D9072B] to-[#B00623] rounded-xl p-6 text-white shadow-xl" data-testid="migration-fee-card">
                  <p className="text-sm uppercase tracking-wider opacity-90 mb-1">{data.feeLabel}</p>
                  <p className="text-4xl font-bold mb-2">{data.feeValue}</p>
                  <p className="text-sm opacity-90">{data.feeDetail}</p>
                </div>

                {/* Badge */}
                <div className="mt-6 inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-green-300 text-sm font-semibold">{data.badge100}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Migration;
