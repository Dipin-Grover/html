import React, { useEffect, useRef } from "react";

const DisplayTabs = ({ os, setOs }) => {
  const pillRef = useRef(null);
  const containerRef = useRef(null);

  const movePill = (btn) => {
    if (!pillRef.current) return;
    pillRef.current.style.width = `${btn.offsetWidth}px`;
    pillRef.current.style.transform = `translateX(${btn.offsetLeft - 5}px)`;
  };

  useEffect(() => {
    const activeBtn = containerRef.current?.querySelector(`[data-os="${os}"]`);
    if (activeBtn) {
      movePill(activeBtn);
    }
  }, [os]);

  useEffect(() => {
    const handleResize = () => {
      const activeBtn = containerRef.current?.querySelector(`[aria-selected="true"]`);
      if (activeBtn) movePill(activeBtn);
    };
    window.addEventListener('resize', handleResize);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(handleResize);
    }
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="dv-displays-tabs" role="tablist" aria-label="Operating system" ref={containerRef}>
      <span className="dv-displays-pill" id="pill" ref={pillRef}></span>
      <button
        role="tab"
        aria-selected={os === "android"}
        data-os="android"
        onClick={(e) => {
          setOs("android");
          movePill(e.currentTarget);
        }}
      >
        Android 16
      </button>
      <button
        role="tab"
        aria-selected={os === "windows"}
        data-os="windows"
        onClick={(e) => {
          setOs("windows");
          movePill(e.currentTarget);
        }}
      >
        Windows 11
      </button>
    </div>
  );
};

export default DisplayTabs;
