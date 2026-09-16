import React, { useState, useEffect, useCallback } from 'react';
import CartHeading from './CartHeading';
import CartEmptyMessage from './CartEmptyMessage';
import CartTableHeader from './CartTableHeader';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import CartPromoCode from './CartPromoCode';
import CartFaq from './CartFaq';

const TAX_RATE = 0.18;

function loadCartFromStorage() {
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
  return cartData;
}

function saveCartToStorage(cartData) {
  localStorage.setItem('deltaCartData', JSON.stringify(cartData));
}

const Cart = () => {
  const [items, setItems] = useState(() => {
    return loadCartFromStorage().items || [];
  });
  const [discountRate, setDiscountRate] = useState(0);
  const [shippingLocation, setShippingLocation] = useState('Locating...');

  // Persist to localStorage whenever items or discount change
  useEffect(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const discountAmount = subtotal * discountRate;
    const discountedSubtotal = subtotal - discountAmount;
    const tax = discountedSubtotal * TAX_RATE;
    const total = discountedSubtotal + tax;

    const cartData = {
      items,
      subtotal,
      discountRate,
      discountAmount,
      tax,
      total,
    };
    saveCartToStorage(cartData);

    // Update header cart badge (if it exists in DOM)
    const headerCartBadge = document.querySelector('.tp-header-pb-cart-count');
    if (headerCartBadge) headerCartBadge.textContent = items.length;
  }, [items, discountRate]);

  // Geolocation for shipping destination
  useEffect(() => {
    if (!navigator.geolocation) {
      setShippingLocation('Location not supported.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        )
          .then((res) => res.json())
          .then((data) => {
            const location =
              data.principalSubdivision || data.city || data.countryName || 'your location';
            setShippingLocation(`Shipping to ${location}.`);
          })
          .catch(() => {
            setShippingLocation('Shipping to your location.');
          });
      },
      () => {
        setShippingLocation('Location access denied.');
      }
    );
  }, []);

  // Handlers
  const handleIncrement = useCallback((index) => {
    setItems((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], qty: updated[index].qty + 1 };
      return updated;
    });
  }, []);

  const handleDecrement = useCallback((index) => {
    setItems((prev) => {
      const updated = [...prev];
      if (updated[index].qty > 1) {
        updated[index] = { ...updated[index], qty: updated[index].qty - 1 };
      } else {
        updated.splice(index, 1);
      }
      return updated;
    });
  }, []);

  const handleRemove = useCallback((index) => {
    setItems((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
  }, []);

  const handleApplyPromo = useCallback((rate) => {
    setDiscountRate(rate);
  }, []);

  // Calculations
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discountAmount = subtotal * discountRate;
  const discountedSubtotal = subtotal - discountAmount;
  const tax = discountedSubtotal * TAX_RATE;
  const total = discountedSubtotal + tax;
  const isEmpty = items.length === 0;

  return (
    <>
      <div className="pb-50 bg-white cart-wrapper pt-50 tp-ff-body">
        <div className="container">
          <div className="mx-auto">
            <CartHeading />

            <CartEmptyMessage visible={isEmpty} />

            {!isEmpty && (
              <div className="cart-main-container border rounded bg-white mb-5">
                <div className="row g-0 cart-layout">
                  {/* Items Column */}
                  <div className="col-lg-8 p-4 border-end cart-items-col">
                    <div className="cart-items-wrapper pe-md-3">
                      <CartTableHeader />
                      <div id="dynamic-cart-items">
                        {items.map((item, index) => (
                          <CartItem
                            key={item.id || index}
                            item={item}
                            index={index}
                            onIncrement={handleIncrement}
                            onDecrement={handleDecrement}
                            onRemove={handleRemove}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Summary Column */}
                  <div className="col-lg-4 p-4 cart-summary-col">
                    <CartSummary
                      subtotal={subtotal}
                      discountRate={discountRate}
                      discountAmount={discountAmount}
                      tax={tax}
                      total={total}
                      shippingLocation={shippingLocation}
                    />
                    <CartPromoCode onApplyPromo={handleApplyPromo} />
                  </div>
                </div>
              </div>
            )}


          </div>
        </div>
      </div>
      <CartFaq />
    </>
  );
};

export default Cart;
