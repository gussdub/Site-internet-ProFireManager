import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://customer-assets.emergentagent.com/job_profiremanager-web/artifacts/snf5lra9_image%20sans%20fond%2011.png"
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
                <a href="mailto:[email protected]" className="hover:text-white transition-colors">
                  [email protected]
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
                <span>Québec, Canada</span>
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
                <span className="text-gray-400">Documentation</span>
              </li>
              <li>
                <span className="text-gray-400">FAQ</span>
              </li>
              <li>
                <span className="text-gray-400">Tutoriels</span>
              </li>
              <li>
                <span className="text-gray-400">Support Technique</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} ProFireManager. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                Politique de confidentialité
              </span>
              <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                Conditions d'utilisation
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;