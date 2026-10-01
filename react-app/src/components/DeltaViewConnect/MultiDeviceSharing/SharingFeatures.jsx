import { Zap, Monitor, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Transfer",
    description: "Share files in seconds",
  },
  {
    icon: Monitor,
    title: "Works on All Devices",
    description: "Laptop, tablet, phone",
  },
  {
    icon: ShieldCheck,
    title: "Secure Screen Sharing",
    description: "Your data stays safe",
  },
];

const SharingFeatures = () => {
  return (
    <div className="row g-2 align-items-stretch sharing-features">
      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <div className="col-12 col-md-4 d-flex" key={index}>
            <div className="sharing-feature-card w-100 h-100">
              <div className="sharing-feature-icon">
                <Icon size={22} strokeWidth={2} />
              </div>

              <div>
                <h6 className="sharing-feature-title">
                  {feature.title}
                </h6>

                <p className="sharing-feature-description">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SharingFeatures;