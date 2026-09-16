import React from 'react';
import { Link } from 'react-router-dom';

const reasons = [
  { num: '01', title: 'In House R&D Team', desc: 'Engineering Intelligence Around Your Needs', delay: '.3' },
  { num: '02', title: 'Customer-Centric Approach ', desc: 'Where Technology Meets Your Vision', delay: '.5' },
  { num: '03', title: 'Make In India Product', desc: 'Built Here. Designed for the World.', delay: '.7' },
  { num: '04', title: 'Pan India Support', desc: 'Expertise That Moves With You', delay: '.9' },
];

const arrowSvg = (
  <svg width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979851C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665L0.598757 4.26665C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335L19.633 5.73335L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z" fill="currentColor" />
  </svg>
);

const WhyDeltaView = () => {
  return (
    <div className="tp-process-area pt-110 pb-100 tp-bg-common-black p-relative z-index-1">
      <img className="tp-awards-bg-shape" src="assets/img/awards/grid-shape.webp" alt="" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5">
            <div className="tp-process-pp-video-wrap mb-35 tp_fade_anim" data-delay=".3">
              <div className="d-flex mb-30">
                <span>
                  <svg width="104" height="208" viewBox="0 0 104 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M104 104C104 161.438 57.4376 208 0 208V0C57.4376 0 104 46.5624 104 104Z" fill="#5956e9" />
                  </svg>
                </span>
                <div className="tp-process-pp-video-inner p-relative d-inline-block">
                  <img className="tp-process-pp-video-img" src="assets/img/process/pp/bg.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="tp-process-pp-title-inner pt-30 mb-35 tp_fade_anim" data-delay=".5">
              <h2 className="fs-70 fs-sm-40 tp-text-common-white">Why DeltaView?</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* Decorative border line */}
          <div className="col-12 d-none d-lg-block">
            <div className="tp-process-pp-border">
              <svg viewBox="0 0 1320 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z" fill="white" fillOpacity="0.1" />
              </svg>
            </div>
          </div>

          {reasons.map((r) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={r.num}>
              <div
                className="tp-process-pp-item text-center mb-30 tp_fade_anim"
                data-delay={r.delay}
                data-fade-from="left"
              >
                <span className="tp-process-pp-count fw-600 fs-18 mb-40 tp-text-common-black d-inline-block">
                  {r.num}
                </span>
                <h3 className="fs-25 tp-text-common-white lh-140-per mb-20">{r.title}</h3>
                <p className="fs-18 lh-140-per tp-text-grey-2">{r.desc}</p>
              </div>
            </div>
          ))}

          {/* Let's Talk CTA */}
          <div className="col-lg-12">
            <div className="tp-skill-wd-bottom text-center mt-35 tp_fade_anim" data-delay=".5" data-fade-from="bottom" data-ease="bounce">
              <p className="tp-skill-wd-para tp-ff-heading fw-500 fs-18 tp-text-common-white">
                Looking for the perfect solution for your needs?{' '}
                <Link
                  to="/contact"
                  className="ml-40 d-inline-block lh-0 tp-round-26 fs-15 text-uppercase ls-0 tp-btn-switch-animation tp-text-common-blue tp-ff-heading fw-600"
                >
                  <span className="d-flex align-items-center justify-content-center">
                    <span className="btn-text">Let's Talk</span>
                    <span className="btn-icon">{arrowSvg}</span>
                    <span className="btn-icon">{arrowSvg}</span>
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDeltaView;
