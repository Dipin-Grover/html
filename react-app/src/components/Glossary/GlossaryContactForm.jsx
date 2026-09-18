import React from 'react';
import { FiUser, FiMail, FiPhone, FiMapPin, FiCalendar, FiArrowRight } from 'react-icons/fi';

const GlossaryContactForm = () => {
  return (
    <div className="card border-0 shadow-lg p-5 text-white mb-50" style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0B1120 100%)', borderRadius: '20px', color: 'white'  , position : 'sticky'}}>
      <h3 className="fw-bold mb-3" style={{ fontSize: '1.8rem', color: 'white' }}>Let's Talk</h3>
      <p className="mb-4" style={{ color: '#CBD5E1', fontSize: '0.95rem' }}>
        Have a question or need more information? We're here to help.
      </p>

      <form>
        <div className="input-group mb-3 bg-white rounded">
          <span className="input-group-text bg-white border-0 text-muted ps-3 pe-2">
            <FiUser />
          </span>
          <input type="text" className="form-control border-0 shadow-none py-3" placeholder="Full Name*" required />
        </div>

        <div className="input-group mb-3 bg-white rounded">
          <span className="input-group-text bg-white border-0 text-muted ps-3 pe-2">
            <FiMail />
          </span>
          <input type="email" className="form-control border-0 shadow-none py-3" placeholder="Enter Your Email*" required />
        </div>

        <div className="input-group mb-3 bg-white rounded">
          <span className="input-group-text bg-white border-0 text-muted ps-3 pe-2">
            <FiPhone />
          </span>
          <input type="tel" className="form-control border-0 shadow-none py-3" placeholder="Mobile No*" required />
        </div>

        <div className="input-group mb-3 bg-white rounded">
          <span className="input-group-text bg-white border-0 text-muted ps-3 pe-2">
            <FiMapPin />
          </span>
          <input type="text" className="form-control border-0 shadow-none py-3" placeholder="Location*" required />
        </div>

        <div className="mb-3">
          <textarea className="form-control shadow-none border-0 p-3" rows="4" placeholder="Your Message*" required style={{ resize: 'vertical' }}></textarea>
        </div>

        <div className="d-flex gap-3 mb-4">
          <div className="bg-dark text-white fw-bold d-flex align-items-center justify-content-center rounded" style={{ width: '100px', letterSpacing: '2px' }}>
            6 + 8 =
          </div>
          <div className="flex-grow-1">
            <input type="text" className="form-control border-0 p-3 w-100 h-100" placeholder="Enter captcha" required />
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100 py-3 fw-bold d-flex align-items-center justify-content-center gap-2" style={{ fontSize: '1.05rem', borderRadius: '8px' }}>
          Submit <FiArrowRight />
        </button>
      </form>


    </div>
  );
};

export default GlossaryContactForm;
