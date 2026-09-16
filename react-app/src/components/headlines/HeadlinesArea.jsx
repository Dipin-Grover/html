import React from 'react';
import HeadlineCard from './HeadlineCard';

const headlinesData = [
  { id: 1, image: 'ncn.webp', title: '17th NCN Event 2025', location: 'New Delhi', link: '/comingSoon' },
  { id: 2, image: '2.jpg', title: '17th NCN Event 2025', location: 'New Delhi', link: '/comingSoon' },
  { id: 3, image: '3.jpg', title: '17th NCN Event 2025', location: 'New Delhi', link: '/comingSoon' },
  { id: 4, image: '4.jpg', title: '17th NCN Event 2025', location: 'New Delhi', link: '/comingSoon' },
  { id: 5, image: '5.jpg', title: '17th NCN Event 2025', location: 'New Delhi', link: '/comingSoon' },
  { id: 6, image: '6.jpg', title: '17th NCN Event 2025', location: 'New Delhi', link: '/comingSoon' },
  { id: 7, image: '7.jpg', title: '17th NCN Event 2025', location: 'New Delhi', link: '/comingSoon' },
  { id: 8, image: '8.jpg', title: '17th NCN Event 2025', location: 'New Delhi', link: '/comingSoon' },
  { id: 9, image: '9.jpg', title: '17th NCN Event 2025', location: 'New Delhi', link: '/comingSoon' },
  { id: 10, image: '10.jpg', title: '17th NCN Event 2025', location: 'New Delhi', link: '/comingSoon' },
  { id: 11, image: '11.jpg', title: '17th NCN Event 2025', location: 'New Delhi', link: '/comingSoon' },
  { id: 12, image: '12.jpg', title: '17th NCN Event 2025', location: 'New Delhi', link: '/comingSoon' },
];

const HeadlinesArea = () => {
  return (
    <div className="tp-team-area pt-50 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-3 col-md-3 d-none d-md-block">
            <div className="tp-about-wd-shape tp-team-sa-shape tp-about-sa-shape">
              <span className="shape-1 d-inline-block mr-10">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 40C0 17.9086 17.9086 0 40 0V40H0Z" fill="#5956e9"></path>
                </svg>
              </span>
              <span className="shape-1 mb-15">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 40C40 17.9086 22.0914 0 0 0V40H40Z" fill="#030303"></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8 col-md-9">
            <div className="tp-team-sa-title-wrap">
              <h2 className="tp-team-sa-title mb-25">HEADLINES</h2>
              <div className="tp-service-2-para tp-techonolgy-para tp-team-sa-para">
                <p className="fs-18">Stay updated with the latest DeltaView news, announcements, product launches, events, and industry highlights. Explore the stories shaping our journey in AI-powered interactive technology for education and enterprises. </p>
              </div>
            </div>
          </div>
          
          {headlinesData.map((event) => (
            <HeadlineCard 
              key={event.id}
              image={event.image}
              title={event.title}
              location={event.location}
              link={event.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeadlinesArea;
