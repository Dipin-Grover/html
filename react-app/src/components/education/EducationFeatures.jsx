import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const EducationFeatures = () => {
  const swiperRef = useRef(null);

  const slides = [
    'assets/img/enterprises/feature1.webp',
    'assets/img/enterprises/feature2.webp',
    'assets/img/enterprises/feature3.webp',
    'assets/img/enterprises/feature4.webp',
    'assets/img/enterprises/feature1.webp',
    'assets/img/enterprises/feature2.webp',
    'assets/img/enterprises/feature3.webp',
    'assets/img/enterprises/feature4.webp',
  ];

  return (
    <div className="al-featured-slider-area fix pt-95 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="cst-service-heading mb-30">
              <h4 className="cst-section-title tp_fade_anim" data-delay=".1">Simple, all-in-one solution</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="al-featured-shop-slider">
              <Swiper
                className="al-featured-shop-slider-active"
                slidesPerView={2}
                spaceBetween={10}
                loop={true}
                centeredSlides={false}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                breakpoints={{
                  0:    { slidesPerView: 1 },
                  576:  { slidesPerView: 1 },
                  768:  { slidesPerView: 2 },
                  992:  { slidesPerView: 2 },
                  1200: { slidesPerView: 2 },
                }}
              >
                {slides.map((src, i) => (
                  <SwiperSlide key={i} className="al-featured-shop-item p-relative z-index-1">
                    <img src={src} width="100%" alt="enterprises" style={{ display: 'block' }} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="al-featured-shop-slider-arrow mt-45">
                <button
                  className="al-featured-shop-slider-button-prev"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.97974 7.97534L31.9797 7.97534" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.02954 0.999999L0.999912 7.99942L8.02954 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  className="al-featured-shop-slider-button-next"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.9795 7.97534L0.979492 7.97534" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24.9297 0.999999L31.9593 7.99942L24.9297 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationFeatures;
