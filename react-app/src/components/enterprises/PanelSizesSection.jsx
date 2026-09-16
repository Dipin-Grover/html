import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Arrow SVG — same as PHP read more arrow
const ArrowSvg = () => (
  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 11L12 1M12 1H3.44444M12 1V8.77778" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M1 11L12 1M12 1H3.44444M12 1V8.77778" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Product panel data — sourced from enterprises.php
const panels = [
  {
    img:   '/assets/img/product/product_blaze_65.webp',
    name:  'DeltaView Blaze 65" | DV65B14',
    href:  '#!',
    size:  '65',
  },
  {
    img:   '/assets/img/product/product_blaze_75.webp',
    name:  'DeltaView Blaze 75" | DV75B14',
    href:  '#!',
    size:  '75',
  },
  {
    img:   '/assets/img/product/product_blaze_86.webp',
    name:  'DeltaView Blaze 86" | DV86B14',
    href:  '#!',
    size:  '86',
  },
  {
    img:   '/assets/img/product/product_blaze_98.webp',
    name:  'DeltaView Blaze 98" | DV98B14',
    href:  '#!',
    size:  '98',
  },
];

const PanelSizesSection = () => {
  const sectionRef = useRef(null);

  // Self-contained tp_fade_anim — same pattern as main.js section 41
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      sectionRef.current?.querySelectorAll('.tp_fade_anim').forEach((item) => {
        const delay  = parseFloat(item.getAttribute('data-delay') || 0.15);
        const from   = item.getAttribute('data-fade-from')  || 'bottom';
        const ease   = item.getAttribute('data-ease')       || 'power2.out';
        const offset = parseFloat(item.getAttribute('data-fade-offset') || 40);
        gsap.from(item, {
          opacity: 0, ease, duration: 0.75, delay,
          x: from === 'left' ? -offset : from === 'right' ? offset : 0,
          y: from === 'top'  ? -offset : from === 'bottom' ? offset : 0,
          scrollTrigger: { trigger: item, start: 'top 85%' },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    // tp-feature-area matches the class in enterprises.php
    <div ref={sectionRef} className="tp-feature-area pb-80">
      <div className="container">

        {/* Section Heading */}
        <div className="row">
          <div className="col-lg-12">
            <div className="ais-feature-heading text-center p-relative mb-50">
              <span className="ais-section-subtitle tp_fade_anim" data-delay=".3">
                Find Your Perfect Display
              </span>
              <h4 className="ais-section-title tp_fade_anim" data-delay=".5">
                Explore Interactive Flat Panel Sizes
              </h4>
            </div>
          </div>
        </div>

        {/* Panel Cards Grid */}
        <div className="row">
          {panels.map((panel, i) => (
            <div key={i} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
              <div className="tp-service-md-item tp-bg-common-white mb-50">
                {/* Product Image */}
                <span className="d-inline-block mb-20">
                  <img src={panel.img} alt={panel.name} />
                </span>

                {/* Product Name */}
                <h3 className="tp-ff-familjen fw-600 fs-20 ls-m-4 tp-text-common-black-5 mb-40">
                  {panel.name}
                </h3>

                {/* Read More CTA */}
                <Link
                  to={`/blaze-buy?size=${panel.size}`}
                  className="tp-service-md-btn text-uppercase tp-left-right hover-text-black d-inline-block tp-text-common-black-5 lh-1 fs-16 fw-800 tp-ff-dm"
                >
                  <span className="td-text d-inline-block mr-5">Buy Now</span>
                  <span className="tp-arrow-angle">
                    <ArrowSvg />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PanelSizesSection;
