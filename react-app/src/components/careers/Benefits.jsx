import React, { useState } from 'react';

const Benefits = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <>
       <div className="benifits-list">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 d-flex align-items-center">
                  <h3>Benifits :</h3>
                  <ul className="nav nav-tabs" id="BenifitsTab" role="tablist">
                     <li className="nav-item" role="presentation">
                        <button className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => setActiveTab('tab1')} type="button" role="tab" aria-selected={activeTab === 'tab1'}>Employee Wellbeing</button>
                     </li>
                     <li className="nav-item" role="presentation">
                        <button className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => setActiveTab('tab2')} type="button" role="tab" aria-selected={activeTab === 'tab2'}>Work Flexibility</button>
                     </li>
                     <li className="nav-item" role="presentation">
                        <button className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`} onClick={() => setActiveTab('tab3')} type="button" role="tab" aria-selected={activeTab === 'tab3'}>Career Growth</button>
                     </li>
                     <li className="nav-item" role="presentation">
                        <button className={`nav-link ${activeTab === 'tab4' ? 'active' : ''}`} onClick={() => setActiveTab('tab4')} type="button" role="tab" aria-selected={activeTab === 'tab4'}>Learning & Development</button>
                     </li>
                     
                  </ul>
               </div>
            </div>
         </div>
       </div>
      <div className="benifits-detail">
         <div className="container">
            <div className="tab-content" id="BenifitsTabContent">
               <div className={`tab-pane fade ${activeTab === 'tab1' ? 'show active' : ''}`}>
                  <div className="row align-items-center">
                     <div className="col-lg-6">
                        <div className="benifits-content">
                        <h4>Employee Wellbeing</h4>
                        <p>
                           We believe our people are our greatest strength. We provide benefits and support that help our employees stay healthy, motivated
                           and focused.
                        </p>
                        <ul>
                           <li>Health and wellness support</li>
                           <li>Employee assistance programs</li>
                           <li>Work-life balance initiatives</li>
                           <li>Positive workplace experience</li>
                           <li>Supportive team environment</li>
                        </ul>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="benifits-image">
                        <img src="assets/img/ew.webp" alt="Employee Wellbeing" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className={`tab-pane fade ${activeTab === 'tab2' ? 'show active' : ''}`}>
                  <div className="row align-items-center">
                     <div className="col-lg-6">
                        <div className="benifits-content">
                        <h4>Work Flexibility</h4>
                        <p>
                           We encourage flexibility that allows our teams to work efficiently while maintaining a healthy balance between personal and
                           professional life.
                        </p>
                        <ul>
                           <li>Flexible working hours</li>
                           <li>Remote-friendly opportunities</li>
                           <li>Hybrid work environment</li>
                           <li>Balanced work schedules</li>
                           <li>Employee focused policies</li>
                        </ul>

                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="benifits-image">
                        <img src="assets/img/wf.webp" alt="Work Flexibility" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className={`tab-pane fade ${activeTab === 'tab3' ? 'show active' : ''}`}>
                  <div className="row align-items-center">
                     <div className="col-lg-6">
                        <div className="benifits-content">
                        <h4>Career Growth</h4>
                        <p>
                           Build your future with exciting opportunities, meaningful projects and continuous career advancement.
                        </p>
                        <ul>
                           <li>Career development opportunities</li>
                           <li>Leadership growth programs</li>
                           <li>Performance recognition</li>
                           <li>Professional advancement</li>
                           <li>Challenging projects</li>
                        </ul>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="benifits-image">
                        <img src="assets/img/cg.webp" alt="Career Growth" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className={`tab-pane fade ${activeTab === 'tab4' ? 'show active' : ''}`}>
                  <div className="row align-items-center">
                     <div className="col-lg-6">
                        <div className="benifits-content">
                        <h4>Learning & Development</h4>
                        <p>
                           We create opportunities to learn new technologies, improve skills and achieve professional excellence.
                        </p>
                        <ul>
                           <li>Skill enhancement programs</li>
                           <li>Training workshops</li>
                           <li>Learning resources</li>
                           <li>Knowledge sharing sessions</li>
                           <li>Continuous improvement culture</li>
                        </ul>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="benifits-image">
                        <img src="assets/img/ld.webp" alt="Learning" />
                        </div>
                     </div>
                  </div>
               </div>      
            </div>
         </div>
      </div>
    </>
  );
};

export default Benefits;
