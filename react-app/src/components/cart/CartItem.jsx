import React from 'react';

const formatCurrency = (number) => {
  return '₹' + number.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

const CartItem = ({ item, index, onIncrement, onDecrement, onRemove }) => {
  const itemTotal = item.qty * item.price;

  return (
    <div
      className="d-flex flex-wrap flex-lg-nowrap align-items-center border-bottom pb-4 mb-4 gap-3 cart-item tp-ff-body"
      data-index={index}
      data-price={item.price}
    >
      {/* Product info */}
      <div className="flex-grow-1 d-flex align-items-center gap-3 item-product-col">
        <div className="bg-light rounded p-2 item-image-wrapper" style={{ width: '80px', height: '80px' }}>
          <img src={item.image} alt={item.name} className="w-100 h-100 object-fit-contain" />
        </div>
        <div className="d-flex flex-column item-info">
          <div className="fw-bold text-dark text-uppercase mb-1 item-name tp-ff-heading" style={{ fontSize: '13px' }}>{item.name}</div>
          <button
            className="btn btn-link text-danger p-0 mt-2 text-decoration-none d-flex align-items-center gap-1 text-remove-btn action-btn remove fw-medium tp-ff-body"
            style={{ fontSize: '13px' }}
            onClick={() => onRemove(index)}
          >
            <i className="fa-regular fa-trash-can"></i> Remove
          </button>
        </div>
      </div>

      {/* Unit price */}
      <div className="text-center text-secondary d-none d-lg-block item-price-col tp-ff-body" style={{ width: '100px', fontSize: '13px' }}>
        {formatCurrency(item.price)}
      </div>

      {/* Quantity controls */}
      <div className="d-flex justify-content-start justify-content-lg-center item-qty-col" style={{ width: '120px' }}>
        <div className="d-flex align-items-center border rounded-pill bg-white qty-control" style={{ height: '32px', width: '90px' }}>
          <button
            className="btn btn-sm text-dark px-2 border-0 bg-transparent h-100 d-flex align-items-center justify-content-center qty-btn minus"
            onClick={() => onDecrement(index)}
            style={{ width: '30px' }}
          >
            <span className="fw-bold fs-5">-</span>
          </button>
          <input
            type="text"
            className="form-control form-control-sm border-0 text-center fw-bold bg-transparent shadow-none px-0 qty-input tp-ff-body"
            value={item.qty}
            readOnly
            style={{ width: '30px', fontSize: '12px', pointerEvents: 'none' }}
          />
          <button
            className="btn btn-sm text-dark px-2 border-0 bg-transparent h-100 d-flex align-items-center justify-content-center qty-btn plus"
            onClick={() => onIncrement(index)}
            style={{ width: '30px' }}
          >
            <span className="fw-bold fs-5">+</span>
          </button>
        </div>
      </div>

      {/* Item total */}
      <div className="text-start text-lg-end fw-bold text-dark item-total-col price-current tp-ff-body" style={{ width: '100px', fontSize: '13px' }}>
        {formatCurrency(itemTotal)}
      </div>
    </div>
  );
};

export default CartItem;
