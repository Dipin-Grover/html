import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaNums, setCaptchaNums] = useState({ num1: 0, num2: 0 });
  const [error, setError] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  useEffect(() => {
    setCaptchaNums({
      num1: Math.floor(Math.random() * 41) + 10,
      num2: Math.floor(Math.random() * 20) + 1,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (parseInt(captchaInput) !== (captchaNums.num1 + captchaNums.num2)) {
      setError('Incorrect captcha!');
      return;
    }

    if (formData.password !== formData.confirm_password) {
      setError('Passwords do not match!');
      return;
    }

    if (!agreedToTerms) {
      setError('You must agree to the terms and privacy policy.');
      return;
    }

    setError('');
    alert(`Registration attempted for: ${formData.fname} ${formData.lname} (${formData.email})`);
    // API call to register
  };

  return (
    <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center p-4 position-relative overflow-auto" style={{ flex: 1 }}>
      <Link to="/" className="position-absolute top-0 start-0 m-4 fw-medium text-secondary text-decoration-none d-flex align-items-center">
        <i className="fal fa-arrow-left me-2"></i> Back to home
      </Link>
      
      <div className="w-100" style={{ maxWidth: '480px' }}>
        <div className="text-center mb-4">
          <h2 className="fs-5 fw-bolder text-uppercase mb-1" style={{ color: '#10302a', letterSpacing: '0.5px' }}>
            SIGN UP TO YOUR ACCOUNT
          </h2>
          {error && (
            <div className="alert alert-danger p-2 mt-2 border-0 rounded fs-6">
              {error}
            </div>
          )}
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="row g-2 mb-3">
            <div className="col-sm-6 position-relative">
              <i className="fal fa-user position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></i>
              <input 
                type="text" name="fname" 
                className="form-control rounded-pill ps-5 py-2 shadow-none border" 
                placeholder="First Name *" 
                value={formData.fname} onChange={handleChange} required 
              />
            </div>
            <div className="col-sm-6 position-relative">
              <i className="fal fa-user position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></i>
              <input 
                type="text" name="lname" 
                className="form-control rounded-pill ps-5 py-2 shadow-none border" 
                placeholder="Last Name *" 
                value={formData.lname} onChange={handleChange} required 
              />
            </div>
          </div>
          
          <div className="row g-2 mb-3">
            <div className="col-sm-6 position-relative">
              <i className="fal fa-envelope position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></i>
              <input 
                type="email" name="email" 
                className="form-control rounded-pill ps-5 py-2 shadow-none border" 
                placeholder="Email id *" 
                value={formData.email} onChange={handleChange} required 
              />
            </div>
            <div className="col-sm-6 position-relative">
              <i className="fal fa-phone position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></i>
              <input 
                type="tel" name="phone" 
                className="form-control rounded-pill ps-5 py-2 shadow-none border" 
                placeholder="Mobile No. *" 
                value={formData.phone} onChange={handleChange} required 
              />
            </div>
          </div>
          
          <div className="row g-2 mb-3">
            <div className="col-sm-6 position-relative">
              <i className="fal fa-lock position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></i>
              <input 
                type={showPassword ? "text" : "password"} name="password" 
                className="form-control rounded-pill ps-5 py-2 shadow-none border" 
                placeholder="Password *" 
                value={formData.password} onChange={handleChange} required 
              />
              <i 
                className={`fal ${showPassword ? 'fa-eye-slash' : 'fa-eye'} position-absolute top-50 translate-middle-y text-secondary pe-3 end-0`} 
                role="button" onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
            <div className="col-sm-6 position-relative">
              <i className="fal fa-lock position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></i>
              <input 
                type={showConfirmPassword ? "text" : "password"} name="confirm_password" 
                className="form-control rounded-pill ps-5 py-2 shadow-none border" 
                placeholder="Confirm Password *" 
                value={formData.confirm_password} onChange={handleChange} required 
              />
              <i 
                className={`fal ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} position-absolute top-50 translate-middle-y text-secondary pe-3 end-0`} 
                role="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              ></i>
            </div>
          </div>
          
          {/* Captcha — single pill container matching other fields */}
          <div
            className="d-flex align-items-center rounded-pill border mb-3 overflow-hidden"
            style={{ background: '#fff' }}
          >
            <span
              className="fw-bold px-4 py-2 flex-shrink-0"
              style={{
                background: '#f0f0f0',
                color: '#555',
                letterSpacing: '1px',
                borderRight: '1px solid #dee2e6',
                whiteSpace: 'nowrap',
                fontSize: '14px',
              }}
            >
              {captchaNums.num1} + {captchaNums.num2} =
            </span>
            <input
              type="text" name="captcha"
              className="border-0 shadow-none flex-grow-1 px-3 py-2"
              style={{ outline: 'none', background: 'transparent', fontSize: '14px' }}
              placeholder="Enter captcha*"
              value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} required
            />
          </div>
          
          <div className="d-flex align-items-start mb-4">
            <div className="form-check mb-0">
              <input 
                type="checkbox" className="form-check-input shadow-none mt-1" id="terms" 
                checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} required 
              />
              <label className="form-check-label text-secondary" style={{ fontSize: '12px', lineHeight: '1.4' }} htmlFor="terms">
                I have read the Privacy Policy, Terms and agree to allow DeltaView to process my personal data for the purposes above. <a href="#" className="text-primary text-decoration-underline">privacy policy</a>
              </label>
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary w-100 rounded-pill py-2 fw-bold mb-3 shadow-none">
            Register Now
          </button>
          
          <div className="text-center mb-3">
            <p className="fs-6 mb-0 text-secondary">
              Already have an account? <Link to="/sign-in" className="text-primary fw-semibold">Sign In</Link>
            </p>
          </div>
          
          <div className="d-flex align-items-center text-secondary small text-uppercase mb-3" style={{ letterSpacing: '1px' }}>
            <hr className="flex-grow-1 mx-3" /> OR <hr className="flex-grow-1 mx-3" />
          </div>
          
          <button type="button" className="btn btn-outline-secondary w-100 rounded-pill py-2 fw-bold d-flex align-items-center justify-content-center shadow-none text-dark bg-white">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="me-2" style={{ width: '16px' }} />
            Continue with Gmail
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
