import React from "react";
import { Link } from "react-router-dom";

const HeadlineCard = ({ image, title, location, link = "#!" }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="tp-team-it-item mb-30 headline-card-wrapper" data-speed=".9" data-lag="0">
        <Link
          className="tp-team-it-thumb d-block"
          to={link}
          style={{ position: 'relative' }}
        >
          <img
            src={`/assets/img/event/${image}`}
            alt={title}
            className="headline-card-image"
          />
          <div className="headline-hover-overlay"></div>
        </Link>

        <div className="tp-team-it-content p-relative">
          <h3 className="fw-600 fs-22 ls-m-4 tp-ff-inter tp-text-common-black-1">
            <Link to={link} className="underline-black">{title}</Link>
          </h3>

          <span className="tp-text-common-black-4 ls-m-2 tp-ff-inter">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default HeadlineCard;