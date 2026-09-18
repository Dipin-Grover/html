import React, { useState } from 'react';
import GlossaryHero from "../components/Glossary/GlossaryHero";
import GlossaryAlphabet from '../components/Glossary/GlossaryAlphabet';
import GlossarySearch from "../components/Glossary/GlossarySearch";
import GlossaryCategories from "../components/Glossary/GlossaryCategories";
import GlossaryContactForm from "../components/Glossary/GlossaryContactForm";
import GlossaryCTA from "../components/Glossary/GlossaryCTA";

function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLetter, setActiveLetter] = useState('All');

  return (
    <div
      className="bg-white"
      style={{
        fontFamily: 'var(--tp-ff-body, sans-serif)',
        color: '#1E293B'
      }}
    >

      <GlossaryHero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div
        className="container mt-80 mb-50"
        style={{ maxWidth: '1400px' }}
      >

        {/* ================= ALPHABET ================= */}
        <div
          className="row mb-4"
          style={{
            position: 'sticky',
            top: '80px',
            zIndex: 1020,
            backgroundColor: '#ffffff',
            padding: '15px 0',
            borderBottom: '1px solid #f1f5f9',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            borderRadius: '0 0 8px 8px'
          }}
        >
          <div className="col-12 px-lg-4">
            <GlossaryAlphabet
              activeLetter={activeLetter}
              setActiveLetter={setActiveLetter}
            />
          </div>
        </div>


        {/* ================= CONTENT + SIDEBAR ================= */}
        <div className="row align-items-start">

          {/* LEFT CONTENT */}
          <div className="col-lg-8 px-lg-4">

            {searchTerm && (
              <GlossarySearch
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            )}

            <GlossaryCategories
              activeLetter={activeLetter}
            />

          </div>


          {/* RIGHT SIDEBAR */}
          <div className="col-lg-4 align-self-start">

            <div
              className="position-sticky"
              style={{
                top: '180px',
                zIndex: 10
              }}
            >
              <GlossaryContactForm />
            </div>

          </div>

        </div>

      </div>


      {/* CTA */}
      <div className="container-fluid p-0">
        <GlossaryCTA />
      </div>

    </div>
  );
}

export default Glossary;