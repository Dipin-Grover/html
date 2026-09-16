import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
      <div id="smooth-wrapper">
        <Header />
        <div id="smooth-content">
          <Outlet />
          <Footer />
        </div>
      </div>
  );
};

export default Layout;
