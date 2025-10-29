import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AppScreenshots from './components/AppScreenshots';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <AppScreenshots />
      <Benefits />
      <Pricing />
      <CTA />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;