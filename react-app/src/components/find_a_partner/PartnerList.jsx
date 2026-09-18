import React from "react";
import PartnerCard from "./PartnerCard";

const PartnerList = ({
  partners,
  selectedState,
  selectedDistrict,
  onPartnerClick,
}) => {
  return (
    <div className="mt-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-end mb-3 pb-2 border-bottom">

        <p className="mb-0 fw-bold text-dark fs-5">
          {partners.length > 0
            ? `${partners.length} Partners Found`
            : "No Partners Found"}
        </p>

        {selectedDistrict && (
          <span className="small text-muted fw-medium bg-light px-2 py-1 rounded-2">
            {selectedDistrict}, {selectedState}
          </span>
        )}

      </div>

      {/* Partners */}
      <div 
        className="pe-2" 
        style={{ maxHeight: "480px", overflowY: "auto", overflowX: "hidden" }}
      >
        {partners.map((partner) => (
          <PartnerCard
            key={partner.id}
            partner={partner}
            onClick={() => onPartnerClick(partner)}
          />
        ))}
      </div>

    </div>
  );
};

export default PartnerList;