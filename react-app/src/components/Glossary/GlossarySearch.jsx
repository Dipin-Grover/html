import React from 'react';
import { FiX, FiArrowRight } from 'react-icons/fi';
import { LuCloud, LuDatabase } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { glossaryContent } from '../../data/glossaryContent';

const GlossarySearch = ({ searchTerm, setSearchTerm }) => {
  const allTerms = Object.values(glossaryContent).map(item => item.title).sort();
  const searchResults = allTerms.filter(term => 
    term.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-50">
      <span className="text-uppercase mb-2 d-inline-block fw-bold text-muted" style={{ letterSpacing: '1px', fontSize: '12px' }}>SEARCH RESULTS</span>
      <div className="d-flex justify-content-between align-items-end mb-4 border-bottom pb-3">
        <h2 className="fw-bold mb-0" style={{ fontSize: '2rem' }}>
          Search results for <span className="text-primary">"{searchTerm}"</span>
        </h2>
        <button onClick={() => setSearchTerm('')} className="btn btn-outline-secondary rounded-pill d-flex align-items-center gap-2 border-0" style={{ fontSize: '14px', background: '#f8f9fa' }}>
          Clear search <FiX />
        </button>
      </div>

      {searchResults.length === 0 ? (
        <div className="p-5 text-center bg-light rounded" style={{ borderRadius: '12px' }}>
          <h5 className="text-muted fw-normal">
            No terms found matching <span className="text-dark fw-bold">"{searchTerm}"</span>
          </h5>
        </div>
      ) : (
        <div className="row g-3">
          {searchResults.map((term, idx) => {
            const slug = term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            return (
              <div className="col-md-6" key={idx}>
                <Link to={`/glossary/${slug}`} className="card h-100 border-0 flex-row align-items-center justify-content-between text-dark transition-all" style={{ borderRadius: '12px', background: '#f4f7fb', padding: '16px 20px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                  <span className="fw-medium" style={{ fontSize: '14px' }}>{term}</span>
                  <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                    <FiArrowRight style={{ fontSize: '12px', color: '#1e293b' }} />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GlossarySearch;