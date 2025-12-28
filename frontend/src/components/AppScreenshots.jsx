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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshotsData.items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshotsData.items.length) % screenshotsData.items.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {screenshotsData.title}
          </h2>
          <p className="text-xl text-gray-600">
            {screenshotsData.subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200">
            {/* Main Screenshot */}
            <div className="relative aspect-video bg-gray-100">
              <img
                src={images[currentSlide]}
                alt={screenshotsData.items[currentSlide]?.title}
                className="w-full h-full object-contain"
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
                  alt={screenshot.title}
                  className="w-full h-full object-cover"
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
