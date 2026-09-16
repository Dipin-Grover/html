import React, { useState, useEffect } from 'react';

const slides = [
  {
    title: "Smarter Solutions<br>for Modern Teams",
    text: "Receive personalized tips and recommendations. Our insights features help you make informed decisions effortlessly.",
    img: "/assets/img/auth-bg-1.jpg"
  },
  {
    title: "Seamless Collaboration<br>Across Workspaces",
    text: "Connect your favorite apps and streamline your workflow. Everything works together in perfect harmony.",
    img: "/assets/img/auth-bg-2.jpg" 
  },
  {
    title: "AI Meeting Assistant<br>& Smart Transcription",
    text: "Automatically transcribe meetings, generate smart notes, and identify key action items in real-time.",
    img: "/assets/img/auth-bg-3.jpg"
  }
];

const SignInVisual = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (newIndex) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setIsVisible(true);
    }, 300);
  };

  return (
    <div className="d-none d-lg-flex flex-column p-0 position-relative" style={{ flex: 1 }}>
      <div 
        className="flex-grow-1 bg-dark position-relative auth-right-top" 
        style={{ 
          backgroundImage: `url('${slides[currentSlide].img}')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          transition: 'background-image 0.5s ease', 
          minHeight: '65%' 
        }}
      >
        <div className="position-absolute w-100 h-100 top-0 start-0" style={{ background: 'rgba(0,0,0,0.1)' }}></div>
      </div>
      <div 
        className="text-white p-5 d-flex flex-column justify-content-center position-relative overflow-hidden" 
        style={{ background: '#10302a', minHeight: '35%' }}
      >
        <div className="position-relative z-3 auth-content-box">
          <div className="d-flex gap-2 mb-3 auth-slider-dots">
            {slides.map((_, i) => (
              <span 
                key={i}
                className={`rounded-pill bg-white ${i === currentSlide ? 'active' : 'opacity-50'}`} 
                style={{ 
                  width: i === currentSlide ? '20px' : '6px', 
                  height: '6px', 
                  cursor: 'pointer', 
                  transition: 'all 0.3s ease' 
                }}
                onClick={() => handleSlideChange(i)}
              ></span>
            ))}
          </div>
          <h3 
            className="fs-3 fw-bold mb-3 lh-sm text-white" 
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transition: 'opacity 0.3s ease' 
            }}
            dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
          ></h3>
          <p 
            className="text-white-50 mb-0 w-75"
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transition: 'opacity 0.3s ease' 
            }}
          >
            {slides[currentSlide].text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInVisual;
