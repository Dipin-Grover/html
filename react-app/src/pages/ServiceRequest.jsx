import React from 'react';
import ServiceRequestHero from '../components/ServiceRequest/ServiceRequestHero';
import ServiceRequestTabs from '../components/ServiceRequest/ServiceRequestTabs';
import ServiceRequestForm from '../components/ServiceRequest/ServiceRequestForm';

const ServiceRequest = () => {
  return (
    <>
      <main>
        <ServiceRequestHero />
        <ServiceRequestTabs />
        <ServiceRequestForm />
      </main>
    </>
  );
};

export default ServiceRequest;
