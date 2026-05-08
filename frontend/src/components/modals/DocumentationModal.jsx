import React from 'react';
import { X, Book, FileText, Video, Download } from 'lucide-react';
import { Button } from '../ui/button';

const DocumentationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sections = [
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
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-r from-[#D9072B] to-[#B00623] text-white p-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Documentation</h2>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
          <p className="text-lg text-gray-700 mb-8">
            Bienvenue dans la documentation complète de ProFireManager. Trouvez toutes les informations nécessaires pour utiliser efficacement notre plateforme.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {sections.map((section, idx) => {
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Guide PDF complet</h3>
                <p className="text-gray-700 mb-4">
                  Téléchargez notre guide complet au format PDF pour une consultation hors ligne.
                </p>
                <Button className="bg-[#D9072B] hover:bg-[#B00623] text-white">
                  Télécharger le guide (PDF)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationModal;