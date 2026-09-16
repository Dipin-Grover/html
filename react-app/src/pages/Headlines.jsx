import React, { useEffect } from 'react';
import HeadlinesArea from '../components/headlines/HeadlinesArea';

const Headlines = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <HeadlinesArea />
    </main>
  );
};

export default Headlines;