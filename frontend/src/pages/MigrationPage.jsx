import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Database, Lock, FileArchive, Image as ImageIcon, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n/translations';

const MigrationPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const data = t(language, 'migrationPage');
  const migrationData = t(language, 'migration');

  useEffect(() => {
    window.scrollTo({ top: 0 });
    // Dynamic SEO update
    const titleByLang = {
      fr: 'Migrer de Première Ligne vers ProFireManager — Transfert 100 % des données',
      en: 'Migrate from Première Ligne to ProFireManager — 100% Data Transfer'
    };
    const descByLang = {
      fr: 'Vous utilisez Première Ligne ? ProFireManager récupère 100 % de vos données : employés, équipements, interventions, prévention. Forfait fixe 10 000 $ CAD.',
      en: 'Using Première Ligne? ProFireManager recovers 100% of your data: employees, equipment, interventions, prevention. Flat fee of $10,000 CAD.'
    };
    const canonicalByLang = {
      fr: 'https://www.profiremanager.com/fr/migration-premiere-ligne',
      en: 'https://www.profiremanager.com/en/migration-from-premiere-ligne'
    };
    document.title = titleByLang[language];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', descByLang[language]);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', canonicalByLang[language]);
  }, [language]);

  const goHome = () => {
    navigate(language === 'fr' ? '/fr' : '/en');
  };

  const goToContact = () => {
    const path = language === 'fr' ? '/fr' : '/en';
    navigate(path);
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const whyIcons = [Database, Lock, FileArchive, ImageIcon];

  return (
    <main className="pt-24 pb-16 bg-white" data-testid="migration-page">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 mb-8">
        <button
          onClick={goHome}
          data-testid="migration-back-home"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#D9072B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {language === 'fr' ? 'Retour à l\'accueil' : 'Back to home'}
        </button>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-red-50 text-[#D9072B] px-4 py-2 rounded-full text-sm font-semibold mb-5 border border-red-200">
            {data.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {data.hero.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {data.hero.subtitle}
          </p>
          <Button
            onClick={goToContact}
            data-testid="migration-page-cta-hero"
            className="bg-[#D9072B] hover:bg-[#B00623] text-white px-8 py-6 text-lg font-semibold shadow-lg"
          >
            {data.hero.cta}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Why migrate */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {data.whyTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {data.whyItems.map((item, idx) => {
              const Icon = whyIcons[idx];
              return (
                <Card key={idx} className="border-2 border-gray-200 hover:border-[#D9072B] transition-all" data-testid={`why-item-${idx}`}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#D9072B]" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-6 mb-20 bg-gray-50 py-16 rounded-3xl max-w-7xl">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {data.processTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.processSteps.map((step) => (
              <div key={step.step} className="text-center" data-testid={`process-step-${step.step}`}>
                <div className="w-16 h-16 bg-[#D9072B] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {data.includedTitle}
              </h2>
              <p className="text-gray-600 mb-6">{migrationData.feeDetail}</p>
              <div className="bg-gradient-to-br from-[#D9072B] to-[#B00623] rounded-xl p-6 text-white shadow-xl inline-block">
                <p className="text-sm uppercase tracking-wider opacity-90 mb-1">{migrationData.feeLabel}</p>
                <p className="text-4xl font-bold">{migrationData.feeValue}</p>
              </div>
            </div>
            <ul className="space-y-3" data-testid="migration-included-list">
              {data.includedItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#D9072B] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {data.faqTitle}
          </h2>
          <div className="space-y-4">
            {data.faqItems.map((item, idx) => (
              <details
                key={idx}
                data-testid={`faq-item-${idx}`}
                className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#D9072B] transition-all cursor-pointer open:border-[#D9072B]"
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
            data-testid="migration-page-cta-bottom"
            className="bg-[#D9072B] hover:bg-[#B00623] text-white px-8 py-6 text-lg font-semibold shadow-lg"
          >
            {data.ctaButton}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-xs text-gray-500 mt-6 italic">{migrationData.disclaimer}</p>
        </div>
      </section>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: data.faqItems.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.a
              }
            }))
          })
        }}
      />
    </main>
  );
};

export default MigrationPage;
