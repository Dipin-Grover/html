import React from "react";
import { FiMapPin, FiPhone, FiArrowRight } from "react-icons/fi";

const PartnerList = ({
    partners,
    selectedState,
    selectedDistrict,
    onPartnerClick,
}) => {
    return (
        <div className="partner-list">

            {/* Header */}
            <div className="d-flex align-items-center justify-content-between mb-20">
                <h3 className="mb-0 find-partner-list-title">
                    {partners.length} Partners Found
                </h3>
            </div>

            {/* 3 CARDS PER ROW */}
            <div className="row g-4">

                {partners.slice(0, 4).map((partner) => (
                    <div
                        key={partner.id}
                        className="col-lg-4 col-md-6 col-12"
                    >
                        <div
                            className="bg-white rounded-4 h-100 find-partner-list-card"
                            onClick={() => onPartnerClick(partner)}
                        >

                            {/* Arrow */}
                            <div className="position-absolute d-flex align-items-center justify-content-center find-partner-list-arrow">
                                <FiArrowRight size={17} />
                            </div>

                            {/* Partner Name */}
                            <h5 className="mb-15 find-partner-list-name">
                                {partner.name}
                            </h5>

                            {/* Address */}
                            <div className="d-flex align-items-start mb-10 find-partner-list-info">
                                <FiMapPin className="me-2 flex-shrink-0 find-partner-list-icon find-partner-list-location-icon" />

                                <span>
                                    {partner.address}
                                </span>
                            </div>

                            {/* Phone */}
                            <div className="d-flex align-items-center find-partner-list-info">
                                <FiPhone className="me-2 flex-shrink-0 find-partner-list-icon" />

                                <span>
                                    {partner.phone}
                                </span>
                            </div>

                        </div>
                    </div>
                ))}

            </div>

            {/* No partners */}
            {partners.length === 0 && (
                <div className="text-center py-50">
                    <h5>No Partners Found</h5>

                    <p className="text-muted mb-0">
                        Try changing your search or filters.
                    </p>
                </div>
            )}

        </div>
    );
};

export default PartnerList;