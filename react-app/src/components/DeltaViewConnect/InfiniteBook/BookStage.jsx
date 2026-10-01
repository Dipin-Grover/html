import { useEffect, useRef } from "react";
import { SPREADS } from "./scene";
import { Right, Left } from "./BookPages";

import "../../../../public/assets/css/main.css";

const clamp = (v, a, b) =>
  Math.min(b, Math.max(a, v));

const ease = (f) =>
  0.35 * f +
  0.65 * (
    f < 0.5
      ? 4 * f ** 3
      : 1 - (-2 * f + 2) ** 3 / 2
  );

const BookStage = ({
  period = 1700,
  tilt = 45,
}) => {
  const n = SPREADS.length;
  const refs = useRef([]);

  useEffect(() => {
    const render = (p) =>
      refs.current.forEach((el, i) => {
        if (!el) return;

        const d =
          ((((i - p + n / 2) % n) + n) % n) -
          n / 2;

        const ad = Math.abs(d);

        el.style.transform = `translateZ(${-ad * 6}px) rotateY(${clamp(
          -90 + tilt * d,
          -180,
          0
        )}deg)`;

        el.style.visibility =
          ad > 3.2 ? "hidden" : "visible";

        el.style.setProperty(
          "--dim",
          (
            0.06 +
            (0.3 *
              clamp(ad - 0.8, 0, 1.4)) /
            1.4
          ).toFixed(3)
        );
      });

    let raf;

    const t0 = performance.now();

    const tick = (now) => {
      const t = (now - t0) / period;
      const b = Math.floor(t);

      render(b + ease(t - b));

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [n, period, tilt]);

  return (
    <div className="bf-stage">

      {/* LEFT SIDE HEADING */}
      <div className="connect-intro">




        <h1>
          <span className="connect-title-gradient-bold">
            DeltaView
          </span>

          <br />

          <span className="connect-title-gradient-bold">
            Connect
          </span>
        </h1>

        <p>
          Unlocking Possibilities, Safeguarding Privacy – Your Platform for Secure Collaboration
        </p>

        <div className="d-flex align-items-center mt-30" style={{ gap: "15px" }}>


          <a href="/blaze-buy" className="tp-btn-cst mt-20 d-inline-block mr-5 lh-0 tp-round-26 fs-15 tp-bg-common-blue ls-0 tp-btn-switch-2-animation tp-text-common-white hover-text-white fw-700 tp-ff-dm" style={{ position: "relative", zIndex: 100, pointerEvents: "auto", }} > <span className="d-flex align-items-center justify-content-center"> <span className="btn-text"> Buy Now </span> <span className="btn-icon"> <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M20 6.00071C16.4166 4.67142 11.9705 2.40252 9.21414 0L11.1357 5.31243H0.688756C0.552576 5.31246 0.419232 5.35209 0.305998 5.42773C0.192725 5.50341 0.104852 5.61172 0.0527125 5.73756C0.00064999 5.86334 -0.0134432 6.0016 0.0130924 6.13511C0.0396547 6.26871 0.105682 6.39175 0.201995 6.48809C0.330914 6.61703 0.505697 6.68939 0.688048 6.6897H11.135L9.21414 12C11.9701 9.59697 16.4165 7.32913 20 6.00071Z" fill="currentColor" /> </svg> </span> <span className="btn-icon"> <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M20 6.00071C16.4166 4.67142 11.9705 2.40252 9.21414 0L11.1357 5.31243H0.688756C0.552576 5.31246 0.419232 5.35209 0.305998 5.42773C0.192725 5.50341 0.104852 5.61172 0.0527125 5.73756C0.00064999 5.86334 -0.0134432 6.0016 0.0130924 6.13511C0.0396547 6.26871 0.105682 6.39175 0.201995 6.48809C0.330914 6.61703 0.505697 6.68939 0.688048 6.6897H11.135L9.21414 12C11.9701 9.59697 16.4165 7.32913 20 6.00071Z" fill="currentColor" /> </svg> </span> </span> </a>


          <a href="/book-demo" className="tp-btn-cst mt-20 d-inline-block mr-5 lh-0 tp-round-26 fs-15 tp-bg-common-blue ls-0 tp-btn-switch-2-animation tp-text-common-white hover-text-white fw-700 tp-ff-dm" style={{ position: "relative", zIndex: 100, pointerEvents: "auto", }} > <span className="d-flex align-items-center justify-content-center"> <span className="btn-text"> Book a Demo </span> <span className="btn-icon"> <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M20 6.00071C16.4166 4.67142 11.9705 2.40252 9.21414 0L11.1357 5.31243H0.688756C0.552576 5.31246 0.419232 5.35209 0.305998 5.42773C0.192725 5.50341 0.104852 5.61172 0.0527125 5.73756C0.00064999 5.86334 -0.0134432 6.0016 0.0130924 6.13511C0.0396547 6.26871 0.105682 6.39175 0.201995 6.48809C0.330914 6.61703 0.505697 6.68939 0.688048 6.6897H11.135L9.21414 12C11.9701 9.59697 16.4165 7.32913 20 6.00071Z" fill="currentColor" /> </svg> </span> <span className="btn-icon"> <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M20 6.00071C16.4166 4.67142 11.9705 2.40252 9.21414 0L11.1357 5.31243H0.688756C0.552576 5.31246 0.419232 5.35209 0.305998 5.42773C0.192725 5.50341 0.104852 5.61172 0.0527125 5.73756C0.00064999 5.86334 -0.0134432 6.0016 0.0130924 6.13511C0.0396547 6.26871 0.105682 6.39175 0.201995 6.48809C0.330914 6.61703 0.505697 6.68939 0.688048 6.6897H11.135L9.21414 12C11.9701 9.59697 16.4165 7.32913 20 6.00071Z" fill="currentColor" /> </svg> </span> </span> </a>


          

      </div>
    </div>




      {/* BOOK — EXISTING LOGIC UNCHANGED */ }
  <div className="bf-book">

    {SPREADS.map((_, j) => {
      const spread = SPREADS[(j - 1 + n) % n];

      return (
        <div
          className="bf-leaf"
          key={j}
          ref={(el) => (refs.current[j] = el)}
        >

          {/* RIGHT PAGE */}
          <div className="bf-face">
            <Right s={spread} />
          </div>

          {/* LEFT PAGE */}
          <div className="bf-face bf-back">
            <Left s={spread} />
          </div>

        </div>
      );
    })}

  </div>
    </div >
  );
};

export default BookStage;