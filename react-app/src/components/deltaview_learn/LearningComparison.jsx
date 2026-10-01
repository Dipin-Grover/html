import React from "react";
import { FiX, FiCheck } from "react-icons/fi";

const LearningComparison = () => {
    const traditionalPoints = [
        "Requires internet",
        "Text-heavy content",
        "Hard to stay engaged",
        "Limited concept clarity",
        "Less practical exposure",
    ];

    const deltaViewPoints = [
        "Simply plug and play on any Windows device",
        "Works offline: No internet needed for seamless use.",
        "Achieve complete concept clarity with animations",
        "Experience enjoyable learning with a deep understanding",
        "Real-life videos that spark curiosity and inspire learning.",
    ];

    return (
        <section className="learning-comparison-section">

            <div className="container">

                {/* Section Heading */}
                <div className="learning-comparison-heading text-center">
                    <h2>
                        See the Difference. Choose Better Learning.
                    </h2>

                    <p>
                        Same concepts. A completely different learning experience.
                    </p>
                </div>


                {/* Comparison Cards */}
                <div className="row g-4">

                    {/* =================================
                        TRADITIONAL LEARNING
                    ================================= */}

                    <div className="col-lg-6">

                        <div className="comparison-card traditional-card">

                            {/* Card Heading */}
                            <div className="comparison-card-heading">

                                <h3>
                                    Traditional Learning
                                </h3>

                                <p>
                                    Same old way, with limitations.
                                </p>

                            </div>


                            {/* Image + Points */}
                            <div className="comparison-content">

                                {/* Image */}
                                <div className="comparison-visual traditional-visual">

                                    <img
                                        src="assets/img/deltaviewLearn/traditional_learning.png"
                                        alt="Traditional Learning"
                                    />

                                </div>


                                {/* Points */}
                                <div className="comparison-points">

                                    {traditionalPoints.map((point, index) => (

                                        <div
                                            className="comparison-point"
                                            key={index}
                                        >

                                            <span className="comparison-point-icon cross-icon">
                                                <FiX />
                                            </span>

                                            <span className="comparison-point-text">
                                                {point}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =================================
                        DELTAVIEW LEARNING
                    ================================= */}

                    <div className="col-lg-6">

                        <div className="comparison-card deltaview-card">

                            {/* Card Heading */}
                            <div className="comparison-card-heading">

                                <h3>
                                    With DeltaView Learn Pen Drives
                                </h3>

                                <p>
                                    A complete learning experience, in your hands.
                                </p>

                            </div>


                            {/* Image + Points */}
                            <div className="comparison-content">

                                {/* Pen Drive */}
                                <div className="comparison-visual deltaview-visual">

                                    <img
                                        src="assets/img/deltaviewLearn/pen_drive.png"
                                        alt="DeltaView Learn Pen Drive"
                                    />

                                </div>


                                {/* Points */}
                                <div className="comparison-points">

                                    {deltaViewPoints.map((point, index) => (

                                        <div
                                            className="comparison-point"
                                            key={index}
                                        >

                                            <span className="comparison-point-icon check-icon">
                                                <FiCheck />
                                            </span>

                                            <span className="comparison-point-text">
                                                {point}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default LearningComparison;