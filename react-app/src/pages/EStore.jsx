import React from 'react';
import HeroSection from '../components/eStore/HeroSection';
import FeatureSection from '../components/eStore/FeatureSection';
import ShopHighlights from '../components/eStore/ShopHighlights';
import AIDigitalBoard from '../components/eStore/RandomHeading';
import WhyChooseUs from '../components/eStore/why_choose_us'; 


const EStore = () => {
  return (
    <main>
      <HeroSection />
      <AIDigitalBoard />
      <FeatureSection />
      <WhyChooseUs/>
      <ShopHighlights />
    </main>
  );
};

export default EStore;
