import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    num: "01.",
    title: "Our Mission",
    desc: "To transform education and enterprises through AI-powered interactive technology. We aim to make learning, collaboration, and communication smarter and more engaging. We create solutions that deliver meaningful value to users and organizations.",
    img: "/assets/img/about/mission.webp",
  },
  {
    num: "02.",
    title: "Our Focus",
    desc: "We focus on innovation, performance, and ease of use across our interactive solutions. Our technology is designed for smart classrooms, meeting rooms, and modern workspaces. We continuously evolve our products to meet changing customer and industry needs. ",
    img: "/assets/img/about/focus.png",
  },
  {
    num: "03.",
    title: "Product for Everyone",
    desc: "We believe advanced technology should be accessible and useful for everyone. Our Indian origin solutions are designed for schools, colleges, businesses, institutions, and organizations. From education to enterprise, we build technology that connects, empowers, and inspires. ",
    img: "/assets/img/about/product-everyone.png",
  },
  {
    num: "04.",
    title: "Our Core Values",
    desc: "Innovation drives us to create smarter and future-ready technology. Quality and reliability guide every product and customer experience we deliver. Integrity, customer focus, and continuous improvement shape the way we grow. ",
    img: "/assets/img/about/our-values.webp",
  },
];

const MissionValues = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const pinContainer = section.querySelector(
        ".tp-service-pp-pin"
      );

      const panels = gsap.utils.toArray(
        ".tp-service-pp-panel",
        section
      );

      if (!pinContainer || !panels.length) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1199px)", () => {
        const triggers = [];

        panels.forEach((panel, index) => {
          const topOffset = 130 + index * 130;

          const trigger = ScrollTrigger.create({
            trigger: panel,

            // Pin the complete panel
            pin: panel,

            // 130px, 260px, 390px, 520px
            start: `top ${topOffset}px`,

            // Same stacking behavior as PHP
            end: "bottom 120%",
            endTrigger: pinContainer,

            // Prevent extra space from pinned elements
            pinSpacing: false,

            // Smooth refresh calculation
            invalidateOnRefresh: true,

            anticipatePin: 1,

            markers: false,
          });

          triggers.push(trigger);
        });

        // Refresh after all panel dimensions are calculated
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });

        return () => {
          triggers.forEach((trigger) => trigger.kill());
        };
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="tp-service-area pt-110 pb-200"
    >
      <div className="container-fluid p-0">

        {/* HEADER */}
        <div className="tp-service-pp-title-box">
          <div className="row">

            <div className="col-lg-5">
              <div className="tp-about-pp-title-wrap mb-40">

                <span className="tp-section-pp-subtitle mb-15 tp-ff-heading fw-500 fs-18 d-inline-block color-white" style={{ color: "white" }}>
                  What I Do
                </span>

                <div className="tp-hero-sa-shape-2 tp-techonolgy-shape mr-140">
                  <span className="shape-1 mb-5">
                    <svg
                      width="33"
                      height="16"
                      viewBox="0 0 33 16"
                      fill="none"
                    >
                      <path
                        d="M16.6209 4.29153e-05C7.77239 4.29153e-05 0.599251 6.84014 0.599251 15.2778H32.6426C32.6426 6.84014 25.4694 4.29153e-05 16.6209 4.29153e-05Z"
                        fill="#030303"
                      />
                    </svg>
                  </span>

                  <span className="shape-2">
                    <svg
                      width="67"
                      height="44"
                      viewBox="0 0 67 44"
                      fill="none"
                    >
                      <path
                        d="M67 0.25H0V44L67 0.25Z"
                        fill="#7D5DFF"
                      />
                    </svg>
                  </span>
                </div>

              </div>
            </div>

            <div className="col-lg-7">
              <div className="tp-about-pp-title-wrap mb-40">
                <h2 className="tp-section-pp-title fw-400 fs-50 fs-lg-42 fs-xs-30 lh-120-per">
                  Driven by our mission, built on our values, and focused on delivering better solutions.
                </h2>
              </div>
            </div>

          </div>
        </div>

        {/* STACKING PANELS */}
        <div className="tp-service-pp-pin">

          {panels.map((panel, index) => (
            <div
              key={panel.num}
              className="tp-service-pp-item tp-service-pp-panel"
            >
              <div className="row align-items-start">

                {/* NUMBER */}
                <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-1">
                  <div className="tp-service-pp-number">
                    <span>{panel.num}</span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-7">
                  <div className="tp-service-pp-content">

                    <h4 className="tp-section-title text-uppercase tp-text-common-black fs-40 fw-600 mb-30">
                      {panel.title}
                    </h4>

                    <p className="fs-18 tp-text-grey-2 mb-55 w-75">
                      {panel.desc}
                    </p>

                  </div>
                </div>

                {/* IMAGE */}
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                  <div className="tp-service-pp-thumb">
                    <img
                      src={panel.img}
                      alt={panel.title}
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default MissionValues;