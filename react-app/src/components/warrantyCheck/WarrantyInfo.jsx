import React from 'react';
import { Link } from 'react-router-dom';
import './WarrantyCheck.css';

const WarrantyInfo = () => {
  return (
    <section className="wc-info-section">
      <div className="container">
        <div className="wc-info-card tp_fade_anim" data-delay=".3">
          {/* Left: Text */}
          <div className="wc-info-text">
            <span className="ais-section-subtitle">3-Year Coverage</span>
            <h3 className="wc-info-title">Your Trust, Our Commitment</h3>
            <p className="wc-info-desc">
              Dive into an immersive teaching and collaboration experience with
              DeltaView's Interactive Panel, backed by a robust three-year
              warranty. Our commitment to quality ensures a seamless and supported
              educational and enterprise journey. Please note, while we don't
              provide intentional damage warranty, our focus on durability
              guarantees a reliable platform for engaging lessons and
              collaborative sessions.
            </p>
            <ul className="wc-info-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Hardware defects covered
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Software and firmware support
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                On-site technician assistance
              </li>
            </ul>
          </div>
          {/* Right: Image */}
          <div className="wc-info-img">
            <img
              src="assets/img/warranty/warranty_panel.jpg"
              alt="DeltaView Panel"
            />
            <div className="wc-info-badge">
              <svg width="28" height="28" viewBox="0 0 31 35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 6.99999C16.4183 6.99999 20 10.5817 20 15C20 19.4183 16.4183 23 12 23C7.58172 23 4 19.4183 4 15C4 10.5817 7.58172 6.99999 12 6.99999ZM12 8.99999C8.68629 8.99999 6 11.6863 6 15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15C18 11.6863 15.3137 8.99999 12 8.99999ZM12 10.5L13.3225 13.1797L16.2798 13.6094L14.1399 15.6953L14.645 18.6406L12 17.25L9.35497 18.6406L9.86012 15.6953L7.72025 13.6094L10.6775 13.1797L12 10.5ZM18 1.99999V4.99999L16.6366 6.13755C15.5305 5.5577 14.3025 5.17884 13.0011 5.04948L13 1.99899L18 1.99999ZM11 1.99899L10.9997 5.04939C9.6984 5.17863 8.47046 5.55735 7.36441 6.13703L6 4.99999V1.99999L11 1.99899Z"/>
              </svg>
              <span>3 Year<br />Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantyInfo;
