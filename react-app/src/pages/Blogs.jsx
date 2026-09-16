import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlogHero from "../components/blogs/BlogHero";
import BlogList from "../components/blogs/BlogList";
import BlogPagination from "../components/blogs/BlogPagination";

gsap.registerPlugin(ScrollTrigger);

// Mirrors the exact tp_fade_anim logic from main.js (section 41).
// Runs after React paints the DOM so GSAP sees all blog card elements.
const useFadeAnim = (rowRef) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!rowRef.current) return;

      rowRef.current.querySelectorAll(".tp_fade_anim").forEach((item) => {
        const offset   = parseFloat(item.getAttribute("data-fade-offset") || 40);
        const duration = parseFloat(item.getAttribute("data-duration")    || 0.75);
        const from     = item.getAttribute("data-fade-from")  || "bottom";
        const onScroll = item.getAttribute("data-on-scroll")  ?? 1;
        const delay    = parseFloat(item.getAttribute("data-delay") || 0.15);
        const ease     = item.getAttribute("data-ease") || "power2.out";

        const fromVars = {
          opacity:  0,
          ease,
          duration,
          delay,
          x: from === "left" ? -offset : from === "right" ? offset : 0,
          y: from === "top"  ? -offset : from === "bottom" ? offset : 0,
        };

        if (onScroll == 1) {
          fromVars.scrollTrigger = { trigger: item, start: "top 85%" };
        }

        gsap.from(item, fromVars);
      });
    }, rowRef);

    return () => ctx.revert();
  }, []);
};

const Blogs = () => {
  // ref on the real Bootstrap row — no extra wrapper, no display:contents
  const rowRef = useRef(null);
  useFadeAnim(rowRef);

  return (
    <main>
      {/* Section 1 — Top Heading with spinning icon & swinging arrow */}
      <BlogHero />

      {/* Section 2 — Blog cards grid + Pagination
          tp-blog-area > container > row  (matches blogs.php exactly)         */}
      <div className="tp-blog-area pb-140">
        <div className="container">
          {/* rowRef sits directly on the Bootstrap row — GSAP queries from here */}
          <div className="row" ref={rowRef}>
            <BlogList />
            <BlogPagination />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blogs;
