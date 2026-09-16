import React, { useEffect } from 'react';
import SignUpForm from '../components/auth/SignUpForm';
import SignInVisual from '../components/auth/SignInVisual'; // Reusing the same visual component

const SignUp = () => {
  useEffect(() => {
    document.title = "Sign Up - DeltaView";
  }, []);

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center overflow-hidden bg-light">
      <div className="w-100 bg-white d-flex flex-column flex-lg-row h-100 overflow-hidden">
        <SignUpForm />
        <SignInVisual />
      </div>
    </div>
  );
};

export default SignUp;
