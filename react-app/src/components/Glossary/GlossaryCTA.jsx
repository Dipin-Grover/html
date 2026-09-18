import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const GlossaryCTA = () => {
  return (
    <div className="container mt-50 mb-80 px-4" style={{ maxWidth: '1400px' }}>
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="card border-0 overflow-hidden" style={{ background: 'linear-gradient(90deg, #E0F2FE 0%, #dbeafe 40%, #bfdbfe 100%)', borderRadius: '24px' }}>
            <div className="row align-items-center position-relative">
              
              
              {/* Fade to image */}
              <div className="col-lg-4 position-absolute top-0 end-0 h-100 d-none d-lg-block p-0" style={{ zIndex: 1 }}>
                <div className="position-absolute w-100 h-100" style={{ background: 'linear-gradient(90deg, #bfdbfe 0%, rgba(191, 219, 254, 0) 100%)', zIndex: 2 }}></div>
                <img src="/assets/images/glossary-cta-bg.png" alt="Classroom" className="img-fluid h-100 object-fit-cover w-100" style={{ mixBlendMode: 'multiply', opacity: 0.8 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlossaryCTA;