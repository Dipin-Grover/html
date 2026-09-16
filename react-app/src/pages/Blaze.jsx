import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import BlazeProductBanner from '../components/blaze/BlazeProductBanner';
import BlazeFeatureBox from '../components/blaze/BlazeFeatureBox';
import BlazeApps from '../components/blaze/BlazeApps';
import BlazeHeroBottom from '../components/blaze/BlazeHeroBottom';
import BlazePowerfulFeatures from '../components/blaze/BlazePowerfulFeatures';
import BlazeProcessor from '../components/blaze/BlazeProcessor';
import BlazeTrustedBy from '../components/blaze/BlazeTrustedBy';
import BlazeProducts from '../components/blaze/BlazeProducts';
import BlazeCta from '../components/blaze/BlazeCta';

const Blaze = () => {
  return (
    <>
      <Header />
      <main>
        <BlazeProductBanner />
        <BlazeFeatureBox />
        <BlazeApps />
        <BlazeHeroBottom />
        <BlazePowerfulFeatures />
        <BlazeProcessor />
        <BlazeTrustedBy />
        <BlazeProducts />
        <BlazeCta />
      </main>
      <Footer />
    </>
  );
};

export default Blaze;
