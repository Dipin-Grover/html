import React, { useState } from 'react';

const CartPromoCode = ({ onApplyPromo }) => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState(null); // { text, isSuccess }

  const handleApply = (e) => {
    e.preventDefault();
    const trimmedCode = code.trim().toLowerCase();

    if (trimmedCode === 'delta10') {
      setMessage({ text: 'Yay! 10% discount applied.', isSuccess: true });
      onApplyPromo(0.1);
    } else {
      setMessage({ text: 'Invalid promo code.', isSuccess: false });
      onApplyPromo(0);
    }
  };

  return (
    <div className="mt-4 promo-section tp-ff-body">
      <div className="fw-medium text-secondary mb-2 promo-title" style={{ fontSize: '13px' }}>
        Do you have a promo code?
      </div>
      <div className="position-relative d-block promo-input-group">
        <input
          type="text"
          className="form-control form-control-lg rounded-3 promo-input tp-ff-body"
          style={{ paddingRight: '90px', fontSize: '16px' }}
          placeholder="Enter promo code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          className="btn btn-dark position-absolute top-50 end-0 translate-middle-y me-2 px-3 promo-apply-btn btn-sm rounded-2 tp-ff-body"
          type="button"
          style={{ zIndex: 5 }}
          onClick={handleApply}
        >
          Apply
        </button>
      </div>
      {message && (
        <div
          className="mt-2 fw-medium tp-ff-body"
          style={{
            fontSize: '13px',
            color: message.isSuccess ? '#16a34a' : '#dc2626',
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default CartPromoCode;
