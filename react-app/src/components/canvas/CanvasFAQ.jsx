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
    question: 'What is DeltaView Canvas AI?',
    answer:   'DeltaView Canvas AI is an AI-powered interactive whiteboard software designed for smarter teaching, brainstorming, content creation, and collaboration.',
    open:     true,
  },
  {
    id:       'faqTwo',
    question: 'What can I do with DeltaView Canvas AI?',
    answer:   'You can write, draw, annotate, create content, convert handwriting to text, visualize ideas, and collaborate using intelligent digital tools.',
    open:     false,
  },
  {
    id:       'faqThree',
    question: 'How does AI enhance DeltaView Canvas?',
    answer:   'AI helps users work more efficiently with features such as intelligent handwriting recognition, AI-assisted content creation, smart search, and interactive visualization tools. ',
    open:     false,
  },
  {
    id:       'faqFour',
    question: 'Can DeltaView Canvas AI be used for education and business?',
    answer:   'Yes. DeltaView Canvas AI is suitable for classrooms, training rooms, meetings, presentations, brainstorming sessions, and collaborative workspaces. ',
    open:     false,
  },
  {
    id:       'faqFive',
    question: 'Can I collaborate and share content using DeltaView Canvas AI?',
    answer:   'Yes. Canvas AI enables users to annotate, present, share, and collaborate on digital content, making ideas easier to communicate and work on together.',
    open:     false,
  },
  
];

const FaqSection = () => {
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

export default FaqSection;
