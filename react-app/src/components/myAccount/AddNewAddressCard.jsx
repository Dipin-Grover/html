import React from 'react';

const AddNewAddressCard = ({ onAdd }) => {
  return (
    <div className="bg-white rounded p-4 h-100 d-flex flex-column align-items-center justify-content-center tp-ff-body cursor-pointer" 
         style={{ border: '2px dashed #cbd5e1', minHeight: '300px', transition: 'all 0.3s', cursor: 'pointer' }}
         onClick={onAdd}>
      <div className="text-secondary mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>
      <h5 className="fs-6 fw-bold text-secondary mb-0 tp-ff-heading">Add New Address</h5>
    </div>
  );
};

export default AddNewAddressCard;
