import React, { useState, useEffect } from 'react';

const AddressModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    addressLine: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India',
    isDefault: false
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        name: '',
        phone: '',
        email: '',
        addressLine: '',
        city: '',
        state: '',
        pincode: '',
        country: 'India',
        isDefault: false
      });
    }
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal fade show" tabIndex="-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(5px)' }}>
        <div className="modal-dialog modal-lg w-100" style={{ margin: '0 auto' }}>
          <div className="modal-content tp-ff-body rounded shadow border-0">
            <div className="modal-header border-bottom">
              <h5 className="modal-title fw-bold text-dark tp-ff-heading">{initialData ? 'Edit Address' : 'Add New Address'}</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body p-4">
              <form onSubmit={handleSubmit} id="addressForm">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label text-secondary" style={{ fontSize: '14px' }}>Full Name *</label>
                    <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-secondary" style={{ fontSize: '14px' }}>Phone Number *</label>
                    <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className="col-12">
                    <label className="form-label text-secondary" style={{ fontSize: '14px' }}>Email (Optional)</label>
                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="col-12">
                    <label className="form-label text-secondary" style={{ fontSize: '14px' }}>Address Line *</label>
                    <input type="text" className="form-control" name="addressLine" value={formData.addressLine} onChange={handleChange} required placeholder="House No, Building, Street, Area" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-secondary" style={{ fontSize: '14px' }}>City *</label>
                    <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-secondary" style={{ fontSize: '14px' }}>Pincode *</label>
                    <input type="text" className="form-control" name="pincode" value={formData.pincode} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-secondary" style={{ fontSize: '14px' }}>State *</label>
                    <input type="text" className="form-control" name="state" value={formData.state} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-secondary" style={{ fontSize: '14px' }}>Country *</label>
                    <input type="text" className="form-control" name="country" value={formData.country} onChange={handleChange} required />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer border-top bg-light">
              <button type="button" className="btn btn-outline-secondary px-4 fw-medium" onClick={onClose}>Cancel</button>
              <button type="submit" form="addressForm" className="btn btn-dark px-4 fw-medium">Save Address</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressModal;
