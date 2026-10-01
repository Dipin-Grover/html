
import React from "react";

const DisplayScreen = ({ os, onVideoEnd }) => {
  const videoSrc =
    os === "android"
      ? "/assets/video/DeltaviewConnect/android.mp4"
      : "/assets/video/DeltaviewConnect/windows.mp4";

  return (
    <div className="dv-video-screen">

      <video
        key={videoSrc}
        className="dv-os-video"
        src={videoSrc}
        autoPlay
        muted
        playsInline
        onEnded={onVideoEnd}
      />

    </div>
  );
};

export default DisplayScreen;

