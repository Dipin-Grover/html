import React from 'react';

const faqList = [
  {
    id: 'collapseOne',
    question: 'Services do you offer?',
    answer: 'Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.'
  },
  {
    id: 'collapseTwo',
    question: 'Is there a mobile app available?',
    answer: 'Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.'
  },
  {
    id: 'collapseThree',
    question: 'Google mobile can monetize your app?',
    answer: 'Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.'
  },
  {
    id: 'collapseFour',
    question: 'Do you offer customer support?',
    answer: 'Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.'
  },
  {
    id: 'collapseFive',
    question: 'How quickly can I schedule a service?',
    answer: 'Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.'
  },
  {
    id: 'collapseSix',
    question: 'Warranty on your work?',
    answer: 'Track Your Income and Expenses: With our app, you can easily track your income and expenses, so you always know where your money is going.'
  }
];

const TutorialFAQ = () => {
  return (
    <div className="cst-faq-ptb p-relative pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cst-faq-heading p-relative mb-50">
              <span
                className="cst-section-subtitle mb-10 tp_fade_anim"
                data-delay=".3"
                style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1 }}
              >
                Faq
              </span>
              <h4
                className="cst-section-title mb-50 tp_fade_anim"
                data-delay=".5"
                style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1 }}
              >
                Comprehensive <br /> Handyman Solutions
              </h4>
              <div
                className="cst-faq-btn tp_fade_anim"
                data-delay=".7"
                style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1 }}
              >
                <a className="cst-btn black-t" href="#!">
                  <span>
                    <span className="text-1">
                      Enquire Now
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none" className="ms-2">
                        <path d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM15.2803 6.05328C15.5732 5.76039 15.5732 5.28551 15.2803 4.99262L10.5074 0.219648C10.2145 -0.0732449 9.73959 -0.0732449 9.4467 0.219648C9.15381 0.512542 9.15381 0.987415 9.4467 1.28031L13.6893 5.52295L9.4467 9.76559C9.15381 10.0585 9.15381 10.5334 9.4467 10.8263C9.73959 11.1191 10.2145 11.1191 10.5074 10.8263L15.2803 6.05328ZM0.75 5.52295V6.27295H14.75V5.52295V4.77295H0.75V5.52295Z" fill="currentColor"></path>
                      </svg>
                    </span>
                    <span className="text-2">
                      Enquire Now
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none" className="ms-2">
                        <path d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM15.2803 6.05328C15.5732 5.76039 15.5732 5.28551 15.2803 4.99262L10.5074 0.219648C10.2145 -0.0732449 9.73959 -0.0732449 9.4467 0.219648C9.15381 0.512542 9.15381 0.987415 9.4467 1.28031L13.6893 5.52295L9.4467 9.76559C9.15381 10.0585 9.15381 10.5334 9.4467 10.8263C9.73959 11.1191 10.2145 11.1191 10.5074 10.8263L15.2803 6.05328ZM0.75 5.52295V6.27295H14.75V5.52295V4.77295H0.75V5.52295Z" fill="currentColor"></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="cst-faq-wrap pl-70">
              <div
                className="ai-faq-accordion-wrap tp_fade_anim"
                data-delay=".3"
                data-fade-from="right"
                data-ease="bounce"
                style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: 1 }}
              >
                <div className="accordion" id="accordionExample">
                  {faqList.map((faq, index) => (
                    <div className="accordion-items" key={faq.id}>
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-buttons ${index !== 0 ? 'collapsed' : ''}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${faq.id}`}
                          aria-expanded={index === 0 ? "true" : "false"}
                          aria-controls={faq.id}
                        >
                          {faq.question}
                          <span className="accordion-icon"></span>
                        </button>
                      </h2>
                      <div
                        id={faq.id}
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                        data-bs-parent="#accordionExample"
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

export default TutorialFAQ;
