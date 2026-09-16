import React from 'react';
import GlossaryHero from "../components/Glossary/GlossaryHero";
import AlphabetFilter from "../components/Glossary/AlphabetFilter";
import GlossarySearch from "../components/Glossary/GlossarySearch";
import GlossaryCategories from "../components/Glossary/GlossaryCategories";
import GlossaryContactForm from "../components/Glossary/GlossaryContactForm";
import GlossaryCTA from "../components/Glossary/GlossaryCTA";
import "../components/Glossary/Glossary.css";

function Glossary() {
  return (
    <div className="glossary-page-wrapper">
      <GlossaryHero />
      
      <div className="glossary-main-layout">
        <AlphabetFilter />
        
        <div className="glossary-content-area">
          <GlossarySearch />
          <GlossaryCategories />
        </div>
        
        <GlossaryContactForm />
      </div>

      <GlossaryCTA />
    </div>
  );
}

export default Glossary;