import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, AlertCircle, Scale, Ban, RefreshCw, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';

const TermsPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const content = language === 'fr' ? {
    title: 'Conditions d\'Utilisation',
    lastUpdate: 'Dernière mise à jour : Janvier 2025',
    backHome: 'Retour à l\'accueil'
  } : {
    title: 'Terms of Service',
    lastUpdate: 'Last updated: January 2025',
    backHome: 'Back to Home'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="h-20"></div>
      
      <div className="container mx-auto px-6 py-6">
        <Button onClick={() => navigate('/')} variant="outline" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          {content.backHome}
        </Button>
      </div>

      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border-2 border-gray-200">
          <div className="bg-gradient-to-r from-[#D9072B] to-[#B00623] text-white p-8">
            <h1 className="text-4xl font-bold mb-2">{content.title}</h1>
            <p className="text-white/80">{content.lastUpdate}</p>
          </div>
          <div className="p-8">
            <p className="text-gray-700">Contenu des conditions d'utilisation...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;