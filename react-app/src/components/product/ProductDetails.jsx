import React from 'react';

const ProductDetails = ({ 
  selectedSize, 
  setSelectedSize, 
  quantity, 
  handleQuantityChange 
}) => {
  return (
    <div className="ps-lg-5 position-sticky" style={{ top: '120px', height: 'fit-content' }}>
      <h1 className="premium-title fw-bold text-dark mb-3">DeltaView Spark {selectedSize}" <br/></h1>
      <p className="fs-6 text-secondary mb-4 lh-lg">Revolutionizing digital education and corporate meetings through engaging, hands-on interactive experiences.</p>
      
      <div className="mb-4 d-flex align-items-center gap-3">
        <span className="premium-price fw-bold text-dark">₹1,09,824</span>
        <span className="fs-5 text-secondary text-decoration-line-through">₹2,30,100</span>
        <span className="discount-badge" style={{ background: '#ff3366', color: 'white', padding: '4px 8px', borderRadius: '4px' }}>-52% OFF</span>
      </div>

      <div className="d-flex flex-wrap justify-content-between gap-5 mb-15 rounded-4">
        <div>
          <h4 className="fs-6 fw-bold mb-3 text-uppercase text-secondary letter-spacing-1">Screen Size</h4>
          <div className="d-flex align-items-center gap-2 size-options">
            {['65', '75', '86', '98'].map(size => (
              <button 
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`btn fw-bold d-flex align-items-center justify-content-center ${selectedSize === size ? 'btn-dark text-white' : 'btn-outline-secondary bg-white text-dark'}`} 
                style={{ height: '40px', minWidth: '55px' }}
              >
                {size}"
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="fs-6 fw-bold mb-3 text-uppercase text-secondary letter-spacing-1">Quantity</h4>
          <div className="d-flex align-items-center">
            <button onClick={() => handleQuantityChange('minus')} className="btn btn-outline-secondary px-2 py-1" style={{ borderRadius: '6px 0 0 6px', height: '40px', width: '40px' }}>-</button>
            <input type="number" readOnly className="form-control text-center fw-bold border-secondary px-0" value={quantity} style={{ width: '50px', height: '40px', borderRadius: 0, borderLeft: 'none', borderRight: 'none' }} />
            <button onClick={() => handleQuantityChange('plus')} className="btn btn-outline-secondary px-2 py-1" style={{ borderRadius: '0 6px 6px 0', height: '40px', width: '40px' }}>+</button>
          </div>
        </div>
      </div>

      <div className="d-flex gap-3 mb-5 mt-4">
        <button className="btn btn-dark fw-bold text-uppercase px-5 py-3 w-50">Add to Cart</button>
        <button className="btn btn-primary fw-bold text-uppercase px-5 py-3 w-50 border-0">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetails;
