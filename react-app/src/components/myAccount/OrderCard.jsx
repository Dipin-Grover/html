import React from 'react';
import { Link } from 'react-router-dom';

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white border rounded shadow-sm mb-4 tp-ff-body">
      {/* Header */}
      <div className="d-flex flex-wrap align-items-center justify-content-between p-4 border-bottom">
        <div>
          <h4 className="fs-5 fw-bold text-dark mb-1 tp-ff-heading">Order #: {order.orderNumber}</h4>
          <span className="fs-6 text-secondary" style={{ fontSize: '14px' }}>
            {order.products.length} Products | By {order.customerName} | {order.date}
          </span>
        </div>
        <button className="btn btn-outline-secondary px-4 py-2 fw-medium text-dark bg-white mt-3 mt-sm-0" style={{ borderColor: '#e2e8f0', fontSize: '14px' }}>
          <i className="far fa-download me-2 text-secondary"></i>
          Invoice
        </button>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="row g-4">
          {/* Products List */}
          <div className="col-lg-7 position-relative pe-lg-4">
            <h5 className="fs-6 fw-bold text-dark mb-4 tp-ff-heading" style={{ color: '#1e293b' }}>Products</h5>
            <div className="row g-3">
              {order.products.map((product, idx) => (
                <div key={idx} className="col-sm-6 d-flex align-items-center gap-3">
                  <div className="rounded overflow-hidden p-1 shadow-sm" style={{ width: '70px', height: '70px', flexShrink: 0, backgroundColor: product.bgColor || '#000' }}>
                    <img src={product.image} alt={product.name} className="w-100 h-100 object-fit-contain" />
                  </div>
                  <div>
                    <h6 className="fw-bold text-dark mb-1 tp-ff-heading" style={{ fontSize: '15px' }}>{product.name}</h6>
                    <span className="text-secondary" style={{ fontSize: '14px' }}>Qty: {product.qty}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop divider */}
            <div className="d-none d-lg-block position-absolute" style={{ right: 0, top: 0, bottom: 0, width: '1px', backgroundColor: '#e2e8f0' }}></div>
          </div>

          {/* Order Summary */}
          <div className="col-lg-5 ps-lg-4">
            <h5 className="fs-6 fw-bold text-dark mb-4 tp-ff-heading" style={{ color: '#1e293b' }}>Order Summary</h5>
            
            <div className="d-flex mb-3" style={{ fontSize: '14px' }}>
              <span className="text-secondary" style={{ width: '130px', flexShrink: 0 }}>Status:</span>
              <div>
                <span className={`badge rounded-pill fw-medium px-3 py-1 ${order.status === 'Processing' ? 'bg-warning text-dark' : 'bg-success text-white'}`} style={{ fontSize: '12px' }}>
                  {order.status}
                </span>
              </div>
            </div>

            <div className="d-flex mb-3" style={{ fontSize: '14px' }}>
              <span className="text-secondary" style={{ width: '130px', flexShrink: 0 }}>Date of delivery:</span>
              <span className="text-dark fw-medium">{order.deliveryDate}</span>
            </div>

            <div className="d-flex mb-3" style={{ fontSize: '14px' }}>
              <span className="text-secondary" style={{ width: '130px', flexShrink: 0 }}>Delivered to:</span>
              <span className="text-dark fw-medium" style={{ flex: 1, lineHeight: '1.6' }}>
                {order.address}
              </span>
            </div>

            <div className="d-flex mt-4 pt-3 border-top" style={{ fontSize: '14px' }}>
              <span className="text-secondary" style={{ width: '130px', flexShrink: 0 }}>Total:</span>
              <span className="text-dark fw-bold fs-5 tp-ff-heading">{order.total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
