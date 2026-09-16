import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import BrandArea from '../components/home/BrandArea';
import AiArea from '../components/home/AiArea';
import FeaturesSection from '../components/home/FeaturesSection';
import ConfiguratorArea from '../components/home/ConfiguratorArea';
import AboutArea from '../components/home/AboutArea';
import TeamWorkArea from '../components/home/TeamWorkArea';
import PortfolioArea from '../components/home/PortfolioArea';
import BlogArea from '../components/home/BlogArea';
import Heading from '../components/home/Heading';


const Home = () => {
  return (
    <main>
      <HeroBanner />
      <BrandArea />
      <AiArea />
      <Heading />
      <FeaturesSection />
      <ConfiguratorArea />
      <AboutArea />
      <TeamWorkArea />
      <PortfolioArea />
      <BlogArea />
    </main>
  );
};

export default Home;
