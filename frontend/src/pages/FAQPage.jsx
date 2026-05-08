import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const FAQPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const content = language === 'fr' ? {
    title: 'Questions Fréquentes (FAQ)',
    backHome: 'Retour à l\'accueil',
    categories: [
      {
        category: 'Général',
        questions: [
          { q: 'Qu\'est-ce que ProFireManager ?', a: 'ProFireManager est une plateforme cloud complète conçue spécifiquement pour les services d\'incendie québécois.' },
          { q: 'Faut-il installer un logiciel ?', a: 'Non, ProFireManager est 100% web et accessible depuis n\'importe quel navigateur moderne.' },
          { q: 'Combien de temps prend la mise en place ?', a: 'Entre 1 et 2 semaines, incluant l\'import de vos données et la formation.' }
        ]
      },
      {
        category: 'Tarification',
        questions: [
          { q: 'Comment fonctionne la tarification ?', a: 'Tarification simple par pompier actif : 12$/mois (0-30), 20$/mois (31-50), 27$/mois (51+). Rabais de 10% en annuel.' },
          { q: 'Y a-t-il des frais cachés ?', a: 'Non, aucun frais caché. Le module Prévention est optionnel.' }
        ]
      }
    ],
    contactText: 'Vous ne trouvez pas votre réponse ? Contactez-nous à info@profiremanager.ca ou au +1 450 330 3648.'
  } : {
    title: 'Frequently Asked Questions (FAQ)',
    backHome: 'Back to Home',
    categories: [
      {
        category: 'General',
        questions: [
          { q: 'What is ProFireManager?', a: 'ProFireManager is a complete cloud platform designed specifically for Quebec fire departments.' },
          { q: 'Do I need to install software?', a: 'No, ProFireManager is 100% web-based and accessible from any modern browser.' },
          { q: 'How long does setup take?', a: 'Between 1 and 2 weeks, including data import and training.' }
        ]
      },
      {
        category: 'Pricing',
        questions: [
          { q: 'How does pricing work?', a: 'Simple per-firefighter pricing: $12/mo (0-30), $20/mo (31-50), $27/mo (51+). 10% discount for annual billing.' },
          { q: 'Are there hidden fees?', a: 'No hidden fees. Prevention module is optional.' }
        ]
      }
    ],
    contactText: 'Can\'t find your answer? Contact us at info@profiremanager.ca or +1 450 330 3648.'
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
            {content.categories.map((category, idx) => (
              <div key={idx} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h2>
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
              <p className="text-gray-700">{content.contactText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;