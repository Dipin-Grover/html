import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Spark65 from './pages/Spark65';
import Enterprises from './pages/Enterprises';
import EStore from './pages/EStore';
import WarrantyCheck from './pages/WarrantyCheck';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import CartPage from './pages/Cart';
import DownloadCenter from './pages/DownloadCenter';
import ServiceRequest from './pages/ServiceRequest.jsx';
import BookDemo from './pages/BookDemo';
import Headlines from './pages/Headlines';
import Canvas from './pages/Canvas';
import Careers from './pages/Careers';
import CareerDetails from './pages/CareerDetails';
import BlogDetails from './pages/BlogDetails';
import ComingSoon from './pages/ComingSoon';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Spark from "./pages/spark";
import Blaze from './pages/Blaze';
import BlazeBuy from './pages/BlazeBuy';
import Education from './pages/Education';

import Checkout from './pages/Checkout';
import MyAccount from './pages/MyAccount';
import YourAddress from './pages/YourAddress';
import LoginSecurity from './pages/LoginSecurity';
import DeliveryStatus from './pages/DeliveryStatus';
import Support from './pages/Support';
import Glossary from './pages/Glossary';
import GlossaryTerm from './pages/GlossaryTerm';
import TutorialVideos from './pages/TutorialVideos';
import FindAPartner from "./pages/FindAPartner";
import DeltaViewLearn from "./pages/DeltaViewLearn";
import DeltaViewConnect from "./pages/DeltaViewConnect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="spark" element={<Spark65 />} />
          <Route path="enterprises" element={<Enterprises />} />
          <Route path="e-store" element={<EStore />} />
          <Route path="warranty-check" element={<WarrantyCheck />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="download-center" element={<DownloadCenter />} />
          <Route path="service-request" element={<ServiceRequest />} />
          <Route path="book-demo" element={<BookDemo />} />
          <Route path="headlines" element={<Headlines />} />aa
          <Route path="checkout" element={<Checkout />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="my-account/address" element={<YourAddress />} />
          <Route path="my-account/security" element={<LoginSecurity />} />
          <Route path="my-account/delivery" element={<DeliveryStatus />} />
          <Route path="my-account/support" element={<Support />} />
          <Route path="deltaview-canvas" element={<Canvas />} />
          <Route path="careers" element={<Careers />} />
          <Route path="careers.php" element={<Careers />} />
          <Route path="career-details" element={<CareerDetails />} />
          <Route path="career-details.php" element={<CareerDetails />} />
          <Route path="blog-details" element={<BlogDetails />} />
          <Route path="blog-details/:id" element={<BlogDetails />} />
          <Route path="blog-details.php" element={<BlogDetails />} />
          <Route path="*" element={<ComingSoon />} />
          <Route path="coming-soon" element={<ComingSoon />} />
          <Route path="glossary" element={<Glossary />} />
          <Route path="glossary/:term" element={<GlossaryTerm />} />
          <Route path="tutorial-videos" element={<TutorialVideos />} />
          <Route path="tutorial-videos.php" element={<TutorialVideos />} />
          <Route path="findApartner" element={<FindAPartner />} />
          <Route path="deltaview-learn" element={<DeltaViewLearn />} />
          <Route path="deltaview-connect" element={<DeltaViewConnect />} />
          {/* Add more routes here as you migrate other pages */}
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/spark-buy" element={<Spark />} />
        <Route path="/blaze-buy" element={<BlazeBuy />} />
        <Route path="/blaze" element={<Blaze />} />
        <Route path="/blaze.php" element={<Blaze />} />
        <Route path="/education" element={<Education />} />
        <Route path="/education.php" element={<Education />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  