import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();
  const navigate = useNavigate();

  const switchLanguage = () => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    changeLanguage(newLang);
    
    // Update URL to match new language
    const currentPath = window.location.pathname;
    if (currentPath.startsWith('/fr/')) {
      navigate(currentPath.replace('/fr/', '/en/'));
    } else if (currentPath.startsWith('/en/')) {
      navigate(currentPath.replace('/en/', '/fr/'));
    }
  };

  return (
    <Button
      onClick={switchLanguage}
      variant="outline"
      className="flex items-center gap-2 border-2 border-gray-300 hover:border-[#D9072B]"
    >
      <Globe className="w-4 h-4" />
      <span className="font-semibold">{language === 'fr' ? 'EN' : 'FR'}</span>
    </Button>
  );
};

export default LanguageSwitcher;