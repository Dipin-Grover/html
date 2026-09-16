import React from 'react';

const CtaArea = () => {
  return (
    <div className="ais-cta-ptb">
      <div className="ais-cta-wrapper z-index-1 p-relative pt-90 pb-100" data-bg-color="#F6F4FE">
        <div className="container">
          <div className="ais-cta-shapes">
            <img src="assets/img/update-2/cta/home-3/cta-shape-1.html" alt="" className="shape-1" data-speed=".9" />
            <img src="assets/img/update-2/cta/home-3/cta-shape-2.html" alt="" className="shape-2" data-speed="1.1" />
            <img src="assets/img/update-2/cta/home-3/cta-shape-3.html" alt="" className="shape-3" data-speed="1.1" />
            <img src="assets/img/update-2/cta/home-3/cta-shape-4.html" alt="" className="shape-4" data-speed-x="-.2" />
            <img src="assets/img/update-2/cta/home-3/cta-shape-5.html" alt="" className="shape-5" data-speed=".9" />
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="ais-cta-wrap z-index-1 p-relative text-center">
                <span className="ais-section-subtitle tp_fade_anim" data-delay=".3">Powered by Google</span>
                <h4 className="ais-section-title tp_fade_anim" data-delay=".5">Transform Your Business Experience with the Google Way</h4>
                <div className="ais-cta-text tp_fade_anim" data-delay=".7">
                  <p className="mb-45">Enhance your enterprise with DeltaView and enjoy seamless access to Google Workspace apps and Core Services for smarter collaboration and productivity</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="google-icons text-center">
                <img src="assets/img/google-play.webp" alt="google icons" />
                <h5>Google Play</h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="google-icons text-center">
                <img src="assets/img/google-group.png" alt="google icons" />
                <h5>Core services</h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="google-icons text-center">
                <img src="assets/img/collaboration-tools.webp" alt="google icons" />
                <h5>Collaboration tools</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaArea;
