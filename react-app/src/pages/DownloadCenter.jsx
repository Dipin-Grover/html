import React from 'react';
import DownloadHero from '../components/download-center/DownloadHero';
import DownloadItem from '../components/download-center/DownloadItem';

const DownloadCenter = () => {
  const downloads = [
    { title: "Company Profile", link: "/comingSoon" },
    { title: "DeltaView Spark", link: "/spark" },
    { title: "DeltaView Enterprises Series", link: "/enterprises" },
    { title: "DeltaView Canvas", link: "/deltaview-canvas" },
    // { title: "Company Profile", link: "/comingSoon" },
    // { title: "DeltaView Spark", link: "/spark" },
    // { title: "DeltaView Enterprises Series", link: "/enterprises" },
    // { title: "DeltaView Canvas", link: "/deltaview-canvas" }
  ];

  return (
    <div id="smooth-content">
      <main>
        <DownloadHero />
        <div className="al-project-seo-area pt-60 pb-60">
          <div className="container">
            <div className="row">
              {downloads.map((item, index) => (
                <DownloadItem key={index} title={item.title} link={item.link} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DownloadCenter;
