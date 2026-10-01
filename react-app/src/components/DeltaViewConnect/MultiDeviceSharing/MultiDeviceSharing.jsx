
import SharingContent from "./SharingContent";
import SharingVideo from "./SharingVideo";

const MultiDeviceSharing = () => {
  return (
    <section className="multi-device-section py-5">
      <div className="container-fluid px-4 px-lg-5">
        <div className="row align-items-center g-4 g-lg-5">

          {/* Left Content */}
          <div className="col-12 col-lg-5">
            <SharingContent />
          </div>

          {/* Right Video */}
          <div className="col-12 col-lg-7">
            <SharingVideo />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MultiDeviceSharing;

