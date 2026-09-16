import React from 'react';

const CartTableHeader = () => {
  return (
    <div className="d-none d-lg-flex border-bottom pb-3 mb-4 fw-bold text-dark cart-table-header tp-ff-heading gap-3" style={{ fontSize: '16px' }}>
      <div className="flex-grow-1 th-product">Product</div>
      <div className="text-center th-price" style={{ width: '100px' }}>Price</div>
      <div className="text-center th-qty" style={{ width: '120px' }}>Quantity</div>
      <div className="text-end th-total" style={{ width: '100px' }}>Total</div>
    </div>
  );
};

export default CartTableHeader;
