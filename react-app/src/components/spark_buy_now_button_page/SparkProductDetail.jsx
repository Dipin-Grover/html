import React, { useState } from "react";

const SparkProductDetail = ({
  product,
  selectedSize,
  quantity,
  onSizeChange,
  onQuantityChange,
  onAddToCart,
  onBuyNow,
}) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart();
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div
      className="col-lg-5 ps-lg-5 position-sticky"
      style={{ top: "120px", height: "fit-content" }}
    >
      {/* Product Title */}
      <h1 className="premium-title fw-bold text-dark mb-3">
        {product.title}
        <br />
      </h1>

      {/* Product Description */}
      <p className="fs-6 text-secondary mb-4 lh-lg">
        Revolutionizing digital education and corporate meetings through
        engaging, hands-on interactive experiences.
      </p>

      {/* Price */}
      <div className="mb-4 d-flex align-items-center gap-3">
        <span className="premium-price fw-bold text-dark">
          {product.price}
        </span>

        <span className="fs-5 text-secondary text-decoration-line-through">
          {product.mrp}
        </span>

        <span className="discount-badge">
          {product.discount}
        </span>
      </div>

      {/* Screen Size + Quantity */}
      <div className="d-flex flex-wrap justify-content-between gap-5 mb-15 rounded-4">
        {/* Screen Size */}
        <div>
          <h4 className="fs-6 fw-bold mb-3 text-uppercase text-secondary letter-spacing-1">
            Screen Size
          </h4>

          <div className="d-flex align-items-center gap-2 size-options">
            {["65", "75", "86", "98"].map((size) => {
              const isActive = selectedSize === size;

              return (
                <button
                  key={size}
                  type="button"
                  className={
                    isActive
                      ? "btn btn-buy-now text-white fw-bold size-btn d-flex align-items-center justify-content-center"
                      : "btn btn-outline-secondary text-dark bg-white fw-bold size-btn d-flex align-items-center justify-content-center"
                  }
                  style={{
                    height: "40px",
                    minWidth: "55px",
                  }}
                  onClick={() => onSizeChange(size)}
                >
                  {size}"
                </button>
              );
            })}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <h4 className="fs-6 fw-bold mb-3 text-uppercase text-secondary letter-spacing-1">
            Quantity
          </h4>

          <div className="d-flex align-items-center">
            <button
              type="button"
              className="btn btn-outline-secondary px-2 py-1 qty-btn minus"
              style={{
                borderRadius: "6px 0 0 6px",
                height: "40px",
                width: "40px",
              }}
              onClick={() =>
                onQuantityChange(Math.max(1, quantity - 1))
              }
            >
              -
            </button>

            <input
              type="number"
              className="form-control text-center fw-bold border-secondary qty-input px-0"
              value={quantity}
              min="1"
              style={{
                width: "50px",
                height: "40px",
                borderRadius: "0",
                borderLeft: "none",
                borderRight: "none",
                appearance: "none",
                MozAppearance: "textfield",
              }}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);

                onQuantityChange(
                  Number.isNaN(value) || value < 1 ? 1 : value
                );
              }}
            />

            <button
              type="button"
              className="btn btn-outline-secondary px-2 py-1 qty-btn plus"
              style={{
                borderRadius: "0 6px 6px 0",
                height: "40px",
                width: "40px",
              }}
              onClick={() => onQuantityChange(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Cart Buttons */}
      <div className="d-flex gap-3 mb-5">
        <button
          type="button"
          className="cst-btn black-t w-50 border-0"
          onClick={handleAddToCart}
        >
          <span className="w-100 d-flex justify-content-center">
            <span className="text-1">
              {isAdded ? "ADDED ✓" : "Add to Cart"}
              {!isAdded && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                  <path d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM15.2803 6.05328C15.5732 5.76039 15.5732 5.28551 15.2803 4.99262L10.5074 0.219648C10.2145 -0.0732449 9.73959 -0.0732449 9.4467 0.219648C9.15381 0.512542 9.15381 0.987415 9.4467 1.28031L13.6893 5.52295L9.4467 9.76559C9.15381 10.0585 9.15381 10.5334 9.4467 10.8263C9.73959 11.1191 10.2145 11.1191 10.5074 10.8263L15.2803 6.05328ZM0.75 5.52295V6.27295H14.75V5.52295V4.77295H0.75V5.52295Z" fill="currentColor"/>
                </svg>
              )}
            </span>
            <span className="text-2">
              {isAdded ? "ADDED ✓" : "Add to Cart"}
              {!isAdded && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                  <path d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM15.2803 6.05328C15.5732 5.76039 15.5732 5.28551 15.2803 4.99262L10.5074 0.219648C10.2145 -0.0732449 9.73959 -0.0732449 9.4467 0.219648C9.15381 0.512542 9.15381 0.987415 9.4467 1.28031L13.6893 5.52295L9.4467 9.76559C9.15381 10.0585 9.15381 10.5334 9.4467 10.8263C9.73959 11.1191 10.2145 11.1191 10.5074 10.8263L15.2803 6.05328ZM0.75 5.52295V6.27295H14.75V5.52295V4.77295H0.75V5.52295Z" fill="currentColor"/>
                </svg>
              )}
            </span>
          </span>
        </button>

        <button
          type="button"
          className="cst-btn w-50 border-0"
          onClick={onBuyNow}
        >
          <span className="w-100 d-flex justify-content-center">
            <span className="text-1">
              Buy Now
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM15.2803 6.05328C15.5732 5.76039 15.5732 5.28551 15.2803 4.99262L10.5074 0.219648C10.2145 -0.0732449 9.73959 -0.0732449 9.4467 0.219648C9.15381 0.512542 9.15381 0.987415 9.4467 1.28031L13.6893 5.52295L9.4467 9.76559C9.15381 10.0585 9.15381 10.5334 9.4467 10.8263C9.73959 11.1191 10.2145 11.1191 10.5074 10.8263L15.2803 6.05328ZM0.75 5.52295V6.27295H14.75V5.52295V4.77295H0.75V5.52295Z" fill="currentColor"/>
              </svg>
            </span>
            <span className="text-2">
              Buy Now
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM15.2803 6.05328C15.5732 5.76039 15.5732 5.28551 15.2803 4.99262L10.5074 0.219648C10.2145 -0.0732449 9.73959 -0.0732449 9.4467 0.219648C9.15381 0.512542 9.15381 0.987415 9.4467 1.28031L13.6893 5.52295L9.4467 9.76559C9.15381 10.0585 9.15381 10.5334 9.4467 10.8263C9.73959 11.1191 10.2145 11.1191 10.5074 10.8263L15.2803 6.05328ZM0.75 5.52295V6.27295H14.75V5.52295V4.77295H0.75V5.52295Z" fill="currentColor"/>
              </svg>
            </span>
          </span>
        </button>
      </div>

      {/* Product Features */}
      <div className="d-flex justify-content-between text-center py-4 mb-5 border-top border-light">
        {/* Fast Delivery */}
        <div className="feature-box flex-grow-1 cursor-pointer">
          <div className="feature-icon-wrapper shadow-sm">
            <i className="far fa-truck fs-4"></i>
          </div>

          <span className="d-block fs-6 fw-semibold text-dark">
            Fast Delivery
          </span>
        </div>

        {/* Warranty */}
        <div className="feature-box flex-grow-1 cursor-pointer">
          <div className="feature-icon-wrapper shadow-sm">
            <i className="far fa-shield-check fs-4"></i>
          </div>

          <span className="d-block fs-6 fw-semibold text-dark">
            3 Yrs Warranty
          </span>
        </div>

        {/* Original */}
        <div className="feature-box flex-grow-1 cursor-pointer">
          <div className="feature-icon-wrapper shadow-sm">
            <i className="far fa-check-circle fs-4"></i>
          </div>

          <span className="d-block fs-6 fw-semibold text-dark">
            100% Original
          </span>
        </div>

        {/* Support */}
        <div className="feature-box flex-grow-1 cursor-pointer">
          <div className="feature-icon-wrapper shadow-sm">
            <i className="far fa-headset fs-4"></i>
          </div>

          <span className="d-block fs-6 fw-semibold text-dark">
            Tech Support
          </span>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-light p-4">
        <h4 className="fs-5 fw-bold mb-4 text-dark">
          Key Features
        </h4>

        <ul className="desc-list fs-6 lh-lg mb-0">
          <li>
            Ultra HD display with up to 3840 x 2160 resolution of input
            signal available.
          </li>

          <li>
            Built-in Wi-Fi realizes miracasting without any cable
            connection.
          </li>

          <li>
            Various audio and video interfaces for device access.
          </li>

          <li>
            Built-in network switch chip saves a network switch.
          </li>

          <li>
            Built-in Android system provides kinds of applications.
          </li>

          <li>
            Ultra-thin design with aluminum profile frame.
          </li>

          <li>
            Looping-out display available.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SparkProductDetail;