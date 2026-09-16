import React from 'react';

const CareerBanner = () => {
  return (
      <div className="tp-careers-area">
        <div className="tp-careers-cst-result fix p-relative">
            <img className="tp-careers-cst-shape tp-live-anim-spin" src="assets/img/shape.webp" alt="" />
            <div className="d-flex justify-content-between">
               <div>
                  <h3 className="tp-ff-dm tp-text-common-white fs-42 lh-120-per mb-15">
                     Build the Future with <span className="tp-text-common-blue-2">DeltaView</span>
                     
                  </h3>
                  <p className="tp-ff-dm fs-18 lh-140-per tp-text-grey-5 w-50">At DeltaView, we bring together technology, creativity, and innovation to transform how people learn, collaborate, and work. Join a growing team where your ideas have an impact, your skills are valued, and every challenge is an opportunity to create something meaningful</p>
               </div>
            </div>
            <a href="#positionlist" className="tp-btn-cst tp-testimonial-cst-btn d-inline-block lh-0 tp-round-26 fs-15 ls-0 tp-btn-switch-2-animation tp-text-common-white hover-text-white fw-700 tp-ff-dm">
               <span className="d-flex align-items-center justify-content-center">
                  <span className="btn-text">View Our Open Roles</span>
                  <span className="btn-icon">
                     <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6.00071C16.4166 4.67142 11.9705 2.40252 9.21414 0L11.1357 5.31243H0.688756C0.552576 5.31246 0.419232 5.35209 0.305998 5.42773C0.192725 5.50341 0.104852 5.61172 0.0527125 5.73756C0.00064999 5.86334 -0.0134432 6.0016 0.0130924 6.13511C0.0396547 6.26871 0.105682 6.39175 0.201995 6.48809C0.330914 6.61703 0.505697 6.68939 0.688048 6.6897H11.135L9.21414 12C11.9701 9.59697 16.4165 7.32913 20 6.00071Z" fill="currentColor"></path>
                     </svg>
                  </span>
                  <span className="btn-icon">
                     <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6.00071C16.4166 4.67142 11.9705 2.40252 9.21414 0L11.1357 5.31243H0.688756C0.552576 5.31246 0.419232 5.35209 0.305998 5.42773C0.192725 5.50341 0.104852 5.61172 0.0527125 5.73756C0.00064999 5.86334 -0.0134432 6.0016 0.0130924 6.13511C0.0396547 6.26871 0.105682 6.39175 0.201995 6.48809C0.330914 6.61703 0.505697 6.68939 0.688048 6.6897H11.135L9.21414 12C11.9701 9.59697 16.4165 7.32913 20 6.00071Z" fill="currentColor"></path>
                     </svg>
                  </span>
               </span> 
            </a>
         </div>
      </div>
  );
};

export default CareerBanner;
