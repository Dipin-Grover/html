import React from 'react';
import AccountSidebar from './AccountSidebar';

const AccountLayout = ({ children }) => {
  return (
    <div className="bg-light pb-5 pt-4 tp-ff-body" style={{ minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '1350px' }}>
        {/* Header Area */}
        <div className="mb-4 ps-2">
          <h1 className="fs-3 fw-bold text-dark mb-2 tp-ff-heading">Your Account</h1>
          <p className="text-secondary mb-0" style={{ fontSize: '14px' }}>
            Dipin Grover · grover.dipin007@gmail.com
          </p>
        </div>

        <div className="row g-4">
          
          {/* Sidebar */}
          <div className="col-lg-3 col-md-4">
            <AccountSidebar />
          </div>

          {/* Main Content */}
          <div className="col-lg-9 col-md-8">
            {children}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;
