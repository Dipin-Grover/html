import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { glossaryContent } from '../../data/glossaryContent';

const GlossaryTerms = () => {
  const terms = Object.values(glossaryContent).map(item => item.title).sort();

  return (
    <div className="mb-50">
      <span className="ais-section-subtitle mb-10 d-inline-block">BROWSE ALL TERMS</span>
      <div className="d-flex justify-content-between align-items-center mb-40 pb-20 border-bottom">
        <h2 className="fw-bold mb-0" style={{ fontSize: '2rem' }}>Explore by Category</h2>
        <button className="btn btn-outline-secondary rounded-pill d-flex align-items-center gap-2">
          View all terms <FiArrowRight />
        </button>
      </div>
      <div className="row">
        {terms.map((term, idx) => {
          const slug = term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          return (
            <div className="col-lg-6 col-md-6 mb-3" key={idx}>
              <Link 
                to={`/glossary/${slug}`} 
                className="card h-100 border-0 shadow-sm flex-row justify-content-between align-items-center p-3 text-dark text-decoration-none transition-all" 
                style={{ borderRadius: '12px', backgroundColor: '#f5f8fc' }}
              >
                <span className="fw-medium" style={{ fontSize: '15px' }}>{term}</span>
              <div 
                className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm" 
                style={{ width: '28px', height: '28px' }}
              >
                <FiArrowRight className="text-dark" size={14} />
              </div>
            </Link>
          </div>
        )})}
      </div>
    </div>
  );
};

export default GlossaryTerms;
