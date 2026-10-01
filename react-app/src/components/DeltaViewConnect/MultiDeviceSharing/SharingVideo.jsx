

const SharingVideo = () => {
  return (
    <div className="sharing-visual">

      

      {/* Actual Video */}
      <div className="sharing-video-wrapper">
        <video
          className="sharing-video"
          src="/assets/video/DeltaviewConnect/4.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

    </div>
  );
};

export default SharingVideo;