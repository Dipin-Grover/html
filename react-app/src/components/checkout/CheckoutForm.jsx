import React, { useState } from 'react';

const CheckoutForm = ({
  billingDetails,
  setBillingDetails,
  shippingDetails,
  setShippingDetails,
  useShipping,
  setUseShipping
}) => {
  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="col-lg-8 p-4 border-end checkout-main-col">
      <div className="checkout-box tp-ff-body">
        <h2 className="fs-4 fw-bold text-dark mb-4 pb-2 tp-ff-heading border-bottom">Billing details</h2>

        {/* Billing Form */}
        <div className="row g-3 mb-4 form-grid">
          <div className="col-md-6">
            <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
              First name <span className="text-danger req">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              className="form-control py-2 shadow-none border-secondary-subtle"
              placeholder="First name"
              value={billingDetails.firstName || ''}
              onChange={handleBillingChange}
              required
            />
            <div className="invalid-feedback">This is a mandatory field.</div>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
              Last name <span className="text-danger req">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              className="form-control py-2 shadow-none border-secondary-subtle"
              placeholder="Last name"
              value={billingDetails.lastName || ''}
              onChange={handleBillingChange}
              required
            />
            <div className="invalid-feedback">This is a mandatory field.</div>
          </div>
        </div>

        <div className="row g-3 mb-4 form-grid">
          <div className="col-md-6">
            <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
              Phone No. <span className="text-danger req">*</span>
            </label>
            <input
              type="text"
              name="phone"
              className="form-control py-2 shadow-none border-secondary-subtle"
              placeholder="Phone No."
              value={billingDetails.phone || ''}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, '');
                handleBillingChange({ target: { name: 'phone', value: val } });
              }}
              required
              maxLength="10"
            />
            <div className="invalid-feedback">This is a mandatory field.</div>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
              Email address <span className="text-danger req">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="form-control py-2 shadow-none border-secondary-subtle"
              placeholder="Email address"
              value={billingDetails.email || ''}
              onChange={handleBillingChange}
              required
            />
            <div className="invalid-feedback">This is a mandatory field.</div>
          </div>
        </div>

        <div className="row g-3 mb-4 form-grid">
          <div className="col-md-6">
            <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
              Company name (optional)
            </label>
            <input
              type="text"
              name="company"
              className="form-control py-2 shadow-none border-secondary-subtle"
              placeholder="Company name"
              value={billingDetails.company || ''}
              onChange={handleBillingChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
              GST Number (optional)
            </label>
            <input
              type="text"
              name="gst"
              className="form-control py-2 shadow-none border-secondary-subtle"
              placeholder="GST Number"
              value={billingDetails.gst || ''}
              onChange={handleBillingChange}
            />
          </div>
        </div>

        <div className="row mb-4 form-grid full">
          <div className="col-12">
            <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
              Address <span className="text-danger req">*</span>
            </label>
            <input
              type="text"
              name="address"
              className="form-control py-2 shadow-none border-secondary-subtle"
              placeholder="House number and street name"
              value={billingDetails.address || ''}
              onChange={handleBillingChange}
              required
            />
            <div className="invalid-feedback">This is a mandatory field.</div>
          </div>
        </div>

        <div className="row g-3 mb-4 form-grid">
          <div className="col-md-6">
            <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
              PIN Code <span className="text-danger req">*</span>
            </label>
            <input
              type="text"
              name="pincode"
              className="form-control py-2 shadow-none border-secondary-subtle"
              placeholder="PIN Code"
              value={billingDetails.pincode || ''}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, '');
                handleBillingChange({ target: { name: 'pincode', value: val } });
              }}
              required
              maxLength="6"
            />
            <div className="invalid-feedback">This is a mandatory field.</div>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
              Town / City <span className="text-danger req">*</span>
            </label>
            <input
              type="text"
              name="city"
              className="form-control py-2 shadow-none border-secondary-subtle"
              placeholder="Town / City"
              value={billingDetails.city || ''}
              onChange={handleBillingChange}
              required
            />
            <div className="invalid-feedback">This is a mandatory field.</div>
          </div>
        </div>

        <div className="row mb-4 form-grid full">
          <div className="col-12">
            <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
              State <span className="text-danger req">*</span>
            </label>
            <select
              name="state"
              className="form-control py-2 shadow-none border-secondary-subtle"
              value={billingDetails.state || ''}
              onChange={handleBillingChange}
              required
            >
              <option value="">Select State</option>
              {indianStates.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <div className="invalid-feedback">This is a mandatory field.</div>
          </div>
        </div>

        {/* Shipping Toggle */}
        <div className="d-flex align-items-center gap-2 fw-semibold text-dark my-4" style={{ fontSize: '15px' }}>
          <input
            type="checkbox"
            id="diff-addr"
            className="form-check-input mt-0 shadow-none"
            style={{ cursor: 'pointer' }}
            checked={useShipping}
            onChange={(e) => setUseShipping(e.target.checked)}
          />
          <label htmlFor="diff-addr" className="form-check-label" style={{ cursor: 'pointer' }}>
            Ship to a different address?
          </label>
        </div>

        {/* Shipping Form (Conditional) */}
        {useShipping && (
          <div className="pt-3 border-top mt-2 mb-4">
            <div className="row g-3 mb-4 form-grid">
              <div className="col-md-6">
                <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
                  First name <span className="text-danger req">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control py-2 shadow-none border-secondary-subtle"
                  placeholder="First name"
                  value={shippingDetails.firstName || ''}
                  onChange={handleShippingChange}
                  required
                />
                <div className="invalid-feedback">This is a mandatory field.</div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
                  Last name <span className="text-danger req">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control py-2 shadow-none border-secondary-subtle"
                  placeholder="Last name"
                  value={shippingDetails.lastName || ''}
                  onChange={handleShippingChange}
                  required
                />
                <div className="invalid-feedback">This is a mandatory field.</div>
              </div>
            </div>

            <div className="row g-3 mb-4 form-grid">
              <div className="col-md-6">
                <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
                  Phone No. <span className="text-danger req">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  className="form-control py-2 shadow-none border-secondary-subtle"
                  placeholder="Phone No."
                  value={shippingDetails.phone || ''}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9]/g, '');
                    handleShippingChange({ target: { name: 'phone', value: val } });
                  }}
                  required
                  maxLength="10"
                />
                <div className="invalid-feedback">This is a mandatory field.</div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
                  Email address <span className="text-danger req">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control py-2 shadow-none border-secondary-subtle"
                  placeholder="Email address"
                  value={shippingDetails.email || ''}
                  onChange={handleShippingChange}
                  required
                />
                <div className="invalid-feedback">This is a mandatory field.</div>
              </div>
            </div>

            <div className="row g-3 mb-4 form-grid">
              <div className="col-md-6">
                <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
                  Company name (optional)
                </label>
                <input
                  type="text"
                  name="company"
                  className="form-control py-2 shadow-none border-secondary-subtle"
                  placeholder="Company name"
                  value={shippingDetails.company || ''}
                  onChange={handleShippingChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
                  GST Number (optional)
                </label>
                <input
                  type="text"
                  name="gst"
                  className="form-control py-2 shadow-none border-secondary-subtle"
                  placeholder="GST Number"
                  value={shippingDetails.gst || ''}
                  onChange={handleShippingChange}
                />
              </div>
            </div>

            <div className="row mb-4 form-grid full">
              <div className="col-12">
                <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
                  Address <span className="text-danger req">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  className="form-control py-2 shadow-none border-secondary-subtle"
                  placeholder="House number and street name"
                  value={shippingDetails.address || ''}
                  onChange={handleShippingChange}
                  required
                />
                <div className="invalid-feedback">This is a mandatory field.</div>
              </div>
            </div>

            <div className="row g-3 mb-4 form-grid">
              <div className="col-md-6">
                <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
                  PIN Code <span className="text-danger req">*</span>
                </label>
                <input
                  type="text"
                  name="pincode"
                  className="form-control py-2 shadow-none border-secondary-subtle"
                  placeholder="PIN Code"
                  value={shippingDetails.pincode || ''}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9]/g, '');
                    handleShippingChange({ target: { name: 'pincode', value: val } });
                  }}
                  required
                  maxLength="6"
                />
                <div className="invalid-feedback">This is a mandatory field.</div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
                  Town / City <span className="text-danger req">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  className="form-control py-2 shadow-none border-secondary-subtle"
                  placeholder="Town / City"
                  value={shippingDetails.city || ''}
                  onChange={handleShippingChange}
                  required
                />
                <div className="invalid-feedback">This is a mandatory field.</div>
              </div>
            </div>

            <div className="row mb-4 form-grid full">
              <div className="col-12">
                <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
                  State <span className="text-danger req">*</span>
                </label>
                <select
                  name="state"
                  className="form-control py-2 shadow-none border-secondary-subtle"
                  value={shippingDetails.state || ''}
                  onChange={handleShippingChange}
                  required
                >
                  <option value="">Select State</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                <div className="invalid-feedback">This is a mandatory field.</div>
              </div>
            </div>
          </div>
        )}

        {/* Order Notes */}
        <div className="row form-grid full">
          <div className="col-12">
            <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
              Order notes (optional)
            </label>
            <textarea
              name="orderNotes"
              className="form-control py-2 shadow-none border-secondary-subtle"
              placeholder="Notes about your order, e.g. special notes for delivery."
              style={{ minHeight: '120px', resize: 'vertical' }}
              value={billingDetails.orderNotes || ''}
              onChange={handleBillingChange}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
