import React from 'react';
import './Glossary.css';
import { FiUser, FiMail, FiPhone, FiMapPin, FiCalendar, FiArrowRight } from 'react-icons/fi';

const GlossaryContactForm = () => {
  return (
    <div className="glossary-right-sidebar">
      <div className="glossary-contact-widget">
        <h3 className="glossary-contact-title">Let's Talk</h3>
        <p className="glossary-contact-desc">
          Have a question or need more information? We're here to help.
        </p>

        <form>
          <div className="glossary-form-group">
            <FiUser className="glossary-form-icon" />
            <input type="text" className="glossary-form-input" placeholder="Full Name*" required />
          </div>
          
          <div className="glossary-form-group">
            <FiMail className="glossary-form-icon" />
            <input type="email" className="glossary-form-input" placeholder="Enter Your Email*" required />
          </div>
          
          <div className="glossary-form-group">
            <FiPhone className="glossary-form-icon" />
            <input type="tel" className="glossary-form-input" placeholder="Mobile No*" required />
          </div>
          
          <div className="glossary-form-group">
            <FiMapPin className="glossary-form-icon" />
            <input type="text" className="glossary-form-input" placeholder="Location*" required />
          </div>
          
          <div className="glossary-form-group" style={{ padding: 0 }}>
            <textarea className="glossary-form-textarea" placeholder="Your Message*" style={{ padding: '15px' }} required></textarea>
          </div>
          
          <div className="glossary-captcha-row">
            <div className="glossary-captcha-box">6 + 8 =</div>
            <div className="glossary-captcha-input-wrap">
              <input type="text" placeholder="Enter captcha" required />
            </div>
          </div>
          
          <button type="submit" className="glossary-form-submit">
            Submit <FiArrowRight />
          </button>
        </form>

        <div className="glossary-schedule-call">
          <FiCalendar className="glossary-schedule-icon" />
          <span>Or schedule a quick call with our team</span>
        </div>
      </div>
    </div>
  );
};

export default GlossaryContactForm;
