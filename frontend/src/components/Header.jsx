import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n/translations';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/logos/logo-header.png"
              alt="ProFireManager"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-[#D9072B] transition-colors font-medium"
            >
              {t(language, 'nav.features')}
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-gray-700 hover:text-[#D9072B] transition-colors font-medium"
            >
              {t(language, 'nav.benefits')}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-[#D9072B] transition-colors font-medium"
            >
              {t(language, 'nav.pricing')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#D9072B] transition-colors font-medium"
            >
              {t(language, 'nav.contact')}
            </button>
            <LanguageSwitcher />
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#D9072B] hover:bg-[#B00623] text-white px-6"
            >
              {t(language, 'nav.requestDemo')}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('features')}
              className="text-left text-gray-700 hover:text-[#D9072B] transition-colors font-medium"
            >
              {t(language, 'nav.features')}
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-left text-gray-700 hover:text-[#D9072B] transition-colors font-medium"
            >
              {t(language, 'nav.benefits')}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-left text-gray-700 hover:text-[#D9072B] transition-colors font-medium"
            >
              {t(language, 'nav.pricing')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-gray-700 hover:text-[#D9072B] transition-colors font-medium"
            >
              {t(language, 'nav.contact')}
            </button>
            <LanguageSwitcher />
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#D9072B] hover:bg-[#B00623] text-white w-full"
            >
              {t(language, 'nav.requestDemo')}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;