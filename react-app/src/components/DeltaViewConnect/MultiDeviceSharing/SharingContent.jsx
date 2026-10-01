import SharingFeatures from "./SharingFeatures";
import SharingActions from "./SharingActions";

const SharingContent = () => {
  return (
    <div className="sharing-content">

      <div className="sharing-eyebrow">
        
        MULTI-DEVICE SHARING
      </div>

      <h2 class="ais-hero-title mb-15 tp_fade_anim">
        Share anything.
        <br />
        <span className="ais-hero-title-blue">From any device.</span>
      </h2>

      <p className="sharing-description">
        Seamlessly share your screen, files, videos or presentations
        from your laptop, tablet, or phone to your DeltaView display —
        anytime, anywhere.
      </p>

      <SharingFeatures />

      {/* <SharingActions /> */}

    </div>
  );
};

export default SharingContent;