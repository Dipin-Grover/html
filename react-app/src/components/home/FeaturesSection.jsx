import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="features-section p-4">
            <div className="container-fliud">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="feature-box">
                        <img src="/assets/img/pro1.jpg" alt="image" />
                        <div className="feature-content">
                           <h3>DeltaView Blaze</h3>
                           <p>Powering Smarter Collaboration</p>
                           <a className="al-btn-blue mb-20 mr-10" href="/blaze">Learn More</a>
                           <a className="tp-btn-cst tp-btn-border tp-btn-seo-border d-inline-block tp-round-26 fs-15 ls-0 tp-btn-switch-2-animation text-blue fw-500 tp-ff-inter" href="/blaze-buy">Buy Now</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="feature-box">
                        <img src="/assets/img/pro2.jpg" alt="image" />
                        <div className="feature-content dark">
                           <h3>DeltaView Spark</h3>
                           <p>Ignite Learning in Every Classroom</p>
                           <a className="al-btn-blue mb-20 mr-10" href="/spark">Learn More</a>
                           <a className="tp-btn-cst tp-btn-border tp-btn-seo-border d-inline-block tp-round-26 fs-15 ls-0 tp-btn-switch-2-animation text-blue fw-500 tp-ff-inter" href="/spark-buy">Buy Now</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="feature-box">
                        <img src="/assets/img/pro3.jpg" alt="image" />
                        <div className="feature-content dark">
                           <h3>DeltaView Connect</h3>
                           <p>Connect. Share. Collaborate Instantly</p>
                           <a className="al-btn-blue mb-20 mr-10" href="/comingSoon">Learn More</a>
                           <a className="tp-btn-cst tp-btn-border tp-btn-seo-border d-inline-block tp-round-26 fs-15 ls-0 tp-btn-switch-2-animation text-blue fw-500 tp-ff-inter" href="/comingSoon">Buy Now</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="feature-box">
                        <img src="/assets/img/pro4.jpg" alt="image" />
                        <div className="feature-content dark">
                           <h3>DeltaView Learn</h3>
                           <p>Learning Made Simple for Every Student</p>
                           <a className="al-btn-blue mb-20 mr-10" href="#!">Learn More</a>
                           <a className="tp-btn-cst tp-btn-border tp-btn-seo-border d-inline-block tp-round-26 fs-15 ls-0 tp-btn-switch-2-animation text-blue fw-500 tp-ff-inter" href="#!">Buy Now</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
       </section>
  );
};

export default FeaturesSection;
