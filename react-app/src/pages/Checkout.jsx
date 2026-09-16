import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutForm from '../components/checkout/CheckoutForm';
import CheckoutSummary from '../components/checkout/CheckoutSummary';
import SparkFaq from "../components/spark_buy_now_button_page/SparkFaq";

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [validated, setValidated] = useState(false);

  const [useShipping, setUseShipping] = useState(false);

  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    gst: '',
    address: '',
    pincode: '',
    city: '',
    state: '',
    orderNotes: ''
  });

  const [shippingDetails, setShippingDetails] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    gst: '',
    address: '',
    pincode: '',
    city: '',
    state: ''
  });

  useEffect(() => {
    // Load cart from storage
    const cartDataStr = localStorage.getItem('deltaCartData');
    if (cartDataStr) {
      try {
        const cartData = JSON.parse(cartDataStr);
        if (cartData.items && cartData.items.length > 0) {
          setCartItems(cartData.items);
          const computedSubtotal = cartData.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
          setSubtotal(computedSubtotal);
          setTotal(computedSubtotal); // Add tax or shipping here if needed later
        } else {
          // Empty cart, maybe redirect?
          navigate('/cart');
        }
      } catch (e) {
        console.error('Failed to parse cart data', e);
      }
    } else {
      navigate('/cart');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    if (!termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }

    // In a real app, send data to backend API and handle payment
    const newOrder = {
      orderNumber: Math.floor(Math.random() * 1000000).toString(),
      date: new Date().toLocaleString(),
      customerName: billingDetails.firstName + ' ' + billingDetails.lastName,
      status: 'Processing',
      deliveryDate: 'Est. 3-5 business days',
      address: `${billingDetails.address}, ${billingDetails.city}, ${billingDetails.state}, PIN: ${billingDetails.pincode}`,
      total: '₹' + total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      products: cartItems.map(item => ({
        name: item.name,
        qty: item.qty,
        image: item.image || 'assets/img/spark/ban1.webp',
        bgColor: '#0f172a'
      }))
    };

    const existingOrdersStr = localStorage.getItem('deltaOrdersData');
    const existingOrders = existingOrdersStr ? JSON.parse(existingOrdersStr) : [];
    existingOrders.unshift(newOrder); // add to top
    localStorage.setItem('deltaOrdersData', JSON.stringify(existingOrders));

    // Mock success and clear cart
    localStorage.removeItem('deltaCartData');
    alert("Order placed successfully!");
    navigate('/my-account');
  };

  return (
    <>
    <div className="pb-50 bg-white checkout-wrapper pt-50 tp-ff-body">
      <div className="container">
        <div className="mx-auto" style={{}}>
          <div className="">
            <h1 className="tp-ff-heading fs-2 fw-bold text-dark mb-3">Checkout</h1>

          </div>

          <form
            className={`checkout-main-container border rounded bg-white mb-5 ${validated ? 'was-validated' : ''}`}
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="row g-0 checkout-layout">
              <CheckoutForm
                billingDetails={billingDetails}
                setBillingDetails={setBillingDetails}
                shippingDetails={shippingDetails}
                setShippingDetails={setShippingDetails}
                useShipping={useShipping}
                setUseShipping={setUseShipping}
              />

              <CheckoutSummary
                cartItems={cartItems}
                subtotal={subtotal}
                total={total}
                termsAccepted={termsAccepted}
                setTermsAccepted={setTermsAccepted}
              />
            </div>
          </form>

          
        </div>
      </div>
    </div>
    
    <SparkFaq />
    </>
  );
};

export default Checkout;
