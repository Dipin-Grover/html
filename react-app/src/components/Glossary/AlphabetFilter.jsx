import React from 'react';
import './Glossary.css';

const AlphabetFilter = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return (
    <div className="glossary-sidebar">
      <button className="glossary-alpha-btn all-btn active">All</button>
      {letters.map(letter => (
        <button key={letter} className="glossary-alpha-btn">
          {letter}
        </button>
      ))}
    </div>
  );
};

export default AlphabetFilter;