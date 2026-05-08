import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Clock, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';

const TutorialsPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const content = language === 'fr' ? {
    title: 'Tutoriels Vidéo',
    backHome: 'Retour à l\'accueil',
    intro: 'Apprenez à utiliser ProFireManager grâce à nos tutoriels vidéo détaillés.',
    categories: [
      {
        category: 'Premiers pas',
        videos: [
          { title: 'Introduction à ProFireManager', duration: '5:30', desc: 'Découvrez l\'interface et les fonctionnalités principales' },
          { title: 'Configuration initiale', duration: '8:45', desc: 'Paramétrez votre organisation' }
        ]
      },
      {
        category: 'Gestion des horaires',
        videos: [
          { title: 'Attribution automatique des gardes', duration: '10:15', desc: 'Utilisez l\'algorithme intelligent' },
          { title: 'Remplacements en un clic', duration: '7:45', desc: 'Trouvez et assignez des remplaçants' }
        ]
      }
    ],
    customTitle: 'Besoin d\'une formation personnalisée ?',
    customDesc: 'Notre équipe peut organiser des sessions sur mesure pour votre organisation.',
    customBtn: 'Demander une formation'
  } : {
    title: 'Video Tutorials',
    backHome: 'Back to Home',
    intro: 'Learn how to use ProFireManager through our detailed video tutorials.',
    categories: [
      {
        category: 'Getting Started',
        videos: [
          { title: 'Introduction to ProFireManager', duration: '5:30', desc: 'Discover the interface and main features' },
          { title: 'Initial Setup', duration: '8:45', desc: 'Configure your organization' }
        ]
      },
      {
        category: 'Schedule Management',
        videos: [
          { title: 'Automatic Shift Assignment', duration: '10:15', desc: 'Use the intelligent algorithm' },
          { title: 'One-Click Replacements', duration: '7:45', desc: 'Find and assign replacements' }
        ]
      }
    ],
    customTitle: 'Need Custom Training?',
    customDesc: 'Our team can organize tailored sessions for your organization.',
    customBtn: 'Request Training'
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
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border-2 border-gray-200">
          <div className="bg-gradient-to-r from-[#D9072B] to-[#B00623] text-white p-8">
            <h1 className="text-4xl font-bold">{content.title}</h1>
          </div>
          
          <div className="p-8">
            <p className="text-lg text-gray-700 mb-8">{content.intro}</p>
            
            {content.categories.map((category, idx) => (
              <div key={idx} className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.videos.map((video, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-[#D9072B] transition-all cursor-pointer group">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-[#D9072B] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#D9072B] transition-colors">
                            {video.title}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                            <Clock className="w-4 h-4" />
                            <span>{video.duration}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{video.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-2 border-[#D9072B]">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{content.customTitle}</h3>
              <p className="text-gray-700 mb-4">{content.customDesc}</p>
              <Button className="bg-[#D9072B] hover:bg-[#B00623] text-white">
                {content.customBtn}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;