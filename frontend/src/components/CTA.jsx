import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #D9072B 25%, transparent 25%, transparent 75%, #D9072B 75%, #D9072B),
                           linear-gradient(45deg, #D9072B 25%, transparent 25%, transparent 75%, #D9072B 75%, #D9072B)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Prêt à Transformer Votre Gestion ?
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Rejoignez les services d'incendie québécois qui ont déjà optimisé leur gestion avec ProFireManager.
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">30 min</div>
              <div className="text-gray-300">Démonstration gratuite</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">1-2 sem</div>
              <div className="text-gray-300">Configuration rapide</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">60 jours</div>
              <div className="text-gray-300">Garantie satisfait ou remboursé</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              className="bg-[#D9072B] hover:bg-[#B00623] text-white px-10 py-7 text-xl font-bold rounded-lg shadow-2xl hover:shadow-[#D9072B]/50 transition-all hover:scale-105"
              size="lg"
            >
              Démarrer votre essai gratuit
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 flex flex-col items-center">
            <p className="text-sm text-gray-400 mb-4">
              Configuration en 1-2 semaines • Support dédié • Solution québécoise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;