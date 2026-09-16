import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const BrandArea = () => {
  return (
    <div className="creative-brand-area pb-100 pt-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="al-step-title-wrap">
              <div className="al-step-title-box text-center">
                <h4 className="al-section-title fs-40 tp_fade_anim" data-delay=".4">
                  Building Success Stories with 4 Lakhs+ Businesses
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="creative-brand-wrapper ais-brand-blur">
        <Swiper
          className="creative-brand-active"
          modules={[Autoplay]}
          loop={true}
          freeMode={true}
          spaceBetween={0}
          slidesPerView={6}
          centeredSlides={true}
          allowTouchMove={false}
          speed={3000}
          autoplay={{
            delay: 1,
            disableOnInteraction: true,
          }}
          breakpoints={{
            0: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
            1400: { slidesPerView: 5 },
            1600: { slidesPerView: 6 },
          }}
          style={{
            "--swiper-wrapper-transition-timing-function": "linear"
          }}
        >
          {[1, 2, 3, 4, 5, 8, 9, 1, 2, 3, 4, 5, 8, 9].map((num, i) => (
            <SwiperSlide key={i}>
              <div className="creative-brand-item">
                <img src={`/assets/img/update-2/brand/${num}.png`} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandArea;
