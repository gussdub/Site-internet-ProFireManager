import React from 'react';
import { X, Mail, Phone, Clock, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';

const SupportModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-r from-[#D9072B] to-[#B00623] text-white p-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Support Technique</h2>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
          <p className="text-lg text-gray-700 mb-8">
            Notre équipe de support technique est disponible pour répondre à toutes vos questions et résoudre vos problèmes rapidement.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Email Support */}
            <div className="bg-gradient-to-br from-gray-50 to-red-50 rounded-xl p-6 border-2 border-gray-200">
              <div className="w-12 h-12 bg-[#D9072B] rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Support par Email</h3>
              <p className="text-gray-700 mb-4">Réponse sous 24h pour tous les abonnements</p>
              <a href="mailto:info@profiremanager.ca" className="text-[#D9072B] font-semibold hover:underline">
                info@profiremanager.ca
              </a>
            </div>

            {/* Phone Support */}
            <div className="bg-gradient-to-br from-gray-50 to-red-50 rounded-xl p-6 border-2 border-gray-200">
              <div className="w-12 h-12 bg-[#D9072B] rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Support Téléphonique</h3>
              <p className="text-gray-700 mb-4">Lundi - Vendredi : 8h - 18h (EST)</p>
              <a href="tel:+14503303648" className="text-[#D9072B] font-semibold hover:underline">
                +1 450 330 3648
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-[#D9072B] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Heures d'Ouverture</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-medium">Lundi - Vendredi</span>
                    <span>8h00 - 18h00 (EST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Samedi - Dimanche</span>
                    <span>Fermé (Email uniquement)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Support */}
          <div className="bg-gradient-to-r from-[#D9072B] to-[#B00623] text-white rounded-xl p-6">
            <div className="flex items-start gap-4">
              <MessageCircle className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Support Premium 24/7</h3>
                <p className="mb-4 opacity-90">
                  Besoin d'une assistance prioritaire avec temps de réponse garanti sous 2 heures ? Passez au support premium.
                </p>
                <ul className="space-y-2 mb-4 opacity-90">
                  <li>• Support téléphonique 24/7</li>
                  <li>• Temps de réponse &lt; 2h</li>
                  <li>• Gestionnaire de compte dédié</li>
                  <li>• Formation personnalisée incluse</li>
                </ul>
                <div className="text-sm opacity-90">
                  <strong>+5$/pompier/mois</strong> en sus de votre abonnement actuel
                </div>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Button variant="outline" className="border-2 border-gray-300 hover:border-[#D9072B]" onClick={onClose}>
              Consulter la FAQ
            </Button>
            <Button variant="outline" className="border-2 border-gray-300 hover:border-[#D9072B]" onClick={onClose}>
              Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportModal;