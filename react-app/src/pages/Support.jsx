import React from 'react';
import AccountLayout from '../components/myAccount/AccountLayout';
import ReachOutCards from '../components/myAccount/ReachOutCards';
import ContactSupportForm from '../components/myAccount/ContactSupportForm';
import AccountFaq from '../components/myAccount/AccountFaq';
import AboutFAQ from '../components/aboutUs/AboutFAQ';

const Support = () => {
  return (
    <AccountLayout>
      {/* Section 1: Reach Out Us */}
      <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm mb-50 text-center border tp-ff-body">
        <h2 className="fs-1 fw-bold text-dark mb-4 mt-2 tp-ff-heading">Reach Out Us</h2>
        <ReachOutCards />
        <ContactSupportForm />
      </div>
    <AboutFAQ/ >
      
    </AccountLayout>
  );
};

export default Support;
