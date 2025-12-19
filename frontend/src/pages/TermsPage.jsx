import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, AlertCircle, Scale, Ban, RefreshCw, ArrowLeft, Shield, CreditCard, Gavel } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';

const TermsPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const content = language === 'fr' ? {
    title: 'Conditions d\'Utilisation',
    lastUpdate: 'Dernière mise à jour : Janvier 2025',
    backHome: 'Retour à l\'accueil',
    sections: [
      {
        icon: FileText,
        title: '1. Acceptation des Conditions',
        content: 'En accédant et en utilisant la plateforme ProFireManager, vous acceptez d\'\u00eatre lié par les présentes conditions d\'utilisation. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser notre service.',
        items: [
          'Les présentes conditions constituent un accord juridiquement contraignant entre vous et ProFireManager Inc.',
          'Nous nous réservons le droit de modifier ces conditions à tout moment',
          'Il est de votre responsabilité de consulter régulièrement ces conditions'
        ]
      },
      {
        icon: Shield,
        title: '2. Description du Service',
        content: 'ProFireManager est une plateforme SaaS (Software as a Service) conçue pour la gestion des services d\'incendie au Québec.',
        items: [
          'Gestion des horaires et planification des gardes',
          'Gestion du personnel et des remplacements',
          'Suivi des équipements de protection individuelle (EPI)',
          'Gestion des formations et certifications',
          'Module de prévention (optionnel)'
        ]
      },
      {
        icon: Scale,
        title: '3. Obligations de l\'Utilisateur',
        content: 'En tant qu\'utilisateur de ProFireManager, vous vous engagez à :',
        items: [
          'Fournir des informations exactes et à jour lors de l\'inscription',
          'Maintenir la confidentialité de vos identifiants de connexion',
          'Ne pas partager votre compte avec des tiers non autorisés',
          'Utiliser le service conformément aux lois applicables',
          'Signaler immédiatement toute utilisation non autorisée de votre compte'
        ]
      },
      {
        icon: CreditCard,
        title: '4. Tarification et Paiement',
        content: 'Les conditions de paiement suivantes s\'appliquent :',
        items: [
          'La tarification est basée sur le nombre de pompiers actifs dans votre organisation',
          'Les factures sont émises mensuellement ou annuellement selon votre choix',
          'Le paiement est dû dans les 30 jours suivant la réception de la facture',
          'En cas de non-paiement, l\'accès au service peut \u00eatre suspendu',
          'Les tarifs peuvent \u00eatre modifiés avec un préavis de 60 jours'
        ]
      },
      {
        icon: AlertCircle,
        title: '5. Limitation de Responsabilité',
        content: 'ProFireManager Inc. ne peut \u00eatre tenue responsable :',
        items: [
          'Des interruptions temporaires du service pour maintenance',
          'Des pertes de données résultant de circonstances hors de notre contr\u00f4le',
          'Des décisions prises sur la base des informations fournies par le système',
          'Des dommages indirects ou consécutifs liés à l\'utilisation du service'
        ]
      },
      {
        icon: Ban,
        title: '6. Résiliation',
        content: 'Les conditions de résiliation du service sont les suivantes :',
        items: [
          'Vous pouvez résilier votre abonnement à tout moment avec un préavis de 30 jours',
          'ProFireManager peut résilier votre compte en cas de violation des présentes conditions',
          'Après résiliation, vos données seront conservées pendant 90 jours puis supprimées',
          'Vous pouvez demander une exportation de vos données avant la suppression'
        ]
      },
      {
        icon: RefreshCw,
        title: '7. Garantie Satisfait ou Remboursé',
        content: 'Nous offrons une garantie de satisfaction :',
        items: [
          'Période d\'essai gratuite de 30 jours',
          'Garantie satisfait ou remboursé de 60 jours après l\'activation',
          'Remboursement intégral si vous n\'\u00eates pas satisfait du service',
          'Aucune question posée lors de la demande de remboursement dans la période'
        ]
      },
      {
        icon: Gavel,
        title: '8. Droit Applicable',
        content: 'Les présentes conditions sont régies par les lois de la province de Québec, Canada. Tout litige sera soumis à la compétence exclusive des tribunaux du district judiciaire de Granby, Québec.',
        contactInfo: {
          title: 'Pour toute question concernant ces conditions :',
          company: 'ProFireManager Inc.',
          address: '351 rue Jean-Louis Boudreau',
          city: 'Granby, QC J2H 0A3, Canada',
          email: 'info@profiremanager.ca',
          phone: '+1 450 330 3648'
        }
      }
    ]
  } : {
    title: 'Terms of Service',
    lastUpdate: 'Last updated: January 2025',
    backHome: 'Back to Home',
    sections: [
      {
        icon: FileText,
        title: '1. Acceptance of Terms',
        content: 'By accessing and using the ProFireManager platform, you agree to be bound by these terms of service. If you do not accept these terms, please do not use our service.',
        items: [
          'These terms constitute a legally binding agreement between you and ProFireManager Inc.',
          'We reserve the right to modify these terms at any time',
          'It is your responsibility to regularly review these terms'
        ]
      },
      {
        icon: Shield,
        title: '2. Service Description',
        content: 'ProFireManager is a SaaS (Software as a Service) platform designed for fire department management in Quebec.',
        items: [
          'Schedule management and shift planning',
          'Personnel and replacement management',
          'Personal protective equipment (PPE) tracking',
          'Training and certification management',
          'Prevention module (optional)'
        ]
      },
      {
        icon: Scale,
        title: '3. User Obligations',
        content: 'As a ProFireManager user, you agree to:',
        items: [
          'Provide accurate and up-to-date information during registration',
          'Maintain the confidentiality of your login credentials',
          'Not share your account with unauthorized third parties',
          'Use the service in accordance with applicable laws',
          'Immediately report any unauthorized use of your account'
        ]
      },
      {
        icon: CreditCard,
        title: '4. Pricing and Payment',
        content: 'The following payment terms apply:',
        items: [
          'Pricing is based on the number of active firefighters in your organization',
          'Invoices are issued monthly or annually according to your choice',
          'Payment is due within 30 days of invoice receipt',
          'In case of non-payment, access to the service may be suspended',
          'Rates may be modified with 60 days notice'
        ]
      },
      {
        icon: AlertCircle,
        title: '5. Limitation of Liability',
        content: 'ProFireManager Inc. cannot be held responsible for:',
        items: [
          'Temporary service interruptions for maintenance',
          'Data loss resulting from circumstances beyond our control',
          'Decisions made based on information provided by the system',
          'Indirect or consequential damages related to the use of the service'
        ]
      },
      {
        icon: Ban,
        title: '6. Termination',
        content: 'The service termination conditions are as follows:',
        items: [
          'You may cancel your subscription at any time with 30 days notice',
          'ProFireManager may terminate your account in case of violation of these terms',
          'After termination, your data will be retained for 90 days then deleted',
          'You may request an export of your data before deletion'
        ]
      },
      {
        icon: RefreshCw,
        title: '7. Satisfaction Guarantee',
        content: 'We offer a satisfaction guarantee:',
        items: [
          '30-day free trial period',
          '60-day money-back guarantee after activation',
          'Full refund if you are not satisfied with the service',
          'No questions asked when requesting refund within the period'
        ]
      },
      {
        icon: Gavel,
        title: '8. Applicable Law',
        content: 'These terms are governed by the laws of the Province of Quebec, Canada. Any dispute shall be subject to the exclusive jurisdiction of the courts of the judicial district of Granby, Quebec.',
        contactInfo: {
          title: 'For any questions regarding these terms:',
          company: 'ProFireManager Inc.',
          address: '351 Jean-Louis Boudreau Street',
          city: 'Granby, QC J2H 0A3, Canada',
          email: 'info@profiremanager.ca',
          phone: '+1 450 330 3648'
        }
      }
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
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-[#D9072B] to-[#B00623] text-white p-8">
            <h1 className="text-4xl font-bold mb-2">{content.title}</h1>
            <p className="text-white/80">{content.lastUpdate}</p>
          </div>
          
          <div className="p-8 space-y-8">
            {content.sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <section key={idx}>
                  <div className="flex items-center gap-3 mb-4">
                    {Icon && <Icon className="w-6 h-6 text-[#D9072B]" />}
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  
                  {section.content && (
                    <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
                  )}
                  
                  {section.items && (
                    <ul className="space-y-3 text-gray-700">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#D9072B] mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {section.contactInfo && (
                    <div className="bg-gray-50 rounded-lg p-4 mt-4">
                      <p className="font-semibold text-gray-900 mb-3">{section.contactInfo.title}</p>
                      <p className="text-gray-700">
                        <strong>{section.contactInfo.company}</strong><br />
                        {section.contactInfo.address}<br />
                        {section.contactInfo.city}<br />
                        Email: <a href={`mailto:${section.contactInfo.email}`} className="text-[#D9072B] hover:underline">{section.contactInfo.email}</a><br />
                        Tél: {section.contactInfo.phone}
                      </p>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
