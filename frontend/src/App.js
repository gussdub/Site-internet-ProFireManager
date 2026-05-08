import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import SupportPage from './pages/SupportPage';
import DocumentationPage from './pages/DocumentationPage';
import FAQPage from './pages/FAQPage';
import TutorialsPage from './pages/TutorialsPage';
import { Toaster } from './components/ui/sonner';

// Route wrapper to sync URL language with context
const LanguageRouteWrapper = ({ children }) => {
  const location = useLocation();
  const { language, changeLanguage } = useLanguage();
  
  // Extract language from URL path
  const urlLang = location.pathname.startsWith('/en') ? 'en' : 'fr';

  useEffect(() => {
    if (urlLang !== language) {
      changeLanguage(urlLang);
    }
  }, [urlLang, language, changeLanguage]);

  return children;
};

// Redirect root to appropriate language
const RootRedirect = () => {
  const { language } = useLanguage();
  return <Navigate to={`/${language}/`} replace />;
};

function AppContent() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Root redirect */}
          <Route path="/" element={<RootRedirect />} />
          
          {/* French routes */}
          <Route path="/fr" element={<LanguageRouteWrapper><HomePage /></LanguageRouteWrapper>} />
          <Route path="/fr/politique-de-confidentialite" element={<LanguageRouteWrapper><PrivacyPolicyPage /></LanguageRouteWrapper>} />
          <Route path="/fr/conditions-utilisation" element={<LanguageRouteWrapper><TermsPage /></LanguageRouteWrapper>} />
          <Route path="/fr/support-technique" element={<LanguageRouteWrapper><SupportPage /></LanguageRouteWrapper>} />
          <Route path="/fr/documentation" element={<LanguageRouteWrapper><DocumentationPage /></LanguageRouteWrapper>} />
          <Route path="/fr/faq" element={<LanguageRouteWrapper><FAQPage /></LanguageRouteWrapper>} />
          <Route path="/fr/tutoriels" element={<LanguageRouteWrapper><TutorialsPage /></LanguageRouteWrapper>} />
          
          {/* English routes */}
          <Route path="/en" element={<LanguageRouteWrapper><HomePage /></LanguageRouteWrapper>} />
          <Route path="/en/privacy-policy" element={<LanguageRouteWrapper><PrivacyPolicyPage /></LanguageRouteWrapper>} />
          <Route path="/en/terms-of-service" element={<LanguageRouteWrapper><TermsPage /></LanguageRouteWrapper>} />
          <Route path="/en/technical-support" element={<LanguageRouteWrapper><SupportPage /></LanguageRouteWrapper>} />
          <Route path="/en/documentation" element={<LanguageRouteWrapper><DocumentationPage /></LanguageRouteWrapper>} />
          <Route path="/en/faq" element={<LanguageRouteWrapper><FAQPage /></LanguageRouteWrapper>} />
          <Route path="/en/tutorials" element={<LanguageRouteWrapper><TutorialsPage /></LanguageRouteWrapper>} />
          
          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;