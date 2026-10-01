import React from "react";
import {
    FiPlay,
    FiCode,
    FiBookOpen,
    FiFileText,
    FiCheckCircle,
} from "react-icons/fi";

const EducationalPenDrive = () => {

    const features = [
        {
            
            image: "assets/img/deltaviewLearn/metal_body.png",
            title: "Durable and safe metal body pen drive",
            className: "feature-pendrive",
        },
        {
            
            image: "assets/img/deltaviewLearn/curriculum_aligned.png",
            title: "Curriculum-aligned animated videos with 1 year validity",
            className: "feature-lessons",
        },
        {
            
            image: "assets/img/deltaviewLearn/all_subjects.png",
            title: "Cover all subjects for classes 1st to 12th, following the NCERT",
            className: "feature-subjects",
        },
        {
        
            image: "assets/img/deltaviewLearn/built_in_mcq.png",
            title: "Built-in: MCQs, fill-in-the-blanks, True/False, and matching",
            className: "feature-practice",
        },
        
    ];

    return (
        <section className="educational-pendrive-section">

            {/* =================================================
                LEFT PEN DRIVE SHOWCASE
            ================================================= */}

            <div className="educational-pendrive-visual">

                {/* Glow behind product */}
                <div className="pendrive-main-glow"></div>


                {/* Orbit Lines */}
                <div className="pendrive-orbit orbit-one"></div>
                <div className="pendrive-orbit orbit-two"></div>


                {/* Floating Icons */}

                <div className="pendrive-floating-icon icon-play">
                    <FiPlay />
                </div>

                <div className="pendrive-floating-icon icon-code">
                    <FiCode />
                </div>

                <div className="pendrive-floating-icon icon-book">
                    <FiBookOpen />
                </div>

                <div className="pendrive-floating-icon icon-file">
                    <FiFileText />
                </div>

                <div className="pendrive-floating-icon icon-check">
                    <FiCheckCircle />
                </div>


                {/* Main Pen Drive */}

                <div className="main-pendrive">

                    <img
                        src="assets\img\deltaviewLearn\whats_inside_pen_drive.png"
                        alt="DeltaView Learn Pen Drive"
                    />

                </div>


                {/* Bottom Platform */}

                <div className="pendrive-platform">
                    <div className="platform-inner"></div>
                </div>

            </div>


            {/* =================================================
                RIGHT CONTENT
            ================================================= */}

            <div className="educational-pendrive-content">

                {/* Heading */}

                <div className="educational-pendrive-heading">

                    <h2>
                        What's Inside an{" "}
                        <span>Educational Pen Drive</span>
                    </h2>

                    <p>
                        Same concepts. A completely different learning experience.
                    </p>

                </div>


                {/* Feature Cards */}

                <div className="educational-feature-grid">

                    {features.map((feature) => (

                        <div
                            className={`educational-feature-card ${feature.className}`}
                            key={feature.number}
                        >

                            {/* Number */}

                            <div className="feature-number">
                                {feature.number}
                            </div>


                            {/* Feature Image */}

                            <div className="feature-image">

                                <img
                                    src={feature.image}
                                    alt=""
                                />

                            </div>


                            {/* Feature Text */}

                            <div className="feature-info">

                                <h3>
                                    {feature.title}
                                </h3>

                            </div>


                            {/* Accent */}

                            <div className="feature-accent"></div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default EducationalPenDrive;