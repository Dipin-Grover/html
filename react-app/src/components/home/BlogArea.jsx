import React from 'react';

const BlogArea = () => {
  return (
    <div className="tp-blog-area pt-110 p-relative pb-120">
         <div className="container-fluid container-1524">
            <div className="row gx-50">
               <div className="col-12">
                  <div className="tp-team-it-big-title tp-text-perspective" data-delay=".5" data-fade-from="top" data-ease="bounce">
                     <h2 className="tp-ff-inter ls-m-2 lh-1">Our Blog</h2>
                  </div>
               </div>
               <div className="col-xl-5 col-lg-6 col-md-8">
                  <div className="tp-team-it-title-wrap mb-40 p-relative">
                     <span className="tp-about-it-blur"></span>
                     <h2 className="tp-text-revel-anim fix tp-text-common-black-1 fs-60 fs-xl-50 fs-lg-44 fs-xs-38 tp-ff-inter tp-text-common-black-1 mb-30">Explore Insights &amp; Ideas</h2>
                     <p className="tp-section-it-para tp-text-common-black-4 tp-ff-inter lh-150-per tp-text-common-black-4 fs-18 mb-35">Stay updated with the latest trends, insights, innovations, and expert perspectives in
interactive technology, smart classrooms, digital learning, and modern workspaces.</p>
                     <a href="/blogs" className="tp-btn-cst mt-20 d-inline-block mr-5 lh-0 tp-round-26 fs-15 tp-bg-common-blue ls-0 tp-btn-switch-2-animation tp-text-common-white hover-text-white fw-700 tp-ff-dm">
                        <span className="d-flex align-items-center justify-content-center">
                           <span className="btn-text">See All Blogs</span>
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
               <div className="col-xl-7">
                  <div className="tp-blog-it-item-right">
                     <div className="row gx-50">
                        <div className="col-lg-6 col-md-6">
                           <div className="tp-blog-item tp-blog-it-item tp--hover-item mb-40 tp_fade_anim" data-delay=".3">
                              <a href="/blog-details/1" className="tp-blog-thumb d-block p-relative fix d-inline-block">
                                 <div className="tp--hover-img" data-displacement="assets/img/imghover/stripe-mul.png" data-intensity="0.2" data-speedin="1" data-speedout="1">
                                    <img className="w-100" src="/assets/img/blog/cst/thumb.webp" alt="" />
                                 </div>
                              </a>
                              <div className="tp-blog-content">
                                 <div className="tp-blog-meta mb-25">
                                    <span>Web Design</span>
                                    <span className="borders"></span>
                                    <span>02 Feb, 2025</span>
                                 </div>
                                 <h3 className="fs-28 tp-ff-inter tp-text-common-black-1"><a className="underline-black" href="/blog-details/1">Mastering customer journeys with marketing funnel analytics.</a></h3>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                           <div className="tp-blog-item tp-blog-it-item tp--hover-item mb-40 mt-45 tp_fade_anim" data-delay=".5">
                              <a href="blog-details/3" className="tp-blog-thumb d-block p-relative fix d-inline-block">
                                 <div className="tp--hover-img" data-displacement="assets/img/imghover/stripe-mul.png" data-intensity="0.2" data-speedin="1" data-speedout="1">
                                    <img className="w-100" src="/assets/img/blog/cst/thumb-2.webp" alt="" />
                                 </div>
                              </a>
                              <div className="tp-blog-content">
                                 <div className="tp-blog-meta mb-25">
                                    <span>AI Trends</span>
                                    <span className="borders"></span>
                                    <span>02 Feb, 2025</span>
                                 </div>
                                 <h3 className="fs-28 tp-ff-inter tp-text-common-black-1"><a className="underline-black" href="/blog-details/3">The Future of Web Design: Trends to Watch in 2025.</a></h3>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
  );
};

export default BlogArea;
