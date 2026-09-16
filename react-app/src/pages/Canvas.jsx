import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CanvasHero from '../components/canvas/CanvasHero';
import CanvasFeatures from '../components/canvas/CanvasFeatures';
import CanvasTechnology from '../components/canvas/CanvasTechnology';
import CanvasPortfolio from '../components/canvas/CanvasPortfolio';
import CanvasFAQ from '../components/canvas/CanvasFAQ';


gsap.registerPlugin(ScrollTrigger);

const useCanvasAnimations = (mainRef) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!mainRef.current) return;

      // 1. tp_fade_anim logic
      mainRef.current.querySelectorAll(".tp_fade_anim").forEach((item) => {
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

        gsap.fromTo(item, fromVars, { ...fromVars, x: 0, y: 0, opacity: 1 });
      });

      // 2. tp-text-perspective logic
      if (typeof window.SplitText !== 'undefined') {
        mainRef.current.querySelectorAll(".tp-text-perspective").forEach((splitTextLine) => {
          const delay_value = parseFloat(splitTextLine.getAttribute("data-delay") || 0.5);
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitTextLine,
              start: 'top 85%',
              duration: 1.5,
              scrub: false,
              toggleActions: 'play none none none'
            }
          });
          const itemSplitted = new window.SplitText(splitTextLine, { type: "lines" });
          gsap.set(splitTextLine, { perspective: 400 });
          itemSplitted.split({ type: "lines" });

          tl.from(itemSplitted.lines, {
            duration: 1,
            delay: delay_value,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1
          });
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);
};

const Canvas = () => {
  const mainRef = useRef(null);
  useCanvasAnimations(mainRef);

  return (
    <main ref={mainRef}>
      <CanvasHero />
      <CanvasFeatures />
      <CanvasTechnology />
      <CanvasPortfolio />
      <CanvasFAQ />
    </main>
  );
};

export default Canvas;
