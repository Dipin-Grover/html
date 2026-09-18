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
        <div className="bg-white border-0 shadow-sm rounded-4 p-4">

            {/* State */}
            <div className="mb-3">
                <label className="form-label fw-semibold text-dark">
                    Select State
                </label>

                <select
                    className="form-select bg-light border-0 py-2 shadow-none"
                    value={selectedState}
                    onChange={(e) => onStateChange(e.target.value)}
                >
                    <option value="">Select State</option>

                    {states.map((state) => (
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
            </div>

            {/* District */}
            <div className="mb-3">
                <label className="form-label fw-semibold text-dark">
                    Select District
                </label>

                <select
                    className="form-select bg-light border-0 py-2 shadow-none"
                    value={selectedDistrict}
                    onChange={(e) => onDistrictChange(e.target.value)}
                    disabled={!selectedState}
                >
                    <option value="">Select District</option>

                    {districts.map((district) => (
                        <option key={district} value={district}>
                            {district}
                        </option>
                    ))}
                </select>
            </div>

            {/* Search */}
            <div>
                <label className="form-label fw-semibold text-dark">
                    Search Store
                </label>
                <div className="position-relative">
                    <FiSearch
                        className="position-absolute text-muted"
                        style={{
                            left: "15px",
                            top: "50%",
                            transform: "translateY(-50%)",
                        }}
                    />

                    <input
                        type="text"
                        className="form-control bg-light border-0 shadow-none py-2 ps-5"
                        placeholder="Search By Location"
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>

                {/* Search Area Button */}
                <button
                    type="button"
                    className="btn btn-primary w-100 mt-4 py-2 fw-medium shadow-sm transition-all"
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