import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const FAQModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const faqCategories = [
    {
      category: 'Général',
      questions: [
        {
          q: 'Qu\'est-ce que ProFireManager ?',
          a: 'ProFireManager est une plateforme cloud complète conçue spécifiquement pour les services d\'incendie québécois. Elle automatise la gestion des gardes, du personnel, des équipements (EPI) et des formations.'
        },
        {
          q: 'Faut-il installer un logiciel ?',
          a: 'Non, ProFireManager est 100% web et accessible depuis n\'importe quel navigateur moderne (Chrome, Firefox, Safari, Edge). Aucune installation n\'est nécessaire.'
        },
        {
          q: 'Combien de temps prend la mise en place ?',
          a: 'La configuration complète prend généralement entre 1 et 2 semaines, incluant l\'import de vos données, la formation de votre équipe et le paramétrage selon vos besoins.'
        }
      ]
    },
    {
      category: 'Tarification',
      questions: [
        {
          q: 'Comment fonctionne la tarification ?',
          a: 'La tarification est simple et transparente : vous payez par pompier actif, par mois. Les tarifs dégressifs commencent à 12$/pompier/mois (0-30 pompiers), puis 20$/pompier/mois (31-50), et 27$/pompier/mois (51+). Un rabais de 10% est appliqué pour la facturation annuelle.'
        },
        {
          q: 'Y a-t-il des frais cachés ?',
          a: 'Non, aucun frais caché. Tous les modules (Horaires, EPI, Formations) sont inclus dans le tarif de base. Seul le module Prévention est optionnel.'
        },
        {
          q: 'Puis-je annuler à tout moment ?',
          a: 'Oui, vous pouvez annuler votre abonnement à tout moment. En cas d\'annulation, vous recevrez un export complet de toutes vos données.'
        }
      ]
    },
    {
      category: 'Fonctionnalités',
      questions: [
        {
          q: 'Comment fonctionne l\'attribution automatique des gardes ?',
          a: 'Notre algorithme intelligent prend en compte les compétences requises, le grade, la disponibilité, l\'équité de distribution des heures et la rareté des compétences pour attribuer automatiquement les gardes de manière optimale.'
        },
        {
          q: 'Le module EPI est-il conforme aux normes ?',
          a: 'Oui, notre module EPI est conforme à la norme NFPA 1851. Il permet le suivi complet des équipements, les inspections de routine directement dans l\'application, et la gestion des demandes de remplacement.'
        },
        {
          q: 'Peut-on personnaliser les types de gardes ?',
          a: 'Absolument. Vous pouvez configurer des types de gardes personnalisés (6h, 12h, 24h, gardes externes) avec les compétences requises spécifiques pour chaque type.'
        }
      ]
    },
    {
      category: 'Support et Sécurité',
      questions: [
        {
          q: 'Où sont stockées nos données ?',
          a: 'Vos données sont stockées sur des serveurs sécurisés au Canada avec des backups quotidiens automatiques et un chiffrement end-to-end.'
        },
        {
          q: 'Quel type de support est fourni ?',
          a: 'Support par email inclus pour tous les abonnements avec temps de réponse sous 24h. Un support premium 24/7 est disponible en option (+5$/pompier/mois).'
        },
        {
          q: 'Les données sont-elles isolées entre organisations ?',
          a: 'Oui, notre architecture multi-tenant garantit une isolation complète des données. Chaque organisation dispose de son propre espace sécurisé.'
        }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-r from-[#D9072B] to-[#B00623] text-white p-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Questions Fréquentes (FAQ)</h2>
          <button onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
          {faqCategories.map((category, idx) => (
            <div key={idx} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h3>
              <Accordion type="single" collapsible className="space-y-3">
                {category.questions.map((item, i) => (
                  <AccordionItem key={i} value={`item-${idx}-${i}`} className="border-2 border-gray-200 rounded-lg px-4">
                    <AccordionTrigger className="text-left font-semibold hover:text-[#D9072B]">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Vous ne trouvez pas votre réponse ?</h3>
            <p className="text-gray-700 mb-4">
              Notre équipe de support est là pour vous aider. Contactez-nous à guillaume.dubeau@profiremanager.ca ou appelez-nous au +1 450 330 3648.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQModal;