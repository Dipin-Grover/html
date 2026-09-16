import React from 'react';
import WarrantyHero from '../components/warrantyCheck/WarrantyHero';
import WarrantyInfo from '../components/warrantyCheck/WarrantyInfo';
import WarrantyClaim from '../components/warrantyCheck/WarrantyClaim';

const WarrantyCheck = () => {
  return (
    <main>
      <WarrantyHero />
      <WarrantyInfo />
      <WarrantyClaim />
    </main>
  );
};

export default WarrantyCheck;
