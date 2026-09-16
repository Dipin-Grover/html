import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    image: 'assets/img/pro1.jpg',
    title: 'DeltaView Blaze',
    subtitle: 'Powering Smarter Collaboration',
    learnMoreLink: '/blaze',
    buyNowLink: '/blaze-buy',
    dark: false,
  },
  {
    id: 2,
    image: 'assets/img/pro2.jpg',
    title: 'DeltaView Spark',
    subtitle: 'Ignite Learning in Every Classroom',
    learnMoreLink: '/spark',
    buyNowLink: '/spark-buy',
    dark: true,
  },
];

const FeatureSection = () => {
  return (
    <section className="features-section p-4">
      <div className="container-fluid">
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-6" key={product.id}>
              <div className="feature-box">
                <img src={product.image} alt={product.title} />
                <div className={`feature-content${product.dark ? ' dark' : ''}`}>
                  <h3>{product.title}</h3>
                  <p>{product.subtitle}</p>
                  <Link
                    className="al-btn-blue mb-20 mr-10"
                    to={product.learnMoreLink}
                  >
                    Learn More
                  </Link>
                  <Link
                    className="tp-btn-cst tp-btn-border tp-btn-seo-border d-inline-block tp-round-26 fs-15 ls-0 tp-btn-switch-2-animation text-blue fw-500 tp-ff-inter"
                    to={product.buyNowLink}
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
