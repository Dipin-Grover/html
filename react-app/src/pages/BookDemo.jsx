import React from 'react';
import BookDemoHero from '../components/bookDemo/BookDemoHero';
import BookDemoTabs from '../components/bookDemo/BookDemoTabs';
import BookDemoForm from '../components/bookDemo/BookDemoForm';

const BookDemo = () => {
  return (
    <>
      <main>
        <BookDemoHero />
        <BookDemoTabs />
        <BookDemoForm />
      </main>
    </>
  );
};

export default BookDemo;
