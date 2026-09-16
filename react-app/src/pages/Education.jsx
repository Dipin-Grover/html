import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EducationHero from "../components/education/EducationHero";
import EducationWorkspace from "../components/education/EducationWorkspace";
import EducationAccessibility from "../components/education/EducationAccessibility";
import EducationFeatures from "../components/education/EducationFeatures";
import EducationCTA from "../components/education/EducationCTA";
import EducationAIFeatures from "../components/education/EducationAIFeatures";
import AboutTestimonials from "../components/aboutUs/AboutTestimonials";
import EducationProducts from "../components/education/EducationProducts";
import AboutFAQ from '../components/aboutUs/AboutFAQ';

const Education = () => {
  return (
    <>
      <Header />
      <div id="smooth-content">
        <main>
          <EducationHero />
          <EducationWorkspace />
          <EducationAccessibility />
          <EducationFeatures />
          <EducationCTA />
          <EducationAIFeatures />
          <AboutTestimonials />
          <EducationProducts />
          <AboutFAQ />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Education;
