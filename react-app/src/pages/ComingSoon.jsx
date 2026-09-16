import React from 'react';
import { Link } from 'react-router-dom';
import comingSoonImg from '../assets/coming_soon_illustration.jpg';

const ComingSoon = () => {
  return (
    <>
      <main>
        <div className="contact-area pt-120 pb-120 p-relative text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <img 
                  src={comingSoonImg} 
                  alt="Coming Soon" 
                  className="img-fluid mb-40" 
                  style={{ maxWidth: '500px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
                />
                <h2 className="mb-20 tp-ff-dm fs-50 tp-text-common-black-1">Exciting Things Are Coming!</h2>
                <p className="fs-18 tp-ff-dm tp-text-common-black-1 mb-40">
                  The page you are looking for is currently under construction. We are working hard to bring you a great experience. Check back soon!
                </p>
                <Link to="/" className="al-btn-blue">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ComingSoon;
