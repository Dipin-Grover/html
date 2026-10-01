
import React, { useEffect, useRef, useState } from "react";
import DisplayStage from "./DisplayStage";
import DisplayTabs from "./DisplayTabs";
import DisplayMarquee from "./DisplayMarquee";

const GLOW = { android: "#3fdc97", windows: "#2d8cff" };

const AvailableDisplays = () => {
  const sectionRef = useRef(null);

  const [os, setOs] = useState("android");
  const [sceneIndex, setSceneIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("dv-js");
    }
  }, [isVisible]);

  // Video khatam hone par next OS par switch hoga
  const handleVideoEnd = () => {
    setOs((current) =>
      current === "android" ? "windows" : "android"
    );

    setSceneIndex(0);
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--dv-glow",
      GLOW[os]
    );
  }, [os]);

  const headingWords =
    "Available for all your DeltaView displays".split(" ");

  return (
    <section
      className="dv-displays-section"
      id="showcase"
      ref={sectionRef}
    >
      <div className={`dv-displays-wrap ${isVisible ? "dv-in" : ""}`}>

        {/* LEFT SMART BOARD */}
        <DisplayStage
          os={os}
          sceneIndex={sceneIndex}
          onVideoEnd={handleVideoEnd}
        />

        {/* RIGHT CONTENT */}
        <div className="dv-displays-copy">

          <h2 id="h">
            {headingWords.map((word, i) => (
              <span key={i} style={{ "--i": i }}>
                {word}
              </span>
            ))}
          </h2>

          <span
            className="dv-displays-line"
            id="line"
          ></span>

          <p>
            Experience unmatched versatility with DeltaView displays,
            ready to meet all your needs. From work presentations to
            creative projects, our screens deliver crisp visuals and
            reliable performance, ensuring a seamless and immersive
            encounter for every purpose.
          </p>

          {/* ANDROID / WINDOWS */}
          <DisplayTabs
            os={os}
            setOs={setOs}
          />

          {/* EXISTING DOTS - DESIGN SAME */}
          

          {/* EXISTING MARQUEE - DESIGN SAME */}
          <DisplayMarquee />

        </div>
      </div>
    </section>
  );
};

export default AvailableDisplays;
