import React from 'react';
import './Glossary.css';
import { FiArrowRight } from 'react-icons/fi';

const GlossaryCTA = () => {
  return (
    <div className="glossary-cta-banner">
      <div className="glossary-cta-inner">
        <div className="glossary-cta-content">
          <span className="glossary-cta-label">Still have questions?</span>
          <h2 className="glossary-cta-title">
            We're here to help you make learning smarter.
          </h2>
          <a href="/contact" className="glossary-cta-btn">
            Contact Our Experts <FiArrowRight />
          </a>
        </div>
        
        {/* Placeholder for the right side image of the classroom */}
        <img src="/assets/images/glossary-cta-bg.png" alt="Classroom" className="glossary-cta-visual" />
      </div>
    </div>
  );
};

export default GlossaryCTA;