import React from 'react';

const CanvasHero = () => {
  return (
    <div className="ais-hero-ptb bg-position pt-60 pb-0" data-background="assets/img/banner/hero-thumb-1.webp" style={{ backgroundImage: 'url("assets/img/banner/hero-thumb-1.webp")' }}>
      <div className="container container-1350">
        <div className="row">
          <div className="col-lg-12">
            <div className="ais-hero-wrapper p-relative text-center mb-50">
              <div className="ais-hero-shapes">
                <img src="assets/img/banner/hero-shape-5.webp" alt="" data-lag="0" className="shape-1 tp_fade_anim" data-speed=".9" />
                <img src="assets/img/banner/hero-shape-6.webp" alt="" className="shape-2 tp_fade_anim" data-speed="1.1" />
                <img src="assets/img/banner/hero-shape-7.webp" alt="" className="shape-3 tp_fade_anim" data-speed="1.1" />
                <img src="assets/img/banner/hero-shape-3.webp" alt="" className="shape-5 tp_fade_anim" data-speed="1.1" />
                <img src="assets/img/banner/hero-shape-4.webp" alt="" className="shape-6 tp_fade_anim" data-speed=".9" />
              </div>
              <span className="ais-hero-star d-block mb-10 tp_fade_anim" data-delay=".3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                    <path d="M7.36067 0L9.63512 4.60778L14.7213 5.35121L11.041 8.93586L11.9096 14L7.36067 11.6078L2.81178 14L3.68034 8.93586L0 5.35121L5.08622 4.60778L7.36067 0Z" fill="#FD4621" />
                  </svg>
                ))}
              </span>
              <span className="ais-hero-sub d-inline-block mb-15 tp_fade_anim" data-delay=".4">
                4.5 - 5.3K ratings 120 Reviews
              </span>
              <h4 className="ais-hero-title mb-15 tp_fade_anim" data-delay=".5">
                Unleash Ideas. Create Without Limits. Powered by AI.
              </h4>
              <div className="ais-hero-text tp_fade_anim" data-delay=".6">
                <p>
                  Transform ideas into engaging experiences with DeltaView Canvas AI. Create, visualize, and collaborate effortlessly with intelligent tools that turn every thought and stroke into meaningful content. 
                </p>
              </div>
              <div className="ais-hero-btn tp_fade_anim" data-delay=".8" data-fade-from="top" data-ease="bounce">
                <a className="upd-btn-black-radius btn-style-ai d-inline-flex align-items-center justify-content-between" href="contact-light.html">
                  <span>
                    <span className="text-1">Get Start</span>
                    <span className="text-2">Get Start</span>
                  </span>
                  <i>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                        <path d="M0.75 4.77297C0.335787 4.77297 3.62117e-08 5.10876 0 5.52297C-3.62117e-08 5.93718 0.335786 6.27297 0.75 6.27297L0.75 5.52297L0.75 4.77297ZM13.2803 6.0533C13.5732 5.76041 13.5732 5.28553 13.2803 4.99264L8.50736 0.21967C8.21447 -0.0732232 7.73959 -0.0732233 7.4467 0.21967C7.15381 0.512563 7.15381 0.987437 7.4467 1.28033L11.6893 5.52297L7.4467 9.76561C7.15381 10.0585 7.15381 10.5334 7.4467 10.8263C7.73959 11.1192 8.21447 11.1192 8.50736 10.8263L13.2803 6.0533ZM0.75 5.52297L0.75 6.27297L12.75 6.27297L12.75 5.52297L12.75 4.77297L0.75 4.77297L0.75 5.52297Z" fill="#050312" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                        <path d="M0.75 4.77297C0.335787 4.77297 3.62117e-08 5.10876 0 5.52297C-3.62117e-08 5.93718 0.335786 6.27297 0.75 6.27297L0.75 5.52297L0.75 4.77297ZM13.2803 6.0533C13.5732 5.76041 13.5732 5.28553 13.2803 4.99264L8.50736 0.21967C8.21447 -0.0732232 7.73959 -0.0732233 7.4467 0.21967C7.15381 0.512563 7.15381 0.987437 7.4467 1.28033L11.6893 5.52297L7.4467 9.76561C7.15381 10.0585 7.15381 10.5334 7.4467 10.8263C7.73959 11.1192 8.21447 11.1192 8.50736 10.8263L13.2803 6.0533ZM0.75 5.52297L0.75 6.27297L12.75 6.27297L12.75 5.52297L12.75 4.77297L0.75 4.77297L0.75 5.52297Z" fill="#050312" />
                      </svg>
                    </span>
                  </i>
                </a>
              </div>
            </div>
            <div className="ais-hero-thumb p-relative">
              <video autoPlay controls={false} loop muted src="assets/img/banner/canvas-video.mp4" width="100%"></video>
              <img className="al-hero-seo-shape-1 d-none d-xl-block" data-speed="0.8" src="assets/img/hero-shape.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasHero;
