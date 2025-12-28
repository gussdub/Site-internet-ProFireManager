import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n/translations';

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

  const pageMap = {
    fr: {
      documentation: 'documentation',
      faq: 'faq',
      tutorials: 'tutoriels',
      support: 'support-technique',
      privacy: 'politique-de-confidentialite',
      terms: 'conditions-utilisation'
    },
    en: {
      documentation: 'documentation',
      faq: 'faq',
      tutorials: 'tutorials',
      support: 'technical-support',
      privacy: 'privacy-policy',
      terms: 'terms-of-service'
    }
  };

  const goToPage = (page) => {
    navigate(`/${language}/${pageMap[language][page]}`);
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
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t(language, 'footer.description')}
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
            <h3 className="text-lg font-bold mb-4">{t(language, 'footer.navigation')}</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t(language, 'nav.features')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('benefits')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t(language, 'nav.benefits')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t(language, 'nav.pricing')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t(language, 'nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t(language, 'footer.support')}</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => goToPage('documentation')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t(language, 'footer.documentation')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => goToPage('faq')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t(language, 'footer.faq')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => goToPage('tutorials')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t(language, 'footer.tutorials')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => goToPage('support')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t(language, 'footer.technicalSupport')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} ProFireManager Inc. {t(language, 'footer.rights')}
            </p>
            <div className="flex gap-6 text-sm">
              <button
                onClick={() => goToPage('privacy')}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                {t(language, 'footer.privacy')}
              </button>
              <button
                onClick={() => goToPage('terms')}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                {t(language, 'footer.terms')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;