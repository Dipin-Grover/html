import React from "react";

const BlazeBoxContents = () => {
  const boxItems = [
    {
      icon: "far fa-tv",
      title: "Display Unit",
    },
    {
      icon: "far fa-plug",
      title: "Power Cabel",
    },
    {
      icon: "far fa-tools",
      title: "Wall mount Kit",
    },
    {
      type: "remote",
      title: "Remote",
    },
    {
      icon: "far fa-pen",
      title: "Styler Pen",
    },
    {
      icon: "far fa-network-wired",
      title: "Wire connectivity kit",
    },
  ];

  return (
    <div className="bg-dark py-5 border-top">
      <div className="container text-center py-4">

        {/* Heading */}
        <h2 className="fw-bold mb-20 text-light fs-2">
          What is in the box ?
        </h2>

        {/* Box Items */}
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {boxItems.map((item, index) => (
            <div
              className="box-feature-card"
              key={index}
            >
              {item.type === "remote" ? (
                <svg
                  className="box-feature-icon"
                  style={{
                    width: "32px",
                    height: "32px",
                    fill: "currentColor",
                    stroke: "currentColor",
                  }}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="6"
                    y="2"
                    width="12"
                    height="20"
                    rx="3"
                    fill="none"
                    strokeWidth="2"
                  />

                  <circle
                    cx="12"
                    cy="6"
                    r="1.5"
                    stroke="none"
                  />

                  <circle
                    cx="9"
                    cy="11"
                    r="1"
                    stroke="none"
                  />

                  <circle
                    cx="15"
                    cy="11"
                    r="1"
                    stroke="none"
                  />

                  <circle
                    cx="9"
                    cy="14"
                    r="1"
                    stroke="none"
                  />

                  <circle
                    cx="15"
                    cy="14"
                    r="1"
                    stroke="none"
                  />

                  <circle
                    cx="9"
                    cy="17"
                    r="1"
                    stroke="none"
                  />

                  <circle
                    cx="15"
                    cy="17"
                    r="1"
                    stroke="none"
                  />
                </svg>
              ) : (
                <i className={`${item.icon} box-feature-icon`} />
              )}

              <span className="box-feature-text">
                {item.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlazeBoxContents;