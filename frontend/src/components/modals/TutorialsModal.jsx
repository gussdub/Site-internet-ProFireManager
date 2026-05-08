import React from 'react';
import { X, Play, Clock } from 'lucide-react';
import { Button } from '../ui/button';

const TutorialsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const tutorials = [
    {
      category: 'Premiers pas',
      videos: [
        {
          title: 'Introduction à ProFireManager',
          duration: '5:30',
          description: 'Découvrez l\'interface et les fonctionnalités principales'
        },
        {
          title: 'Configuration initiale',
          duration: '8:45',
          description: 'Paramétrez votre organisation et ajoutez vos premiers employés'
        },
        {
          title: 'Création de votre premier planning',
          duration: '12:20',
          description: 'Guide complet pour créer et publier votre premier planning mensuel'
        }
      ]
    },
    {
      category: 'Gestion des horaires',
      videos: [
        {
          title: 'Attribution automatique des gardes',
          duration: '10:15',
          description: 'Utilisez l\'algorithme intelligent pour optimiser vos plannings'
        },
        {
          title: 'Gestion des disponibilités',
          duration: '6:30',
          description: 'Comment gérer les congés et indisponibilités'
        },
        {
          title: 'Remplacements en un clic',
          duration: '7:45',
          description: 'Trouvez et assignez rapidement des remplaçants'
        }
      ]
    },
    {
      category: 'Module EPI',
      videos: [
        {
          title: 'Configuration du module EPI',
          duration: '9:00',
          description: 'Paramétrage initial et ajout de votre inventaire'
        },
        {
          title: 'Inspections de routine',
          duration: '5:20',
          description: 'Comment effectuer les inspections NFPA 1851'
        },
        {
          title: 'Gestion des demandes de remplacement',
          duration: '6:10',
          description: 'Traiter et suivre les demandes d\'EPI'
        }
      ]
    },
    {
      category: 'Formations',
      videos: [
        {
          title: 'Créer et gérer des formations',
          duration: '8:30',
          description: 'Configuration des formations conformes NFPA 1500'
        },
        {
          title: 'Inscriptions et suivi',
          duration: '6:45',
          description: 'Gérer les inscriptions et suivre les certifications'
        }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-r from-[#D9072B] to-[#B00623] text-white p-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Tutoriels Vidéo</h2>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
          <p className="text-lg text-gray-700 mb-8">
            Apprenez à utiliser ProFireManager grâce à nos tutoriels vidéo détaillés.
          </p>

          {tutorials.map((category, idx) => (
            <div key={idx} className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {category.videos.map((video, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-[#D9072B] transition-all cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-[#D9072B] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#D9072B] transition-colors">
                          {video.title}
                        </h4>
                        <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                          <Clock className="w-4 h-4" />
                          <span>{video.duration}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{video.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-2 border-[#D9072B] mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Besoin d'une formation personnalisée ?
            </h3>
            <p className="text-gray-700 mb-4">
              Notre équipe peut organiser des sessions de formation sur mesure pour votre organisation (sur site ou à distance).
            </p>
            <Button className="bg-[#D9072B] hover:bg-[#B00623] text-white">
              Demander une formation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialsModal;