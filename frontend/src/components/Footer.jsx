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
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand Section */}
          <div className="flex-1 max-w-md">
            <img
              src="/assets/logos/logo-footer.png"
              alt="ProFireManager"
              className="h-16 w-auto mb-3"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t(language, 'footer.description')}
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:info@profiremanager.ca" className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#D9072B]" />
                info@profiremanager.ca
              </a>
              <a href="tel:+14503303648" className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#D9072B]" />
                +1 450 330 3648
              </a>
              <span className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#D9072B]" />
                Granby, QC J2H 0A3, Canada
              </span>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex gap-16">
            {/* Navigation */}
            <div>
              <h3 className="text-sm font-bold mb-3 text-white">{t(language, 'footer.navigation')}</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('features')} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {t(language, 'nav.features')}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('benefits')} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {t(language, 'nav.benefits')}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('pricing')} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {t(language, 'nav.pricing')}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {t(language, 'nav.contact')}
                  </button>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm font-bold mb-3 text-white">{t(language, 'footer.support')}</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => goToPage('documentation')} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {t(language, 'footer.documentation')}
                  </button>
                </li>
                <li>
                  <button onClick={() => goToPage('faq')} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {t(language, 'footer.faq')}
                  </button>
                </li>
                <li>
                  <button onClick={() => goToPage('tutorials')} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {t(language, 'footer.tutorials')}
                  </button>
                </li>
                <li>
                  <button onClick={() => goToPage('support')} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {t(language, 'footer.technicalSupport')}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} ProFireManager Inc. {t(language, 'footer.rights')}
          </p>
          <div className="flex gap-4 text-xs">
            <button onClick={() => goToPage('privacy')} className="text-gray-500 hover:text-white transition-colors">
              {t(language, 'footer.privacy')}
            </button>
            <button onClick={() => goToPage('terms')} className="text-gray-500 hover:text-white transition-colors">
              {t(language, 'footer.terms')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
