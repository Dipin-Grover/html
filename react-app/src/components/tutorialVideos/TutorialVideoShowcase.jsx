import React, { useState } from 'react';

const videosList = [
  {
    id: 'n-bHRiqYcpk',
    title: 'Introduction & Overview',
    url: 'https://www.youtube.com/embed/n-bHRiqYcpk?si=G_xphi91NWJa92kH'
  },
  {
    id: 'Lr1-6i1NpQQ',
    title: 'Steps to perform a Touch Test',
    url: 'https://www.youtube.com/embed/Lr1-6i1NpQQ?si=RhWdORQjxb2iJhML'
  },
  {
    id: 'jyxH7AB8nlw',
    title: 'Steps to change the Screen Saver',
    url: 'https://www.youtube.com/embed/jyxH7AB8nlw?si=Wy2NtzgvoicH0NIk'
  },
  {
    id: 'mXd6HcV6LKo',
    title: 'Steps to change the Wallpaper',
    url: 'https://www.youtube.com/embed/mXd6HcV6LKo?si=yMxeL4h1pTEWFIqQ'
  },
  {
    id: 'vCvSHhk5QTE',
    title: 'Steps to Adjust the Audio',
    url: 'https://www.youtube.com/embed/vCvSHhk5QTE?si=jXH77wCf5cD-wI0a'
  },
  {
    id: 'DsQC-lvJJbQ',
    title: 'Steps to Update and Change Password',
    url: 'https://www.youtube.com/embed/DsQC-lvJJbQ?si=rgCbzotOnY7u-otJ'
  },
  {
    id: 'cYONHFJtU8g',
    title: 'Steps to use Record Feature',
    url: 'https://www.youtube.com/embed/cYONHFJtU8g?si=1LYyKk8cxq5UpJkE'
  },
  {
    id: 'CSlQ1hMzqjM',
    title: 'Steps to Access DeltaView Canvas',
    url: 'https://www.youtube.com/embed/CSlQ1hMzqjM?si=M1OwkzOwmj0z5K0I'
  }
];

const TutorialVideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(videosList[0]);

  const handleVideoClick = (e, video) => {
    e.preventDefault();
    setActiveVideo(video);
    
    // Smooth scroll on mobile if needed (like in original script)
    if (window.innerWidth < 992) {
      document.querySelector('.player-card')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="video-showcase-section bg-white">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {/* LEFT VIDEO */}
          <div className="col-lg-8">
            <div className="player-card">
              <div className="video-wrapper">
                <iframe
                  id="mainVideo"
                  src={activeVideo.url}
                  title="Featured Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="video-overlay">
                  <div className="play-icon">
                    <i className="fa-regular fa-play"></i>
                  </div>
                </div>
              </div>
              <div className="player-content">
                <h3 className="mb-0" id="mainVideoTitle">
                  {activeVideo.title}
                </h3>
              </div>
            </div>
          </div>
          {/* RIGHT VIDEO LIST */}
          <div className="col-lg-4">
            <div className="list-card">
              <div className="list-header">
                <h3>Tutorial Videos</h3>
                <span>{String(videosList.length).padStart(2, '0')} Videos</span>
              </div>
              <div className="list-scroll">
                {videosList.map((video) => (
                  <a
                    key={video.id}
                    href="#!"
                    className={`video-item ${activeVideo.id === video.id ? 'active' : ''}`}
                    onClick={(e) => handleVideoClick(e, video)}
                  >
                    <div className="item-icon">
                      <i className="fa-regular fa-play"></i>
                    </div>
                    <div className="item-content">
                      <h4>{video.title}</h4>
                      <span>Watch Video</span>
                    </div>
                    <div className="item-arrow">
                      <i className="fa-regular fa-arrow-up-right-from-square"></i>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorialVideoShowcase;
