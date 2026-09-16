import Header from "../components/Header";
import Footer from "../components/Footer";

import HeroArea from "../components/enterprises/HeroArea";
import WorkspaceArea from "../components/enterprises/WorkspaceArea";
import EasyToEnrollArea from "../components/enterprises/EasyToEnrollArea";
import ProductSliderArea from "../components/enterprises/ProductSliderArea";
import CtaArea from "../components/enterprises/CtaArea";
import FeaturesSection from "../components/enterprises/FeaturesSection";
import AboutTestimonials from "../components/aboutUs/AboutTestimonials";
import PanelSizesSection from "../components/enterprises/PanelSizesSection";
import FaqSection from "../components/enterprises/FaqSection";
// import AboutFAQ from '../components/aboutUs/AboutFAQ';
import EnterprisesFAQ from "../components/enterprises/EnterprisesFAQ";

function Enterprises() {
  return (
    <>
      

      <main>
        <HeroArea />
        <WorkspaceArea />
        <EasyToEnrollArea />
        <ProductSliderArea />
        <CtaArea />
        <FeaturesSection/>
        
        {/* <AboutTestimonials /> */}
        {/* ── Two sections visible in the screenshot but missing before ── */}
        
        <PanelSizesSection />
        <FaqSection />
        <EnterprisesFAQ />
        
      </main>

      
    </>
  );
}

export default Enterprises;
