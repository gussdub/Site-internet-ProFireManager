import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const content = language === 'fr' ? {
    title: 'Politique de Confidentialité',
    lastUpdate: 'Dernière mise à jour : Janvier 2025',
    backHome: 'Retour à l\'accueil',
    sections: [
      {
        icon: Shield,
        title: '1. Introduction',
        content: 'ProFireManager Inc. ("nous", "notre", "nos") s\'engage à protéger la vie privée et les données personnelles de ses utilisateurs. Cette politique de confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos informations.',
        company: {
          name: 'ProFireManager Inc.',
          address: '351 rue Jean-Louis Boudreau',
          city: 'Granby, QC J2H 0A3, Canada',
          email: 'info@profiremanager.ca'
        }
      },
      {
        icon: Database,
        title: '2. Données Collectées',
        intro: 'Nous collectons les types de données suivants :',
        items: [
          { label: 'Informations d\'identification :', text: 'nom, prénom, adresse email, numéro de téléphone' },
          { label: 'Données professionnelles :', text: 'grade, compétences, certifications, formations, disponibilités' },
          { label: 'Données d\'équipements :', text: 'inventaire EPI, dates d\'expiration, état d\'usure' },
          { label: 'Données d\'utilisation :', text: 'logs de connexion, actions effectuées dans l\'application' }
        ]
      },
      {
        icon: Eye,
        title: '3. Utilisation des Données',
        intro: 'Vos données sont utilisées pour :',
        items: [
          'Fournir et améliorer nos services de gestion pour votre organisation',
          'Gérer les plannings, gardes et remplacements',
          'Assurer le suivi des équipements et formations',
          'Communiquer avec vous concernant le service',
          'Respecter nos obligations légales et réglementaires'
        ]
      },
      {
        icon: Lock,
        title: '4. Protection des Données',
        intro: 'Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles :',
        items: [
          'Chiffrement end-to-end de toutes les données',
          'Stockage sur serveurs sécurisés au Canada',
          'Sauvegardes automatiques quotidiennes',
          'Isolation complète des données entre organisations (multi-tenant)',
          'Authentification sécurisée et gestion des accès'
        ]
      },
      {
        icon: UserCheck,
        title: '5. Vos Droits',
        intro: 'Conformément aux lois canadiennes sur la protection des données, vous avez le droit de :',
        items: [
          'Accéder à vos données personnelles',
          'Rectifier vos données inexactes ou incomplètes',
          'Demander la suppression de vos données',
          'Recevoir une copie de vos données (portabilité)',
          'Retirer votre consentement à tout moment'
        ],
        contactText: 'Pour exercer ces droits, contactez-nous à : ',
        contactEmail: 'info@profiremanager.ca'
      },
      {
        icon: AlertTriangle,
        title: '6. Conservation des Données',
        content: 'Nous conservons vos données aussi longtemps que nécessaire pour fournir nos services et respecter nos obligations légales. En cas de résiliation de votre abonnement, vos données seront supprimées après une période de 90 jours, sauf obligation légale contraire.'
      },
      {
        title: '7. Modifications',
        content: 'Nous nous réservons le droit de modifier cette politique de confidentialité. Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.'
      },
      {
        title: '8. Contact',
        intro: 'Pour toute question concernant cette politique de confidentialité ou le traitement de vos données :',
        showCompany: true
      }
    ]
  } : {
    title: 'Privacy Policy',
    lastUpdate: 'Last updated: January 2025',
    backHome: 'Back to Home',
    sections: [
      {
        icon: Shield,
        title: '1. Introduction',
        content: 'ProFireManager Inc. ("we", "our", "us") is committed to protecting the privacy and personal data of its users. This privacy policy describes how we collect, use, store and protect your information.',
        company: {
          name: 'ProFireManager Inc.',
          address: '351 Jean-Louis Boudreau Street',
          city: 'Granby, QC J2H 0A3, Canada',
          email: 'info@profiremanager.ca'
        }
      },
      {
        icon: Database,
        title: '2. Data Collected',
        intro: 'We collect the following types of data:',
        items: [
          { label: 'Identification information:', text: 'name, first name, email address, phone number' },
          { label: 'Professional data:', text: 'rank, skills, certifications, training, availability' },
          { label: 'Equipment data:', text: 'PPE inventory, expiration dates, wear status' },
          { label: 'Usage data:', text: 'connection logs, actions performed in the application' }
        ]
      },
      {
        icon: Eye,
        title: '3. Use of Data',
        intro: 'Your data is used to:',
        items: [
          'Provide and improve our management services for your organization',
          'Manage schedules, shifts and replacements',
          'Ensure equipment and training tracking',
          'Communicate with you regarding the service',
          'Comply with our legal and regulatory obligations'
        ]
      },
      {
        icon: Lock,
        title: '4. Data Protection',
        intro: 'We implement technical and organizational security measures:',
        items: [
          'End-to-end encryption of all data',
          'Storage on secure servers in Canada',
          'Automatic daily backups',
          'Complete data isolation between organizations (multi-tenant)',
          'Secure authentication and access management'
        ]
      },
      {
        icon: UserCheck,
        title: '5. Your Rights',
        intro: 'In accordance with Canadian data protection laws, you have the right to:',
        items: [
          'Access your personal data',
          'Rectify inaccurate or incomplete data',
          'Request deletion of your data',
          'Receive a copy of your data (portability)',
          'Withdraw your consent at any time'
        ],
        contactText: 'To exercise these rights, contact us at: ',
        contactEmail: 'info@profiremanager.ca'
      },
      {
        icon: AlertTriangle,
        title: '6. Data Retention',
        content: 'We retain your data as long as necessary to provide our services and comply with our legal obligations. In case of subscription termination, your data will be deleted after a 90-day period, unless otherwise required by law.'
      },
      {
        title: '7. Modifications',
        content: 'We reserve the right to modify this privacy policy. Changes will be posted on this page with a new update date. We encourage you to regularly review this page.'
      },
      {
        title: '8. Contact',
        intro: 'For any questions regarding this privacy policy or the processing of your data:',
        showCompany: true
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Spacer */}
      <div className="h-20"></div>
      
      {/* Back Button */}
      <div className="container mx-auto px-6 py-6">
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          {content.backHome}
        </Button>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden">
          {/* Title Section */}
          <div className="bg-gradient-to-r from-[#D9072B] to-[#B00623] text-white p-8">
            <h1 className="text-4xl font-bold mb-2">{content.title}</h1>
            <p className="text-white/80">{content.lastUpdate}</p>
          </div>

          {/* Body */}
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
                  
                  {section.company && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>{section.company.name}</strong><br />
                        {section.company.address}<br />
                        {section.company.city}<br />
                        Email: {section.company.email}
                      </p>
                    </div>
                  )}
                  
                  {section.intro && (
                    <p className="text-gray-700 mb-4">{section.intro}</p>
                  )}
                  
                  {section.items && (
                    <ul className="space-y-3 text-gray-700">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#D9072B] mt-1">•</span>
                          {typeof item === 'string' ? (
                            <span>{item}</span>
                          ) : (
                            <span>
                              <strong>{item.label}</strong> {item.text}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {section.contactText && (
                    <p className="text-gray-700 mt-4">
                      {section.contactText}
                      <a href={`mailto:${section.contactEmail}`} className="text-[#D9072B] hover:underline">
                        {section.contactEmail}
                      </a>
                    </p>
                  )}
                  
                  {section.showCompany && (
                    <div className="bg-gray-50 rounded-lg p-4 mt-4">
                      <p className="text-gray-700">
                        <strong>ProFireManager Inc.</strong><br />
                        351 rue Jean-Louis Boudreau<br />
                        Granby, QC J2H 0A3, Canada<br />
                        Email: <a href="mailto:info@profiremanager.ca" className="text-[#D9072B] hover:underline">info@profiremanager.ca</a><br />
                        Tél: +1 450 330 3648
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

export default PrivacyPolicyPage;