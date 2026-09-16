import React from 'react';

const AddressCard = ({ address, index, onEdit, onMakeDefault }) => {
  return (
    <div className="bg-white border rounded shadow-sm p-4 h-100 d-flex flex-column tp-ff-body position-relative">
      <div className="d-flex justify-content-between align-items-start mb-4">
        <h4 className="fs-5 fw-bold text-dark tp-ff-heading mb-0">Address {index + 1}</h4>
        {address.isDefault && (
          <span className="badge bg-primary rounded-pill px-3 py-1 fw-medium" style={{ fontSize: '12px' }}>
            Default
          </span>
        )}
      </div>
      
      <div className="text-secondary flex-grow-1" style={{ fontSize: '15px', lineHeight: '1.7' }}>
        <div className="text-dark mb-1 fw-medium">{address.name}</div>
        <div className="mb-1">{address.addressLine}</div>
        <div className="mb-1">{address.city} {address.pincode}</div>
        <div className="mb-1">{address.state}</div>
        <div className="mb-1">{address.country}</div>
        <div className="mb-1 mt-2">{address.phone}</div>
        {address.email && <div className="mb-1">{address.email}</div>}
      </div>

      <div className="mt-4 d-flex flex-wrap gap-2">
        <button className="btn btn-dark px-4 py-2 fw-medium rounded" style={{ fontSize: '14px' }} onClick={() => onEdit(index)}>Edit</button>
        {!address.isDefault && (
          <button className="btn btn-outline-secondary px-4 py-2 fw-medium bg-white text-dark rounded" style={{ borderColor: '#cbd5e1', fontSize: '14px' }} onClick={() => onMakeDefault(index)}>
            Make Default
          </button>
        )}
      </div>
    </div>
  );
};

export default AddressCard;
