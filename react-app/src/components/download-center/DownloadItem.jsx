import React from 'react';

const DownloadItem = ({ title, link = "#!" }) => {
  return (
    <div className="col-xl-6">
      <div className="al-project-seo-item mb-20">
         <div className="row align-items-center">
            <div className="col-xl-9 col-lg-6">
               <div className="d-flex align-items-center">
                  <svg width="40" height="40" fill="#5956e9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"/>
                  </svg>
                  <h4 className="al-project-seo-title ms-4">
                     <a href={link}>{title}</a>
                  </h4>
               </div>
            </div>
            <div className="col-xl-3 col-lg-6">
               <div className="text-end">
                  <div className="al-project-seo-btn">
                     <a href={link}>
                        <span>
                           <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 11L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M1 1H11V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                           </svg>
                        </span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DownloadItem;
