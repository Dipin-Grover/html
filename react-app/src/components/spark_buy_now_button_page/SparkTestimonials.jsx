import React from "react";

const SparkTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "School Principal",
      content:
        '"DeltaView Spark has completely transformed our classrooms. The interactive features keep students engaged and the 4K display is stunningly clear!"',
    },
    {
      name: "Priya Patel",
      role: "Primary School Teacher",
      content:
        '"The kids absolutely love coming up to the board. It\'s responsive, bright, and the built-in educational tools are fantastic for everyday use."',
    },
    {
      name: "James McCarthy",
      role: "High School Teacher",
      content:
        '"Switching between different inputs and apps is so fast. It doesn\'t interrupt the flow of my teaching at all. Highly recommended!"',
    },
    {
      name: "Emily Chen",
      role: "University Professor",
      content:
        '"I love how intuitive the interface is. I can annotate over my slides instantly, making my lectures much more dynamic and easier for students to follow."',
    },
    {
      name: "Anita Desai",
      role: "Design Lead",
      content:
        '"The color accuracy and zero-lag touch make it perfect for our design review sessions. We can sketch and ideate together effortlessly."',
    },
    {
      name: "David Wilson",
      role: "Operations Manager",
      content:
        '"We replaced our old projectors with these interactive panels. The difference in meeting productivity and collaboration is night and day."',
    },
  ];

  const Star = () => (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
      >
        <path
          d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z"
          fill="#FFAF1B"
        />
      </svg>
    </span>
  );

  const TestimonialItem = ({ testimonial }) => (
    <div className="app-testimonial-item">
      <div className="app-testimonial-item-icon-box d-flex align-items-center mb-20">
        <div className="app-testimonial-item-icon">
          <span>
            <img src="assets/img/testi1.webp" alt="" />
          </span>
        </div>

        <div className="app-testimonial-item-icon-content">
          <h4 className="app-testimonial-item-icon-title">
            {testimonial.name}
          </h4>
          <p>{testimonial.role}</p>
        </div>
      </div>

      <div className="app-testimonial-item-content">
        <p>{testimonial.content}</p>

        <div className="app-testimonial-item-star">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="ais-testimonial-ptb p-relative pt-100 pb-80"
      data-bg-color="#f6f4fe"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="app-testimonial-warp mb-55">
              <div className="app-testimonial-heading text-center p-relative mb-20">
                <span className="ais-section-subtitle">Our Testimonial</span>

                <h4 className="ais-section-title">
                  Built on Trust. Backed by Experience. 
                </h4>

                <div className="app-testimonial-big-text">
                  <h3>4.86</h3>
                </div>
              </div>

              <div
                className="app-testimonial-review-width tp_fade_anim"
                data-delay=".6"
                data-fade-from="top"
                data-ease="bounce"
              >
                <div className="app-testimonial-review">
                  {/* Google review icon */}
                  <div className="app-testimonial-review-content">
                    <span>
                      <i>4.9/5</i>

                      <span className="app-testimonial-item-star">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                      </span>
                    </span>

                    <p>Based on 1,258 reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ais-testimonial-wrap z-index-1 p-relative">
          <div className="app-testimonial-wrapper">
            <div className="app-testimonial-slider d-flex">
              {testimonials.map((testimonial, index) => (
                <TestimonialItem
                  testimonial={testimonial}
                  key={index}
                />
              ))}
            </div>
          </div>

          {/* RTL testimonial row */}
          <div className="app-testimonial-wrapper ais-rtl">
            <div className="app-testimonial-slider d-flex">
              {testimonials.map((testimonial, index) => (
                <TestimonialItem
                  testimonial={testimonial}
                  key={`rtl-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparkTestimonials;