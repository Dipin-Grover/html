import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { glossaryContent } from '../../data/glossaryContent';

const GlossaryCategories = ({ activeLetter = 'All', columns = 2 }) => {
  const allTerms = Object.values(glossaryContent).map(item => item.title).sort();

  const terms = allTerms.filter(term => {
    const matchesLetter = activeLetter === 'All' || term.toLowerCase().startsWith(activeLetter.toLowerCase());
    return matchesLetter;
  });

  if (terms.length === 0) {
    return (
      <div className="mb-50 mt-50 p-5 text-center bg-light rounded" style={{ borderRadius: '12px' }}>
        <h5 className="text-muted fw-normal">
          No terms found {activeLetter !== 'All' ? <span>starting with <span className="text-dark fw-bold">"{activeLetter}"</span></span> : ''}
        </h5>
      </div>
    );
  }

  const columnClass = columns === 3 ? "col-md-6 col-lg-4" : "col-md-6";

  return (
    <div className="mb-50 mt-50">
      
      <div className="d-flex justify-content-between align-items-end mb-4 pb-2 border-bottom">
        <h2 className="fw-bold mb-0" style={{ fontSize: '2rem' }}>
          Explore by Category
        </h2>
        
      </div>

      <div className="row g-3">
        {terms.map((term, idx) => {
          const slug = term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          return (
            <div className={columnClass} key={idx}>
              <Link to={`/glossary/${slug}`} className="card h-100 border-0 flex-row align-items-center justify-content-between text-dark transition-all" style={{ borderRadius: '12px', background: '#f4f7fb', padding: '16px 20px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                <span className="fw-medium" style={{ fontSize: '14px' }}>{term}</span>
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                <FiArrowRight style={{ fontSize: '12px', color: '#1e293b' }} />
              </div>
            </Link>
          </div>
        )})}
      </div>
    </div>
  );
};

export default GlossaryCategories;
