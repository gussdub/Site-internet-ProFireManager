import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #D9072B 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-[#D9072B] rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-[#D9072B]">
              Solution québécoise pour services d'incendie
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Optimisez la gestion de votre{' '}
            <span className="text-[#D9072B] relative">
              service d'incendie
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 5 100 2 150 2C200 2 250 5 298 10"
                  stroke="#D9072B"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.3"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            ProFireManager automatise la planification des gardes, la gestion du personnel et des équipements pour votre caserne.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              'Attribution automatique des gardes',
              'Gestion complète des EPI',
              'Suivi des formations',
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200"
              >
                <CheckCircle2 className="text-[#D9072B] w-5 h-5" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#D9072B] hover:bg-[#B00623] text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              size="lg"
            >
              Demander une démo gratuite
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection('features')}
              variant="outline"
              className="border-2 border-gray-300 hover:border-[#D9072B] text-gray-700 hover:text-[#D9072B] px-8 py-6 text-lg font-semibold rounded-lg transition-all"
              size="lg"
            >
              Découvrir les fonctionnalités
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="mt-16 flex flex-col items-center">
            <p className="text-sm text-gray-500 mb-4">Développé spécifiquement pour les casernes québécoises</p>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D9072B]">14 jours</div>
                <div className="text-sm text-gray-600">Essai gratuit</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D9072B]">100%</div>
                <div className="text-sm text-gray-600">Cloud</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D9072B]">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;