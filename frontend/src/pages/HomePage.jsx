import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Modules from '../components/Modules';
import AppScreenshots from '../components/AppScreenshots';
import Strengths from '../components/Strengths';
import Benefits from '../components/Benefits';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Modules />
      <AppScreenshots />
      <Strengths />
      <Benefits />
      <Pricing />
      <CTA />
      <Contact />
    </>
  );
};

export default HomePage;
