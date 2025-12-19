import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToPage = (page) => {
    navigate(`/${language}/${page}`);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/logos/logo-footer.png"
                alt="ProFireManager"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Solution québécoise de gestion pour services d'incendie. Optimisez la planification, le personnel et les équipements de votre caserne.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#D9072B]" />
                <a href="mailto:info@profiremanager.ca" className="hover:text-white transition-colors">
                  info@profiremanager.ca
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#D9072B]" />
                <a href="tel:+14503303648" className="hover:text-white transition-colors">
                  +1 450 330 3648
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#D9072B]" />
                <span>Granby, QC J2H 0A3, Canada</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fonctionnalités
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('benefits')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Avantages
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tarification
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => goToPage('documentation')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Documentation
                </button>
              </li>
              <li>
                <button
                  onClick={() => goToPage('faq')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => goToPage('tutoriels')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tutoriels
                </button>
              </li>
              <li>
                <button
                  onClick={() => goToPage('support-technique')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Support Technique
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} ProFireManager Inc. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <button
                onClick={() => goToPage('politique-de-confidentialite')}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Politique de confidentialité
              </button>
              <button
                onClick={() => goToPage('conditions-utilisation')}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Conditions d'utilisation
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;