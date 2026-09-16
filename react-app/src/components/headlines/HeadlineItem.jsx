import React from 'react';
import { Link } from 'react-router-dom';

const HeadlineItem = ({ image, title, location, link = "#!" }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div 
        className="mb-4" 
        style={{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          borderRadius: '10px',
          overflow: 'hidden',
          backgroundColor: '#fff',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
        }}
      >
        <Link to={link} className="d-block" style={{ overflow: 'hidden' }}>
          <img 
            src={image} 
            alt={title} 
            className="w-100" 
            style={{ 
              objectFit: 'cover', 
              aspectRatio: '4/3',
              transition: 'transform 0.5s ease'
            }} 
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </Link>
        <div className="p-3 position-relative">
          <h3 
            className="fw-bold mb-1" 
            style={{ 
              fontSize: '22px', 
              letterSpacing: '-1px', 
              fontFamily: '"Inter", sans-serif',
              color: '#030303'
            }}
          >
            <Link to={link} className="text-decoration-none text-dark" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#5956e9'} onMouseLeave={(e) => e.currentTarget.style.color = '#030303'}>
              {title}
            </Link>
          </h3>
          <span 
            className="d-block" 
            style={{ 
              color: '#666', 
              letterSpacing: '-0.5px', 
              fontFamily: '"Inter", sans-serif',
              fontSize: '15px'
            }}
          >
            {location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeadlineItem;
