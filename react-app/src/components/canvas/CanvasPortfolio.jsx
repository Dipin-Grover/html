import React from 'react';

const CanvasPortfolio = () => {
  return (
    <div className="tp-portfolio-area pt-110 pb-70">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-12">
            <div className="tp-portfolio-title-wrap mb-0 tp-text-perspective">
              <h2 className="tp-portfolio-sectitle tp-ff-heading text-uppercase d-flex align-items-center">
                Teach, Create & Share <span className="borders ml-40"></span>
              </h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tp-portfolio-para mb-50">
              <div className="tp_fade_anim" data-delay=".4">
                <p className="fs-18 tp-text-grey-1 lh-28">We pride ourselves on delivering innovative, impactful, and results-driven projects that exceed expectations.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="tp-portfolio-item mb-70">
              <div className="not-hide-cursor" data-cursor="View<br>Demo">
                <a href="portfolio-details-light.html" className="tp-portfolio-thumb mb-20 d-block cursor-hide">
                  <img src="assets/img/portfolio/circle-search.png" alt="" />
                </a>
              </div>
              <div className="tp-portfolio-content">
                <h3 className="tp-portfolio-title fs-25 lh-36 mb-15">
                  <a href="#!" className="underline-black">Circle to Search</a>
                </h3>
                <div className="tp-portfolio-tag">
                  <span>Circle on Image</span>
                  <span>Circle on Text</span>
                  <span>circling content</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tp-portfolio-item p-relative mb-70 ml-110 mt-135">
              <div className="not-hide-cursor" data-cursor="View<br>Demo">
                <a href="#!" className="tp-portfolio-thumb mb-20 d-block cursor-hide">
                  <img src="assets/img/portfolio/ppt-creation.png" alt="" />
                </a>
              </div>
              <div className="tp-portfolio-content">
                <h3 className="tp-portfolio-title fs-25 lh-36 mb-15">
                  <a href="#!" className="underline-black">PPT Creation</a>
                </h3>
                <div className="tp-portfolio-tag">
                  <span>Seamless Use</span>
                  <span>Quick Access</span>
                  <span>Easy Launch</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tp-portfolio-item p-relative mb-70">
              <div className="not-hide-cursor" data-cursor="View<br>Demo">
                <a href="portfolio-details-light.html" className="tp-portfolio-thumb mb-20 d-block cursor-hide" data-intensity="0.6" data-speedin="1" data-speedout="1">
                  <img src="assets/img/portfolio/pdf-insert.png" alt="" />
                </a>
              </div>
              <div className="tp-portfolio-content">
                <h3 className="tp-portfolio-title fs-25 lh-36 mb-15">
                  <a href="#!" className="underline-black">PDF Insert</a>
                </h3>
                <div className="tp-portfolio-tag">
                  <span>Smart Content</span>
                  <span>Quick Integration</span>
                  <span>Content Ready</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tp-portfolio-item p-relative mb-70 mr-110">
              <div className="not-hide-cursor" data-cursor="View<br>Demo">
                <a href="portfolio-details-light.html" className="tp-portfolio-thumb mb-20 d-block cursor-hide" data-displacement="assets/img/imghover/fluid.jpg" data-intensity="0.6" data-speedin="1" data-speedout="1">
                  <img src="assets/img/portfolio/interactive-smart-simulations.png" alt="" />
                </a>
              </div>
              <div className="tp-portfolio-content">
                <h3 className="tp-portfolio-title fs-25 lh-36 mb-15">
                  <a href="#!" className="underline-black">Interactive Smart Simulations</a>
                </h3>
                <div className="tp-portfolio-tag">
                  <span>Virtual Labs</span>
                  <span>Immersive Learning</span>
                  <span>Explore Concepts</span>
                  <span>Realistic Experience</span>
                </div>
              </div>
              <div className="tp-portfolio-btn pt-70 text-center d-none d-lg-block tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                <a href="portfolio-masonary-light.html" className="tp-btn-xl d-inline-block lh-0 tp-round-36 fs-15 tp-bg-theme-primary text-uppercase ls-0 tp-btn-switch-animation tp-text-common-black hover-text-black tp-ff-heading fw-600">
                  <span className="d-flex align-items-center justify-content-center">
                    <span className="btn-text">View All Work</span>
                    <span className="btn-icon">
                      <svg width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979851C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665L0.598757 4.26665C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335L19.633 5.73335L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z" fill="currentColor" />
                      </svg>
                    </span>
                    <span className="btn-icon">
                      <svg width="25" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.675 9.91054L24.72 5.63362C24.806 5.56483 24.8766 5.47086 24.9255 5.36023C24.9744 5.2496 25 5.12579 25 5C25 4.87421 24.9744 4.7504 24.9255 4.63977C24.8766 4.52914 24.806 4.43518 24.72 4.36638L18.675 0.0894619C18.5572 0.0111909 18.4215 -0.0168364 18.2892 0.00979851C18.157 0.0364334 18.0358 0.116215 17.9446 0.236567C17.8535 0.356918 17.7977 0.510993 17.7859 0.674501C17.7742 0.838009 17.8072 1.00165 17.8798 1.13963L19.633 4.26665L0.598757 4.26665C0.439957 4.26665 0.287661 4.34391 0.175371 4.48144C0.0630817 4.61897 0 4.8055 0 5C0 5.1945 0.0630817 5.38103 0.175371 5.51856C0.287661 5.65609 0.439957 5.73335 0.598757 5.73335L19.633 5.73335L17.8798 8.86038C17.8072 8.99835 17.7742 9.16199 17.7859 9.3255C17.7977 9.48901 17.8535 9.64308 17.9446 9.76343C18.0358 9.88378 18.157 9.96357 18.2892 9.9902C18.4215 10.0168 18.5572 9.98881 18.675 9.91054Z" fill="currentColor" />
                      </svg>
                    </span>
                  </span> 
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tp-portfolio-item p-relative mb-70">
              <div className="not-hide-cursor" data-cursor="View<br>Demo">
                <a href="portfolio-details-light.html" className="tp-portfolio-thumb mb-20 d-block cursor-hide" data-displacement="assets/img/imghover/fluid.jpg" data-intensity="0.6" data-speedin="1" data-speedout="1">
                  <img src="assets/img/portfolio/qr.png" alt="" />
                </a>
              </div>
              <div className="tp-portfolio-content">
                <h3 className="tp-portfolio-title fs-25 lh-36 mb-15">
                  <a href="#!" className="underline-black">QR File Transfer</a>
                </h3>
                <div className="tp-portfolio-tag">
                  <span>UI/UX Design</span>
                  <span>2025</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-lg-none">
            <div className="tp-portfolio-btn mb-40 text-center tp_fade_anim" data-delay=".5" data-ease="bounce">
              <a href="#!" className="tp-btn-cst mt-20 d-inline-block mr-5 lh-0 tp-round-26 fs-15 tp-bg-common-blue ls-0 tp-btn-switch-2-animation tp-text-common-white hover-text-white fw-700 tp-ff-dm">
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
        </div>
      </div>
    </div>
  );
};

export default CanvasPortfolio;
