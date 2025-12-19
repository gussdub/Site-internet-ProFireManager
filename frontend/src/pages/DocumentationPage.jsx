import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, FileText, Video, Download, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';

const DocumentationPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const content = language === 'fr' ? {
    title: 'Documentation',
    backHome: 'Retour à l\'accueil',
    intro: 'Bienvenue dans la documentation complète de ProFireManager. Trouvez toutes les informations nécessaires pour utiliser efficacement notre plateforme.',
    sections: [
      {
        icon: Book,
        title: 'Guide de démarrage',
        items: [
          'Installation et configuration initiale',
          'Configuration de votre organisation',
          'Ajout des premiers employés',
          'Paramétrage des types de gardes'
        ]
      },
      {
        icon: FileText,
        title: 'Modules principaux',
        items: [
          'Gestion des horaires et planification',
          'Remplacements automatisés',
          'Module EPI - NFPA 1851',
          'Module Formations - NFPA 1500',
          'Module Prévention (optionnel)'
        ]
      },
      {
        icon: Video,
        title: 'Tutoriels vidéo',
        items: [
          'Création d\'un planning mensuel',
          'Attribution automatique des gardes',
          'Gestion des EPI',
          'Inscription aux formations'
        ]
      }
    ],
    downloadTitle: 'Guide PDF complet',
    downloadDesc: 'Téléchargez notre guide complet au format PDF pour une consultation hors ligne.',
    downloadBtn: 'Télécharger le guide (PDF)'
  } : {
    title: 'Documentation',
    backHome: 'Back to Home',
    intro: 'Welcome to the complete ProFireManager documentation. Find all the information you need to effectively use our platform.',
    sections: [
      {
        icon: Book,
        title: 'Getting Started',
        items: [
          'Installation and initial setup',
          'Configure your organization',
          'Add first employees',
          'Set up shift types'
        ]
      },
      {
        icon: FileText,
        title: 'Main Modules',
        items: [
          'Schedule and planning management',
          'Automated replacements',
          'PPE Module - NFPA 1851',
          'Training Module - NFPA 1500',
          'Prevention Module (optional)'
        ]
      },
      {
        icon: Video,
        title: 'Video Tutorials',
        items: [
          'Creating a monthly schedule',
          'Automatic shift assignment',
          'PPE management',
          'Training enrollment'
        ]
      }
    ],
    downloadTitle: 'Complete PDF Guide',
    downloadDesc: 'Download our complete guide in PDF format for offline consultation.',
    downloadBtn: 'Download Guide (PDF)'
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
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {content.sections.map((section, idx) => {
                const Icon = section.icon;
                return (
                  <div key={idx} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-[#D9072B] transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#D9072B]" />
                      </div>
                      <h3 className="font-bold text-lg">{section.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-[#D9072B] mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-2 border-[#D9072B]">
              <div className="flex items-start gap-4">
                <Download className="w-8 h-8 text-[#D9072B] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{content.downloadTitle}</h3>
                  <p className="text-gray-700 mb-4">{content.downloadDesc}</p>
                  <Button className="bg-[#D9072B] hover:bg-[#B00623] text-white">
                    {content.downloadBtn}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;