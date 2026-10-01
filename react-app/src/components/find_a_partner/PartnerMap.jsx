import React, { useEffect, useRef } from "react";
import {
    MapContainer,
    TileLayer,
    useMap,
} from "react-leaflet";
import L from "leaflet";

import PartnerMarker from "./PartnerMarker";

import "leaflet/dist/leaflet.css";


/* =========================================================
   INDIA DEFAULT VIEW
========================================================= */

const INDIA_CENTER = [22.9734, 78.6569];
const INDIA_ZOOM = 5;


/* =========================================================
   STATE LOCATIONS
========================================================= */

const STATE_LOCATIONS = {

    Punjab: {
        center: [31.1471, 75.3412],
        zoom: 8,
    },

    Haryana: {
        center: [29.0588, 76.0856],
        zoom: 8,
    },

    Karnataka: {
        center: [15.3173, 75.7139],
        zoom: 7,
    },

    Maharashtra: {
        center: [19.7515, 75.7139],
        zoom: 7,
    },

    Gujarat: {
        center: [22.2587, 71.1924],
        zoom: 7,
    },

    Rajasthan: {
        center: [27.0238, 74.2179],
        zoom: 7,
    },

    "Uttar Pradesh": {
        center: [26.8467, 80.9462],
        zoom: 7,
    },

    Delhi: {
        center: [28.6139, 77.2090],
        zoom: 11,
    },

};


/* =========================================================
   DISTRICT FALLBACK LOCATIONS
========================================================= */

const DISTRICT_LOCATIONS = {

    Gurugram: {
        center: [28.4595, 77.0266],
        zoom: 13,
    },

    Mysuru: {
        center: [12.2958, 76.6394],
        zoom: 13,
    },

    Chandigarh: {
        center: [30.7333, 76.7794],
        zoom: 12,
    },

    "New Delhi": {
        center: [28.6139, 77.2090],
        zoom: 13,
    },

    Mumbai: {
        center: [19.0760, 72.8777],
        zoom: 12,
    },

    Pune: {
        center: [18.5204, 73.8567],
        zoom: 12,
    },

    Bengaluru: {
        center: [12.9716, 77.5946],
        zoom: 12,
    },

    Jaipur: {
        center: [26.9124, 75.7873],
        zoom: 12,
    },

    Ahmedabad: {
        center: [23.0225, 72.5714],
        zoom: 12,
    },

    Lucknow: {
        center: [26.8467, 80.9462],
        zoom: 12,
    },

    Noida: {
        center: [28.5706, 77.3219],
        zoom: 13,
    },

    Faridabad: {
        center: [28.4089, 77.3178],
        zoom: 13,
    },

    Panipat: {
        center: [29.3909, 76.9635],
        zoom: 12,
    },

    Hisar: {
        center: [29.1492, 75.7217],
        zoom: 12,
    },

    Ludhiana: {
        center: [30.9010, 75.8573],
        zoom: 12,
    },

    Amritsar: {
        center: [31.6340, 74.8723],
        zoom: 12,
    },

    Jalandhar: {
        center: [31.3260, 75.5762],
        zoom: 12,
    },

    Nagpur: {
        center: [21.1458, 79.0882],
        zoom: 12,
    },

    Nashik: {
        center: [20.0059, 73.7797],
        zoom: 12,
    },

    Surat: {
        center: [21.1702, 72.8311],
        zoom: 12,
    },

    Vadodara: {
        center: [22.3072, 73.1812],
        zoom: 12,
    },

    Jodhpur: {
        center: [26.2389, 73.0243],
        zoom: 12,
    },

    Udaipur: {
        center: [24.5854, 73.7125],
        zoom: 12,
    },

    Kanpur: {
        center: [26.4499, 80.3319],
        zoom: 12,
    },

    Agra: {
        center: [27.1767, 78.0081],
        zoom: 12,
    },

    Mangaluru: {
        center: [12.9141, 74.8560],
        zoom: 12,
    },

    "South Delhi": {
        center: [28.5245, 77.2066],
        zoom: 13,
    },

    "East Delhi": {
        center: [28.6415, 77.2958],
        zoom: 13,
    },

};


/* =========================================================
   VALID PARTNERS
========================================================= */

const getValidPartners = (partners = []) => {

    return partners.filter(
        (partner) =>
            Number.isFinite(Number(partner.lat)) &&
            Number.isFinite(Number(partner.lng))
    );

};


/* =========================================================
   GET CENTER OF PARTNERS
========================================================= */

const getPartnersCenter = (partners) => {

    const validPartners =
        getValidPartners(partners);

    if (validPartners.length === 0) {
        return null;
    }

    const totalLat =
        validPartners.reduce(
            (sum, partner) =>
                sum + Number(partner.lat),
            0
        );

    const totalLng =
        validPartners.reduce(
            (sum, partner) =>
                sum + Number(partner.lng),
            0
        );

    return [
        totalLat / validPartners.length,
        totalLng / validPartners.length,
    ];

};


/* =========================================================
   SMOOTHLY SHOW ALL PARTNERS
========================================================= */

const showAllPartners = (
    map,
    partners,
    maxZoom = 14
) => {

    const validPartners =
        getValidPartners(partners);

    if (validPartners.length === 0) {
        return false;
    }


    /* ONE PARTNER */

    if (validPartners.length === 1) {

        map.flyTo(
            [
                Number(validPartners[0].lat),
                Number(validPartners[0].lng),
            ],
            maxZoom,
            {
                animate: true,
                duration: 3,
                easeLinearity: 0.12,
            }
        );

        return true;
    }


    /* MULTIPLE PARTNERS */

    const bounds = L.latLngBounds(
        validPartners.map((partner) => [
            Number(partner.lat),
            Number(partner.lng),
        ])
    );

    map.flyToBounds(
        bounds,
        {
            padding: [70, 70],
            maxZoom,
            animate: true,
            duration: 3,
            easeLinearity: 0.12,
        }
    );

    return true;
};


/* =========================================================
   SEARCH IN THIS AREA CONTROLLER
========================================================= */

const SearchAreaController = ({
    search,
    partners,
    searchAreaTrigger,
}) => {

    const map = useMap();

    const previousSearchAreaTrigger =
        useRef(0);

    useEffect(() => {

        if (
            searchAreaTrigger === 0 ||
            searchAreaTrigger ===
                previousSearchAreaTrigger.current
        ) {
            return;
        }

        previousSearchAreaTrigger.current =
            searchAreaTrigger;

        if (
            !search ||
            search.trim() === ""
        ) {
            return;
        }

        const searchPartners =
            getValidPartners(partners);

        if (searchPartners.length === 0) {
            return;
        }

        showAllPartners(
            map,
            searchPartners,
            14
        );

    }, [
        searchAreaTrigger,
        search,
        partners,
        map,
    ]);

    return null;
};


/* =========================================================
   MAP CONTROLLER
========================================================= */

const MapController = ({
    selectedState,
    selectedDistrict,
    selectedPartner,
    partners,
}) => {

    const map = useMap();

    useEffect(() => {

        /* PARTICULAR PARTNER SELECTED */

        if (selectedPartner) {

            const lat =
                Number(selectedPartner.lat);

            const lng =
                Number(selectedPartner.lng);

            if (
                Number.isFinite(lat) &&
                Number.isFinite(lng)
            ) {

                map.flyTo(
                    [lat, lng],
                    16,
                    {
                        animate: true,
                        duration: 2.5,
                        easeLinearity: 0.12,
                    }
                );
            }

            return;
        }


        /* DISTRICT SELECTED */

        if (selectedDistrict) {

            const districtPartners =
                partners.filter(
                    (partner) =>
                        partner.district ===
                        selectedDistrict
                );

            if (districtPartners.length > 0) {

                showAllPartners(
                    map,
                    districtPartners,
                    14
                );

                return;
            }

            const districtLocation =
                DISTRICT_LOCATIONS[
                    selectedDistrict
                ];

            if (districtLocation) {

                map.flyTo(
                    districtLocation.center,
                    districtLocation.zoom,
                    {
                        animate: true,
                        duration: 3,
                        easeLinearity: 0.12,
                    }
                );

                return;
            }
        }


        /* STATE SELECTED */

        if (selectedState) {

            const statePartners =
                partners.filter(
                    (partner) =>
                        partner.state ===
                        selectedState
                );

            if (statePartners.length > 0) {

                showAllPartners(
                    map,
                    statePartners,
                    9
                );

                return;
            }

            const stateLocation =
                STATE_LOCATIONS[selectedState];

            if (stateLocation) {

                map.flyTo(
                    stateLocation.center,
                    stateLocation.zoom,
                    {
                        animate: true,
                        duration: 2.5,
                        easeLinearity: 0.12,
                    }
                );

                return;
            }
        }


        /* NOTHING SELECTED */

        map.flyTo(
            INDIA_CENTER,
            INDIA_ZOOM,
            {
                animate: true,
                duration: 2,
                easeLinearity: 0.15,
            }
        );

    }, [
        selectedState,
        selectedDistrict,
        selectedPartner,
        partners,
        map,
    ]);

    return null;
};


/* =========================================================
   MAIN PARTNER MAP
========================================================= */

const PartnerMap = ({
    partners = [],
    selectedState,
    selectedDistrict,
    selectedPartner,
    search,
    onPartnerClick,
    searchAreaTrigger,
}) => {

    return (
        <div className="partner-map-wrapper">

            <div className="partner-map-container">

                <MapContainer
                    center={INDIA_CENTER}
                    zoom={INDIA_ZOOM}
                    scrollWheelZoom={true}
                    zoomControl={true}
                    className="w-100 h-100 rounded-4"
                >

                    {/* MAP TILES */}

                    <TileLayer
                        attribution="&copy; OpenStreetMap contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />


                    {/* SEARCH IN THIS AREA */}

                    <SearchAreaController
                        search={search}
                        partners={partners}
                        searchAreaTrigger={
                            searchAreaTrigger
                        }
                    />


                    {/* MAP CAMERA */}

                    <MapController
                        selectedState={selectedState}
                        selectedDistrict={selectedDistrict}
                        selectedPartner={selectedPartner}
                        partners={partners}
                    />


                    {/* PARTNER MARKERS */}

                    {partners.map((partner) => (

                        <PartnerMarker
                            key={partner.id}
                            partner={partner}
                            onClick={onPartnerClick}
                        />

                    ))}

                </MapContainer>

            </div>

        </div>
    );
};

export default PartnerMap;