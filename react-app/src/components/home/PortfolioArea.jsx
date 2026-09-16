import React, { useState, useEffect } from 'react';

const PortfolioArea = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="tp-portfolio-it-area fix bg-position p-relative">
         <div className="container-fluid g-0">
            <div className="service__slider-8">
               <div id="service-bg-img" className={`service-img-${activeIndex + 1}`}>
                  <div className="service-bg service-img-1" style={{ backgroundImage: "url('/assets/img/portfolio/it/bg-1.webp')" }}></div>
                  <div className="service-bg service-img-2" style={{ backgroundImage: "url('/assets/img/portfolio/it/bg.webp')" }}></div>
                  <div className="service-bg service-img-3" style={{ backgroundImage: "url('/assets/img/portfolio/it/bg-2.webp')" }}></div>
                  <div className="service-bg service-img-4" style={{ backgroundImage: "url('/assets/img/portfolio/it/bg-3.webp')" }}></div>
               </div>
            </div>
            <div className="row gx-0 row-cols-xl-4 row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1">
               <div 
                 className={`col service__item-8 ${activeIndex === 0 ? 'active' : ''}`} 
                 onMouseEnter={() => setActiveIndex(0)}
               >
                  <div className="tp-portfolio-it-wrap p-relative">
                     <div className="tp-portfolio-it-content">
                        <div className="tp-portfolio-it-content-inner mb-80">
                           <div className="tp-portfolio-it-tag mb-25">
                              <a href="/careers">Career</a>
                           </div>
                           <h4 className="tp-portfolio-it-title tp-ff-inter tp-text-grey-5 fw-600 fs-26 lh-38">
                              <a href="/careers" className="underline-white">Explore opportunities with DeltaView.</a>
                           </h4>
                        </div>
                        <div className="tp-portfolio-it-btn">
                           <a href="/careers" className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-m-2 text-uppercase tp-btn-switch-animation tp-text-common-black-1 fw-700 tp-ff-inter">
                              <span className="d-flex align-items-center justify-content-center">
                                 <span className="btn-text">View More</span>
                                 <span className="btn-icon">
                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M8 11L13 6M13 6L8 1M13 6H1" stroke="#10302A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                 </span>
                                 <span className="btn-icon">
                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M8 11L13 6M13 6L8 1M13 6H1" stroke="#10302A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                 </span>
                              </span> 
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               <div 
                 className={`col service__item-8 ${activeIndex === 1 ? 'active' : ''}`}
                 onMouseEnter={() => setActiveIndex(1)}
               >
                  <div className="tp-portfolio-it-wrap p-relative">
                     <div className="tp-portfolio-it-content">
                        <div className="tp-portfolio-it-content-inner mb-80">
                           <div className="tp-portfolio-it-tag mb-25">
                              <a href="/headlines">Event Center</a>
                           </div>
                           <h4 className="tp-portfolio-it-title tp-ff-inter tp-text-grey-5 fw-600 fs-26 lh-38">
                              <a href="/headlines" className="underline-white">Discover our latest events and exhibitions.</a>
                           </h4>
                           
                        </div>
                        <div className="tp-portfolio-it-btn">
                           <a href="/headlines" className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-m-2 text-uppercase tp-btn-switch-animation tp-text-common-black-1 fw-700 tp-ff-inter">
                              <span className="d-flex align-items-center justify-content-center">
                                 <span className="btn-text">Learn More</span>
                                 <span className="btn-icon">
                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M8 11L13 6M13 6L8 1M13 6H1" stroke="#10302A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                 </span>
                                 <span className="btn-icon">
                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M8 11L13 6M13 6L8 1M13 6H1" stroke="#10302A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                 </span>
                              </span> 
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               <div 
                 className={`col service__item-8 ${activeIndex === 2 ? 'active' : ''}`}
                 onMouseEnter={() => setActiveIndex(2)}
               >
                  <div className="tp-portfolio-it-wrap p-relative">
                     <div className="tp-portfolio-it-content">
                        <div className="tp-portfolio-it-content-inner mb-80">
                           <div className="tp-portfolio-it-tag mb-25">
                              <a href="/download-center">Download Centre</a>
                           </div>
                           <h4 className="tp-portfolio-it-title tp-ff-inter tp-text-grey-5 fw-600 fs-26 lh-38">
                              <a href="/download-center" className="underline-white">Access product resources and downloads.</a>
                           </h4>
                        </div>
                        <div className="tp-portfolio-it-btn">
                           <a href="/download-center" className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-m-2 text-uppercase tp-btn-switch-animation tp-text-common-black-1 fw-700 tp-ff-inter">
                              <span className="d-flex align-items-center justify-content-center">
                                 <span className="btn-text">Explore</span>
                                 <span className="btn-icon">
                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M8 11L13 6M13 6L8 1M13 6H1" stroke="#10302A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                 </span>
                                 <span className="btn-icon">
                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M8 11L13 6M13 6L8 1M13 6H1" stroke="#10302A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                 </span>
                              </span> 
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               <div 
                 className={`col service__item-8 ${activeIndex === 3 ? 'active' : ''}`}
                 onMouseEnter={() => setActiveIndex(3)}
               >
                  <div className="tp-portfolio-it-wrap p-relative">
                     <div className="tp-portfolio-it-content">
                        <div className="tp-portfolio-it-content-inner mb-80">
                           <div className="tp-portfolio-it-tag mb-25">
                              <a href="https://www.youtube.com/@DeltaViewTechnologies/videos" target='blank'>YouTube Channel</a>
                           </div>
                           <h4 className="tp-portfolio-it-title tp-ff-inter tp-text-grey-5 fw-600 fs-26 lh-38">
                              <a href="https://www.youtube.com/@DeltaViewTechnologies/videos" target='blank' className="underline-white">Watch product videos and tutorials.</a>
                           </h4>
                        </div>
                        <div className="tp-portfolio-it-btn">
                           <a href="https://www.youtube.com/@DeltaViewTechnologies/videos" target='blank' className="tp-btn-cst d-inline-block mr-5 lh-0 tp-round-26 fs-16 tp-bg-common-green-2 ls-m-2 text-uppercase tp-btn-switch-animation tp-text-common-black-1 fw-700 tp-ff-inter">
                              <span className="d-flex align-items-center justify-content-center">
                                 <span className="btn-text">Watch Now</span>
                                 <span className="btn-icon">
                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M8 11L13 6M13 6L8 1M13 6H1" stroke="#10302A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                 </span>
                                 <span className="btn-icon">
                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M8 11L13 6M13 6L8 1M13 6H1" stroke="#10302A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                 </span>
                              </span> 
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
  );
};

export default PortfolioArea;

