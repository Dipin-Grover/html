import React from 'react';

const ReachOutCards = () => {
  return (
    <div className="row g-4 text-start mt-4">
      {/* Corporate Office Card */}
      <div className="col-md-4">
        <div className="border border-light-subtle rounded-3 p-4 h-100 bg-light">
          <div className="d-inline-flex align-items-center justify-content-center bg-white text-primary rounded-circle mb-4 shadow-sm" style={{ width: '50px', height: '50px' }}>
            <i className="fal fa-map-marker-alt" style={{ fontSize: '20px' }}></i>
          </div>
          <h4 className="fs-5 fw-bold text-dark mb-3 tp-ff-heading">Corporate Office</h4>
          <p className="text-secondary mb-0 tp-ff-body" style={{ fontSize: '14px', lineHeight: '1.6' }}>
            SCO-38, 4th Floor, Old Judicial Complex, Civil Lines, Gurugram, Haryana - 122001
          </p>
        </div>
      </div>
      
      {/* Sales Enquiries Card */}
      <div className="col-md-4">
        <div className="border border-light-subtle rounded-3 p-4 h-100 bg-light">
          <div className="d-inline-flex align-items-center justify-content-center bg-white text-primary rounded-circle mb-4 shadow-sm" style={{ width: '50px', height: '50px' }}>
            <i className="fal fa-phone-alt" style={{ fontSize: '20px' }}></i>
          </div>
          <h4 className="fs-5 fw-bold text-dark mb-3 tp-ff-heading">Sales Enquiries</h4>
          <p className="text-secondary mb-2 tp-ff-body" style={{ fontSize: '14px' }}>
            <strong className="text-dark fw-medium">Toll Free:</strong> 1800-571-7167
          </p>
          <p className="text-secondary mb-0 tp-ff-body" style={{ fontSize: '14px' }}>
            <strong className="text-dark fw-medium">Email:</strong> sales@deltaview.in
          </p>
        </div>
      </div>

      {/* Technical Support Card */}
      <div className="col-md-4">
        <div className="border border-light-subtle rounded-3 p-4 h-100 bg-light">
          <div className="d-inline-flex align-items-center justify-content-center bg-white text-primary rounded-circle mb-4 shadow-sm" style={{ width: '50px', height: '50px' }}>
            <i className="fal fa-headset" style={{ fontSize: '20px' }}></i>
          </div>
          <h4 className="fs-5 fw-bold text-dark mb-3 tp-ff-heading">Technical Support</h4>
          <p className="text-secondary mb-2 tp-ff-body" style={{ fontSize: '14px' }}>
            <strong className="text-dark fw-medium">Toll Free:</strong> 1800-571-7167
          </p>
          <p className="text-secondary mb-0 tp-ff-body" style={{ fontSize: '14px' }}>
            <strong className="text-dark fw-medium">Email:</strong> support@deltaview.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReachOutCards;
