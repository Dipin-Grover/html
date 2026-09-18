import React, { useMemo, useState } from "react";

import FindPartnerHero from "../components/find_a_partner/FindPartnerHero";
import PartnerFilters from "../components/find_a_partner/PartnerFilters";
import PartnerList from "../components/find_a_partner/PartnerList";
import PartnerMap from "../components/find_a_partner/PartnerMap";

import { partners } from "../data/partners";

const FindAPartner = () => {
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [search, setSearch] = useState("");
    const [selectedPartner, setSelectedPartner] = useState(null);

    // Search in this Area trigger
    const [searchAreaTrigger, setSearchAreaTrigger] = useState(0);

    const states = useMemo(() => {
        return [...new Set(partners.map((partner) => partner.state))];
    }, []);

    const districts = useMemo(() => {
        if (!selectedState) {
            return [];
        }

        return [
            ...new Set(
                partners
                    .filter(
                        (partner) => partner.state === selectedState
                    )
                    .map((partner) => partner.district)
            ),
        ];
    }, [selectedState]);

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
                partner.name.toLowerCase().includes(searchText) ||
                partner.address.toLowerCase().includes(searchText);

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

    const handleStateChange = (state) => {
        setSelectedState(state);

        setSelectedDistrict("");

        setSearch("");

        setSelectedPartner(null);
    };

    const handleDistrictChange = (district) => {
        setSelectedDistrict(district);

        setSelectedPartner(null);
    };

    const handlePartnerClick = (partner) => {
        setSelectedPartner(partner);
    };

    // Search in this Area button click
    const handleSearchArea = () => {
        setSearchAreaTrigger((prev) => prev + 1);
    };

    return (
        <>
            <FindPartnerHero />

            <section className="pb-100">
                <div className="container">

                    <div className="row g-4">

                        {/* LEFT */}
                        <div className="col-lg-4">

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

                            <PartnerList
                                partners={filteredPartners}
                                selectedState={selectedState}
                                selectedDistrict={selectedDistrict}
                                onPartnerClick={handlePartnerClick}
                            />

                        </div>

                        {/* RIGHT */}
                        <div className="col-lg-8">

                            <PartnerMap
                                partners={filteredPartners}
                                selectedState={selectedState}
                                selectedDistrict={selectedDistrict}
                                selectedPartner={selectedPartner}
                                search={search}
                                searchAreaTrigger={searchAreaTrigger}
                                onPartnerClick={handlePartnerClick}
                            />

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default FindAPartner;