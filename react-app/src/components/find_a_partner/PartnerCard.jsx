import React from "react";
import {
    FiMapPin,
    FiPhone,
    FiArrowRight,
} from "react-icons/fi";

const PartnerCard = ({ partner, onClick }) => {
    return (
        <div
            className="border-0 shadow-sm rounded-4 p-3 mb-3 bg-white transition-all find-partner-card"
            role="button"
            onClick={onClick}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.classList.replace("shadow-sm", "shadow");
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.classList.replace("shadow", "shadow-sm");
            }}
        >
            <div className="d-flex align-items-start justify-content-between gap-3">

                <div className="flex-grow-1">

                    <h6 className="mb-2 fw-bold text-dark">
                        {partner.name}
                    </h6>

                    <div className="d-flex align-items-start gap-2 mb-2 text-muted">
                        <div className="bg-light rounded-circle p-1 d-flex align-items-center justify-content-center mt-1 flex-shrink-0">
                            <FiMapPin className="text-primary" size={14} />
                        </div>

                        <span className="small lh-sm mt-1">
                            {partner.address}
                        </span>
                    </div>

                    <div className="d-flex align-items-center gap-2 text-muted">
                        <div className="bg-light rounded-circle p-1 d-flex align-items-center justify-content-center flex-shrink-0">
                            <FiPhone className="text-primary" size={14} />
                        </div>

                        <span className="small">
                            {partner.phone}
                        </span>
                    </div>

                </div>

                <div className="bg-light rounded-circle p-2 d-flex align-items-center justify-content-center mt-2 flex-shrink-0 transition-all">
                    <FiArrowRight className="text-primary" />
                </div>

            </div>
        </div>
    );
};

export default PartnerCard;