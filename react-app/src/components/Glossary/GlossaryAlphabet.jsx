import React from 'react';

const GlossaryAlphabet = ({ activeLetter, setActiveLetter }) => {
  const alphabets = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

  const handleLetterClick = (letter) => {
    if (letter === 'All') {
      setActiveLetter('All');
      return;
    }

    setActiveLetter(
      activeLetter === letter ? 'All' : letter
    );
  };

  return (
    <div className="d-flex flex-wrap justify-content-center gap-2">
      <style>
        {`
          .alpha-btn {
            transition: all 0.2s ease !important;
          }
          .alpha-btn:hover {
            background-color: #0d6efd !important;
            color: #ffffff !important;
            border-color: #0d6efd !important;
            transform: scale(1.05);
          }
          .alpha-btn-active {
            transform: scale(1.15) !important;
            font-weight: bold;
            box-shadow: 0 4px 6px rgba(13, 110, 253, 0.2);
            z-index: 1;
            transition: all 0.2s ease !important;
          }
        `}
      </style>
      {alphabets.map((letter) => {
        const isActive = activeLetter === letter;

        return (
          <button
            key={letter}
            type="button"
            onClick={() => handleLetterClick(letter)}
            className={`btn transition-all ${
              isActive
                ? 'btn-primary alpha-btn-active'
                : 'btn-light border alpha-btn'
            }`}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default GlossaryAlphabet;