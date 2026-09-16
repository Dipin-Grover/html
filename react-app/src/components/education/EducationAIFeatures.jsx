import React from 'react';
import { Link } from 'react-router-dom';

const EducationAIFeatures = () => {
  return (
    <div className="ais-feature-ptb p-relative app-feature-border-style pb-80 pt-80">
      <div className="container container-1350">
        <div className="row">
          <div className="col-lg-12">
            <div className="ais-feature-heading text-center p-relative mb-50">
              <span className="ais-section-subtitle tp_fade_anim" data-delay=".3">AI-Powered Accessibility</span>
              <h4 className="ais-section-title tp_fade_anim" data-delay=".5">Unlocking Inclusivity and Accessibility with AI Tools</h4>
              <div className="ais-feature-shape" data-speed-x="-.2">
                <img src="assets/img/update-2/service/file.html" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="app-feature-bg tp_fade_anim" data-delay=".7">
          <div className="row g-1">
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="app-feature-item ais-feature-item">
                <div className="app-feature-item-icon">
                  <span>
                    <img src="assets/img/text-to-speech-1.png" width="50" alt="tool icons img" />
                  </span>
                </div>
                <div className="app-feature-item-content">
                  <h4 className="app-feature-title">Text-to-search</h4>
                  <p>Create written content searchable and accessible on Google.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="app-feature-item ais-feature-item">
                <div className="app-feature-item-icon">
                  <span>
                    <img src="assets/img/text-mining.png" width="50" alt="tool icons img" />
                  </span>
                </div>
                <div className="app-feature-item-content">
                  <h4 className="app-feature-title">Text Correction</h4>
                  <p>Modify handwritten text into a clear, easily readable format.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="app-feature-item ais-feature-item">
                <div className="app-feature-item-icon">
                  <span>
                    <img src="assets/img/spotlight.png" width="50" alt="tool icons img" />
                  </span>
                </div>
                <div className="app-feature-item-content">
                  <h4 className="app-feature-title">Spot Light</h4>
                  <p>Focus on crucial business concepts for clearer understanding.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="app-feature-item ais-feature-item">
                <div className="app-feature-item-icon">
                  <span>
                    <img src="assets/img/collaboration.png" width="50" alt="tool icons img" />
                  </span>
                </div>
                <div className="app-feature-item-content">
                  <h4 className="app-feature-title">Made for collaboration</h4>
                  <p>It supports up to 40 touch points for simultaneous multi-user interaction.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="app-feature-item ais-feature-item">
                <div className="app-feature-item-icon">
                  <span>
                    <img src="assets/img/document-editor.png" width="50" alt="tool icons img" />
                  </span>
                </div>
                <div className="app-feature-item-content">
                  <h4 className="app-feature-title">Floating Pen</h4>
                  <p>Enhance your business tasks with advanced precise tools for writing and illustrating.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="app-feature-item ais-feature-item">
                <div className="app-feature-item-icon">
                  <span>
                    <img src="assets/img/crop.png" width="50" alt="tool icons img" />
                  </span>
                </div>
                <div className="app-feature-item-content">
                  <h4 className="app-feature-title">Crop</h4>
                  <p>Pick out important parts from pictures and PDFs with crop feature.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="app-feature-bottom text-center mt-20 tp_fade_anim" data-delay=".9">
              <p>
                <span className="bg-blue">Free</span>
                <Link to="#">Book a Demo</Link> to explore smarter collaboration and interactive learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAIFeatures;
