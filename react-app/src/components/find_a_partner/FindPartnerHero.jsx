import React from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

const FindPartnerHero = () => {
    return (
        <section className="pt-80 pb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h1 className="mb-15">
                            DeltaView Authorized Partners
                        </h1>

                        <p className="mb-10">
                            DeltaView Stores, DeltaView Authorized Service Providers and
                            Online Support
                        </p>

                        <Link
                            to="/"
                            className="text-primary d-inline-flex align-items-center gap-1"
                        >
                            <FiChevronLeft />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FindPartnerHero;