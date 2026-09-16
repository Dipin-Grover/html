import React from 'react';

const BlogBanner = ({ banner }) => {
  return (
    <div className="tp-blog-banner-area tp-about-me-banner scale-up-img">
      <img data-speed="0.4" className="img-cover scale-up" src={banner} alt="Blog Banner" data-lag="0" />
    </div>
  );
};

export default BlogBanner;
