import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { CATEGORY_PAGES } from '../content/categoryPages';

// Composant réutilisable pour les pages d'atterrissage de catégorie (SEO).
// Le contenu (FR/EN) vient de src/content/categoryPages.js, indexé par `pageKey`.
const CategoryLandingPage = ({ pageKey }) => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const entry = CATEGORY_PAGES[pageKey];
  const data = entry ? (entry[language] || entry.fr) : null;

  useEffect(() => {
    window.scrollTo({ top: 0 });
    // SEO (titre/description/canonical) géré par useSeo() via seoConfig.js.
  }, [pageKey, language]);

  if (!data) return null;

  const goHome = () => navigate(language === 'fr' ? '/fr' : '/en');
  const goToContact = () => {
    navigate(language === 'fr' ? '/fr' : '/en');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 120);
  };

  const faqHeading = language === 'fr' ? 'Questions fréquentes' : 'Frequently asked questions';

  return (
    <main className="pt-24 pb-16 bg-white">
      {/* Fil d'Ariane */}
      <div className="container mx-auto px-6 mb-8">
        <button
          onClick={goHome}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#D9072B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {language === 'fr' ? "Retour à l'accueil" : 'Back to home'}
        </button>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-50 text-[#D9072B] px-4 py-2 rounded-full text-sm font-semibold mb-5 border border-red-200">
            {data.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {data.h1}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">{data.intro}</p>
          <Button
            onClick={goToContact}
            className="bg-[#D9072B] hover:bg-[#B00623] text-white px-8 py-6 text-lg font-semibold shadow-lg"
          >
            {data.ctaButton}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {data.benefits.map((b, i) => (
            <Card key={i} className="border-2 border-gray-200 hover:border-[#D9072B] transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#D9072B] w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h2>
                    <p className="text-gray-600 leading-relaxed text-sm">{b.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {faqHeading}
          </h2>
          <div className="space-y-4">
            {data.faq.map((item, idx) => (
              <details
                key={idx}
                className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#D9072B] transition-all open:border-[#D9072B]"
              >
                <summary className="flex justify-between items-center font-semibold text-gray-900 cursor-pointer list-none">
                  <span className="text-lg">{item.q}</span>
                  <span className="text-[#D9072B] text-2xl ml-4 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 via-gray-900 to-[#3a0a14] rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.ctaTitle}</h2>
          <p className="text-lg text-gray-300 mb-8">{data.ctaSubtitle}</p>
          <Button
            onClick={goToContact}
            className="bg-[#D9072B] hover:bg-[#B00623] text-white px-8 py-6 text-lg font-semibold shadow-lg"
          >
            {data.ctaButton}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* FAQ JSON-LD (rich results Google + citations IA) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: data.faq.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }),
        }}
      />
    </main>
  );
};

export default CategoryLandingPage;
