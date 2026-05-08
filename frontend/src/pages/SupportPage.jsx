import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, Clock, MessageCircle, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';

const SupportPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const content = language === 'fr' ? {
    title: 'Support Technique',
    backHome: 'Retour à l\'accueil',
    intro: 'Notre équipe de support technique est disponible pour répondre à toutes vos questions et résoudre vos problèmes rapidement.'
  } : {
    title: 'Technical Support',
    backHome: 'Back to Home',
    intro: 'Our technical support team is available to answer all your questions and resolve your issues quickly.'
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
            <h1 className="text-4xl font-bold">{content.title}</h1>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-700 mb-8">{content.intro}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-red-50 rounded-xl p-6 border-2 border-gray-200">
                <div className="w-12 h-12 bg-[#D9072B] rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Support par Email</h3>
                <p className="text-gray-700 mb-4">Réponse sous 24h</p>
                <a href="mailto:info@profiremanager.ca" className="text-[#D9072B] font-semibold hover:underline">
                  info@profiremanager.ca
                </a>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-red-50 rounded-xl p-6 border-2 border-gray-200">
                <div className="w-12 h-12 bg-[#D9072B] rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Support Téléphonique</h3>
                <p className="text-gray-700 mb-4">Lun-Ven : 8h-18h EST</p>
                <a href="tel:+14503303648" className="text-[#D9072B] font-semibold hover:underline">
                  +1 450 330 3648
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;