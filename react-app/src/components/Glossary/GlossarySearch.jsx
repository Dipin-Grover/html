import React from 'react';
import './Glossary.css';
import { FiX, FiArrowRight } from 'react-icons/fi';

const GlossarySearch = () => {
  return (
    <div style={{ marginBottom: '60px' }}>
      <span className="glossary-section-label">EXPLORE TERMS</span>
      <div className="glossary-section-header">
        <h2 className="glossary-section-title">
          Search results for <span>"cloud"</span>
        </h2>
        <button className="glossary-clear-search">
          Clear search <FiX />
        </button>
      </div>
      <span className="glossary-results-count">2 results found</span>

      <div className="glossary-results-grid">
        {/* Result Card 1 */}
        <div className="glossary-term-card">
          <span className="glossary-term-tag">Connectivity</span>
          <img src="/assets/images/cloud-icon-1.png" alt="Cloud" className="glossary-term-icon" />
          <h3 className="glossary-term-title">Cloud Integration</h3>
          <p className="glossary-term-desc">
            Cloud integration allows different platforms and devices to communicate and exchange data through cloud-based services, enabling seamless access, synchronization, and collaboration.
          </p>
          <button className="glossary-term-arrow">
            <FiArrowRight />
          </button>
        </div>

        {/* Result Card 2 */}
        <div className="glossary-term-card">
          <span className="glossary-term-tag">Software</span>
          <img src="/assets/images/cloud-icon-2.png" alt="Database" className="glossary-term-icon" />
          <h3 className="glossary-term-title">Cloud Storage</h3>
          <p className="glossary-term-desc">
            Cloud storage securely stores and manages data over the internet, allowing easy access, backup, and sharing across multiple devices and locations.
          </p>
          <button className="glossary-term-arrow">
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlossarySearch;