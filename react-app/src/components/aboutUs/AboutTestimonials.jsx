import React from "react";

const testimonialDataRow1 = [
  {
    name: "Anand Sharma",
    role: "IT Director",
    image: "/assets/img/testi_anand.jpg",
    quote: "DeltaView has completely transformed how our teams collaborate globally. The interactive displays are incredibly intuitive."
  },
  {
    name: "Manoj Kumar",
    role: "School Principal",
    image: "/assets/img/testi_manoj.jpg",
    quote: "The smart boards from DeltaView made learning so much more engaging for our students. Absolutely worth the investment."
  },
  {
    name: "Shiva Reddy",
    role: "Lead Architect",
    image: "/assets/img/testi_shiva.jpg",
    quote: "Presenting complex designs to clients is a breeze now. The 4K resolution and touch responsiveness are unparalleled."
  },
  {
    name: "Priya Singh",
    role: "Operations Manager",
    image: "/assets/img/testi1.webp",
    quote: "Seamless integration with our existing software ecosystem. DeltaView Connect just works out of the box."
  },
  {
    name: "Karan Patel",
    role: "Corporate Trainer",
    image: "/assets/img/testi_anand.jpg",
    quote: "The best interactive displays I've used in my career. The hardware is solid and software is highly intuitive."
  },
  {
    name: "Sneha Verma",
    role: "Marketing Head",
    image: "/assets/img/testi_shiva.jpg",
    quote: "Brainstorming sessions are more productive. Everyone can contribute simultaneously from their own devices."
  }
];

const testimonialDataRow2 = [
  {
    name: "Vikram Malhotra",
    role: "CTO, TechCorp",
    image: "/assets/img/testi_manoj.jpg",
    quote: "We deployed DeltaView across all our meeting rooms and the feedback from the staff has been phenomenal."
  },
  {
    name: "Riya Kapoor",
    role: "Design Lead",
    image: "/assets/img/testi1.webp",
    quote: "The color accuracy and touch precision on these boards make them an essential tool for our design team."
  },
  {
    name: "Amit Joshi",
    role: "Project Manager",
    image: "/assets/img/testi_anand.jpg",
    quote: "Keeping track of agile sprints and daily standups is so much easier with DeltaView's large interactive canvas."
  },
  {
    name: "Divya Nair",
    role: "Educator",
    image: "/assets/img/testi_shiva.jpg",
    quote: "My students love coming to the board now. The gamified learning apps work flawlessly on this display."
  },
  {
    name: "Sanjay Mehta",
    role: "CEO, InnovateX",
    image: "/assets/img/testi_manoj.jpg",
    quote: "A premium product that delivers on its promises. It has elevated the professional look of our boardroom."
  },
  {
    name: "Pooja Reddy",
    role: "HR Director",
    image: "/assets/img/testi1.webp",
    quote: "Hybrid meetings feel much more inclusive. The built-in camera and mic array capture everything perfectly."
  }
];

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
  >
    <path
      d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34068 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485325 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L6.12215 1.09728Z"
      fill="#FFAF1B"
    />
  </svg>
);

const TestimonialCard = ({ data }) => (
  <div className="app-testimonial-item">
    <div className="app-testimonial-item-icon-box d-flex align-items-center mb-20">
      <div className="app-testimonial-item-icon">
        <span>
          <img src={data.image} alt={data.name} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
        </span>
      </div>

      <div className="app-testimonial-item-icon-content">
        <h4 className="app-testimonial-item-icon-title">
          {data.name}
        </h4>

        <p>{data.role}</p>
      </div>
    </div>

    <div className="app-testimonial-item-content">
      <p>"{data.quote}"</p>

      <div className="app-testimonial-item-star mt-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star}>
            <StarIcon />
          </span>
        ))}
      </div>
    </div>
  </div>
);

const TestimonialRow = ({ reverse = false, data = [] }) => {
  // Duplicate array to ensure smooth infinite scrolling
  const sliderData = [...data, ...data];
  
  return (
    <div className="ais-testimonial-wrap z-index-1 p-relative">
      <div
        className={`app-testimonial-wrapper ${
          reverse ? "ais-rtl" : ""
        }`}
      >
        <div className="app-testimonial-slider d-flex">
          {sliderData.map((item, index) => (
            <TestimonialCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
  >
    <path
      d="M18.9995 15.5454V22.9036H29.2249C28.7759 25.27 27.4285 27.2737 25.4076 28.6209L31.5739 33.4055C35.1667 30.0893 37.2394 25.2183 37.2394 19.432C37.2394 18.0847 37.1185 16.7891 36.8939 15.5456L18.9995 15.5454Z"
      fill="#4285F4"
    />
    <path
      d="M8.35164 22.6162L6.96089 23.6808L2.03809 27.5153C5.16444 33.7161 11.5721 37.9998 18.9994 37.9998C24.1292 37.9998 28.4301 36.3071 31.5738 33.4054L25.4075 28.6208C23.7147 29.7608 21.5556 30.4517 18.9994 30.4517C14.0594 30.4517 9.86224 27.1181 8.3594 22.6272L8.35164 22.6162Z"
      fill="#34A853"
    />
    <path
      d="M2.03803 10.4846C0.74265 13.0409 0 15.9255 0 19C0 22.0744 0.74265 24.959 2.03803 27.5153C2.03803 27.5325 8.35996 22.6098 8.35996 22.6098C7.97996 21.4699 7.75535 20.2608 7.75535 18.9998C7.75535 17.7387 7.97996 16.5299 8.35996 15.39L2.03803 10.4846Z"
      fill="#FBBC05"
    />
    <path
      d="M19 7.565C21.798 7.565 24.285 8.533 26.272 10.398L31.712 4.957C28.413 1.883 24.13 0 19 0C11.573 0 5.164 4.266 2.038 10.485L8.36 15.39C9.862 10.899 14.06 7.565 19 7.565Z"
      fill="#EA4335"
    />
  </svg>
);

const AboutTestimonials = () => {
  return (
    <div
      className="ais-testimonial-ptb p-relative pt-100 pb-80"
      data-bg-color="#f6f4fe"
      style={{ backgroundColor: "#f6f4fe" }}
    >
      {/* Heading */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="app-testimonial-warp mb-55">

              <div className="app-testimonial-heading text-center p-relative mb-20">
                <span className="ais-section-subtitle">
                  Our Testimonial
                </span>

                <h4 className="ais-section-title">
                  Built on Trust. Backed by Experience. 
                </h4>

                <div className="app-testimonial-big-text">
                  <h3>4.86</h3>
                </div>
              </div>

              {/* Google Review */}
              <div
                className="app-testimonial-review-width tp_fade_anim"
                data-delay=".6"
                data-fade-from="top"
                data-ease="bounce"
              >
                <div className="app-testimonial-review">
                  <div className="app-testimonial-review-icon">
                    <span>
                      <GoogleIcon />
                    </span>
                  </div>

                  <div className="app-testimonial-review-content">
                    <span>
                      <strong>4.9/5</strong>

                      <i style={{ color: "#FFAF1B" }}>★</i>
                      <i style={{ color: "#FFAF1B" }}>★</i>
                      <i style={{ color: "#FFAF1B" }}>★</i>
                      <i style={{ color: "#FFAF1B" }}>★</i>
                      <i style={{ color: "#FFAF1B" }}>★</i>
                    </span>

                    <p>Based on 1,258 reviews</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* First row - Right to Left */}
      <TestimonialRow data={testimonialDataRow1} />

      {/* Second row - Left to Right */}
      <TestimonialRow reverse data={testimonialDataRow2} />
    </div>
  );
};

export default AboutTestimonials;