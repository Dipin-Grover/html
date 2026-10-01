import React from "react";
import { FiSearch } from "react-icons/fi";

const PartnerFilters = ({
    states,
    districts,
    selectedState,
    selectedDistrict,
    search,
    onStateChange,
    onDistrictChange,
    onSearchChange,
    onSearchArea,
}) => {
    return (
        <div className="bg-white rounded-4 partner-filter-box">

            <div className="row gx-4">

                {/* STATE */}
                <div className="col-lg-4">
                    <label className="form-label mb-2">
                        Select State
                    </label>

                    <select
                        className="form-select"
                        value={selectedState}
                        onChange={(e) =>
                            onStateChange(e.target.value)
                        }
                    >
                        <option value="">
                            Select State
                        </option>

                        {states.map((state) => (
                            <option key={state} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>
                </div>

                {/* DISTRICT */}
                <div className="col-lg-4">
                    <label className="form-label mb-2">
                        Select District
                    </label>

                    <select
                        className="form-select"
                        value={selectedDistrict}
                        onChange={(e) =>
                            onDistrictChange(e.target.value)
                        }
                        disabled={!selectedState}
                    >
                        <option value="">
                            Select District
                        </option>

                        {districts.map((district) => (
                            <option key={district} value={district}>
                                {district}
                            </option>
                        ))}
                    </select>
                </div>

                {/* SEARCH */}
                <div className="col-lg-4">
                    <label className="form-label mb-2">
                        Search Store
                    </label>

                    <div className="position-relative">

                        <FiSearch className="partner-search-icon" />

                        <input
                            type="text"
                            className="form-control ps-5"
                            placeholder="Search By Location"
                            value={search}
                            onChange={(e) =>
                                onSearchChange(e.target.value)
                            }
                        />

                    </div>
                </div>

            </div>

            {/* SEARCH BUTTON */}
            <div className="text-center mt-4">
                <button
                    type="button"
                    className="btn btn-primary partner-search-btn"
                    onClick={onSearchArea}
                >
                    <FiSearch className="me-2" />
                    Search in this Area
                </button>
            </div>

        </div>
    );
};

export default PartnerFilters;