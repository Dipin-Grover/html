import React from 'react';
import { Link } from 'react-router-dom';

const ServiceRequestTabs = () => {
  return (
    <div className="contact-area pb-60 p-relative">
      <div className="container">
        <div className="row g-2">
          <div className="col-lg-4 d-flex">
            <Link to="/contact" className="cttab-link">
              <span>
                <svg width="40" height="40" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M4 5V16H20V5H4ZM2 4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V18H2V4.00748ZM1 19H23V21H1V19Z"></path>
                </svg>
              </span>
              <div className="cttab-content">
                <h4 className="text-white">Talk to an Expert</h4>
                <p className="text-white mb-0">
                  Talk to our team to find out how Poppulo can help your business.
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 d-flex">
            <Link to="/service-request" className="cttab-link active">
              <span>
                <svg width="40" height="40" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M22 17.0022C21.999 19.8731 19.9816 22.2726 17.2872 22.8616L16.6492 20.9476C17.8532 20.7511 18.8765 20.0171 19.4649 19H17C15.8954 19 15 18.1046 15 17V13C15 11.8954 15.8954 11 17 11H19.9381C19.446 7.05369 16.0796 4 12 4C7.92038 4 4.55399 7.05369 4.06189 11H7C8.10457 11 9 11.8954 9 13V17C9 18.1046 8.10457 19 7 19H4C2.89543 19 2 18.1046 2 17V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V12.9987V13V17V17.0013V17.0022ZM20 17V13H17V17H20ZM4 13V17H7V13H4Z"></path>
                </svg>
              </span>
              <div className="cttab-content">
                <h4 className="text-white">Service Request</h4>
                <p className="text-white mb-0">
                  We’re always here to help you. Tell us what you’re looking for.
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 d-flex">
            <Link to="/book-demo" className="cttab-link">
              <span>
                <svg width="40" height="40" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
                </svg>
              </span>
              <div className="cttab-content">
                <h4 className="text-white">Book A Demo</h4>
                <p className="text-white mb-0">
                  Talk to our team to find out how Poppulo can help your business.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequestTabs;
