import React, { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Arrow SVG — same as PHP "Enquire Now" button
const EnquireArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
    <path
      d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM15.2803 6.05328C15.5732 5.76039 15.5732 5.28551 15.2803 4.99262L10.5074 0.219648C10.2145 -0.0732449 9.73959 -0.0732449 9.4467 0.219648C9.15381 0.512542 9.15381 0.987415 9.4467 1.28031L13.6893 5.52295L9.4467 9.76559C9.15381 10.0585 9.15381 10.5334 9.4467 10.8263C9.73959 11.1191 10.2145 11.1191 10.5074 10.8263L15.2803 6.05328ZM0.75 5.52295V6.27295H14.75V5.52295V4.77295H0.75V5.52295Z"
      fill="currentColor"
    />
  </svg>
);

// FAQ data — sourced from enterprises.php
const faqs = [
  {
    id:       'faqOne',
    question: 'What is DeltaView?',
    answer:   'DeltaView is an Indian trusted AI technology brand specializing in AI-powered smart display solutions for education and enterprises. Our solutions enable smarter teaching, collaboration, communication, and productivity.',
    open:     true,
  },
  {
    id:       'faqTwo',
    question: 'What solutions does DeltaView offer?',
    answer:   'DeltaView offers smart boards, DeltaView Canvas, DeltaView Connect, DeltaView Central, DeltaView Learn designed for classrooms, meeting rooms, training spaces, and other professional environments.',
    open:     false,
  },
  {
    id:       'faqThree',
    question: 'Who can use DeltaView products?',
    answer:   'Our products are designed for schools, colleges, universities, businesses, corporates, government institutions, and training organizations, making interactive technology accessible across diverse environments.',
    open:     false,
  },
  {
    id:       'faqFour',
    question: 'Where are DeltaView products made?',
    answer:   'DeltaView is committed to Make in India, combining local expertise, in-house R&D, and advanced technology to develop reliable and future-ready interactive solutions. ',
    open:     false,
  },
  {
    id:       'faqFive',
    question: 'Does DeltaView provide support across India?',
    answer:   'Yes. DeltaView provides Pan-India support and service, backed by a dedicated team to assist customers with installation, product guidance, technical support, and after-sales service. ',
    open:     false,
  },
  
];

const ConnectFAQ = () => {
  const sectionRef = useRef(null);

  // Track open accordion — same UX as Bootstrap data-bs-parent (one open at a time)
  const [openId, setOpenId] = useState('faqOne');

  // Self-contained tp_fade_anim — mirrors main.js section 41
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
    // cst-faq-ptb matches the class in enterprises.php
    <div ref={sectionRef} className="cst-faq-ptb p-relative pt-80 pb-80 bg-light">
      <div className="container">
        <div className="row">

          {/* LEFT — Heading + CTA button */}
          <div className="col-lg-5">
            <div className="cst-faq-heading p-relative mb-50">

              <span className="cst-section-subtitle mb-10 tp_fade_anim" data-delay=".3">
                Faq
              </span>

              <h4 className="cst-section-title mb-50 tp_fade_anim" data-delay=".5">
                Frequently <br /> Asked Questions
              </h4>

              <div className="cst-faq-btn tp_fade_anim" data-delay=".7">
                <a className="cst-btn black-t" href="/contact">
                  <span>
                    <span className="text-1">
                      Enquire Now <EnquireArrow />
                    </span>
                    <span className="text-2">
                      Enquire Now <EnquireArrow />
                    </span>
                  </span>
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT — Accordion FAQ */}
          <div className="col-lg-7">
            <div className="cst-faq-wrap pl-70">
              <div
                className="ai-faq-accordion-wrap tp_fade_anim"
                data-delay=".3"
                data-fade-from="right"
                data-ease="bounce"
              >
                <div className="accordion" id="faqAccordion">
                  {faqs.map((faq) => (
                    <div key={faq.id} className="accordion-items">

                      <h2 className="accordion-header">
                        <button
                          className={`accordion-buttons${openId === faq.id ? '' : ' collapsed'}`}
                          type="button"
                          onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                          aria-expanded={openId === faq.id}
                        >
                          {faq.question}
                          <span className="accordion-icon" />
                        </button>
                      </h2>

                      {/* Accordion body — shown/hidden via React state */}
                      <div
                        className={`accordion-collapse collapse${openId === faq.id ? ' show' : ''}`}
                      >
                        <div className="accordion-body">
                          <p>{faq.answer}</p>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ConnectFAQ;
