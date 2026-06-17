import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n/translations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguage();

  const scrollToSection = (id) => {
    const onHome = location.pathname === '/fr' || location.pathname === '/en';
    if (onHome) {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Depuis une sous-page : revenir à l'accueil puis défiler vers la section.
      navigate(language === 'fr' ? '/fr' : '/en');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };

  const pageMap = {
    fr: {
      documentation: 'documentation',
      faq: 'faq',
      tutorials: 'tutoriels',
      support: 'support-technique',
      privacy: 'politique-de-confidentialite',
      terms: 'conditions-utilisation',
      migration: 'migration-premiere-ligne'
    },
    en: {
      documentation: 'documentation',
      faq: 'faq',
      tutorials: 'tutorials',
      support: 'technical-support',
      privacy: 'privacy-policy',
      terms: 'terms-of-service',
      migration: 'migration-from-premiere-ligne'
    }
  };

  const goToPage = (page) => {
    navigate(`/${language}/${pageMap[language][page]}`);
    window.scrollTo(0, 0);
  };

  const goToPath = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Liens internes vers les pages de catégorie (SEO).
  const categoryLinks = language === 'fr'
    ? [
        { label: 'Gestion de caserne', path: '/fr/logiciel-gestion-caserne' },
        { label: 'Horaire de garde', path: '/fr/logiciel-horaire-garde-pompiers' },
        { label: 'Paie des pompiers', path: '/fr/logiciel-paie-pompiers' },
        { label: 'Inspection des EPI (NFPA)', path: '/fr/logiciel-inspection-epi-nfpa' },
        { label: 'Gestion des interventions', path: '/fr/logiciel-gestion-interventions-dsi' },
        { label: 'Remplacement de gardes', path: '/fr/logiciel-remplacement-garde-pompiers' },
      ]
    : [
        { label: 'Fire station management', path: '/en/fire-station-management-software' },
        { label: 'Firefighter scheduling', path: '/en/firefighter-scheduling-software' },
        { label: 'Firefighter payroll', path: '/en/firefighter-payroll-software' },
        { label: 'PPE inspection (NFPA)', path: '/en/ppe-inspection-software-nfpa' },
        { label: 'Incident management', path: '/en/fire-incident-management-software' },
        { label: 'Shift replacement', path: '/en/firefighter-shift-replacement-software' },
      ];

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand Section */}
          <div className="flex-1 max-w-md">
            <img
              src="/assets/logos/logo-footer-new.png"
              alt="ProFireManager - Solution de gestion pour casernes de pompiers"
              className="h-24 w-auto mb-3"
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
          <div className="flex flex-wrap gap-x-16 gap-y-8">
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
                  <button onClick={() => goToPage('migration')} className="text-gray-400 text-sm hover:text-white transition-colors" data-testid="footer-migration-link">
                    {t(language, 'footer.migration')}
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

            {/* Solutions (pages de catégorie) */}
            <div>
              <h3 className="text-sm font-bold mb-3 text-white">Solutions</h3>
              <ul className="space-y-2">
                {categoryLinks.map((link) => (
                  <li key={link.path}>
                    <button
                      onClick={() => goToPath(link.path)}
                      className="text-gray-400 text-sm hover:text-white transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
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
