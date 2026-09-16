import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Star SVG ─────────────────────────────────────────────────── */
const StarPath = "M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z";

const StarRating = () => (
  <div className="app-testimonial-item-star">
    {[...Array(5)].map((_, i) => (
      <span key={i}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d={StarPath} fill="#FFAF1B" />
        </svg>
      </span>
    ))}
  </div>
);

/* ─── Google Logo ───────────────────────────────────────────────── */
const GoogleLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
    <path d="M18.9995 15.5454V22.9036H29.2249C28.7759 25.27 27.4285 27.2737 25.4076 28.6209L31.5739 33.4055C35.1667 30.0893 37.2394 25.2183 37.2394 19.432C37.2394 18.0847 37.1185 16.7891 36.8939 15.5456L18.9995 15.5454Z" fill="#4285F4" />
    <path d="M8.35164 22.6162L6.96089 23.6808L2.03809 27.5153C5.16444 33.7161 11.5721 37.9998 18.9994 37.9998C24.1292 37.9998 28.4301 36.3071 31.5738 33.4054L25.4075 28.6208C23.7147 29.7608 21.5556 30.4517 18.9994 30.4517C14.0594 30.4517 9.86224 27.1181 8.3594 22.6272L8.35164 22.6162Z" fill="#34A853" />
    <path d="M2.03803 10.4846C0.74265 13.0409 0 15.9255 0 19C0 22.0744 0.74265 24.959 2.03803 27.5153C2.03803 27.5325 8.35996 22.6098 8.35996 22.6098C7.97996 21.4699 7.75535 20.2608 7.75535 18.9998C7.75535 17.7387 7.97996 16.5297 8.35996 15.3897L2.03803 10.4846Z" fill="#FBBC05" />
    <path d="M18.9998 7.56545C21.798 7.56545 24.2852 8.5327 26.2716 10.3982L31.7124 4.95734C28.4133 1.88284 24.1298 0 18.9998 0C11.5725 0 5.16444 4.26636 2.03809 10.4846L8.35982 15.39C9.86246 10.8991 14.0598 7.56545 18.9998 7.56545Z" fill="#EA4335" />
  </svg>
);

/* ─── Single card — fixed 300px width so marquee is uniform ─────── */
const TestimonialCard = ({ name, role, text, img }) => (
  <div
    className="app-testimonial-item"
    style={{
      minWidth: '460px',  /* exact value from main.css */
      flexShrink: 0,
    }}
  >
    <div className="app-testimonial-item-icon-box d-flex align-items-center mb-20">
      <div className="app-testimonial-item-icon">
        <span>
          <img src={img || '/assets/img/testi1.webp'} alt={name} />
        </span>
      </div>
      <div className="app-testimonial-item-icon-content">
        <h4 className="app-testimonial-item-icon-title">{name}</h4>
        <p>{role}</p>
      </div>
    </div>
    <div className="app-testimonial-item-content">
      <p>{text}</p>
      <StarRating />
    </div>
  </div>
);

/* ─── Row: infinite marquee using main.css keyframes ───────────────
   direction "left"  → marquee-horizontal      (RTL, row 1 / top)
   direction "right" → marquee-horizontal-rtl  (LTR, row 2 / bottom) */
const TestimonialRow = ({ items, direction = 'left' }) => {
  // 4× duplication for a seamless loop on any viewport
  const looped = [...items, ...items, ...items, ...items];

  // Row 1 uses the default animation already on .app-testimonial-wrapper (main.css).
  // Row 2 overrides it to the reverse keyframe via inline style.
  const rowStyle = direction === 'right'
    ? { animationName: 'marquee-horizontal-rtl' }
    : {};

  return (
    <div
      className="app-testimonial-wrapper"
      style={{ ...rowStyle, marginBottom: '20px', position: 'relative' }}
    >
      {/* Left edge fade */}
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0, width: 120,
        background: 'linear-gradient(to right, #f6f4fe 0%, transparent 100%)',
        zIndex: 2, pointerEvents: 'none',
      }} />
      {/* Right edge fade */}
      <div style={{
        position: 'absolute', top: 0, right: 0, bottom: 0, width: 120,
        background: 'linear-gradient(to left, #f6f4fe 0%, transparent 100%)',
        zIndex: 2, pointerEvents: 'none',
      }} />

      <div
        className="app-testimonial-slider"
        style={{ display: 'flex', alignItems: 'stretch' }}
      >
        {looped.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </div>
  );
};

/* ─── Main block ────────────────────────────────────────────────── */
const TestimonialsBlock = ({ testimonials }) => {
  const sectionRef = useRef(null);

  // Google badge fade-in from top — same as main.js tp_fade_anim
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      sectionRef.current?.querySelectorAll('.tp_fade_anim').forEach((item) => {
        const delay  = parseFloat(item.getAttribute('data-delay') || 0.15);
        const from   = item.getAttribute('data-fade-from') || 'bottom';
        const ease   = item.getAttribute('data-ease') || 'power2.out';
        gsap.from(item, {
          opacity: 0, ease, duration: 0.75, delay,
          x: from === 'left' ? -40 : from === 'right' ? 40 : 0,
          y: from === 'top'  ? -40 : from === 'bottom' ? 40 : 0,
          scrollTrigger: { trigger: item, start: 'top 85%' },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Split: first half → row 1 (scrolls left = RTL), second half → row 2 (scrolls right = LTR)
  const mid  = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, mid);
  const row2 = testimonials.slice(mid);

  return (
    <div
      ref={sectionRef}
      className="ais-testimonial-ptb p-relative pt-100 pb-80"
      style={{ backgroundColor: '#f6f4fe' }}   /* applied directly — no JS needed */
    >
      {/* ── Header ── */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="app-testimonial-warp mb-55">
              <div className="app-testimonial-heading text-center p-relative mb-20">
                <span className="ais-section-subtitle">Our Testimonial</span>
                <h4 className="ais-section-title">
                 Built on Trust. Backed by Experience. 
                </h4>
                <div className="app-testimonial-big-text">
                  <h3>4.86</h3>
                </div>
              </div>

              {/* Google review badge */}
              <div
                className="app-testimonial-review-width tp_fade_anim"
                data-delay=".6"
                data-fade-from="top"
                data-ease="bounce"
              >
                <div className="app-testimonial-review">
                  <div className="app-testimonial-review-icon">
                    <span><GoogleLogo /></span>
                  </div>
                  <div className="app-testimonial-review-content">
                    <span>
                      <i>4.9/5</i>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <path d="M6.12215 1.09728C6.24667 0.739057 6.75328 0.739057 6.8778 1.09728L8.17194 4.82036C8.22687 4.97839 8.37435 5.08554 8.54162 5.08895L12.4824 5.16925C12.8616 5.17698 13.0181 5.6588 12.7159 5.88792L9.57495 8.26922C9.44163 8.37029 9.3853 8.54366 9.43375 8.70379L10.5751 12.4765C10.685 12.8395 10.2751 13.1373 9.9638 12.9207L6.72845 10.6693C6.59112 10.5738 6.40883 10.5738 6.2715 10.6693L3.03615 12.9207C2.72485 13.1373 2.31499 12.8395 2.42481 12.4765L3.5662 8.70379C3.61465 8.54366 3.55832 8.37029 3.425 8.26922L0.284053 5.88792C-0.0181605 5.6588 0.138392 5.17698 0.517561 5.16925L4.45833 5.08895C4.6256 5.08554 4.77308 4.97839 4.82801 4.82036L6.12215 1.09728Z" fill="#FFAF1B" />
                        </svg>
                      ))}
                    </span>
                    <p>Based on 1,258 reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Two marquee rows ── */}
      <div className="ais-testimonial-wrap z-index-1 p-relative">
        {/* Row 1: moves RIGHT → LEFT (same as PHP top row) */}
        <TestimonialRow items={row1} direction="left" />
        {/* Row 2: moves LEFT → RIGHT (same as PHP bottom row) */}
        <TestimonialRow items={row2} direction="right" />
      </div>
    </div>
  );
};

export default TestimonialsBlock;
