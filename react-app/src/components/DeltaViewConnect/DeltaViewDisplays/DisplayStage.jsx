
import React, { useMemo } from "react";
import DisplayScreen from "./DisplayScreen";

const DisplayStage = ({ os, sceneIndex, onVideoEnd }) => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animDuration: 7 + Math.random() * 8,
      animDelay: -(Math.random() * 12),
      width: 2 + Math.random() * 3,
      height: 2 + Math.random() * 3,
    }));
  }, []);

  return (
    <div className="dv-displays-frame">
      <div className="dv-displays-stage" id="stage">

        {/* Aurora Background */}
        <div className="dv-aurora aur-a"></div>
        <div className="dv-aurora aur-b"></div>
        <div className="dv-aurora aur-c" id="aurc"></div>

        {/* Background Rings */}
        <div className="dv-rings">
          <i></i>
          <i></i>
          <i></i>
        </div>

        {/* Floating Particles */}
        {particles.map((particle) => (
          <i
            key={particle.id}
            className="dv-pt"
            style={{
              left: `${particle.left}%`,
              animationDuration: `${particle.animDuration}s`,
              animationDelay: `${particle.animDelay}s`,
              width: `${particle.width}px`,
              height: `${particle.height}px`,
            }}
          />
        ))}

        {/* Display */}
        <div className="dv-display">
          <div className="dv-float">

            <div className="dv-body">

              {/* Screen */}
              <div
                className="dv-screen"
                role="img"
                aria-label={`DeltaView display showing ${os}`}
              >
                <DisplayScreen
                  os={os}
                  sceneIndex={sceneIndex}
                  onVideoEnd={onVideoEnd}
                />
              </div>

              {/* Camera */}
              <div className="dv-cam"></div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DisplayStage;
