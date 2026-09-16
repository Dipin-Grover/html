import React from 'react';
import { Link } from 'react-router-dom';

const formatCurrency = (number) => {
  return '₹' + number.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

const CartSummary = ({ subtotal, discountRate, discountAmount, tax, total, shippingLocation }) => {
  return (
    <div className="bg-transparent border-0 rounded-0 p-0 mb-0 cart-box tp-ff-body">
      <h3 className="fw-bold text-dark mb-4 mt-0 summary-title tp-ff-heading" style={{ fontSize: '16px' }}>Order Summary</h3>

      <div className="border-top border-bottom py-3 mb-4 summary-list">
        {/* Subtotal */}
        <div className="d-flex justify-content-between mb-3 text-secondary summary-row" style={{ fontSize: '16px' }}>
          <span>Subtotal</span>
          <span className="text-dark fw-medium">{formatCurrency(subtotal)}</span>
        </div>

        {/* Discount (only shown when active) */}
        {discountRate > 0 && (
          <div className="d-flex justify-content-between mb-3 text-success summary-row discount-row" style={{ fontSize: '16px' }}>
            <span>Discount ({Math.round(discountRate * 100)}%)</span>
            <span className="fw-medium">-{formatCurrency(discountAmount)}</span>
          </div>
        )}

        {/* Shipping */}
        <div className="d-flex justify-content-between mb-3 text-secondary align-items-start summary-row shipping-row" style={{ fontSize: '16px' }}>
          <span>Shipping</span>
          <div className="d-flex flex-column align-items-end text-end gap-1 shipping-details flex-grow-1 w-75">
            <span className="text-dark fw-medium shipping-method">Free shipping</span>
            <span className="text-muted shipping-destination" style={{ fontSize: '13px' }}>{shippingLocation}</span>
          </div>
        </div>

        {/* Tax */}
        <div className="d-flex justify-content-between text-secondary summary-row mb-0" style={{ fontSize: '16px' }}>
          <span>Tax (18%)</span>
          <span className="text-dark fw-medium">{formatCurrency(tax)}</span>
        </div>
      </div>

      {/* Total */}
      <div className="d-flex justify-content-between align-items-center fw-bold text-dark mb-4 summary-row total tp-ff-heading" style={{ fontSize: '20px' }}>
        <span>Total</span>
        <span>{formatCurrency(total)}</span>
      </div>

      {/* Actions */}
      <Link
        to="/checkout"
        className="btn btn-primary w-100 py-2 fw-medium checkout-btn tp-ff-body"
        style={{ fontSize: '16px' }}
      >
        Proceed to Checkout
      </Link>
      <Link
        to="/"
        className="d-block text-center mt-3 text-secondary text-decoration-none continue-shopping tp-ff-body"
        style={{ fontSize: '16px' }}
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartSummary;
