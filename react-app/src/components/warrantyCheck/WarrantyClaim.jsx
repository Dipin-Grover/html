import React from 'react';
import { Link } from 'react-router-dom';
import './WarrantyCheck.css';

const WarrantyClaim = () => {
  return (
    <section className="wc-claim-section">
      <div className="container">
        <div className="wc-claim-inner">
          {/* Image */}
          <div className="wc-claim-img tp_fade_anim" data-delay=".3">
            <img
              src="assets/img/warranty/warranty_claim.jpg"
              alt="Claim Warranty"
            />
          </div>

          {/* Content */}
          <div className="wc-claim-content tp_fade_anim" data-delay=".5">
            <span className="ais-section-subtitle">Get Covered</span>
            <h3 className="wc-claim-title">Claim Warranty</h3>
            <p className="wc-claim-desc">
              Activate warranty coverage for hassle-free support services.
              Our dedicated team ensures your DeltaView product is back up
              and running as quickly as possible.
            </p>
            <div className="wc-claim-stats">
              <div className="wc-stat">
                <strong>3 Years</strong>
                <span>Full Coverage</span>
              </div>
              <div className="wc-stat-divider" />
              <div className="wc-stat">
                <strong>24/7</strong>
                <span>Tech Support</span>
              </div>
              <div className="wc-stat-divider" />
              <div className="wc-stat">
                <strong>100%</strong>
                <span>Original Parts</span>
              </div>
            </div>
            <Link to="/cominngSoon" className="cst-btn">
              <span>
                <span className="text-1">
                  Claim Now
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM15.2803 6.05328C15.5732 5.76039 15.5732 5.28551 15.2803 4.99262L10.5074 0.219648C10.2145 -0.0732449 9.73959 -0.0732449 9.4467 0.219648C9.15381 0.512542 9.15381 0.987415 9.4467 1.28031L13.6893 5.52295L9.4467 9.76559C9.15381 10.0585 9.15381 10.5334 9.4467 10.8263C9.73959 11.1191 10.2145 11.1191 10.5074 10.8263L15.2803 6.05328ZM0.75 5.52295V6.27295H14.75V5.52295V4.77295H0.75V5.52295Z" fill="currentColor" />
                  </svg>
                </span>
                <span className="text-2">
                  Claim Now
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM15.2803 6.05328C15.5732 5.76039 15.5732 5.28551 15.2803 4.99262L10.5074 0.219648C10.2145 -0.0732449 9.73959 -0.0732449 9.4467 0.219648C9.15381 0.512542 9.15381 0.987415 9.4467 1.28031L13.6893 5.52295L9.4467 9.76559C9.15381 10.0585 9.15381 10.5334 9.4467 10.8263C9.73959 11.1191 10.2145 11.1191 10.5074 10.8263L15.2803 6.05328ZM0.75 5.52295V6.27295H14.75V5.52295V4.77295H0.75V5.52295Z" fill="currentColor" />
                  </svg>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantyClaim;
