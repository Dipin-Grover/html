import React from 'react';
import { Link } from 'react-router-dom';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'assets/img/text-to-speech-1.png',
      title: 'Text-to-search',
      desc: 'Create written content searchable and accessible on Google.',
    },
    {
      icon: 'assets/img/text-mining.png',
      title: 'Text Correction',
      desc: 'Modify handwritten text into a clear, easily readable format.',
    },
    {
      icon: 'assets/img/spotlight.png',
      title: 'Spot Light',
      desc: 'Focus on crucial business concepts for clearer understanding.',
    },
    {
      icon: 'assets/img/collaboration.png',
      title: 'Made for collaboration',
      desc: 'It supports up to 40 touch points for simultaneous multi-user interaction.',
    },
    {
      icon: 'assets/img/document-editor.png',
      title: 'Floating Pen',
      desc: 'Enhance your business tasks with advanced precise tools for writing and illustrating.',
    },
    {
      icon: 'assets/img/crop.png',
      title: 'Crop',
      desc: 'Pick out important parts from pictures and PDFs with crop feature.',
    },
  ];

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
            {features.map((f, i) => (
              <div className="col-lg-4 col-md-6 d-flex" key={i}>
                <div className="app-feature-item ais-feature-item">
                  <div className="app-feature-item-icon">
                    <span>
                      <img src={f.icon} width="50" alt="tool icons img" />
                    </span>
                  </div>
                  <div className="app-feature-item-content">
                    <h4 className="app-feature-title">{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="app-feature-bottom text-center mt-20 tp_fade_anim" data-delay=".9">
              <p>
                <span className="bg-blue">Free</span>
                <Link to="/book-demo">Book a Demo</Link> to explore smarter collaboration and interactive learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
