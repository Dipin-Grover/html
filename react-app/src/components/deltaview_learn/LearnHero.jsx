import React from "react";
import {
  ArrowRight,
  Play,
  MonitorPlay,
  BookOpen,
  UsersRound,
  TrendingUp,
  ArrowDown,
} from "lucide-react";

const LearnHero = () => {
  return (
    <section className="learn-hero">
      <div className="learn-hero-overlay"></div>

      <div className="container position-relative h-100">

        <div className="row align-items-center h-100">
          <div className="col-lg-7">

            <div className="learn-hero-content">

              <span className="learn-hero-eyebrow">
                EDUCATION SOLUTION
              </span>

              <h1 className="learn-hero-title">
                Discover
                <br />
                Boundless Learning
                <br />
                with <span>DeltaView® Learn</span>
              </h1>

              <p className="learn-hero-description">
                Transform classrooms with interactive learning
                for Classes 1–12. Engaging. Inclusive. Future-ready.
              </p>

              <div className="learn-hero-actions">

                <a href="/blogs" className="tp-btn-cst mt-20 d-inline-block mr-5 lh-0 tp-round-26 fs-15 tp-bg-common-blue ls-0 tp-btn-switch-2-animation tp-text-common-white hover-text-white fw-700 tp-ff-dm">
                        <span className="d-flex align-items-center justify-content-center">
                           <span className="btn-text">Book a Demo</span>
                           <span className="btn-icon">
                              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M20 6.00071C16.4166 4.67142 11.9705 2.40252 9.21414 0L11.1357 5.31243H0.688756C0.552576 5.31246 0.419232 5.35209 0.305998 5.42773C0.192725 5.50341 0.104852 5.61172 0.0527125 5.73756C0.00064999 5.86334 -0.0134432 6.0016 0.0130924 6.13511C0.0396547 6.26871 0.105682 6.39175 0.201995 6.48809C0.330914 6.61703 0.505697 6.68939 0.688048 6.6897H11.135L9.21414 12C11.9701 9.59697 16.4165 7.32913 20 6.00071Z" fill="currentColor"></path>
                              </svg>
                           </span>
                           <span className="btn-icon">
                              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M20 6.00071C16.4166 4.67142 11.9705 2.40252 9.21414 0L11.1357 5.31243H0.688756C0.552576 5.31246 0.419232 5.35209 0.305998 5.42773C0.192725 5.50341 0.104852 5.61172 0.0527125 5.73756C0.00064999 5.86334 -0.0134432 6.0016 0.0130924 6.13511C0.0396547 6.26871 0.105682 6.39175 0.201995 6.48809C0.330914 6.61703 0.505697 6.68939 0.688048 6.6897H11.135L9.21414 12C11.9701 9.59697 16.4165 7.32913 20 6.00071Z" fill="currentColor"></path>
                              </svg>
                           </span>
                        </span> 
                     </a>

               

              </div>

            </div>

          </div>
        </div>

        <div className="learn-hero-features">

          <div className="learn-hero-feature">
            <MonitorPlay size={28} />
            <div>
              <strong>Interactive</strong>
              <span>Lessons</span>
            </div>
          </div>

          <div className="learn-hero-feature">
            <BookOpen size={28} />
            <div>
              <strong>Curriculum</strong>
              <span>Aligned</span>
            </div>
          </div>

          <div className="learn-hero-feature">
            <UsersRound size={28} />
            <div>
              <strong>For Classes</strong>
              <span>1–12</span>
            </div>
          </div>

          <div className="learn-hero-feature">
            <TrendingUp size={28} />
            <div>
              <strong>Better</strong>
              <span>Learning Outcomes</span>
            </div>
          </div>

        </div>

          <a href="#digital-curriculum" className="learn-scroll">
            <span>
              <ArrowDown size={17} />
            </span>
            Scroll to explore
          </a>

      </div>
    </section>
  );
};

export default LearnHero;