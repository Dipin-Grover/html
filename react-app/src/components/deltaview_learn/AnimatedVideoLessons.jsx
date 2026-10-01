import React from "react";
import { FiPlay, FiBookOpen, FiUsers, FiFileText } from "react-icons/fi";

const AnimatedVideoLessons = () => {
    return (
        <section className="animated-video-section">
            <div className="container">
                <div className="row align-items-center">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-5">
                        <div className="animated-video-content">

                            <span className="animated-video-label">
                                CONCEPTS IN MOTION
                            </span>

                            <h2>
                                Animated video lessons
                                <br />
                                <span>for concept building</span>
                            </h2>

                            <p>
                                Engaging animated videos for enjoyable learning
                                experiences, connecting concepts to real-life
                                situations for deeper understanding and practical
                                application of skills.
                            </p>

                            <div className="animated-video-features">

                                <div className="animated-video-feature">
                                    <div className="animated-feature-icon">
                                        <FiPlay />
                                    </div>

                                    <span>Bite-sized Videos</span>
                                </div>

                                <div className="animated-video-feature">
                                    <div className="animated-feature-icon">
                                        <FiFileText />
                                    </div>

                                    <span>Step-by-Step Learning</span>
                                </div>

                                <div className="animated-video-feature">
                                    <div className="animated-feature-icon">
                                        <FiUsers />
                                    </div>

                                    <span>Build Practical Skills</span>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="col-lg-7">
                        <div className="animated-video-visual">

                            {/* Background Glow */}
                            <div className="animated-video-glow"></div>

                            {/* Decorative Dots */}
                            <div className="animated-video-dots"></div>

                            {/* Browser Window */}
                            <div className="animated-video-browser">

                                <div className="animated-browser-top">
                                    <span></span>
                                    <span></span>
                                    <span></span>

                                    <div className="animated-browser-line"></div>
                                </div>

                                <div className="animated-browser-content">

                                    {/* Video */}
                                    <div className="animated-video-player">

                                        <img
                                            src="/images/animated-video.png"
                                            alt="Animated learning video"
                                        />

                                        <div className="animated-video-overlay">
                                            <div className="animated-play-button">
                                                <FiPlay />
                                            </div>
                                        </div>

                                        <div className="animated-video-controls">
                                            <div className="animated-progress">
                                                <span></span>
                                            </div>

                                            <div className="animated-control-time">
                                                04:12 / 08:40
                                            </div>
                                        </div>

                                    </div>

                                    {/* Playlist */}
                                    <div className="animated-video-playlist">

                                        <div className="animated-playlist-item active">
                                            <div className="playlist-play">
                                                <FiPlay />
                                            </div>

                                            <div>
                                                <strong>Introduction</strong>
                                                <small>04:12</small>
                                            </div>
                                        </div>

                                        <div className="animated-playlist-item">
                                            <div className="playlist-play">
                                                <FiPlay />
                                            </div>

                                            <div>
                                                <strong>Concepts</strong>
                                                <small>06:25</small>
                                            </div>
                                        </div>

                                        <div className="animated-playlist-item">
                                            <div className="playlist-play">
                                                <FiPlay />
                                            </div>

                                            <div>
                                                <strong>Examples</strong>
                                                <small>08:40</small>
                                            </div>
                                        </div>

                                        <div className="animated-playlist-item">
                                            <div className="playlist-play">
                                                <FiPlay />
                                            </div>

                                            <div>
                                                <strong>Practice</strong>
                                                <small>05:30</small>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* Learning Card */}
                            <div className="animated-learning-card">
                                <FiBookOpen />

                                <div>
                                    <strong>Learning</strong>
                                    <span>Becomes Fun</span>
                                </div>
                            </div>

                            {/* Books */}
                            <div className="animated-video-books">

                                <div className="animated-book book-one">
                                    Learn
                                </div>

                                <div className="animated-book book-two">
                                    Practice
                                </div>

                                <div className="animated-book book-three">
                                    Grow
                                </div>

                            </div>

                            {/* Graduation Cap */}
                            <div className="animated-cap">
                                🎓
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AnimatedVideoLessons;