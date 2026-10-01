import React from "react";
import { ArrowRight } from "lucide-react";

const DigitalCurriculum = () => {
  const features = [
    {
      image: "/assets/img/deltaviewLearn/video-lessons.png",
      title: "Video Lessons",
      text: "Learn, Watch, Grow. Video lessons for every learner.",
    },
    {
      image: "/assets/img/deltaviewLearn/books.png",
      title: "eBooks",
      text: "Knowledge at your fingertips. Dive into eBooks.",
    },
    {
      image: "/assets/img/deltaviewLearn/tests.png",
      title: "Practice & Tests",
      text: "Achieve excellence through practice and assessment.",
    },
  ];

  return (
    <section id="digital-curriculum" className="curriculum-section">
      <div className="container">

        <div className="curriculum-heading text-center">
          <span>About DeltaView Learn</span>

          <h2>
            Engaging &amp; Aligned Digital Curriculum
            <br />
            for Complete Learning
          </h2>
        </div>

        <div className="row curriculum-features">

          {features.map((feature, index) => (
            <div className="col-lg-4" key={index}>
              <div className="curriculum-feature">

                <div className="curriculum-image">
                  <img
                    src={feature.image}
                    alt={feature.title}
                  />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>

                <a href="/blogs" className="tp-btn-cst mt-20 d-inline-block mr-5 lh-0 tp-round-26 fs-15 tp-bg-common-blue ls-0 tp-btn-switch-2-animation tp-text-common-white hover-text-white fw-700 tp-ff-dm">
                        <span className="d-flex align-items-center justify-content-center">
                           <span className="btn-text">Explore</span>
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
          ))}

        </div>

      </div>
    </section>
  );
};

export default DigitalCurriculum;