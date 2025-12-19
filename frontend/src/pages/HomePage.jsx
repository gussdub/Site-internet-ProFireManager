import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AppScreenshots from '../components/AppScreenshots';
import Benefits from '../components/Benefits';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <AppScreenshots />
      <Benefits />
      <Pricing />
      <CTA />
      <Contact />
    </>
  );
};

export default HomePage;
