import React from "react";
import PartnerCard from "./PartnerCard";

const PartnerList = ({
  partners,
  selectedState,
  selectedDistrict,
  onPartnerClick,
}) => {
  return (
    <div className="mt-25">

      <div className="d-flex justify-content-between align-items-center mb-15">

        <p className="mb-0 fw-medium">
          {partners.length > 0
            ? `${partners.length} Partners Found`
            : "No Partners Found"}
        </p>

        {selectedDistrict && (
          <span className="small text-muted">
            {selectedDistrict}, {selectedState}
          </span>
        )}

      </div>

      {partners.map((partner) => (
        <PartnerCard
          key={partner.id}
          partner={partner}
          onClick={() => onPartnerClick(partner)}
        />
      ))}

    </div>
  );
};

export default PartnerList;