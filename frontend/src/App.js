import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
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

// Component to sync URL language with context
const LanguageSync = () => {
  const location = useLocation();
  const { changeLanguage } = useLanguage();

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/fr')) {
      changeLanguage('fr');
    } else if (path.startsWith('/en')) {
      changeLanguage('en');
    }
  }, [location.pathname, changeLanguage]);

  return null;
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
        <LanguageSync />
        <Header />
        <Routes>
          {/* Root redirect */}
          <Route path="/" element={<RootRedirect />} />
          
          {/* French routes */}
          <Route path="/fr" element={<HomePage />} />
          <Route path="/fr/" element={<HomePage />} />
          <Route path="/fr/politique-de-confidentialite" element={<PrivacyPolicyPage />} />
          <Route path="/fr/conditions-utilisation" element={<TermsPage />} />
          <Route path="/fr/support-technique" element={<SupportPage />} />
          <Route path="/fr/documentation" element={<DocumentationPage />} />
          <Route path="/fr/faq" element={<FAQPage />} />
          <Route path="/fr/tutoriels" element={<TutorialsPage />} />
          
          {/* English routes */}
          <Route path="/en" element={<HomePage />} />
          <Route path="/en/" element={<HomePage />} />
          <Route path="/en/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/en/terms-of-service" element={<TermsPage />} />
          <Route path="/en/technical-support" element={<SupportPage />} />
          <Route path="/en/documentation" element={<DocumentationPage />} />
          <Route path="/en/faq" element={<FAQPage />} />
          <Route path="/en/tutorials" element={<TutorialsPage />} />
          
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
