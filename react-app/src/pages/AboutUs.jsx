import React from 'react';
import AboutHero from '../components/aboutUs/AboutHero';
import MissionValues from '../components/aboutUs/MissionValues';
import WhyDeltaView from '../components/aboutUs/WhyDeltaView';
import CounterArea from '../components/aboutUs/CounterArea';
import AboutTestimonials from '../components/aboutUs/AboutTestimonials';
import AboutFAQ from '../components/aboutUs/AboutFAQ';

const AboutUs = () => {
  return (
    <main>
      <AboutHero />
      <MissionValues />
      <WhyDeltaView />
      <CounterArea />
      <AboutTestimonials />
      <AboutFAQ/>
    </main>
  );
};

export default AboutUs;
