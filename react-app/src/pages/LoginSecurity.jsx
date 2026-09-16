import React from 'react';
import AccountLayout from '../components/myAccount/AccountLayout';
import LoginSecurityForm from '../components/myAccount/LoginSecurityForm';
import AboutFAQ from '../components/aboutUs/AboutFAQ';

const LoginSecurity = () => {
  return (
    <AccountLayout>
      <LoginSecurityForm />
      <AboutFAQ />
    </AccountLayout>
  );
};

export default LoginSecurity;
