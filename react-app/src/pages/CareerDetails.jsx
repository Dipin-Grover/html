import React from 'react';
import JobHeader from '../components/career-details/JobHeader';
import JobDescription from '../components/career-details/JobDescription';
import ApplyForm from '../components/career-details/ApplyForm';

const CareerDetails = () => {
  return (
    <main>
      <div className="tp-career-details pt-40 pb-80">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-10 mx-auto">
                  <JobHeader />
                  <JobDescription />
                  <ApplyForm />
               </div>
            </div>
         </div>
      </div>
    </main>
  );
};

export default CareerDetails;
