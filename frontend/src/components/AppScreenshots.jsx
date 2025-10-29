import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AppScreenshots = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    {
      title: 'Gestion des Formations',
      description: 'Inscription directe aux formations, suivi des certifications et planification en un clic.',
      image: 'https://customer-assets.emergentagent.com/job_profiremanager-web/artifacts/oqkloqcf_image-colle%CC%81e.png'
    },
    {
      title: 'Inventaire EPI - NFPA 1851',
      description: 'Suivi complet de tous les équipements avec inspection de routine et demandes de remplacement.',
      image: 'https://customer-assets.emergentagent.com/job_profiremanager-web/artifacts/h4q048iv_image-colle%CC%81e.png'
    },
    {
      title: 'Planning des Gardes',
      description: 'Attribution automatique intelligente et vue d\'ensemble claire de la planification.',
      image: 'https://customer-assets.emergentagent.com/job_profiremanager-web/artifacts/l6pyq81a_image-colle%CC%81e.png'
    },
    {
      title: 'Gestion des Disponibilités',
      description: 'Calendrier intuitif pour gérer les disponibilités et indisponibilités de chaque pompier.',
      image: 'https://customer-assets.emergentagent.com/job_profiremanager-web/artifacts/1yw4ydrf_image-colle%CC%81e.png'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Aperçu de l'Application
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez l'interface intuitive de ProFireManager à travers ces captures d'écran réelles.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200">
            {/* Main Screenshot */}
            <div className="relative aspect-video bg-gray-100">
              <img
                src={screenshots[currentSlide].image}
                alt={screenshots[currentSlide].title}
                className="w-full h-full object-contain"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Précédent"
              >
                <ChevronLeft className="w-6 h-6 text-gray-900" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Suivant"
              >
                <ChevronRight className="w-6 h-6 text-gray-900" />
              </button>
            </div>

            {/* Description */}
            <div className="p-8 bg-gradient-to-r from-gray-50 to-red-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {screenshots[currentSlide].title}
              </h3>
              <p className="text-gray-700 text-lg">
                {screenshots[currentSlide].description}
              </p>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 pb-6">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-[#D9072B] w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Aller à la capture ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-5 gap-4 mt-8">
            {screenshots.map((screenshot, index) => (
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
                  src={screenshot.image}
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
