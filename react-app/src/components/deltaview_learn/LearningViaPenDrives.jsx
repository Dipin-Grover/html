import React from "react";
import { FiWifiOff, FiHardDrive, FiBookOpen } from "react-icons/fi";

const LearningViaPenDrives = () => {
    return (
        <section className="learning-pen-drive-section">

            {/* Background Decorations */}
            <div className="learning-pen-circle learning-pen-circle-top"></div>
            <div className="learning-pen-circle learning-pen-circle-bottom"></div>

            <div className="learning-pen-dots learning-pen-dots-left">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="learning-pen-dots learning-pen-dots-right">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="container">

                {/* Heading */}
                <div className="text-center learning-pen-heading">

                    <div className="learning-pen-badge">
                        <FiHardDrive />
                        <span>Offline Learning Solution</span>
                    </div>

                    <h2>
                        Learning via Pen Drives
                    </h2>

                    <p>
                        Purchase a pen drive loaded with offline educational
                        resources for effective home learning.
                    </p>

                </div>

                {/* Main Visual */}
                <div className="learning-pen-main-image">
                    <img
                        src="/assets/img/deltaviewLearn/learning_via_pen_drives.jpg"
                        alt="Learning via Pen Drives"
                    />
                </div>

                {/* Features */}
                <div className="row g-4 learning-pen-features">

                    {/* Offline Learning */}
                    <div className="col-lg-4 col-md-6">

                        <div className="learning-pen-card">

                            <div className="learning-pen-card-icon blue">
                                <FiWifiOff />
                            </div>

                            <div>
                                <h4>Offline Learning</h4>

                                <p>
                                    Complete learning resources
                                    <br />
                                    without internet.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Easy To Use */}
                    <div className="col-lg-4 col-md-6">

                        <div className="learning-pen-card">

                            <div className="learning-pen-card-icon green">
                                <FiHardDrive />
                            </div>

                            <div>
                                <h4>Easy to Use</h4>

                                <p>
                                    Just plug and start learning
                                    <br />
                                    instantly.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Classes */}
                    <div className="col-lg-4 col-md-6">

                        <div className="learning-pen-card">

                            <div className="learning-pen-card-icon purple">
                                <FiBookOpen />
                            </div>

                            <div>
                                <h4>Classes 1 – 12</h4>

                                <p>
                                    Curriculum aligned for all
                                    <br />
                                    grades.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default LearningViaPenDrives;