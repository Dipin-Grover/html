import React, { useEffect } from 'react';

const ContactSupportForm = () => {
  useEffect(() => {
    const form = document.getElementById('contactSupportForm');
    if (form) {
      const handleFormSubmit = (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      };
      form.addEventListener('submit', handleFormSubmit, false);
      return () => {
        form.removeEventListener('submit', handleFormSubmit, false);
      };
    }
  }, []);

  return (
    <div className="text-start border-top border-light-subtle tp-ff-body" style={{ marginTop: '50px', paddingTop: '50px' }}>
      <h2 className="fs-3 fw-bold text-dark text-center mb-5 tp-ff-heading">Welcome To Contact DeltaView</h2>
      <form action="#" method="POST" className="checkout-layout needs-validation" noValidate id="contactSupportForm">
        <div className="row g-4">
          <div className="col-md-6">
            <label className="form-label fw-medium text-dark" style={{ fontSize: '14px' }}>Full name <span className="text-danger">*</span></label>
            <input type="text" className="form-control py-2 shadow-none border-secondary-subtle" required minLength="2" pattern="[A-Za-z\s]+" title="Name must contain at least 2 characters (letters and spaces only)" />
            <div className="invalid-feedback">This field is required.</div>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-medium text-dark" style={{ fontSize: '14px' }}>Email address <span className="text-danger">*</span></label>
            <input type="email" className="form-control py-2 shadow-none border-secondary-subtle" required title="Please enter a valid email address" />
            <div className="invalid-feedback">This field is required.</div>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-medium text-dark" style={{ fontSize: '14px' }}>Phone number <span className="text-danger">*</span></label>
            <input 
              type="text" 
              className="form-control py-2 shadow-none border-secondary-subtle" 
              required 
              pattern="[0-9]{10}" 
              maxLength="10" 
              title="Please enter a valid 10-digit phone number" 
              onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ''); }} 
            />
            <div className="invalid-feedback">This field is required.</div>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-medium text-dark" style={{ fontSize: '14px' }}>Location <span className="text-danger">*</span></label>
            <input type="text" id="location_input" className="form-control py-2 shadow-none border-secondary-subtle" required minLength="2" title="Location cannot be empty" />
            <div className="invalid-feedback">This field is required.</div>
          </div>
          <div className="col-12">
            <label className="form-label fw-medium text-dark" style={{ fontSize: '14px' }}>Please enter your message here <span className="text-danger">*</span></label>
            <textarea className="form-control py-2 shadow-none border-secondary-subtle" rows="4" required minLength="10" title="Message must be at least 10 characters long"></textarea>
            <div className="invalid-feedback">This field is required.</div>
          </div>
          <div className="col-12 mt-2">
            <div className="d-flex border rounded border-secondary-subtle overflow-hidden" style={{ maxWidth: '250px' }}>
              <div className="bg-dark text-white px-3 py-2 fw-bold d-flex align-items-center text-nowrap">7 + 7 =</div>
              <input type="text" className="form-control border-0 shadow-none px-3 py-2" placeholder="Enter captcha" required />
            </div>
            <div className="invalid-feedback" style={{ display: 'none' }}>This field is required.</div>
          </div>
          <div className="col-12 mt-4">
            <button type="submit" className="btn fw-bold px-4 py-2 d-inline-flex align-items-center gap-2 shadow-none" style={{ backgroundColor: '#bfdbfe', color: '#000', borderRadius: '4px' }}>
              SUBMIT &rarr;
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactSupportForm;
