import React from 'react';
import { Link } from 'react-router-dom';

const EducationProducts = () => {
  return (
    <div className="tp-feature-area pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ais-feature-heading text-center p-relative mb-50">
              <span className="ais-section-subtitle tp_fade_anim" data-delay=".3">Find Your Perfect Display</span>
              <h4 className="ais-section-title tp_fade_anim" data-delay=".5"> Explore Interactive Flat Panel Sizes</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="tp-service-md-item tp-bg-common-white mb-50 border rounded-4 p-4">
              <span className="d-inline-block mb-20">
                <img src="assets/img/product/product_blaze_65.webp" alt="" className="img-fluid" />
              </span>
              <h3 className="tp-ff-familjen fw-600 fs-18 ls-m-4 tp-text-common-black-5 mb-40">DeltaView Blaze 65″ | DV65B14</h3>
              <Link to="/blaze-buy?size=65" className="tp-service-md-btn text-uppercase tp-left-right hover-text-black d-inline-block tp-text-common-black-5 lh-1 fs-15 fw-800 tp-ff-dm">
                <span className="td-text d-inline-block mr-2">BUY NOW</span>
                <span className="tp-arrow-angle">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="tp-service-md-item tp-bg-common-white mb-50 border rounded-4 p-4">
              <span className="d-inline-block mb-20">
                <img src="assets/img/product/product_blaze_75.webp" alt="" className="img-fluid" />
              </span>
              <h3 className="tp-ff-familjen fw-600 fs-18 ls-m-4 tp-text-common-black-5 mb-40">DeltaView Blaze 75″ | DV75B14</h3>
              <Link to="/blaze-buy?size=75" className="tp-service-md-btn text-uppercase tp-left-right hover-text-black d-inline-block tp-text-common-black-5 lh-1 fs-15 fw-800 tp-ff-dm">
                <span className="td-text d-inline-block mr-2">BUY NOW</span>
                <span className="tp-arrow-angle">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="tp-service-md-item tp-bg-common-white mb-50 border rounded-4 p-4">
              <span className="d-inline-block mb-20">
                <img src="assets/img/product/product_blaze_86.webp" alt="" className="img-fluid" />
              </span>
              <h3 className="tp-ff-familjen fw-600 fs-18 ls-m-4 tp-text-common-black-5 mb-40">DeltaView Blaze 86″ | DV86B14</h3>
              <Link to="/blaze-buy?size=86" className="tp-service-md-btn text-uppercase tp-left-right hover-text-black d-inline-block tp-text-common-black-5 lh-1 fs-15 fw-800 tp-ff-dm">
                <span className="td-text d-inline-block mr-2">BUY NOW</span>
                <span className="tp-arrow-angle">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="tp-service-md-item tp-bg-common-white mb-50 border rounded-4 p-4">
              <span className="d-inline-block mb-20">
                <img src="assets/img/product/product_blaze_98.webp" alt="" className="img-fluid" />
              </span>
              <h3 className="tp-ff-familjen fw-600 fs-18 ls-m-4 tp-text-common-black-5 mb-40">DeltaView Blaze 98″ | DV98B14</h3>
              <Link to="/blaze-buy?size=98" className="tp-service-md-btn text-uppercase tp-left-right hover-text-black d-inline-block tp-text-common-black-5 lh-1 fs-15 fw-800 tp-ff-dm">
                <span className="td-text d-inline-block mr-2">BUY NOW</span>
                <span className="tp-arrow-angle">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationProducts;
