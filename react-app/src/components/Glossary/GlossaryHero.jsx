import React from 'react';
import './Glossary.css';
import { FiSearch, FiX } from 'react-icons/fi';

const GlossaryHero = () => {
  return (
    <section className="glossary-hero">
      <div className="glossary-hero-inner">
        <div className="glossary-hero-content">
          <span className="glossary-hero-subtitle-small">Knowledge Hub</span>
          <h1 className="glossary-hero-title">
            Gloss<span>ary</span>
          </h1>
          <h2 className="glossary-hero-subtitle">
            Small terms. A bigger tomorrow.
          </h2>
          <p className="glossary-hero-desc">
            Explore essential terms, concepts, and technologies used in education and smart collaboration, explained in a simple way.
          </p>

          <div className="glossary-hero-search-wrapper">
            <FiSearch className="glossary-search-icon" />
            <input 
              type="text" 
              className="glossary-hero-search-input" 
              placeholder="Search..." 
              defaultValue="cloud"
            />
            <button className="glossary-search-close">
              <FiX />
            </button>
            
            {/* Search Dropdown (Simulated for visual match) */}
            <div className="glossary-search-dropdown">
               <a href="#" className="glossary-search-dropdown-item">
                  <div className="glossary-dropdown-icon">☁️</div>
                  <div className="glossary-dropdown-text">
                     <div className="glossary-dropdown-title">Cloud Integration</div>
                     <div className="glossary-dropdown-desc">Connect devices and platforms seamlessly.</div>
                  </div>
                  <div className="glossary-cat-arrow">›</div>
               </a>
               <a href="#" className="glossary-search-dropdown-item">
                  <div className="glossary-dropdown-icon">☁️</div>
                  <div className="glossary-dropdown-text">
                     <div className="glossary-dropdown-title">Cloud Storage</div>
                     <div className="glossary-dropdown-desc">Securely store and access data.</div>
                  </div>
                  <div className="glossary-cat-arrow">›</div>
               </a>
            </div>
          </div>

          <div className="glossary-hero-popular">
            <span>Popular searches:</span>
            <a href="#" className="glossary-tag">4K</a>
            <a href="#" className="glossary-tag">Annotation</a>
            <a href="#" className="glossary-tag">Connectivity</a>
            <a href="#" className="glossary-tag">Display</a>
            <a href="#" className="glossary-tag">Android OS</a>
          </div>

          <div className="glossary-hero-stats">
            <div className="glossary-stat-item">
              <span className="glossary-stat-number">50+</span>
              <span className="glossary-stat-label">Terms Explained</span>
            </div>
            <div className="glossary-stat-item">
              <span className="glossary-stat-number">10+</span>
              <span className="glossary-stat-label">Categories</span>
            </div>
            <div className="glossary-stat-item">
              <span className="glossary-stat-number">1</span>
              <span className="glossary-stat-label">Smarter Education</span>
            </div>
          </div>
        </div>
        
        <div className="glossary-hero-visual">
          {/* Using a placeholder for the 3D glass blocks image. */}
          <img src="/assets/images/glossary-hero-blocks.png" alt="Glossary Concept" />
        </div>
      </div>
    </section>
  );
};

export default GlossaryHero;