import React from "react";

const HeadlinesIntro = () => {
  return (
    <>
      <div className="col-xl-4 col-lg-3 col-md-3 d-none d-md-block">
        <div className="tp-about-wd-shape tp-team-sa-shape tp-about-sa-shape">

          <span className="shape-1 d-inline-block mr-10">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 40C0 17.9086 17.9086 0 40 0V40H0Z"
                fill="#5956e9"
              />
            </svg>
          </span>

          <span className="shape-1 mb-15">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 40C40 17.9086 22.0914 0 0 0V40H40Z"
                fill="#030303"
              />
            </svg>
          </span>

        </div>
      </div>

      <div className="col-xl-6 col-lg-8 col-md-9">
        <div className="tp-team-sa-title-wrap">

          <h2 className="tp-team-sa-title mb-25">
            Headlines
          </h2>

          <div className="tp-service-2-para tp-techonolgy-para tp-team-sa-para">
            <p className="fs-18">
              We create impactful events with innovative ideas,
              seamless planning, and engaging experiences that bring
              people together. Our focus is on delivering memorable
              moments through creativity, attention to detail, and
              flawless execution, turning every occasion into a
              successful experience.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default HeadlinesIntro;