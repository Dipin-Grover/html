import React from 'react';

const features = [
  {
    title: 'AI-Powered Smart Whiteboard',
    description: 'Turn ideas into interactive, engaging lessons with intelligent AI tools. ',
    icon: (
      <svg width="50" height="50" fill="#7463ff" id="Layer_1" enableBackground="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="m49.2 22.2 1.4 1.4 2.3-2.3c1.8-1.8 1.8-4.8 0-6.6l-4.3-4.3c-.8-.9-2-1.4-3.3-1.4-1.2 0-2.4.5-3.3 1.4l-2.3 2.3 1.4 1.4z"/>
          <path d="m13.7 52.7c.2 0 .4 0 .7-.1l8.4-1.9c.6-.1 1.1-.4 1.5-.8l24.9-24.9-1.4-1.4-8.1-8.1-1.4-1.4-24.9 24.9c-.4.4-.7.9-.8 1.5 0 0-1.9 8.4-1.9 8.4-.4 1.9 1.2 3.7 3 3.8zm13.2-17.6 7.1-7.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-7.1 7.1c-.2.2-.5.3-.7.3s-.5-.1-.7-.3c-.4-.4-.4-1 0-1.4z"/>
          <path d="m54.6 53h-45.2c-.6 0-1 .4-1 1s.4 1 1 1h45.3c.6 0 1-.4 1-1s-.5-1-1.1-1z"/>
        </g>
      </svg>
    ),
  },
  {
    title: 'AI Text Recognition',
    description: 'Instantly recognize and digitize written content for smarter teaching. ',
    icon: (
      <svg width="50" height="50" fill="#7463ff" id="Layer_1" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path clipRule="evenodd" d="m6.58 86v-64.42c0-8.28 6.72-15 15-15h64.42c8.28 0 15 6.72 15 15s-6.72 15-15 15h-49.42v49.42c0 8.28-6.72 15-15 15s-15-6.72-15-15zm79.42 389.42h-49.42v-49.42c0-8.28-6.72-15-15-15s-15 6.72-15 15v64.42c0 8.28 6.72 15 15 15h64.42c8.28 0 15-6.72 15-15s-6.72-15-15-15zm404.42-468.84h-64.42c-8.28 0-15 6.72-15 15s6.72 15 15 15h49.42v49.42c0 8.28 6.72 15 15 15s15-6.72 15-15v-64.42c0-8.29-6.71-15-15-15zm0 404.42c-8.28 0-15 6.72-15 15v49.42h-49.42c-8.28 0-15 6.72-15 15s6.72 15 15 15h64.42c8.28 0 15-6.72 15-15v-64.42c0-8.28-6.71-15-15-15zm-62.85-149.42v-64.17l-74.43 30.3v67.74l74.43 30.3zm-118.35-92.89h-210.87c-7.66 0-13.92 6.27-13.92 13.92v157.94c0 7.66 6.27 13.92 13.92 13.92h210.86c7.66 0 13.92-6.27 13.92-13.92v-157.94c.01-7.66-6.25-13.92-13.91-13.92z" fillRule="evenodd"/>
      </svg>
    ),
  },
  {
    title: 'AI-Powered Search',
    description: 'Find information quickly and keep lessons flowing without interruptions. ',
    icon: (
      <svg width="50" height="50" fill="#7463ff" id="Capa_1" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="m366.551 113.334v-113.334h-52.884v74.666h-30v-74.666h-55.334v74.666h-30v-74.666h-52.884v113.334z"/>
          <path d="m118.333 143.333v303.667c0 35.841 29.159 65 65 65h145.334c35.841 0 65-29.159 65-65v-303.667zm213.111 149.984v116.349h-150.888v-116.349h17.27v-36.81c0-32.078 26.097-58.174 58.175-58.174s58.175 26.097 58.175 58.174v36.81z"/>
          <path d="m284.175 256.508c0-15.535-12.639-28.174-28.175-28.174s-28.175 12.639-28.175 28.174v36.81h56.35z"/>
          <path d="m210.556 323.317h90.889v56.349h-90.889z"/>
        </g>
      </svg>
    ),
  },
  {
    title: 'Smart Content Creation',
    description: 'Create engaging classroom content and activities with AI assistance. ',
    icon: (
      <svg width="50" height="50" fill="#7463ff" id="Capa_1" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="m313.957 451h30v61h-30z"/>
          <path d="m433.957 331h60v30h-60z"/>
          <path d="m426.458 405.467h29.997v106.066h-29.997z" transform="matrix(.707 -.707 .707 .707 -194.909 446.449)"/>
          <path d="m208.957 166c16.569 0 30-13.431 30-30v-136h-60v136c0 16.569 13.43 30 30 30z"/>
          <path d="m102.893 66.151-21.217-21.22-63.633 63.647 21.211 21.211z"/>
          <path d="m199.743 478.407 251.777-251.762-106.069-21.226-166.921 166.921z"/>
          <path d="m315.026 193.422-47.111-47.111c-4.919 28.17-29.398 49.689-58.958 49.689-33.091 0-60-26.909-60-60v-73.491l-130.914 130.913 148.491 148.491z"/>
          <path d="m388.995 331.595-84.307 84.3c24.899 3.441 47.289-4.863 63.365-20.94 17.252-17.252 24.047-40.869 20.942-63.36z"/>
        </g>
      </svg>
    ),
  },
  {
    title: 'Interactive Learning Tools',
    description: 'Bring lessons to life with multimedia, annotations, and interactive activities. ',
    icon: (
      <svg fill="#7463ff" width="50" height="50" id="Layer_1" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path clipRule="evenodd" d="m133.713 469.151h-47.214c-10.097 0-18.286 8.189-18.286 18.286 0 10.103 8.189 18.286 18.286 18.286h361.913c10.092 0 18.286-8.184 18.286-18.286 0-10.097-8.194-18.286-18.286-18.286h-4.984-42.24v-78.056h-36.572v78.056h-194.33v-78.056h-36.573zm378.286-114.628h-511.998v-348.247h511.998z" fillRule="evenodd"/>
      </svg>
    ),
  },
  {
    title: 'Seamless Screen Sharing',
    description: 'Share content across devices for connected and collaborative classrooms. ',
    icon: (
      <svg fill="#7463ff" width="50" height="50" id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" dataName="Layer 1">
        <path d="m437.162 447.059-63.202 36.503c-21.239 12.269-44.049 18.405-66.85 18.406-22.807.001-45.606-6.134-66.851-18.406l-143.766-82.984c-6.377-3.684-10.942-9.654-12.857-16.81-1.916-7.156-.942-14.608 2.741-20.983 8.409-14.578 21.622-25.107 37.203-29.643 15.881-4.624 32.67-2.522 47.273 5.919l40.667 23.474-125.576-217.512c-5.554-9.631-7.017-20.882-4.124-31.684 2.897-10.814 9.801-19.824 19.438-25.373 9.61-5.559 20.866-7.03 31.679-4.134 10.808 2.894 19.825 9.788 25.392 19.412l58.078 100.625c3.215-9.795 9.807-17.934 18.757-23.086 15.144-8.744 33.563-6.89 46.596 3.247 2.443-11.065 9.335-21.11 19.888-27.203 16.92-9.74 37.887-6.294 50.897 7.112 2.954-9.358 9.189-17.144 17.705-22.051 8.984-5.204 19.503-6.589 29.61-3.888 10.121 2.704 18.565 9.164 23.776 18.189l62.484 108.215c36.857 63.874 14.893 145.812-48.958 182.656zm-357.093-395.771c40.215-23.21 91.818-9.387 115.037 30.819 4.677 8.09 7.954 16.833 9.74 25.986 1.586 8.131 9.46 13.438 17.595 11.851 8.131-1.586 13.437-9.463 11.851-17.595-2.423-12.423-6.869-24.286-13.21-35.252-31.486-54.522-101.472-73.27-156.013-41.791-54.521 31.486-73.27 101.472-41.803 155.99 6.334 11.012 14.386 20.795 23.931 29.08 2.839 2.464 6.34 3.672 9.826 3.672 4.195 0 8.369-1.751 11.335-5.168 5.43-6.257 4.76-15.731-1.497-21.161-7.01-6.084-12.929-13.278-17.601-21.399-23.21-40.214-9.387-91.817 30.809-115.031z"/>
      </svg>
    ),
  },
  {
    title: '4K Interactive Display',
    description: 'Deliver sharp, vibrant visuals with an immersive touch experience. ',
    icon: (
      <svg fill="#7463ff" width="50" height="50" id="Layer_2" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" dataName="Layer 2">
        <path d="m12 27a1 1 0 0 1 -1-1 9.011 9.011 0 0 0 -9-9 1 1 0 0 1 0-2 11.013 11.013 0 0 1 11 11 1 1 0 0 1 -1 1z"/>
        <path d="m8 27a1 1 0 0 1 -1-1 5.006 5.006 0 0 0 -5-5 1 1 0 0 1 0-2 7.008 7.008 0 0 1 7 7 1 1 0 0 1 -1 1z"/>
        <path d="m4 27a1 1 0 0 1 -1-1 1 1 0 0 0 -1-1 1 1 0 0 1 0-2 3 3 0 0 1 3 3 1 1 0 0 1 -1 1z"/>
        <path d="m30 5h-28a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1 13.015 13.015 0 0 1 13 13 1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-20a1 1 0 0 0 -1-1z"/>
      </svg>
    ),
  },
  {
    title: 'Smart Classroom Experience',
    description: 'Bring AI, digital content, and collaboration together on one powerful interactive panel.',
    icon: (
      <svg fill="#7463ff" width="50" height="50" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="m2 10c0-4.41828 3.58172-8 8-8h44c4.4183 0 8 3.58172 8 8v32c0 4.4183-3.5817 8-8 8-1.1046 0-2-.8954-2-2s.8954-2 2-2c2.2091 0 4-1.7909 4-4v-32c0-2.20914-1.7909-4-4-4h-44c-2.20914 0-4 1.79086-4 4v32c0 2.2091 1.79086 4 4 4h1c1.1046 0 2 .8954 2 2s-.8954 2-2 2h-1c-4.41828 0-8-3.5817-8-8z"/>
          <path d="m28.5898 20c-2.6836 0-4.9158 2.1484-4.9158 4.8679v14.9963c-.1583-.1164-.3187-.2306-.4809-.3418-1.4955-1.0248-3.3734-1.9564-5.5106-1.9564-2.706 0-4.8364 2.2632-4.6738 4.9129.0394.642.2615 1.1663.4034 1.4719.0162.035.0334.0695.0517.1035l4.9063 9.1462c2.1534 4.7618 4.8031 8.7995 10.7515 8.7995h11.1312c5.9042 0 10.7473-4.7164 10.7473-10.6038v-12.9056c0-2.7196-2.2322-4.868-4.9157-4.868-.7005 0-1.3702.1464-1.9775.4111-.9057-1.1288-2.3046-1.845-3.8541-1.845-.5529 0-1.0867.0912-1.5858.2598-.8582-1.4499-2.451-2.4108-4.2457-2.4108-.3123 0-.6185.0291-.9158.0848v-5.2546c0-2.7195-2.2322-4.8679-4.9157-4.8679z"/>
        </g>
      </svg>
    ),
  }
];

const SparkPowerfulFeatures = () => {
  return (
    <div className="al-service-archi-area pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto col-md-12 col-sm-12 col-12">
            <div className="cst-service-heading text-center mb-50">
              <h4 className="cst-section-title tp_fade_anim" data-delay=".1">Powerful Features</h4>
              <p>
                Explore advanced features including Zero Bonding Display, Screen Recording, USB Lock, Spotlight, 8 MOHS Glass, Precision Touch, Wireless Sharing, and Multi-Touch Collaboration for an enhanced interactive experience.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 mb-20" key={index}>
              <div className="al-service-archi-wrapper tp_fade_anim border border-light p-4" data-delay={`.${3 + (index % 4)}`} data-fade-from="left">
                <div className="al-service-archi-icon mb-40">
                  {feature.icon}
                </div>
                <div className="al-service-archi-content">
                  <h3 className="al-service-archi-title"><a href="#!">{feature.title}</a></h3>
                  <p className="mb-35">{feature.description}</p>
                  <a className="al-service-archi-link" href="#!">
                    <span>
                      <svg width="58" height="16" viewBox="0 0 58 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M57.7071 8.70711C58.0976 8.31658 58.0976 7.68342 57.7071 7.29289L51.3431 0.928932C50.9526 0.538408 50.3195 0.538408 49.9289 0.928932C49.5384 1.31946 49.5384 1.95262 49.9289 2.34315L55.5858 8L49.9289 13.6569C49.5384 14.0474 49.5384 14.6805 49.9289 15.0711C50.3195 15.4616 50.9526 15.4616 51.3431 15.0711L57.7071 8.70711ZM0 9H57V7H0V9Z" fill="#7463ff"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SparkPowerfulFeatures;