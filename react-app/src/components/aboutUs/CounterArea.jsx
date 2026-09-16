import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Counter data (from about-us.php) ─────────────────────────── */
const counters = [
  {
    end: 50,
    label: 'Cities',
    icon: (
      <svg width="64" height="53" fill="#5956e9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H19V11H17V9H20C20.5523 9 21 9.44772 21 10V19ZM5 5V19H13V5H5ZM7 11H11V13H7V11ZM7 7H11V9H7V7Z" />
      </svg>
    ),
  },
  {
    end: 1000,
    label: 'Installations',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="53" fill="#5956e9">
        <path d="M5.32943 3.27158C6.56252 2.8332 7.9923 3.10749 8.97927 4.09446C10.1002 5.21537 10.3019 6.90741 9.5843 8.23385L20.293 18.9437L18.8788 20.3579L8.16982 9.64875C6.84325 10.3669 5.15069 10.1654 4.02952 9.04421C3.04227 8.05696 2.7681 6.62665 3.20701 5.39332L5.44373 7.63C6.02952 8.21578 6.97927 8.21578 7.56505 7.63C8.15084 7.04421 8.15084 6.09446 7.56505 5.50868L5.32943 3.27158ZM15.6968 5.15512L18.8788 3.38736L20.293 4.80157L18.5252 7.98355L16.7574 8.3371L14.6361 10.4584L13.2219 9.04421L15.3432 6.92289L15.6968 5.15512ZM8.97927 13.2868L10.3935 14.7011L5.09018 20.0044C4.69966 20.3949 4.06649 20.3949 3.67597 20.0044C3.31334 19.6417 3.28744 19.0699 3.59826 18.6774L3.67597 18.5902L8.97927 13.2868Z" />
      </svg>
    ),
  },
  {
    end: 200,
    label: 'Customers',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="53" fill="#5956e9">
        <path d="M12 11C14.7614 11 17 13.2386 17 16V22H15V16C15 14.4023 13.7511 13.0963 12.1763 13.0051L12 13C10.4023 13 9.09634 14.2489 9.00509 15.8237L9 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5.5 14C5.77885 14 6.05009 14.0326 6.3101 14.0942C6.14202 14.594 6.03873 15.122 6.00896 15.6693L6 16L6.0007 16.0856C5.88757 16.0456 5.76821 16.0187 5.64446 16.0069L5.5 16C4.7203 16 4.07955 16.5949 4.00687 17.3555L4 17.5V22H2V17.5C2 15.567 3.567 14 5.5 14ZM18.5 14C20.433 14 22 15.567 22 17.5V22H20V17.5C20 16.7203 19.4051 16.0796 18.6445 16.0069L18.5 16C18.3248 16 18.1566 16.03 18.0003 16.0852L18 16C18 15.3343 17.8916 14.694 17.6915 14.0956C17.9499 14.0326 18.2211 14 18.5 14ZM5.5 8C6.88071 8 8 9.11929 8 10.5C8 11.8807 6.88071 13 5.5 13C4.11929 13 3 11.8807 3 10.5C3 9.11929 4.11929 8 5.5 8ZM18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8ZM12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2Z" />
      </svg>
    ),
  },
  {
    end: 250,
    label: 'Team Experts',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="53" fill="#5956e9">
        <path d="M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" />
      </svg>
    ),
  },
];

/* ─── Pure JS count-up — triggers when item enters viewport ─────── */
function useCountUp(end, duration = 1500, active) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, active]);
  return count;
}

/* ─── Single counter item ───────────────────────────────────────── */
const CounterItem = ({ end, label, icon }) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(end, 1500, active);

  // Trigger count-up when item becomes visible (after the drop animation)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setActive(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="tp-counter-item bounce__anim" ref={ref}>
      <h3 className="fw-500 fs-70 fs-md-50 text-uppercase">
        <span>{count}</span>+
      </h3>
      <span className="fw-500 fs-18 fs-md-15 lh-22 tp-text-grey-1 d-inline-block mb-30">
        {label}
      </span>
      <span>{icon}</span>
    </div>
  );
};

/* ─── Counter Area ──────────────────────────────────────────────── */
const CounterArea = () => {
  const wrapRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = wrapRef.current?.querySelectorAll('.bounce__anim') || [];

      if (items.length === 0) return;

      // Initial hidden state — items start 100px above, invisible
      // Exact replica of main.js section 22
      gsap.set(items, { y: -100, opacity: 0 });

      const isMobile = window.innerWidth < 1023;

      if (isMobile) {
        // Mobile: each item animates individually on scroll
        items.forEach((item) => {
          gsap.timeline({
            scrollTrigger: { trigger: item, start: 'top center+=200' },
          }).to(item, { y: 0, opacity: 1, ease: 'bounce', duration: 1.5 });
        });
      } else {
        // Desktop: all items drop in together with a stagger of 0.3s each
        gsap.to(items, {
          scrollTrigger: {
            trigger: wrapRef.current,
            start: 'top center+=300',
          },
          y: 0,
          opacity: 1,
          ease: 'bounce',       // numbers bounce as they settle — the "falling" effect
          duration: 1.5,
          stagger: { each: 0.3 }, // each counter drops 0.3s after the previous
        });
      }
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="tp-counter-area pb-100 pt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-counter-wrap">
              {/* bounce_animation on wrapper = ScrollTrigger anchor for desktop */}
              <div
                ref={wrapRef}
                className="tp-counter-wrap-box tp-counter-pp-wrap-box bounce_animation"
              >
                {counters.map((c) => (
                  <CounterItem key={c.label} end={c.end} label={c.label} icon={c.icon} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterArea;
