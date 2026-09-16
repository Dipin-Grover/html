import React from 'react';

const DownloadHero = () => {
  return (
    <div className="tp-video-area tp-video-spacing p-relative z-index-1 fix">
      <div className="tp-video-thumb">
        <img data-speed=".8" className="img-cover" src="assets/img/video/thumb.webp" alt="" data-lag="0" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-4 col-xl-5 col-lg-6">
            <div className="tp-video-content tp-bg-common-black">
              <h4 className="fw-500 fs-25 fs-xs-20 lh-36 mb-30 tp-text-common-white">
               Access everything you need in one place. Download DeltaView product brochures, specifications, user manuals, software, and other resources to get the most from your interactive panels.
              </h4>
              <span className="tp-hero-bottom-border mb-30">
                <svg height="6" viewBox="0 0 344 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM339 3.5L344 5.88675V0.113249L339 2.5V3.5ZM4.5 3.5H339.5V2.5H4.5V3.5Z" fill="white" fillOpacity="0.5"></path>
                </svg>
              </span>
              <div className="tp-video-main tp-hero-video d-flex align-items-center">
                <p className="tp-ff-heading lh-110-per mb-0 fw-700 fs-40 tp-text-common-white">Download Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadHero;
