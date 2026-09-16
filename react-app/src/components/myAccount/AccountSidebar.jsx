import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AccountSidebar = () => {
  const location = useLocation();

  const links = [
    { label: 'Your Order', path: '/my-account', icon: 'far fa-box' },
    { label: 'Your Address', path: '/my-account/address', icon: 'far fa-map-marker-alt' },
    { label: 'Login & Security', path: '/my-account/security', icon: 'far fa-lock' },
    { label: 'Warranty Check', path: '/warranty-check', icon: 'far fa-shield-check' },
    { label: 'Delivery Status', path: '/my-account/delivery', icon: 'far fa-truck' },
    { label: 'Support', path: '/my-account/support', icon: 'far fa-headset' },
  ];

  return (
    <div className="bg-white border rounded p-3 p-xl-4 shadow-sm tp-ff-body">
      <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
        {links.map((link, index) => {
          const isActive = location.pathname === link.path || (link.label === 'Your Order' && location.pathname === '/my-account');
          return (
            <li key={index}>
              <Link 
                to={link.path} 
                className={`d-flex align-items-center gap-3 px-3 py-3 rounded text-decoration-none fw-medium transition-all ${isActive ? 'text-primary' : 'text-secondary'}`}
                style={{ 
                  backgroundColor: isActive ? '#f3f8ff' : 'transparent', // Light blue background for active
                  color: isActive ? '#0d6efd' : '#6c757d'
                }}
              >
                <i className={`${link.icon} fs-5`}></i>
                <span>{link.label}</span>
              </Link>
            </li>
          );
        })}
        <hr className="my-3 text-secondary opacity-25" />
        <li>
          <Link 
            to="#" 
            className="d-flex align-items-center gap-3 px-3 py-3 rounded text-decoration-none fw-medium text-secondary transition-all"
          >
            <i className="far fa-sign-out-alt fs-5"></i>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;
