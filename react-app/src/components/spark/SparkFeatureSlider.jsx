import { useState, useEffect } from "react";

const SparkFeatureSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "01. 4K Display",
      image: "/assets/img/spark/1.webp",
    },
    {
      title: "02. Inbuilt Wi-Fi & Bluetooth",
      image: "/assets/img/spark/2.webp",
    },
    {
      title: "03. Environment Friendly",
      image: "/assets/img/spark/3.webp",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="tp-hero-cst-bottom pre-header p-relative z-index-1 fix">
      <div className="container-fluid p-0">

        {/* BACKGROUND SLIDER */}
        <div className="tp-hero-cst-bottom-slider">
          <div id="service-bg-img" className={`service-img-${activeSlide + 1}`}>

            {slides.map((slide, index) => (
              <div
                key={slide.title}
                className={`service-bg service-img-${index + 1}`}
                style={{
                  backgroundImage: `url(${slide.image})`
                }}
              />
            ))}

          </div>
        </div>

        {/* CONTENT */}
        <div className="tp-hero-cst-bottom-content">
          <div className="container-fluid p-0">

            <div className="tp-hero-cst-bottom-border">

              <div className="row">

                {/* LEFT */}
                <div className="col-xxl-7 col-xl-7">
                  <div className="tp-hero-cst-bottom-btn">
                    <ul>

                      {slides.map((slide, index) => (
                        <li
                          key={slide.title}
                          className={`service__item-8 ${activeSlide === index ? 'active' : ''}`}
                          rel={`service-img-${index + 1}`}
                          onMouseEnter={() => setActiveSlide(index)}
                          onClick={() => setActiveSlide(index)}
                        >
                          {slide.title}
                        </li>
                      ))}

                    </ul>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="col-xxl-5 col-xl-5">
                  <div className="tp-hero-cst-bottom-right text-xl-end">

                    <span className="tp-ff-dm fw-600 tp-text-common-white text-capitalize">

                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.38462 6.25H15.6154M6.38462 9.25H11M1 10.76C1 12.36 2.15179 13.754 3.77641 13.987C4.93436 14.153 6.10462 14.28 7.28718 14.366C7.64615 14.392 7.97436 14.576 8.17436 14.867L11 19L13.8256 14.867C13.9248 14.7233 14.0562 14.6034 14.2099 14.5166C14.3636 14.4298 14.5356 14.3783 14.7128 14.366C15.8873 14.2805 17.0583 14.1541 18.2236 13.987C19.8482 13.754 21 12.361 21 10.759V4.741C21 3.139 19.8482 1.746 18.2236 1.513C15.8318 1.17072 13.4175 0.99926 11 1C8.54667 1 6.13436 1.175 3.77641 1.513C2.15179 1.746 1 3.14 1 4.741V10.759V10.76Z"
                          stroke="#F3F1F2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      Empower Learning & Business with DeltaView -

                      <a
                        className="tp-text-common-blue-2 fw-800 ml-5"
                        href="/contact"
                      >
                        Contact Us
                      </a>

                    </span>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SparkFeatureSlider;