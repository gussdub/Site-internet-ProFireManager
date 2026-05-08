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
    let newPath;
    
    if (currentPath.startsWith('/fr/')) {
      newPath = currentPath.replace('/fr/', `/${newLang}/`);
    } else if (currentPath.startsWith('/en/')) {
      newPath = currentPath.replace('/en/', `/${newLang}/`);
    } else if (currentPath === '/fr' || currentPath === '/en') {
      newPath = `/${newLang}`;
    } else {
      newPath = `/${newLang}`;
    }
    
    navigate(newPath);
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