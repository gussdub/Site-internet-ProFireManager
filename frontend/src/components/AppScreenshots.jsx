import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n/translations';

const AppScreenshots = () => {
  const { language } = useLanguage();
  const screenshotsData = t(language, 'screenshots');
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    '/assets/screenshots/formations.png',
    '/assets/screenshots/epi.png',
    '/assets/screenshots/planning.png',
    '/assets/screenshots/disponibilites.png'
  ];

  // SEO-optimized alt texts
  const altTexts = language === 'fr' ? [
    'Interface de gestion des formations pompiers dans ProFireManager - Suivi des certifications NFPA 1500',
    'Module de suivi des EPI conforme NFPA 1851 - Inventaire équipements de protection',
    'Planning automatisé des gardes de pompiers - Attribution intelligente des quarts',
    'Calendrier de disponibilités des pompiers temps partiel - Gestion des horaires'
  ] : [
    'Firefighter training management interface in ProFireManager - NFPA 1500 certification tracking',
    'PPE tracking module NFPA 1851 compliant - Personal protective equipment inventory',
    'Automated firefighter shift planning - Intelligent shift assignment',
    'Part-time firefighter availability calendar - Schedule management'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshotsData.items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshotsData.items.length) % screenshotsData.items.length);
  };

  return (
    <section id="screenshots" className="py-24 bg-gradient-to-b from-white to-gray-50" aria-labelledby="screenshots-title">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 id="screenshots-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {screenshotsData.title}
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            {screenshotsData.subtitle}
          </p>

          {/* App Store Badges */}
          <div className="flex flex-col items-center gap-3 mb-4" data-testid="app-badges-section">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              {t(language, 'appBadges.title')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}); }}
                aria-label={t(language, 'appBadges.appStoreAlt')}
                data-testid="app-store-badge"
                className="inline-flex items-center gap-3 bg-black hover:bg-gray-800 text-white rounded-xl px-5 py-2.5 transition-all hover:scale-105 shadow-md"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] opacity-90">{language === 'fr' ? 'Télécharger sur' : 'Download on the'}</div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}); }}
                aria-label={t(language, 'appBadges.googlePlayAlt')}
                data-testid="google-play-badge"
                className="inline-flex items-center gap-3 bg-black hover:bg-gray-800 text-white rounded-xl px-5 py-2.5 transition-all hover:scale-105 shadow-md"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#34A853" d="M3.609 1.814 13.792 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92z"/>
                  <path fill="#FBBC04" d="m13.792 12 3.05-3.05 4.7 2.65a1 1 0 0 1 0 1.74l-4.7 2.65L13.792 12z"/>
                  <path fill="#EA4335" d="M16.842 8.95 13.792 12 3.61 1.814A1 1 0 0 1 4.61 1.62l12.232 7.33z"/>
                  <path fill="#4285F4" d="M3.609 22.186 13.792 12l3.05 3.05L4.61 22.38a1 1 0 0 1-1-.194z"/>
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] opacity-90">{language === 'fr' ? 'Disponible sur' : 'Get it on'}</div>
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </a>
            </div>
            <p className="text-xs text-gray-500 italic max-w-md">
              {t(language, 'appBadges.subtitle')}
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200">
            {/* Main Screenshot */}
            <div className="relative aspect-video bg-gray-100">
              <img
                src={images[currentSlide]}
                alt={altTexts[currentSlide]}
                className="w-full h-full object-contain"
                loading="lazy"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label={language === 'fr' ? 'Précédent' : 'Previous'}
              >
                <ChevronLeft className="w-6 h-6 text-gray-900" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label={language === 'fr' ? 'Suivant' : 'Next'}
              >
                <ChevronRight className="w-6 h-6 text-gray-900" />
              </button>
            </div>

            {/* Description */}
            <div className="p-8 bg-gradient-to-r from-gray-50 to-red-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {screenshotsData.items[currentSlide]?.title}
              </h3>
              <p className="text-gray-700 text-lg">
                {screenshotsData.items[currentSlide]?.desc}
              </p>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 pb-6">
              {screenshotsData.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-[#D9072B] w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={language === 'fr' ? `Aller à la capture ${index + 1}` : `Go to screenshot ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            {screenshotsData.items.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentSlide
                    ? 'border-[#D9072B] scale-105 shadow-lg'
                    : 'border-gray-300 hover:border-[#D9072B] opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={images[index]}
                  alt={altTexts[index]}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;
