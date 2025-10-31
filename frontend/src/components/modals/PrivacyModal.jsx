import React from 'react';
import { X, Shield, Lock, Eye, Database, UserCheck, AlertTriangle } from 'lucide-react';

const PrivacyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-r from-[#D9072B] to-[#B00623] text-white p-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Politique de Confidentialité</h2>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
          <p className="text-sm text-gray-600 mb-6">Dernière mise à jour : Janvier 2025</p>

          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#D9072B]" />
                <h3 className="text-2xl font-bold text-gray-900">1. Introduction</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                ProFireManager Inc. ("nous", "notre", "nos") s'engage à protéger la vie privée et les données personnelles de ses utilisateurs. Cette politique de confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos informations.
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>ProFireManager Inc.</strong><br />
                  351 rue Jean-Louis Boudreau<br />
                  Granby, QC J2H 0A3, Canada<br />
                  Email: info@profiremanager.ca
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-[#D9072B]" />
                <h3 className="text-2xl font-bold text-gray-900">2. Données Collectées</h3>
              </div>
              <p className="text-gray-700 mb-4">Nous collectons les types de données suivants :</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span><strong>Informations d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span><strong>Données professionnelles :</strong> grade, compétences, certifications, formations, disponibilités</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span><strong>Données d'équipements :</strong> inventaire EPI, dates d'expiration, état d'usure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span><strong>Données d'utilisation :</strong> logs de connexion, actions effectuées dans l'application</span>
                </li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-[#D9072B]" />
                <h3 className="text-2xl font-bold text-gray-900">3. Utilisation des Données</h3>
              </div>
              <p className="text-gray-700 mb-4">Vos données sont utilisées pour :</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Fournir et améliorer nos services de gestion pour votre organisation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Gérer les plannings, gardes et remplacements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Assurer le suivi des équipements et formations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Communiquer avec vous concernant le service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Respecter nos obligations légales et réglementaires</span>
                </li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-[#D9072B]" />
                <h3 className="text-2xl font-bold text-gray-900">4. Protection des Données</h3>
              </div>
              <p className="text-gray-700 mb-4">Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles :</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Chiffrement end-to-end de toutes les données</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Stockage sur serveurs sécurisés au Canada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Sauvegardes automatiques quotidiennes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Isolation complète des données entre organisations (multi-tenant)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Authentification sécurisée et gestion des accès</span>
                </li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-[#D9072B]" />
                <h3 className="text-2xl font-bold text-gray-900">5. Vos Droits</h3>
              </div>
              <p className="text-gray-700 mb-4">Conformément aux lois canadiennes sur la protection des données, vous avez le droit de :</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Accéder à vos données personnelles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Rectifier vos données inexactes ou incomplètes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Demander la suppression de vos données</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Recevoir une copie de vos données (portabilité)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D9072B] mt-1">•</span>
                  <span>Retirer votre consentement à tout moment</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Pour exercer ces droits, contactez-nous à : <a href="mailto:guillaume.dubeau@profiremanager.ca" className="text-[#D9072B] hover:underline">guillaume.dubeau@profiremanager.ca</a>
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-[#D9072B]" />
                <h3 className="text-2xl font-bold text-gray-900">6. Conservation des Données</h3>
              </div>
              <p className="text-gray-700">
                Nous conservons vos données aussi longtemps que nécessaire pour fournir nos services et respecter nos obligations légales. En cas de résiliation de votre abonnement, vos données seront supprimées après une période de 90 jours, sauf obligation légale contraire.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Modifications</h3>
              <p className="text-gray-700">
                Nous nous réservons le droit de modifier cette politique de confidentialité. Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Contact</h3>
              <p className="text-gray-700 mb-4">
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos données :
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>ProFireManager Inc.</strong><br />
                  351 rue Jean-Louis Boudreau<br />
                  Granby, QC J2H 0A3, Canada<br />
                  Email: <a href="mailto:guillaume.dubeau@profiremanager.ca" className="text-[#D9072B] hover:underline">guillaume.dubeau@profiremanager.ca</a><br />
                  Tél: +1 450 330 3648
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;