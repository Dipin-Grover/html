import React, { useEffect } from 'react';
import SignInForm from '../components/auth/SignInForm';
import SignInVisual from '../components/auth/SignInVisual';

const SignIn = () => {
  useEffect(() => {
    // Add classes to body or html if needed, similar to index.php
    // In index.php: <html class="no-js" lang="zxx"> <body>
    document.title = "Sign In - DeltaView";
  }, []);

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center overflow-hidden bg-light">
      <div className="w-100 bg-white d-flex flex-column flex-lg-row h-100 overflow-hidden">
        <SignInForm />
        <SignInVisual />
      </div>
    </div>
  );
};

export default SignIn;
