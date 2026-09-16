import React, { useEffect, useRef } from "react";

const TeamWorkArea = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    if (!section || !image) return;

    let rafId = null;

    const updateParallax = () => {
      const rect = section.getBoundingClientRect();

      const viewportCenter = window.innerHeight / 2;
      const sectionCenter = rect.top + rect.height / 2;

      
      const speed = 0.4;

      const movement = (viewportCenter - sectionCenter) * speed;

      
      image.style.transform = `translate3d(0, ${movement}px, 0) scale(1.15)`;

      rafId = null;
    };

    const requestUpdate = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    // Initial position
    updateParallax();

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      image.style.transform = "";
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="tp-video-area team-work tp-video-spacing scale-up-img p-relative z-index-1 fix"
    >
      {/* Team Work Image */}
      <div className="tp-video-thumb">
        <img
          ref={imageRef}
          data-speed="0.4"
          className="img-cover scale-up"
          src="/assets/img/video/teamwork.jpg"
          alt=""
        />
      </div>

      <div className="container">
        {/* Heading */}
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="al-step-title-wrap">
              <div className="text-center mb-150">
                <span
                  className="al-section-subtitle fs-12 mb-30 tp_fade_anim"
                  data-delay=".3"
                >
                  Team Workspaces
                </span>

                <h4
                  className="text-white al-section-title fs-40 tp_fade_anim"
                  data-delay=".4"
                >
                  Designed for every workspace. Connect. Collaborate. Create.
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Team Work Items */}
        <div className="row">
          {/* Smart Classroom */}
          <div className="col-xxl-3 col-xl-3 col-lg-3">
            <div className="tp-video-content">
              <h4 className="tp-text-common-black fs-20 mb-50">
                Smart Classroom
              </h4>

              <a
                href="/education"
                className="tp-left-right fw-700 tp-ff-dm fs-16 text-uppercase tp-text-common-black-1"
              >
                <span className="mr10 td-text d-inline-block mr-5">
                  Explore
                </span>

                <span className="tp-arrow-angle">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35765 6.59331L1.14783 13.8037C1.02165 13.9295 0.850656 14.0001 0.672431 14C0.539461 14 0.409486 13.9605 0.298934 13.8866C0.188382 13.8128 0.102217 13.7077 0.0513353 13.5849C0.000453949 13.462 -0.0128613 13.3269 0.013072 13.1965C0.0390053 13.066 0.103024 12.9462 0.197034 12.8522L7.40683 5.64241L2.41379 3.30208Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35765 6.59331L1.14783 13.8037C1.02165 13.9295 0.850656 14.0001 0.672431 14C0.539461 14 0.409486 13.9605 0.298934 13.8866C0.188382 13.8128 0.102217 13.7077 0.0513353 13.5849C0.000453949 13.462 -0.0128613 13.3269 0.013072 13.1965C0.0390053 13.066 0.103024 12.9462 0.197034 12.8522L7.40683 5.64241L2.41379 3.30208Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Conference Room */}
          <div className="col-xxl-3 col-xl-3 col-lg-3">
            <div className="tp-video-content">
              <h4 className="tp-text-common-black fs-20 mb-50">
                Conference Room
              </h4>

              <a
                href="/enterprises"
                className="tp-left-right fw-700 tp-ff-dm fs-16 text-uppercase tp-text-common-black-1"
              >
                <span className="mr10 td-text d-inline-block mr-5">
                  Explore
                </span>

                <span className="tp-arrow-angle">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35765 6.59331L1.14783 13.8037C1.02165 13.9295 0.850656 14.0001 0.672431 14C0.539461 14 0.409486 13.9605 0.298934 13.8866C0.188382 13.8128 0.102217 13.7077 0.0513353 13.5849C0.000453949 13.462 -0.0128613 13.3269 0.013072 13.1965C0.0390053 13.066 0.103024 12.9462 0.197034 12.8522L7.40683 5.64241L2.41379 3.30208Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35765 6.59331L1.14783 13.8037C1.02165 13.9295 0.850656 14.0001 0.672431 14C0.539461 14 0.409486 13.9605 0.298934 13.8866C0.188382 13.8128 0.102217 13.7077 0.0513353 13.5849C0.000453949 13.462 -0.0128613 13.3269 0.013072 13.1965C0.0390053 13.066 0.103024 12.9462 0.197034 12.8522L7.40683 5.64241L2.41379 3.30208Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Huddle Room */}
          <div className="col-xxl-3 col-xl-3 col-lg-3">
            <div className="tp-video-content">
              <h4 className="tp-text-common-black fs-20 mb-50">
                Huddle Room
              </h4>

              <a
                href="/enterprises"
                className="tp-left-right fw-700 tp-ff-dm fs-16 text-uppercase tp-text-common-black-1"
              >
                <span className="mr10 td-text d-inline-block mr-5">
                  Explore
                </span>

                <span className="tp-arrow-angle">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35765 6.59331L1.14783 13.8037C1.02165 13.9295 0.850656 14.0001 0.672431 14C0.539461 14 0.409486 13.9605 0.298934 13.8866C0.188382 13.8128 0.102217 13.7077 0.0513353 13.5849C0.000453949 13.462 -0.0128613 13.3269 0.013072 13.1965C0.0390053 13.066 0.103024 12.9462 0.197034 12.8522L7.40683 5.64241L2.41379 3.30208Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35765 6.59331L1.14783 13.8037C1.02165 13.9295 0.850656 14.0001 0.672431 14C0.539461 14 0.409486 13.9605 0.298934 13.8866C0.188382 13.8129 0.102217 13.7077 0.0513353 13.5849C0.000453949 13.462 -0.0128613 13.3269 0.013072 13.1965C0.0390053 13.066 0.103024 12.9462 0.197034 12.8522L7.40683 5.64241L2.41379 3.30208Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Board Room */}
          <div className="col-xxl-3 col-xl-3 col-lg-3">
            <div className="tp-video-content">
              <h4 className="tp-text-common-black fs-20 mb-50">
                Board Room
              </h4>

              <a
                href="/enterprises"
                className="tp-left-right fw-700 tp-ff-dm fs-16 text-uppercase tp-text-common-black-1"
              >
                <span className="mr10 td-text d-inline-block mr-5">
                  Explore
                </span>

                <span className="tp-arrow-angle">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35765 6.59331L1.14783 13.8037C1.02165 13.9295 0.850656 14.0001 0.672431 14C0.539461 14 0.409486 13.9605 0.298934 13.8866C0.188382 13.8128 0.102217 13.7077 0.0513353 13.5849C0.000453949 13.462 -0.0128613 13.3269 0.013072 13.1965C0.0390053 13.066 0.103024 12.9462 0.197034 12.8522L7.40683 5.64241L2.41379 3.30208Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.41379 3.30208C5.97452 3.05821 10.6092 1.55558 14 0C12.4438 3.39014 10.9406 8.02425 10.6973 11.585L8.35765 6.59331L1.14783 13.8037C1.02165 13.9295 0.850656 14.0001 0.672431 14C0.539461 14 0.409486 13.9605 0.298934 13.8866C0.188382 13.8128 0.102217 13.7077 0.0513353 13.5849C0.000453949 13.066 0.103024 12.9462 0.197034 12.8522L7.40683 5.64241L2.41379 3.30208Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamWorkArea;