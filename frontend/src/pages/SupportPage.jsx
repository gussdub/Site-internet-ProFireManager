import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, Clock, MessageCircle, ArrowLeft, Headphones, FileQuestion, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';

const SupportPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const content = language === 'fr' ? {
    title: 'Support Technique',
    backHome: 'Retour à l\'accueil',
    intro: 'Notre équipe de support technique est disponible pour répondre à toutes vos questions et résoudre vos problèmes rapidement.',
    contactMethods: [
      {
        icon: Mail,
        title: 'Support par Email',
        description: 'Réponse garantie sous 24h',
        contact: 'info@profiremanager.ca',
        link: 'mailto:info@profiremanager.ca'
      },
      {
        icon: Phone,
        title: 'Support Téléphonique',
        description: 'Lun-Ven : 8h-18h EST',
        contact: '+1 450 330 3648',
        link: 'tel:+14503303648'
      }
    ],
    hoursTitle: 'Heures de Support',
    hours: [
      { day: 'Lundi - Vendredi', time: '8h00 - 18h00 (EST)' },
      { day: 'Samedi - Dimanche', time: 'Fermé (Email uniquement)' }
    ],
    emergencyTitle: 'Urgences',
    emergencyText: 'Pour les urgences critiques affectant votre opération, contactez-nous par téléphone pendant les heures ouvrables.',
    servicesTitle: 'Nos Services de Support',
    services: [
      {
        icon: Headphones,
        title: 'Assistance Technique',
        description: 'Aide pour tous les problèmes techniques, bugs et erreurs rencontrés dans l\'application.'
      },
      {
        icon: FileQuestion,
        title: 'Questions d\'Utilisation',
        description: 'Guides et explications sur l\'utilisation des différentes fonctionnalités de ProFireManager.'
      },
      {
        icon: Wrench,
        title: 'Configuration',
        description: 'Assistance pour la configuration initiale et les paramètres avancés de votre organisation.'
      },
      {
        icon: MessageCircle,
        title: 'Formation',
        description: 'Sessions de formation personnalisées pour votre équipe (sur demande).'
      }
    ],
    responseTitle: 'Temps de Réponse',
    responseItems: [
      { priority: 'Critique', time: '< 4 heures', desc: 'Service inutilisable' },
      { priority: 'Haute', time: '< 8 heures', desc: 'Fonctionnalité majeure affectée' },
      { priority: 'Normale', time: '< 24 heures', desc: 'Questions générales' },
      { priority: 'Basse', time: '< 48 heures', desc: 'Suggestions et améliorations' }
    ]
  } : {
    title: 'Technical Support',
    backHome: 'Back to Home',
    intro: 'Our technical support team is available to answer all your questions and resolve your issues quickly.',
    contactMethods: [
      {
        icon: Mail,
        title: 'Email Support',
        description: 'Guaranteed response within 24h',
        contact: 'info@profiremanager.ca',
        link: 'mailto:info@profiremanager.ca'
      },
      {
        icon: Phone,
        title: 'Phone Support',
        description: 'Mon-Fri: 8am-6pm EST',
        contact: '+1 450 330 3648',
        link: 'tel:+14503303648'
      }
    ],
    hoursTitle: 'Support Hours',
    hours: [
      { day: 'Monday - Friday', time: '8:00am - 6:00pm (EST)' },
      { day: 'Saturday - Sunday', time: 'Closed (Email only)' }
    ],
    emergencyTitle: 'Emergencies',
    emergencyText: 'For critical emergencies affecting your operation, contact us by phone during business hours.',
    servicesTitle: 'Our Support Services',
    services: [
      {
        icon: Headphones,
        title: 'Technical Assistance',
        description: 'Help with all technical issues, bugs and errors encountered in the application.'
      },
      {
        icon: FileQuestion,
        title: 'Usage Questions',
        description: 'Guides and explanations on using the different features of ProFireManager.'
      },
      {
        icon: Wrench,
        title: 'Configuration',
        description: 'Assistance with initial setup and advanced settings for your organization.'
      },
      {
        icon: MessageCircle,
        title: 'Training',
        description: 'Personalized training sessions for your team (upon request).'
      }
    ],
    responseTitle: 'Response Times',
    responseItems: [
      { priority: 'Critical', time: '< 4 hours', desc: 'Service unusable' },
      { priority: 'High', time: '< 8 hours', desc: 'Major feature affected' },
      { priority: 'Normal', time: '< 24 hours', desc: 'General questions' },
      { priority: 'Low', time: '< 48 hours', desc: 'Suggestions and improvements' }
    ]
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
        <div className="max-w-4xl mx-auto">
          {/* Header Card */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-[#D9072B] to-[#B00623] text-white p-8">
              <h1 className="text-4xl font-bold">{content.title}</h1>
            </div>
            <div className="p-8">
              <p className="text-lg text-gray-700 mb-8">{content.intro}</p>
              
              {/* Contact Methods */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {content.contactMethods.map((method, idx) => {
                  const Icon = method.icon;
                  return (
                    <div key={idx} className="bg-gradient-to-br from-gray-50 to-red-50 rounded-xl p-6 border-2 border-gray-200 hover:border-[#D9072B] transition-all">
                      <div className="w-12 h-12 bg-[#D9072B] rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                      <p className="text-gray-600 mb-3">{method.description}</p>
                      <a href={method.link} className="text-[#D9072B] font-semibold hover:underline text-lg">
                        {method.contact}
                      </a>
                    </div>
                  );
                })}
              </div>
              
              {/* Hours */}
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#D9072B]" />
                  <h3 className="text-xl font-bold text-gray-900">{content.hoursTitle}</h3>
                </div>
                <div className="space-y-2">
                  {content.hours.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{item.day}</span>
                      <span className="text-gray-600">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Emergency Notice */}
              <div className="bg-red-50 border-2 border-[#D9072B] rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#D9072B] mb-2">{content.emergencyTitle}</h3>
                <p className="text-gray-700">{content.emergencyText}</p>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{content.servicesTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {content.services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#D9072B]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Response Times */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{content.responseTitle}</h2>
            <div className="space-y-4">
              {content.responseItems.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      idx === 0 ? 'bg-red-100 text-red-700' :
                      idx === 1 ? 'bg-orange-100 text-orange-700' :
                      idx === 2 ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {item.priority}
                    </span>
                    <span className="text-gray-600">{item.desc}</span>
                  </div>
                  <span className="font-bold text-[#D9072B]">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
