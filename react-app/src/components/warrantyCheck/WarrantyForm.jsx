import React, { useState } from 'react';
import './WarrantyCheck.css';

const WarrantyForm = () => {
  const [serial, setSerial] = useState('');
  const [status, setStatus] = useState(null); // null | 'loading' | 'found' | 'notfound'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!serial.trim()) return;
    setStatus('loading');
    // Simulate an API call
    setTimeout(() => {
      setStatus(serial.trim().length >= 8 ? 'found' : 'notfound');
    }, 1200);
  };

  return (
    <section id="warranty-form" className="wc-form-section">
      <div className="container">
        <div className="wc-form-inner">
          <span className="ais-section-subtitle tp_fade_anim" data-delay=".2">
            Warranty Lookup
          </span>
          <h2 className="wc-form-title tp_fade_anim" data-delay=".3">
            Find Your Support Services Status
          </h2>
          <p className="wc-form-desc tp_fade_anim" data-delay=".4">
            Enter a DeltaView Service Tag or a DeltaView Product Serial Number.
          </p>

          <form onSubmit={handleSubmit} className="wc-form tp_fade_anim" data-delay=".5">
            <div className="wc-input-group">
              <div className="wc-input-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L16.65 16.65M11 6C13.7614 6 16 8.23858 16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6ZM3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11C21 15.9706 16.9706 20 12 20C7.02944 20 3 15.9706 3 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <input
                type="text"
                className="wc-input"
                placeholder="Enter your serial number or service tag"
                value={serial}
                onChange={(e) => setSerial(e.target.value)}
                required
              />
              <button type="submit" className="cst-btn wc-submit-btn" disabled={status === 'loading'}>
                <span>
                  <span className="text-1">
                    {status === 'loading' ? 'Checking…' : 'Check Warranty'}
                  </span>
                  <span className="text-2">
                    {status === 'loading' ? 'Checking…' : 'Check Warranty'}
                  </span>
                </span>
              </button>
            </div>
          </form>

          {/* Result feedback */}
          {status === 'loading' && (
            <div className="wc-result wc-result--loading tp_fade_anim">
              <span className="wc-spinner" />
              <span>Looking up warranty information…</span>
            </div>
          )}
          {status === 'found' && (
            <div className="wc-result wc-result--found tp_fade_anim">
              <div className="wc-result-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <strong>Warranty Active</strong>
                <p>Your product <em>{serial}</em> is covered under the 3-Year DeltaView Warranty. Valid until <strong>Sep 2027</strong>.</p>
              </div>
            </div>
          )}
          {status === 'notfound' && (
            <div className="wc-result wc-result--notfound tp_fade_anim">
              <div className="wc-result-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <strong>No Warranty Found</strong>
                <p>We couldn't find a warranty for serial number <em>{serial}</em>. Please check the number and try again.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WarrantyForm;
