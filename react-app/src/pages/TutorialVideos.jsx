import React, { useEffect } from 'react';
import TutorialVideoShowcase from '../components/tutorialVideos/TutorialVideoShowcase';
import TutorialCTA from '../components/tutorialVideos/TutorialCTA';
import AboutFAQ from '../components/aboutUs/AboutFAQ';

const TutorialVideos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <TutorialVideoShowcase />
      <TutorialCTA />
      <AboutFAQ/>
    </main>
  );
};

export default TutorialVideos;
