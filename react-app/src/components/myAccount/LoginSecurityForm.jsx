import React, { useState } from 'react';

const LoginSecurityForm = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div id="security-container" className="mb-5">
      <div className="bg-white border rounded-4 p-4 p-md-5 shadow-sm mb-4">
        <h2 className="fs-4 fw-bold text-dark mb-4 pb-2" style={{ fontSize: '24px', color: '#1e293b' }}>
          Login & security
        </h2>
        <form className="checkout-layout" onSubmit={(e) => e.preventDefault()}>
          <div className="row g-3 mb-4 form-grid">
            <div className="col-md-6">
              <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
                First name <span className="text-danger req">*</span>
              </label>
              <input
                type="text"
                id="sec_first_name"
                name="first_name"
                className="form-control py-2 shadow-none border-secondary-subtle tp-ff-body"
                defaultValue="John"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
                Last name <span className="text-danger req">*</span>
              </label>
              <input
                type="text"
                id="sec_last_name"
                name="last_name"
                className="form-control py-2 shadow-none border-secondary-subtle tp-ff-body"
                defaultValue="Doe"
                required
              />
            </div>
          </div>

          <div className="row mb-5 form-grid full">
            <div className="col-12">
              <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
                Email address <span className="text-danger req">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="form-control py-2 shadow-none border-secondary-subtle tp-ff-body"
                defaultValue="john.doe@example.com"
                required
                readOnly
                style={{ backgroundColor: '#f8fafc' }}
              />
            </div>
          </div>

          <fieldset className="border rounded-3 p-4 mb-4" style={{ borderColor: '#cbd5e1', marginTop: '60px' }}>
            <legend className="float-none w-auto px-3 fw-bold text-dark fs-5 mb-0" style={{ color: '#334155' }}>
              Password change
            </legend>

            <div className="row mb-4 form-grid full mt-3">
              <div className="col-12">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label className="form-label fw-medium text-secondary mb-0" style={{ fontSize: '14px' }}>
                    Current password (leave blank to leave unchanged)
                  </label>
                </div>
                <div className="input-group">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    name="current_password"
                    id="current_password"
                    className="form-control py-2 shadow-none border-secondary-subtle border-end-0 tp-ff-body"
                  />
                  <span
                    className="input-group-text bg-white border-secondary-subtle border-start-0"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    <i className={`fal ${showCurrentPassword ? "fa-eye" : "fa-eye-slash"} text-muted`}></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="row mb-4 form-grid full">
              <div className="col-12">
                <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
                  New password (leave blank to leave unchanged)
                </label>
                <div className="input-group">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    name="new_password"
                    id="new_password"
                    className="form-control py-2 shadow-none border-secondary-subtle border-end-0 tp-ff-body"
                  />
                  <span
                    className="input-group-text bg-white border-secondary-subtle border-start-0"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    <i className={`fal ${showNewPassword ? "fa-eye" : "fa-eye-slash"} text-muted`}></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="row mb-2 form-grid full">
              <div className="col-12">
                <label className="form-label fw-medium text-secondary mb-2" style={{ fontSize: '14px' }}>
                  Confirm new password
                </label>
                <div className="input-group">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirm_password"
                    id="confirm_password"
                    className="form-control py-2 shadow-none border-secondary-subtle border-end-0 tp-ff-body"
                  />
                  <span
                    className="input-group-text bg-white border-secondary-subtle border-start-0"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <i className={`fal ${showConfirmPassword ? "fa-eye" : "fa-eye-slash"} text-muted`}></i>
                  </span>
                </div>
              </div>
            </div>
          </fieldset>

          <div className="mt-4 pt-2">
            <button
              type="submit"
              className="btn btn-dark fw-bold px-4 py-2"
              style={{ backgroundColor: '#1e293b', borderRadius: '8px' }}
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSecurityForm;
