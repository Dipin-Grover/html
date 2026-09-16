import React, { useEffect } from 'react';
import CanvasTechnologyCapsules from './CanvasTechnologyCapsules';

const CanvasTechnology = () => {
  useEffect(() => {
    // Re-initialize throwable on mount
    if (window.jQuery && typeof window.jQuery.fn.tpThrowable === 'function') {
      window.jQuery("[data-tp-throwable-scene]").tpThrowable();
    }
  }, []);

  return (
    <div className="tp-techonolgy-area tp-bg-common-white-2 pt-100 tp-techonolgy-capsule-wrapper" data-tp-throwable-scene="true">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-8">
            <div className="tp-techonolgy-title-wrap">
              <h2 className="fs-50 fs-xs-40 lh-120-per mb-60 tp_fade_anim" data-delay=".3">Explore Powerful Features</h2>
              <div className="tp-service-2-para tp-techonolgy-para tp_fade_anim" data-delay=".5">
                <p className="fs-18">Explore intelligent tools designed to make writing, teaching, brainstorming, and collaboration faster and more engaging. DeltaView Canvas AI brings AI-powered functionality to your fingertips, helping turn ideas into interactive digital content effortlessly.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="tp-techonolgy-ratings-inner mt-30 p-relative">
              <div className="tp-hero-sa-shape-2 tp-techonolgy-shape tp_fade_anim" data-delay=".7" data-fade-from="top" data-ease="bounce">
                <span className="shape-1 mb-5">
                  <svg width="41" height="20" viewBox="0 0 41 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.6087 -1.90735e-06C9.34689 -1.90735e-06 0.217392 8.70558 0.217392 19.4445H41C41 8.70558 31.8705 -1.90735e-06 20.6087 -1.90735e-06Z" fill="#030303" />
                  </svg>
                </span>
                <span className="shape-2">
                  <svg width="67" height="44" viewBox="0 0 67 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M67 0.25H0V44L67 0.25Z" fill="#7D5DFF" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CanvasTechnologyCapsules />
    </div>
  );
};

export default CanvasTechnology;
