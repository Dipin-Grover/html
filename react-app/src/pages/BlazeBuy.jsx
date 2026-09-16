import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import BlazeProductGallery from "../components/blaze_buy_now_button_page/BlazeProductGallery";
import BlazeProductDetail from "../components/blaze_buy_now_button_page/BlazeProductDetail";
import BlazeSpecification from "../components/blaze_buy_now_button_page/BlazeSpecification";
import BlazeBoxContents from "../components/blaze_buy_now_button_page/BlazeBoxContents";
import BlazeTestimonials from "../components/blaze_buy_now_button_page/BlazeTestimonials";
import BlazeFaq from "../components/blaze_buy_now_button_page/BlazeFaq";
import AboutTestimonials from "../components/aboutUs/AboutTestimonials";

const BlazeBuy = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialSize = queryParams.get("size") || "65";

  const [size, setSize] = useState(initialSize);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const querySize = queryParams.get("size");
    if (querySize && ["65", "75", "86", "98"].includes(querySize)) {
      setSize(querySize);
    }
  }, [location.search]);

  const product = {
    title: `DeltaView Blaze ${size}"`,
    price: size === "65"
      ? "₹1,09,824.00"
      : size === "75"
      ? "₹1,24,800.00"
      : size === "86"
      ? "₹1,66,400.00"
      : "₹4,16,000.00",
    mrp: size === "65"
      ? "₹2,30,100.00"
      : size === "75"
      ? "₹2,65,500.00"
      : size === "86"
      ? "₹3,36,300.00"
      : "₹6,40,000.00",
    discount: size === "65"
      ? "-52% OFF"
      : size === "75"
      ? "-53% OFF"
      : size === "86"
      ? "-51% OFF"
      : "-35% OFF",
  };

  const getNumericPrice = (priceStr) => {
    return parseFloat(priceStr.replace(/[₹,]/g, ''));
  };

  const handleAddToCart = () => {
    const cartDataStr = localStorage.getItem('deltaCartData');
    let cartData = { items: [] };
    if (cartDataStr) {
      try {
        cartData = JSON.parse(cartDataStr);
      } catch (e) {
        /* ignore */
      }
    }
    if (!Array.isArray(cartData.items)) cartData.items = [];

    const numericPrice = getNumericPrice(product.price);
    const itemIndex = cartData.items.findIndex(item => item.id === `blaze-${size}`);

    if (itemIndex > -1) {
      cartData.items[itemIndex].qty += quantity;
    } else {
      cartData.items.push({
        id: `blaze-${size}`,
        name: product.title,
        price: numericPrice,
        qty: quantity,
        image: "https://www.deltaview.in/wp-content/uploads/2023/09/Product_Blaze_65-3.webp" // Default image
      });
    }

    localStorage.setItem('deltaCartData', JSON.stringify(cartData));
    
    // Optional: Update header cart badge if it's rendered outside React
    const headerCartBadge = document.querySelector('.tp-header-pb-cart-count');
    if (headerCartBadge) headerCartBadge.textContent = cartData.items.length;

    alert(`${quantity}x ${product.title} added to cart!`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    window.location.href = '/cart';
  };

  return (
    <>
      <Header />

      <div className=" pb-60">
        <div className="container-fluid px-lg-5">
          <div className="row align-items-start">

            <div className="col-lg-7">
              <BlazeProductGallery />
            </div>

            <BlazeProductDetail
              product={product}
              selectedSize={size}
              quantity={quantity}
              onSizeChange={setSize}
              onQuantityChange={setQuantity}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />

          </div>
        </div>
      </div>

      <BlazeSpecification />

      <BlazeBoxContents />

      
    <AboutTestimonials/>
      {/* <BlazeTestimonials /> */}

      <BlazeFaq />

      <Footer />
    </>
  );
};

export default BlazeBuy;