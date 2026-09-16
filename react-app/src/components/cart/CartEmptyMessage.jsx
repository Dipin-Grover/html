import React from 'react';
import { Link } from 'react-router-dom';

const CartEmptyMessage = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="empty-cart-message bg-white rounded shadow-sm text-center py-5 px-3">
      <i className="fa-regular fa-cart-shopping text-muted mb-4 d-block display-1"></i>
      <h3 className="tp-ff-heading text-dark mb-3" style={{ fontSize: '22px' }}>Your cart is empty</h3>
      <p className="tp-ff-body text-secondary mb-4" style={{ fontSize: '16px' }}>
        Looks like you haven't added any items to your cart yet.
      </p>
      <Link to="/" className="btn btn-primary tp-ff-body fw-semibold px-4 py-2" style={{ fontSize: '16px' }}>
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartEmptyMessage;
