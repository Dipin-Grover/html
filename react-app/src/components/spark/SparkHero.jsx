const SparkHero = () => {
  return (
    <div className="product-banner">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="tp-store-content">

              <h2 className="fs-40 mb-20">
                DeltaView Spark for Education
              </h2>

              <p className="fs-18 lh-140-per mb-30">
                DeltaView Spark AI smart board makes learning smarter, engaging, and interactive.
              </p>

              {/* BUY NOW BUTTON */}
              <a className="cst-btn" href="/spark-buy">
                <span>

                  <span className="text-1">
                    Buy Now

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                    >
                      <path
                        d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM15.2803 6.05328C15.5732 5.76039 15.5732 5.28551 15.2803 4.99262L10.5074 0.219648C10.2145 -0.0732449 9.73959 -0.0732449 9.4467 0.219648C9.15381 0.512542 9.15381 0.987415 9.4467 1.28031L13.6893 5.52295L9.4467 9.76559C9.15381 10.0585 9.15381 10.5334 9.4467 10.8263C9.73959 11.1191 10.2145 11.1191 10.5074 10.8263L15.2803 6.05328ZM0.75 5.52295V6.27295H14.75V5.52295V4.77295H0.75V5.52295Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>

                  <span className="text-2">
                    Buy Now

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                    >
                      <path
                        d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM15.2803 6.05328C15.5732 5.76039 15.5732 5.28551 15.2803 4.99262L10.5074 0.219648C10.2145 -0.0732449 9.73959 -0.0732449 9.4467 0.219648C9.15381 0.512542 9.15381 0.987415 9.4467 1.28031L13.6893 5.52295L9.4467 9.76559C9.15381 10.0585 9.15381 10.5334 9.4467 10.8263C9.73959 11.1191 10.2145 11.1191 10.8263L15.2803 6.05328ZM0.75 5.52295V6.27295H14.75V5.52295V4.77295H0.75V5.52295Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>

                </span>
              </a>

              {/* GET A QUOTE BUTTON */}
              <a className="cst-btn black-t ml-10" href="/comingSoon">
                <span>

                  <span className="text-1">
                    Get a Quote

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                    >
                      <path
                        d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM15.2803 6.05328C15.5732 5.76039 15.5732 5.28551 15.2803 4.99262L10.5074 0.219648C10.2145 -0.0732449 9.73959 -0.0732449 9.4467 0.219648C9.15381 0.512542 9.15381 0.987415 9.4467 1.28031L13.6893 5.52295L9.4467 9.76559C9.15381 10.0585 9.15381 10.5334 9.4467 10.8263C9.73959 11.1191 10.2145 11.1191 10.8263L15.2803 6.05328ZM0.75 5.52295V6.27295H14.75V5.52295V4.77295H0.75V5.52295Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>

                  <span className="text-2">
                    Get a Quote

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                    >
                      <path
                        d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM15.2803 6.05328C15.5732 5.76039 15.5732 5.28551 15.2803 4.99262L10.5074 0.219648C10.2145 -0.0732449 9.73959 -0.0732449 9.4467 0.219648C9.15381 0.512542 9.15381 0.987415 9.4467 1.28031L13.6893 5.52295L9.4467 9.76559C9.15381 10.0585 9.15381 10.5334 9.4467 10.8263C9.73959 11.1191 10.2145 11.1191 10.8263L15.2803 6.05328ZM0.75 5.52295V6.27295H14.75V5.52295V4.77295H0.75V5.52295Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>

                </span>
              </a>

              {/* BENEFITS */}
              <ul>
                <li>
                  <i className="far fa-truck tp-text-common-blue fs-18"></i>
                  <span>Free Shipping</span>
                </li>

                <li>
                  <i className="far fa-award tp-text-common-blue fs-18"></i>
                  <span>3 Years Warranty</span>
                </li>

                <li>
                  <i className="far fa-medal tp-text-common-blue fs-18"></i>
                  <span>100% Original Products</span>
                </li>
              </ul>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6">
            <figure>
              <img
                src="/assets/img/spark/ban1.webp"
                width="100%"
                alt="spark"
              />
            </figure>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SparkHero;