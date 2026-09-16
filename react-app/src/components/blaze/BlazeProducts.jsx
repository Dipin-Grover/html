import React from 'react';
import { Link } from 'react-router-dom';

const BlazeProducts = () => {
  const products = [
    {
      image: "/assets/img/product/product_blaze_65.webp",
      name: "DeltaView Blaze 65″ | DV65B14",
      size: "65",
    },
    {
      image: "/assets/img/product/product_blaze_75.webp",
      name: "DeltaView Blaze 75″ | DV75B14",
      size: "75",
    },
    {
      image: "/assets/img/product/product_blaze_86.webp",
      name: "DeltaView Blaze 86″ | DV86B14",
      size: "86",
    },
    {
      image: "/assets/img/product/product_blaze_98.webp",
      name: "DeltaView Blaze 98″ | DV98B14",
      size: "98",
    },
  ];

  return (
    <div className="tp-feature-area pb-80 pt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cst-service-heading text-center mb-40">
              <h4 className="cst-section-title tp_fade_anim" data-delay=".1">Explore Interactive Flat Panel Sizes</h4>
            </div>
          </div>
        </div>
        <div className="row">
          {products.map((product) => (
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6" key={product.image}>
              <div className="tp-service-md-item tp-bg-common-white mb-50">
                <span className="d-inline-block mb-20">
                  <img src={product.image} alt="" />
                </span>
                <h3 className="tp-ff-familjen fw-600 fs-20 ls-m-4 tp-text-common-black-5 mb-40">{product.name}</h3>
                <Link to={`/blaze-buy?size=${product.size}`} className="tp-service-md-btn text-uppercase tp-left-right hover-text-black d-inline-block tp-text-common-black-5 lh-1 fs-16 fw-800 tp-ff-dm">
                  <span className="td-text d-inline-block mr-5">Buy Now</span>
                  <span className="tp-arrow-angle">
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 11L12 1M12 1H3.44444M12 1V8.77778" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                      <path d="M1 11L12 1M12 1H3.44444M12 1V8.77778" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlazeProducts;
