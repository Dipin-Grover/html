import React from "react";
import { Marker, Popup } from "react-leaflet";
import PartnerPopup from "./PartnerPopup";

const PartnerMarker = ({ partner, onClick }) => {
  return (
    <Marker
      position={[partner.lat, partner.lng]}
      eventHandlers={{
        click: () => onClick(partner),
      }}
    >
      <Popup>
        <PartnerPopup partner={partner} />
      </Popup>
    </Marker>
  );
};

export default PartnerMarker;