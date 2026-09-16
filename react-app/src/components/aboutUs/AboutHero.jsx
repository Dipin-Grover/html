import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const sectionRef = useRef(null); // ref on the image container (.scale-up-img)
  const imageRef   = useRef(null); // ref on the img itself (.scale-up)

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const image   = imageRef.current;

    if (!section || !image) return;

    // Exact replica of main.js section 29 — scroll-scale-up-img
    // Container is fixed; image scales up as user scrolls through it.
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom",   // animation starts when top of section hits viewport bottom
          end:   "bottom center", // ends when bottom of section hits viewport center
          scrub: 1,              // smoothly tied to scroll position
          markers: false,
        },
      });

      tl.to(image, {
        scale:    1.15,  // same values as main.js
        duration: 1,
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="tp-service-hero-area tp-service-hero-spacing p-relative z-index-1">

      {/* Background Shape */}
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

      {/* Hero Content */}
      <div className="container">
        <div className="row pb-45">

          <div className="col-lg-12">
            <div className="tp-service-hero-left p-relative mb-40">

              <h2 className="fs-55 fs-lg-60 fs-xs-40">
                Empowering Vision. Elevating Experiences
              </h2>

            </div>
          </div>

          <div className="col-lg-12">
            <div className="tp-service-hero-right">

              <p className="fs-16 lh-140-per">
                DeltaView Technologies Pvt. Ltd. Is a leading trusted AI smart board brand for education and enterprises. We have a mission to enhance lives through innovative AI technology. DeltaView provides dynamic and tailored solutions that empower organizations to thrive in a digital world. 
              </p>
              <p className="fs-16 lh-140-per">
                We understand the evolving needs of the education and enterprise sectors. We have in-house R&D team, DeltaView is committed to delivering cutting edge solutions that seamlessly integrate with the modern demands of learning and corporate environments. 
              </p>
              <p className="fs-16 lh-140-per">
                At DeltaView, we believe in the power of innovation to bridge gaps and unlock new possibilities. Our team is passionate about making Indian origin products that not only keep pace with technological advancements but also anticipate the unique AI features for education and enterprises.
              </p>
              <p className="fs-16 lh-140-per">
                Join us in our journey to enrich lives through innovative AI technology. DeltaView is where education and enterprise converge, and every interaction is an opportunity for transformation. Welcome to a world where advanced technology meets purpose. 
              </p>

              <div className="text-center mt-30 mb-10">
                <span className="tpswing d-none d-sm-inline-block">
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
          </div>

        </div>
      </div>

      {/* ── Image with 3D scroll scale effect ──────────────────────────
          overflow:hidden on the container clips the scaled image so it
          doesn't bleed outside its bounds — essential for the effect.   */}
      <div
        ref={sectionRef}
        className="tp-about-me-banner scale-up-img"
        style={{ overflow: "hidden" }}
      >
        <img
          ref={imageRef}
          className="img-cover scale-up"
          src="/assets/img/breadcrumb/thumb-3.webp"
          alt="About Thumbnail"
          style={{
            width:       "100%",
            height:      "100%",
            objectFit:   "cover",
            display:     "block",
            willChange:  "transform",  // hint to browser for GPU compositing
            transformOrigin: "center center",
          }}
        />
      </div>

    </div>
  );
};

export default AboutHero;