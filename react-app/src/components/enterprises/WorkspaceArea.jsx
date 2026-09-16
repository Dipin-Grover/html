import React from 'react';

const WorkspaceArea = () => {
  return (
    <div className="workspace-area pb-120 pt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cst-service-heading text-center mb-60">
              <h4 className="cst-section-title tp_fade_anim" data-delay=".1">Transform Your Office with    AI-Powered Smart Board  </h4>
              <p>Make meetings more productive with DeltaView’s Smartboard for business. Designed for modern offices and smart meeting rooms, our AI-powered SmartBoard enable seamless presentations, real-time collaboration, brainstorming, screen sharing, and interactive discussions. Empower your teams to communicate better, collaborate efficiently, and turn ideas into actionable business outcomes with a smarter smart board for office use. </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-7 col-md-12 d-flex">
            <div className="workspace-item mb-30 tp_fade_anim" data-delay=".2">
              <img className="tp_fade_anim" data-delay=".3" src="assets/img/enterprises/workspace1.webp" alt="" />
              <div className="workspace-content">
                <h4 className="cst-service-item-title">
                  Large Meeting Room <span className="px-3">•</span> 75"
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-md-12 d-flex">
            <div className="workspace-item mb-30 tp_fade_anim" data-delay=".2">
              <img src="assets/img/enterprises/workspace2.webp" alt="" />
              <div className="workspace-content">
                <h4 className="cst-service-item-title">
                  Huddle Room <span className="px-3">•</span> 65"
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-md-12 d-flex">
            <div className="workspace-item mb-30 tp_fade_anim" data-delay=".2">
              <img src="assets/img/enterprises/workspace2.webp" alt="" />
              <div className="workspace-content">
                <h4 className="cst-service-item-title">
                  Open Space <span className="px-3">•</span> 86"
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-md-12 d-flex">
            <div className="workspace-item mb-30 tp_fade_anim" data-delay=".2">
              <img src="assets/img/enterprises/workspace1.webp" alt="" />
              <div className="workspace-content">
                <h4 className="cst-service-item-title">
                  Executive Office <span className="px-3">•</span> 98"
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceArea;
