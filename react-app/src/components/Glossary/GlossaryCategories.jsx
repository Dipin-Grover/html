import React from 'react';
import './Glossary.css';
import { FiArrowRight } from 'react-icons/fi';
import {
  LuMonitorPlay,
  LuVolume2,
  LuLayoutGrid,
  LuWifi,
  LuCpu,
  LuUsers,
  LuSettings,
  LuBookOpen
} from "react-icons/lu";

const GlossaryCategories = () => {
  const categories = [
    { icon: <LuMonitorPlay />, title: "Display & Visual", count: "8 terms" },
    { icon: <LuVolume2 />, title: "Audio & Video", count: "6 terms" },
    { icon: <LuLayoutGrid />, title: "Software", count: "7 terms" },
    { icon: <LuWifi />, title: "Connectivity", count: "5 terms" },
    { icon: <LuCpu />, title: "Hardware", count: "6 terms" },
    { icon: <LuUsers />, title: "Collaboration Tools", count: "4 terms" },
    { icon: <LuSettings />, title: "Device Management", count: "5 terms" },
    { icon: <LuBookOpen />, title: "Learning & Pedagogy", count: "4 terms" },
    { icon: <LuLayoutGrid />, title: "General", count: "5 terms" }
  ];

  return (
    <div>
      <span className="glossary-section-label">BROWSE ALL TERMS</span>
      <div className="glossary-section-header">
        <h2 className="glossary-section-title">Explore by Category</h2>
        <button className="glossary-view-all">
          View all terms <FiArrowRight />
        </button>
      </div>

      <div className="glossary-category-grid">
        {categories.map((cat, idx) => (
          <a href="#" key={idx} className="glossary-cat-card">
            <div className="glossary-cat-icon">
              {cat.icon}
            </div>
            <div className="glossary-cat-info">
              <h4 className="glossary-cat-title">{cat.title}</h4>
              <span className="glossary-cat-count">{cat.count}</span>
            </div>
            <FiArrowRight className="glossary-cat-arrow" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default GlossaryCategories;
