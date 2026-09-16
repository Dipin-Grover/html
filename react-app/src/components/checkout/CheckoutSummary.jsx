import React from 'react';

const formatCurrency = (number) => {
  return '₹' + number.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

const CheckoutSummary = ({ cartItems, subtotal, total, termsAccepted, setTermsAccepted }) => {
  return (
    <div className="col-lg-4 p-4 checkout-sidebar-col">
      <div className="checkout-box tp-ff-body">
        <h2 className="fs-5 fw-bold text-dark mb-4 pb-2 border-bottom tp-ff-heading">
          Your order
        </h2>

        <table className="table w-100 mb-4 order-table">
          <thead>
            <tr>
              <th className="border-bottom py-3 fw-bold text-dark border-top-0">
                Product
              </th>
              <th className="border-bottom py-3 fw-bold text-dark text-end border-top-0">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, idx) => (
              <tr key={idx}>
                <td className="border-bottom py-3 text-secondary">
                  {item.name}
                  <strong className="text-dark ms-1">× {item.qty}</strong>
                </td>
                <td className="border-bottom py-3 text-end fw-medium text-dark">
                  {formatCurrency(item.price * item.qty)}
                </td>
              </tr>
            ))}
            <tr>
              <td className="border-bottom py-3 fw-bold text-dark">Subtotal</td>
              <td className="border-bottom py-3 text-end fw-medium text-dark">
                {formatCurrency(subtotal)}
              </td>
            </tr>
            <tr>
              <td className="border-bottom py-3 fw-bold text-dark">Shipping</td>
              <td className="border-bottom py-3 text-end text-secondary">
                Free shipping
              </td>
            </tr>
            <tr className="total-row">
              <td className="border-bottom-0 pt-4 fw-bold text-dark fs-5">Total</td>
              <td className="border-bottom-0 pt-4 text-end fw-bold text-dark fs-5">
                {formatCurrency(total)}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Payment Box */}
        <div className="bg-white border rounded p-4 my-4 payment-box shadow-sm">
          <div className="fs-6 fw-bold text-dark mb-3 payment-title tp-ff-heading">
            Pay Online (Easebuzz)
          </div>
          <div className="mb-3 payment-logo">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="d-flex flex-column gap-1">
                <div
                  style={{
                    width: '35px',
                    height: '6px',
                    backgroundColor: '#3b82f6',
                    transform: 'skewX(-15deg)',
                  }}
                ></div>
                <div
                  style={{
                    width: '35px',
                    height: '6px',
                    backgroundColor: '#2dd4bf',
                    transform: 'skewX(-15deg)',
                  }}
                ></div>
                <div
                  style={{
                    width: '35px',
                    height: '6px',
                    backgroundColor: '#8b5cf6',
                    transform: 'skewX(-15deg)',
                  }}
                ></div>
              </div>
              <span
                className="fw-bolder tp-ff-heading"
                style={{
                  fontSize: '32px',
                  color: '#1e1b4b',
                  letterSpacing: '-1px',
                  lineHeight: '1',
                }}
              >
                Easebuzz
              </span>
            </div>
          </div>
          <div className="bg-light p-3 rounded border fs-6 text-secondary lh-base payment-desc">
            Pay securely by Credit or Debit card or internet banking through Easebuzz.
          </div>
        </div>

        {/* Terms */}
        <div className="fs-6 text-secondary lh-base mb-4 terms-text">
          I have read the Privacy Policy, Terms and agree to allow DeltaView to
          process my personal data for the purposes above.{' '}
          <a href="#" className="text-primary fw-semibold text-decoration-none">
            privacy policy
          </a>
          .
        </div>

        <label
          className="d-flex align-items-start gap-2 fs-6 fw-medium text-dark mb-4 terms-checkbox"
          style={{ cursor: 'pointer' }}
        >
          <input
            type="checkbox"
            required
            className="form-check-input mt-1 shadow-none"
            style={{ cursor: 'pointer', width: '18px', height: '18px' }}
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <span>
            I have read and agree to the website{' '}
            <a href="#" className="text-primary fw-semibold text-decoration-none">
              terms and conditions
            </a>{' '}
            <span className="text-danger req">*</span>
          </span>
        </label>

        <button
          type="submit"
          className="cst-btn w-100 place-order-btn border-0"
          disabled={!termsAccepted}
        >
          <span className="w-100 d-flex justify-content-center">
            <span className="text-1">
              Place order
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM15.2803 6.05328C15.5732 5.76039 15.5732 5.28551 15.2803 4.99262L10.5074 0.219648C10.2145 -0.0732449 9.73959 -0.0732449 9.4467 0.219648C9.15381 0.512542 9.15381 0.987415 9.4467 1.28031L13.6893 5.52295L9.4467 9.76559C9.15381 10.0585 9.15381 10.5334 9.4467 10.8263C9.73959 11.1191 10.2145 11.1191 10.5074 10.8263L15.2803 6.05328ZM0.75 5.52295V6.27295H14.75V5.52295V4.77295H0.75V5.52295Z" fill="currentColor"/>
              </svg>
            </span>
            <span className="text-2">
              Place order
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM15.2803 6.05328C15.5732 5.76039 15.5732 5.28551 15.2803 4.99262L10.5074 0.219648C10.2145 -0.0732449 9.73959 -0.0732449 9.4467 0.219648C9.15381 0.512542 9.15381 0.987415 9.4467 1.28031L13.6893 5.52295L9.4467 9.76559C9.15381 10.0585 9.15381 10.5334 9.4467 10.8263C9.73959 11.1191 10.2145 11.1191 10.8263L15.2803 6.05328ZM0.75 5.52295V6.27295H14.75V5.52295V4.77295H0.75V5.52295Z" fill="currentColor"/>
              </svg>
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
