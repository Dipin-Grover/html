import React, { useState } from "react";

const BlazeFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What are the sizes of products?",
      answer:
        'DeltaView intelligent interactive panels are available in a variety of sizes to suit different spaces and requirements. Our standard sizes typically range from 65", 75", 86", up to 98" to ensure the perfect fit for anything from small huddle rooms to large lecture halls and boardrooms.',
    },
    {
      question: "Does this panel connect to a smartphone?",
      answer:
        "Yes, absolutely. DeltaView panels support seamless wireless casting. You can easily connect, mirror, and share content directly from your smartphone, tablet, or laptop (supporting iOS, Android, Windows, and Mac) without the need for additional cables.",
    },
    {
      question: "How much power does it consume?",
      answer:
        'Our panels are designed with energy efficiency in mind. While power consumption varies slightly depending on the screen size, a standard 75" panel generally consumes around 250W to 350W during active use, and drops to less than 0.5W when in standby mode.',
    },
    {
      question: "Can we connect to it remotely?",
      answer:
        "Yes, you can. DeltaView panels are built for modern hybrid collaboration. They support remote device management and are fully compatible with popular video conferencing applications, allowing your team or students to connect, interact, and collaborate from anywhere in the world.",
    },
    {
      question:
        "If I have a problem with the smart board, what is the turnaround time for support?",
      answer:
        "We pride ourselves on our after-sales service. We offer 24/7 Customer Support and a 3-Year On-Site Warranty. Because we cover over 15,000+ serviceable pin codes across India, our technical experts ensure a rapid response, typically providing on-site support and resolving issues within 24 to 48 hours.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="cst-faq-ptb p-relative pt-80 pb-80 bg-light">
      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-lg-5">
            <div className="cst-faq-heading p-relative mb-50">
              <span
                className="cst-section-subtitle mb-10 tp_fade_anim"
                data-delay=".3"
              >
                Faq
              </span>

              <h4
                className="cst-section-title mb-50 tp_fade_anim"
                data-delay=".5"
              >
                Frequently
                <br />
                Asked Questions
              </h4>

              <div
                className="cst-faq-btn tp_fade_anim"
                data-delay=".7"
              >
                <a className="cst-btn black-t" href="/contact">
                  <span>
                    <span className="text-1">
                      Enquire Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                      >
                        <path
                          d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM15.2803 6.05328C15.5732 5.76039 15.5732 5.28551 15.2803 4.99262L10.5074 0.219648C10.2145 -0.0732449 9.73959 -0.0732449 9.4467 0.219648C9.15381 0.512542 9.15381 0.987415 9.4467 1.28031L13.6893 5.52295L9.4467 9.76559C9.15381 10.0585 9.15381 10.5334 9.4467 10.8263C9.73959 11.1191 10.2145 11.1191 10.5074 10.8263L15.2803 6.05328ZM0.75 5.52295V6.27295H14.75V5.52295V4.77295H0.75Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>

                    <span className="text-2">
                      Enquire Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                      >
                        <path
                          d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM15.2803 6.05328C15.5732 5.76039 15.5732 5.28551 15.2803 4.99262L10.5074 0.219648C10.2145 -0.0732449 9.73959 -0.0732449 9.4467 0.219648C9.15381 0.512542 9.15381 0.987415 9.4467 10.8263C9.73959 11.1191 10.2145 11.1191 10.5074 10.8263L15.2803 6.05328ZM0.75 5.52295V6.27295H14.75V5.52295V4.77295Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-7">
            <div className="cst-faq-wrap pl-70">
              <div
                className="ai-faq-accordion-wrap tp_fade_anim"
                data-delay=".3"
                data-fade-from="right"
                data-ease="bounce"
              >
                <div className="accordion">
                  {faqs.map((faq, index) => {
                    const isOpen = activeIndex === index;

                    return (
                      <div className="accordion-items" key={index}>
                        <h2 className="accordion-header">
                          <button
                            type="button"
                            className={`accordion-buttons ${
                              !isOpen ? "collapsed" : ""
                            }`}
                            onClick={() => toggleFaq(index)}
                          >
                            {faq.question}

                            <span className="accordion-icon"></span>
                          </button>
                        </h2>

                        <div
                          className={`accordion-collapse collapse ${
                            isOpen ? "show" : ""
                          }`}
                        >
                          <div className="accordion-body">
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlazeFaq;