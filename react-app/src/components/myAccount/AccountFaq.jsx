import React from 'react';

const AccountFaq = () => {
  return (
    <div className="mx-auto faq-section my-5 pt-5 tp-ff-body" style={{ maxWidth: '900px' }}>
      <h2 className="fs-5 fw-bold text-dark border-bottom pb-3 mb-4 text-center faq-title tp-ff-heading">
        Frequently Asked Questions
      </h2>
      <div className="accordion accordion-flush bg-white" id="faqAccordion">
        
        {/* Item 1 */}
        <div className="accordion-item border-bottom">
          <h2 className="accordion-header" id="faqHeading1">
            <button className="accordion-button collapsed fw-medium text-dark p-3 fs-6 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1" aria-expanded="false" aria-controls="faqCollapse1">
              What are the sizes of products?
            </button>
          </h2>
          <div id="faqCollapse1" className="accordion-collapse collapse" aria-labelledby="faqHeading1" data-bs-parent="#faqAccordion">
            <div className="accordion-body text-secondary p-3 pt-0 fs-6 lh-lg">
              DeltaView intelligent interactive panels are available in a variety of sizes to suit different spaces and requirements. Our standard sizes typically range from 65", 75", 86", up to 98" to ensure the perfect fit for anything from small huddle rooms to large lecture halls and boardrooms.
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="accordion-item border-bottom">
          <h2 className="accordion-header" id="faqHeading2">
            <button className="accordion-button collapsed fw-medium text-dark p-3 fs-6 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2" aria-expanded="false" aria-controls="faqCollapse2">
              Does this panel connect to a smartphone?
            </button>
          </h2>
          <div id="faqCollapse2" className="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#faqAccordion">
            <div className="accordion-body text-secondary p-3 pt-0 fs-6 lh-lg">
              Yes, absolutely. DeltaView panels support seamless wireless casting. You can easily connect, mirror, and share content directly from your smartphone, tablet, or laptop (supporting iOS, Android, Windows, and Mac) without the need for additional cables.
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="accordion-item border-bottom">
          <h2 className="accordion-header" id="faqHeading3">
            <button className="accordion-button collapsed fw-medium text-dark p-3 fs-6 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3" aria-expanded="false" aria-controls="faqCollapse3">
              How much power does it consume?
            </button>
          </h2>
          <div id="faqCollapse3" className="accordion-collapse collapse" aria-labelledby="faqHeading3" data-bs-parent="#faqAccordion">
            <div className="accordion-body text-secondary p-3 pt-0 fs-6 lh-lg">
              Our panels are designed with energy efficiency in mind. While power consumption varies slightly depending on the screen size, a standard 75" panel generally consumes around 250W to 350W during active use, and drops to less than 0.5W when in standby mode.
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="accordion-item border-bottom">
          <h2 className="accordion-header" id="faqHeading4">
            <button className="accordion-button collapsed fw-medium text-dark p-3 fs-6 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse4" aria-expanded="false" aria-controls="faqCollapse4">
              Can we connect to it remotely?
            </button>
          </h2>
          <div id="faqCollapse4" className="accordion-collapse collapse" aria-labelledby="faqHeading4" data-bs-parent="#faqAccordion">
            <div className="accordion-body text-secondary p-3 pt-0 fs-6 lh-lg">
              Yes, you can. DeltaView panels are built for modern hybrid collaboration. They support remote device management and are fully compatible with popular video conferencing applications, allowing your team or students to connect, interact, and collaborate from anywhere in the world.
            </div>
          </div>
        </div>

        {/* Item 5 */}
        <div className="accordion-item border-0">
          <h2 className="accordion-header" id="faqHeading5">
            <button className="accordion-button collapsed fw-medium text-dark p-3 fs-6 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse5" aria-expanded="false" aria-controls="faqCollapse5">
              If I have a problem with the smart board, what is the turnaround time for support?
            </button>
          </h2>
          <div id="faqCollapse5" className="accordion-collapse collapse" aria-labelledby="faqHeading5" data-bs-parent="#faqAccordion">
            <div className="accordion-body text-secondary p-3 pt-0 fs-6 lh-lg">
              We pride ourselves on our after-sales service. We offer 24/7 Customer Support and a 3-Year On-Site Warranty. Because we cover over 15,000+ serviceable pin codes across India, our technical experts ensure a rapid response, typically providing on-site support and resolving issues within 24 to 48 hours.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AccountFaq;
