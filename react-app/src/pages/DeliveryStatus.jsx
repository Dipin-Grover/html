import React from 'react';
import AccountLayout from '../components/myAccount/AccountLayout';
import DeliveryStatusList from '../components/myAccount/DeliveryStatusList';
import AboutFAQ from '../components/aboutUs/AboutFAQ';

const DeliveryStatus = () => {
  return (
    <AccountLayout>
      <DeliveryStatusList />
      <AboutFAQ />
    </AccountLayout>
  );
};

export default DeliveryStatus;
