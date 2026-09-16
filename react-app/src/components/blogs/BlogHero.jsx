import React from "react";

const BlogHero = () => {
  return (
    <div className="tp-service-hero-area tp-service-hero-spacing p-relative z-index-1">
      {/* Background Circle Shape */}
      <span className="tp-service-hero-shape-2 p-absolute">
        <svg
          className="line-2"
          viewBox="0 0 402 339"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="413.5"
            cy="413.5"
            r="353.5"
            transform="matrix(-1 0 0 1 820 0)"
            stroke="#F0F0F0"
            strokeWidth="120"
          />
        </svg>
      </span>

      <div className="container">
        <div className="row pb-45">
          {/* LEFT – Heading + Spinning Icon + Swinging Arrow */}
          <div className="col-lg-7">
            <div className="tp-service-hero-left p-relative z-index-1 mb-40">
              <h2 className="fs-70 fs-lg-60 fs-xs-40">
                Insights, Ideas &amp;
                <br /> Innovation.
              </h2>

              {/* Spinning breadcrumb icon */}
              <div className="tp-service-details-icon">
                <img
                  className="tp-live-anim-spin"
                  src="/assets/img/breadcrumb/icon.png"
                  alt=""
                />
              </div>

              {/* Swinging arrow — hidden on xs */}
              <span className="tp-service-hero-shape tpswing d-none d-sm-inline-block">
                <svg
                  width="52"
                  height="94"
                  viewBox="0 0 52 94"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 16.1098C5.58433 24.0984 22.6118 44.5692 38.3295 38.0785C46.3521 34.5835 58.2264 23.6551 45.206 5.12554C40.2943 -1.86444 30.6673 -0.666183 25.559 14.1127C22.6118 22.6393 15.2441 43.0714 22.612 61.0456C26.5006 70.5321 38.1332 85.2111 49.1356 90.0043M49.1356 90.0043C44.0601 87.3414 32.8285 84.2126 28.5061 93M49.1356 90.0043C45.8611 88.1736 40.0979 80.8174 43.2414 66.0385M10.2322 38.0785C9.38015 41.6962 8.2675 54.4237 15.144 64.4094"
                    stroke="#030303"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* RIGHT – Description paragraph */}
          <div className="col-lg-5">
            <div className="tp-service-hero-right mt-135">
              <p className="fs-20 lh-140-per">
                Stay ahead with the latest insights, trends, and innovations in AI, interactive technology, digital education, and modern workplaces. Explore expert perspectives, practical ideas, and industry updates from DeltaView to discover smarter ways to learn, collaborate, and work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
