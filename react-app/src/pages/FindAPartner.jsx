import React, { useMemo, useState } from "react";

import FindPartnerHero from "../components/find_a_partner/FindPartnerHero";
import PartnerFilters from "../components/find_a_partner/PartnerFilters";
import PartnerList from "../components/find_a_partner/PartnerList";
import PartnerMap from "../components/find_a_partner/PartnerMap";
import FindPartnerFAQ from "../components/find_a_partner/FindPartnerFAQ";

import { partners } from "../data/partners";

const FindAPartner = () => {
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [search, setSearch] = useState("");
    const [selectedPartner, setSelectedPartner] = useState(null);

    const [searchAreaTrigger, setSearchAreaTrigger] = useState(0);

    // STATES
    const states = useMemo(() => {
        return [
            ...new Set(
                partners.map((partner) => partner.state)
            ),
        ];
    }, []);

    // DISTRICTS
    const districts = useMemo(() => {
        if (!selectedState) {
            return [];
        }

        return [
            ...new Set(
                partners
                    .filter(
                        (partner) =>
                            partner.state === selectedState
                    )
                    .map((partner) => partner.district)
            ),
        ];
    }, [selectedState]);

    // FILTER PARTNERS
    const filteredPartners = useMemo(() => {
        return partners.filter((partner) => {
            const stateMatch =
                !selectedState ||
                partner.state === selectedState;

            const districtMatch =
                !selectedDistrict ||
                partner.district === selectedDistrict;

            const searchText = search.toLowerCase();

            const searchMatch =
                !search ||
                partner.name
                    .toLowerCase()
                    .includes(searchText) ||
                partner.address
                    .toLowerCase()
                    .includes(searchText);

            return (
                stateMatch &&
                districtMatch &&
                searchMatch
            );
        });
    }, [
        selectedState,
        selectedDistrict,
        search,
    ]);

    // STATE CHANGE
    const handleStateChange = (state) => {
        setSelectedState(state);
        setSelectedDistrict("");
        setSearch("");
        setSelectedPartner(null);
    };

    // DISTRICT CHANGE
    const handleDistrictChange = (district) => {
        setSelectedDistrict(district);
        setSelectedPartner(null);
    };

    // PARTNER CLICK
    const handlePartnerClick = (partner) => {
        setSelectedPartner(partner);
    };

    // SEARCH IN THIS AREA
    const handleSearchArea = () => {
        setSearchAreaTrigger(
            (prev) => prev + 1
        );
    };

    return (
        <>
            {/* HERO */}
            <FindPartnerHero />

            {/* FILTERS */}
            <section className="position-relative find-partner-filter-overlap">
                <div className="container">

                    <PartnerFilters
                        states={states}
                        districts={districts}
                        selectedState={selectedState}
                        selectedDistrict={selectedDistrict}
                        search={search}
                        onStateChange={handleStateChange}
                        onDistrictChange={handleDistrictChange}
                        onSearchChange={setSearch}
                        onSearchArea={handleSearchArea}
                    />

                </div>
            </section>

            {/* PARTNERS */}
            <section className="pt-50 pb-50">
                <div className="container">

                    <PartnerList
                        partners={filteredPartners}
                        selectedState={selectedState}
                        selectedDistrict={selectedDistrict}
                        onPartnerClick={handlePartnerClick}
                    />

                </div>
            </section>

            {/* MAP */}
            <section>
                <PartnerMap
                    partners={filteredPartners}
                    selectedState={selectedState}
                    selectedDistrict={selectedDistrict}
                    selectedPartner={selectedPartner}
                    search={search}
                    searchAreaTrigger={searchAreaTrigger}
                    onPartnerClick={handlePartnerClick}
                />
            </section>

            {/* FAQ */}
            <section>
                <FindPartnerFAQ />
            </section>
        </>
    );
};

export default FindAPartner;