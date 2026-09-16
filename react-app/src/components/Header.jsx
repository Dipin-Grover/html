import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartData = localStorage.getItem('deltaCartData');
    if (cartData) {
      try {
        const parsedData = JSON.parse(cartData);
        if (parsedData.items) {
          setCartCount(parsedData.items.length);
        }
      } catch (e) {}
    }
  }, []);

  return (
    <>
      {/* backtotop area start */}
      <div className="scrollToTop">
         <div className="arrowUp">
            <i className="fa-regular fa-arrow-up"></i>
         </div>
         <div className="water">
            <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
               <use href="#wave"></use>
            </svg>
            <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
               <use href="#wave"></use>
            </svg>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 20" style={{display: 'none'}}>
               <symbol id="wave">
                  <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z" fill="#"></path>
                  <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z" fill="#"></path>
                  <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z" fill="#"></path>
                  <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z" fill="#"></path>
               </symbol>
            </svg>
         </div>
      </div>
      {/* backtotop area end */}

      {/* tp-offcanvus-area-start */}
      <div className="tp-offcanvas-area">
         <div className="tp-offcanvas">
            <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
               <div className="tp-offcanvas-logo">
                  <Link to="/">
                     <img data-width="150" src="/assets/img/logo/d-logo.png" alt="logo" />
                  </Link>
               </div>
               <div className="tp-offcanvas-close-btn">
                  <button className="close-btn">
                     <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.19141 9.80762L27.5762 28.1924" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.19141 28.1924L27.5762 9.80761" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </button>
               </div>
            </div>
            <div className="tp-offcanvas-content d-none d-xl-block">
               <h3 className="tp-offcanvas-title">Hello There!</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            </div>
            <div className="tp-offcanvas-menu d-xl-none">
               <nav></nav>
            </div>
            <div className="tp-offcanvas-gallery d-none d-xl-block">
               <div className="row gx-2">
                  <div className="col-md-3 col-3">
                     <div className="tp-offcanvas-gallery-img fix">
                        <a className="popup-image" href="/assets/img/offcanvas/offcanvas-1.jpg"><img src="/assets/img/offcanvas/offcanvas-1.jpg" alt="" /></a>
                     </div>
                  </div>
                  <div className="col-md-3 col-3">
                     <div className="tp-offcanvas-gallery-img fix">
                        <a className="popup-image" href="/assets/img/offcanvas/offcanvas-2.jpg"><img src="/assets/img/offcanvas/offcanvas-2.jpg" alt="" /></a>
                     </div>
                  </div>
                  <div className="col-md-3 col-3">
                     <div className="tp-offcanvas-gallery-img fix">
                        <a className="popup-image" href="/assets/img/offcanvas/offcanvas-3.jpg"><img src="/assets/img/offcanvas/offcanvas-3.jpg" alt="" /></a>
                     </div>
                  </div>
                  <div className="col-md-3 col-3">
                     <div className="tp-offcanvas-gallery-img fix">
                        <a className="popup-image" href="/assets/img/offcanvas/offcanvas-4.jpg"><img src="/assets/img/offcanvas/offcanvas-4.jpg" alt="" /></a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-offcanvas-contact">
               <h3 className="tp-offcanvas-title sm">Information</h3>
               <ul>
                  <li><a href="tel:1245654">+ 4 20 7700 1007</a></li>
                  <li><a href="mailto:hello@aleric.com">hello@aleric.com</a></li>
                  <li><a href="#">Avenue de Roma 158b, Lisboa</a></li>
               </ul>
            </div>
            <div className="tp-offcanvas-social">
               <h3 className="tp-offcanvas-title sm">Follow Us</h3>
               <ul>
                  <li>
                     <a href="#">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M11.25 1.5H4.75C2.95507 1.5 1.5 2.95507 1.5 4.75V11.25C1.5 13.0449 2.95507 14.5 4.75 14.5H11.25C13.0449 14.5 14.5 13.0449 14.5 11.25V4.75C14.5 2.95507 13.0449 1.5 11.25 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M10.6016 7.5907C10.6818 8.13166 10.5894 8.68414 10.3375 9.16955C10.0856 9.65497 9.68711 10.0486 9.19862 10.2945C8.71014 10.5404 8.15656 10.6259 7.61663 10.5391C7.0767 10.4522 6.57791 10.1972 6.19121 9.81055C5.80451 9.42385 5.54959 8.92506 5.46271 8.38513C5.37583 7.8452 5.46141 7.29163 5.70728 6.80314C5.95315 6.31465 6.34679 5.91613 6.83221 5.66425C7.31763 5.41238 7.87011 5.31998 8.41107 5.4002C8.96287 5.48202 9.47372 5.73915 9.86817 6.1336C10.2626 6.52804 10.5197 7.0389 10.6016 7.5907Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M11.5742 4.42578H11.5842" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M2.50589 12.7494C4.57662 16.336 9.16278 17.5648 12.7494 15.4941C14.2113 14.65 15.2816 13.388 15.8962 11.9461C16.7895 9.85066 16.7208 7.37526 15.4941 5.25063C14.2674 3.12599 12.1581 1.82872 9.89669 1.55462C8.34063 1.366 6.71259 1.66183 5.25063 2.50589C1.66403 4.57662 0.435172 9.16278 2.50589 12.7494Z" stroke="currentColor" strokeWidth="1.5" />
                           <path d="M12.7127 15.4292C12.7127 15.4292 12.0086 10.4867 10.5011 7.87559C8.99362 5.26451 5.28935 2.57155 5.28935 2.57155M5.68449 15.6124C6.79553 12.2606 12.34 8.54524 16.3975 9.43537M12.311 2.4082C11.1953 5.72344 5.75732 9.38453 1.71875 8.58915" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 5.5715H6.33342C7.62867 5.5715 8.61917 6.56199 8.61917 7.85725C8.61917 9.15251 7.62867 10.143 6.33342 10.143H1.76192C1.30477 10.143 1 9.83823 1 9.38108V1.76192C1 1.30477 1.30477 1 1.76192 1H5.5715C6.86676 1 7.85725 1.99049 7.85725 3.28575C7.85725 4.58101 6.86676 5.5715 5.5715 5.5715H1Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></path>
                           <path d="M10.9062 7.09454H17.0016C17.0016 5.41832 15.6301 4.04688 13.9539 4.04688C12.2777 4.04688 10.9062 5.41832 10.9062 7.09454ZM10.9062 7.09454C10.9062 8.77076 12.2777 10.1422 13.9539 10.1422H15.2492" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                           <path d="M16.1125 1.44434H11.668" stroke="currentColor" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M12.75 13H5.25C3 13 1.5 11.5 1.5 9.25V4.75C1.5 2.5 3 1 5.25 1H12.75C15 1 16.5 2.5 16.5 4.75V9.25C16.5 11.5 15 13 12.75 13Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M8.70676 5.14837L10.8006 6.40465C11.5543 6.90716 11.5543 7.66093 10.8006 8.16344L8.70676 9.41972C7.86923 9.92224 7.19922 9.50348 7.19922 8.5822V6.06964C7.19922 4.98086 7.86923 4.64585 8.70676 5.14837Z" fill="currentColor" />
                        </svg>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
      <div className="body-overlay"></div>
      {/* tp-offcanvus-area-end */}

      <div className="cartmini__area">
         <div className="cartmini__wrapper d-flex justify-content-between flex-column">
            <div className="cartmini__top-wrapper">
               <div className="cartmini__top p-relative">
                  <div className="cartmini__top-title">
                     <h4>Shopping cart</h4>
                  </div>
                  <div className="cartmini__close">
                     <button type="button" className="cartmini__close-btn cartmini-close-btn"><i className="fal fa-times"></i></button>
                  </div>
               </div>
               <div className="cartmini__shipping">
                  <p> Free Shipping for all orders over <span>$50</span></p>
                  <div className="progress">
                     <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}></div>
                  </div>
               </div>
               <div className="cartmini__widget">
                  {/* Cart items */}
                  <div className="cartmini__widget-item">
                     <div className="cartmini__thumb">
                        <a href="/shop-details-light">
                           <img src="/assets/img/product/shop/shop-thumb-1.png" alt="" />
                        </a>
                     </div>
                     <div className="cartmini__content">
                        <h5 className="cartmini__title"><a href="/shop-details-light">Woven Chair</a></h5>
                        <div className="cartmini__price-wrapper">
                           <span className="cartmini__price">$120.00</span>
                           <span className="cartmini__quantity">x2</span>
                        </div>
                     </div>
                     <a href="#" className="cartmini__del"><i className="fa-regular fa-xmark"></i></a>
                  </div>
                  <div className="cartmini__widget-item">
                     <div className="cartmini__thumb">
                        <a href="/shop-details-light">
                           <img src="/assets/img/product/shop/shop-thumb-2.png" alt="" />
                        </a>
                     </div>
                     <div className="cartmini__content">
                        <h5 className="cartmini__title"><a href="/shop-details-light">Paxous Chair</a></h5>
                        <div className="cartmini__price-wrapper">
                           <span className="cartmini__price">$120.00</span>
                           <span className="cartmini__quantity">x2</span>
                        </div>
                     </div>
                     <a href="#" className="cartmini__del"><i className="fa-regular fa-xmark"></i></a>
                  </div>
                  <div className="cartmini__widget-item">
                     <div className="cartmini__thumb">
                        <a href="/shop-details-light">
                        <img src="/assets/img/product/shop/shop-thumb-3.png" alt="" />
                        </a>
                     </div>
                     <div className="cartmini__content">
                        <h5 className="cartmini__title"><a href="/shop-details-light">Plush White Chair</a></h5>
                        <div className="cartmini__price-wrapper">
                           <span className="cartmini__price">$120.00</span>
                           <span className="cartmini__quantity">x2</span>
                        </div>
                     </div>
                     <a href="#" className="cartmini__del"><i className="fa-regular fa-xmark"></i></a>
                  </div>
               </div>
            </div>
            <div className="cartmini__checkout">
               <div className="cartmini__checkout-title mb-30">
                  <h4>Subtotal:</h4>
                  <span>$113.00</span>
               </div>
               <div className="cartmini__checkout-btn">
                  <a href="/cart" className="tp-bg-theme-secondary tp-btn-pb-cart no-border tp-round-36 tp-btn-pb-spacing lh-1 tp-ff-inter fw-700 fs-16 tp-text-grey-5 mb-10 w-100 d-block text-center hover-text-black"> View Cart</a>
                  <a href="/checkout" className="tp-btn-border-white tp-round-36 tp-btn-pb-spacing tp-btn-pb-cart pb-border lh-1 tp-ff-inter fw-700 fs-16 tp-text-common-black-5 w-100 d-block text-center hover-text-white"> Checkout</a>
               </div>
            </div>
         </div>
      </div>

      <header>
         {/* tp-header-area-start */}
         <div id="header-sticky" className="tp-header-area pre-header tp-header-cst-wrap sticky-white-bg tp-header-blur header-transparent tp-header-lg-spacing" style={{zIndex: 9999}}>
            <div className="tp-menu-band bg-light">
               <div className="container-fluid">
                  <div className="tp-main-menu tp-main-menu-cst d-lg-flex d-none justify-content-end align-items-center">
                     <nav className="support-menu">
                        <ul>
                           <li><Link to="/book-demo">Book a Demo</Link></li>
                           <li><Link to="/contact">Support</Link></li>
                           {/* <li><Link to="/comingSoon">Resources</Link></li> */}
                        </ul>
                     </nav>
                     <nav className="country">
                        <ul>
                           <li>
                              <Link to="#!">
                                 <i className="fa-regular fa-globe"></i> EN
                                 <span>
                                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor" />
                                    </svg>
                                 </span>
                              </Link>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
            <div className="container-fluid">
               <div className="row-header">
                  <div className="tp-header-logo">
                     <Link to="/">
                        <img width="150" src="/assets/img/logo/d-logo.png" alt="logo" />
                     </Link>
                  </div>
                  <div className="d-none d-xl-block main-menu">
                     <div className="tp-main-menu tp-main-menu-cst tp-header-dropdown dropdown-white-bg d-flex">
                        <nav className="tp-mobile-menu-active ps-2">
                           <ul>
                              <li>
                                 <Link to="/e-store">e-Store</Link>
                              </li>
                              <li className="has-dropdown">
                                 <Link to="#!">Solutions
                                    <span>
                                       <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor" />
                                       </svg>
                                    </span>
                                 </Link>
                                 <ul className="tp-submenu submenu">
                                    <li><Link to="/enterprises">Enterprises</Link></li>
                                    <li><Link to="/education">Education</Link></li>
                                 </ul>
                              </li>
                              <li className="has-dropdown">
                                 <Link to="#!">Support
                                    <span>
                                       <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor" />
                                       </svg>
                                    </span>
                                 </Link>
                                 <ul className="tp-submenu submenu">
                                    <li><Link to="/warranty-check">Warranty Check</Link></li>
                                    <li><Link to="/contact">Help center</Link></li>
                                    <li><Link to="/download-center">Download center</Link></li>
                                    <li><Link to="/service-request">Service Request</Link></li>
                                    <li><Link to="/tutorial-videos">Tutorial Videos</Link></li>
                                 </ul>
                              </li>
                              <li className="has-dropdown">
                                 <Link to="#!">Explore
                                    <span>
                                       <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor" />
                                       </svg>
                                    </span>
                                 </Link>
                                 <ul className="tp-submenu submenu">
                                    <li><Link to="/about-us">About Us</Link></li>
                                    <li><Link to="/blogs">Blogs</Link></li>
                                    <li><Link to="/headlines">Headlines</Link></li>
                                    <li><Link to="#!">Glossary</Link></li>
                                 </ul>
                              </li>
                              <li className="has-dropdown">
                                 <Link to="#!">Products
                                    <span>
                                       <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor" />
                                       </svg>
                                    </span>
                                 </Link>
                                 <ul className="tp-submenu submenu">
                                    <li><Link to="/spark">DeltaView<span>®</span> Spark</Link></li>
                                    <li><Link to="/blaze">DeltaView<span>®</span> Blaze</Link></li>
                                 </ul>
                              </li>
                              <li className="has-dropdown">
                                 <Link to="">Partner Success
                                    <span>
                                       <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor" />
                                       </svg>
                                    </span>
                                 </Link>
                                 <ul className="tp-submenu submenu">
                                    <li><Link to="./comingSoon">Partner Success</Link></li>
                                    <li><Link to="./comingSoon">Find a partner</Link></li>
                                 </ul>
                              </li>
                              <li className="has-dropdown">
                                 <Link to="#!">Software
                                    <span>
                                       <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M2.7 4.93333L0.2 1.6C-0.294427 0.940764 0.175955 0 1 0H6C6.82405 0 7.29443 0.940764 6.8 1.6L4.3 4.93333C3.9 5.46667 3.1 5.46667 2.7 4.93333Z" fill="currentColor" />
                                       </svg>
                                    </span>
                                 </Link>
                                 <ul className="tp-submenu submenu">
                                    <li><Link to="/deltaview-canvas">DeltaView<span>®</span> Canvas</Link></li>
                                    <li><Link to="/comingSoon">DeltaView<span>®</span> Connect</Link></li>
                                    <li><Link to="/comingSoon">DeltaView<span>®</span> Learn</Link></li>
                                 </ul>
                              </li>
                              <li>
                                 <Link to="/careers">Careers</Link>
                              </li>
                           </ul>
                        </nav>
                     </div>
                  </div>
                  <div className="tp-header-right d-flex align-items-center justify-content-end">
                     <div className="tp-header-search">
                        <button className="tp-header-search-btn tp-search-click">
                           <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M14.4823 8.58366C14.4823 9.35829 14.3298 10.1253 14.0333 10.841C13.7369 11.5567 13.3024 12.2069 12.7547 12.7547C12.2069 13.3024 11.5567 13.7369 10.841 14.0333C10.1253 14.3298 9.35829 14.4823 8.58366 14.4823C7.80904 14.4823 7.04199 14.3298 6.32633 14.0333C5.61067 13.7369 4.96041 13.3024 4.41266 12.7547C3.86492 12.2069 3.43042 11.5567 3.13399 10.841C2.83755 10.1253 2.68498 9.35829 2.68498 8.58366C2.68498 7.01923 3.30644 5.51888 4.41266 4.41266C5.51888 3.30644 7.01923 2.68498 8.58366 2.68498C10.1481 2.68498 11.6484 3.30644 12.7547 4.41266C13.8609 5.51888 14.4823 7.01923 14.4823 8.58366ZM14.5093 13.3178C15.7192 11.8034 16.3033 9.88316 16.1416 7.95155C15.98 6.01993 15.0849 4.22353 13.6401 2.93127C12.1953 1.63901 10.3106 0.949 8.37298 1.00294C6.43537 1.05688 4.59194 1.85068 3.22131 3.22131C1.85068 4.59194 1.05688 6.43537 1.00294 8.37298C0.949 10.3106 1.63901 12.1953 2.93127 13.6401C4.22353 15.0849 6.01993 15.98 7.95155 16.1416C9.88316 16.3033 11.8034 15.7192 13.3178 14.5093L15.5719 16.7635C15.7308 16.917 15.9437 17.0019 16.1647 17C16.3856 16.998 16.5969 16.9094 16.7532 16.7532C16.9094 16.5969 16.998 16.3856 17 16.1647C17.0019 15.9437 16.917 15.7308 16.7635 15.5719L14.5093 13.3178Z" fill="currentColor"></path>
                           </svg>
                        </button>
                     </div>
                     <div className="tp-header-pb-cart p-relative d-inline-block">
                        <Link to="/cart" className="tp-header-pb-cart-icon">
                           <i className="fa-regular fa-cart-shopping fa-lg"></i>
                           <span className="tp-header-pb-cart-count tp-ff-funnel fw-600 fs-12 tp-text-grey-5">{cartCount}</span>
                        </Link>
                     </div>
                     <div className="tp-header-pb-cart p-relative d-inline-block">
                        <Link to="/sign-in" className="tp-header-pb-cart-icon d-flex align-items-center">
                           <i className="fa-regular fa-user fa-lg"></i>
                           <span className="user-name">Sign In</span>
                        </Link>
                     </div>
                     <button className="tp-menu-bar tp-header-sidebar-btn ml-20 d-xl-none">
                        <span></span>
                        <span></span>
                        <span></span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
         {/* tp-header-area-end */}
      </header>
    </>
  );
};

export default Header;
