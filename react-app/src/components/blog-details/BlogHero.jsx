import React from 'react';

const BlogHero = ({ title, category, date }) => {
  return (
    <div className="tp-service-hero-area tp-service-hero-spacing p-relative z-index-1">
      <span className="tp-service-hero-shape-2 p-absolute">
        <svg className="line-2" viewBox="0 0 402 339" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="413.5" cy="413.5" r="353.5" transform="matrix(-1 0 0 1 820 0)" stroke="#F0F0F0" strokeWidth="120"></circle>
        </svg>
      </span>
      <div className="container">
        <div className="row pb-45">
          <div className="col-lg-12">
            <div className="tp-service-hero-left p-relative z-index-1">
              <h2 className="fs-70 fs-lg-60 fs-xs-40">{title}</h2>
              <div className="tp-blog-meta mt-15">
                <span>{category}</span>
                <span className="borders"></span>
                <span>{date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
