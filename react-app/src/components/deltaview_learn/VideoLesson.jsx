import React from "react";
import {
    GraduationCap,
    Play,
    BookOpen,
    ChartNoAxesColumnIncreasing,
} from "lucide-react";

const VideoLesson = () => {
    return (
        <section className="video-lesson-section">
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Content */}
                    <div className="col-lg-5">
                        <div className="video-lesson-content">

                            <span className="video-lesson-tag">
                                <GraduationCap size={15} />
                                Learning, Simplified
                            </span>

                            <h2>
                                Animated video lessons{" "}
                                <span>for concept building</span>
                            </h2>

                            <p>
                                Engaging animated videos that make complex concepts
                                easier to understand, helping learners connect ideas
                                with real-life situations and apply their knowledge
                                with confidence.
                            </p>

                            <div className="video-lesson-features">

                                {/* Feature 1 */}
                                <div className="video-lesson-feature">
                                    <div className="video-lesson-icon">
                                        <Play size={18} />
                                    </div>

                                    <div>
                                        <h6>Engaging Animations</h6>
                                        <p>
                                            Learn through visual storytelling
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="video-lesson-feature">
                                    <div className="video-lesson-icon">
                                        <BookOpen size={18} />
                                    </div>

                                    <div>
                                        <h6>Concept-based Learning</h6>
                                        <p>
                                            Build strong fundamentals
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="video-lesson-feature">
                                    <div className="video-lesson-icon">
                                        <ChartNoAxesColumnIncreasing size={18} />
                                    </div>

                                    <div>
                                        <h6>Real-life Applications</h6>
                                        <p>
                                            Connect concepts with everyday life
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="col-lg-7">
                        <div className="video-lesson-image">
                            <img
                                src="assets/img/deltaviewLearn/learning.png"
                                alt="Animated video lessons"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VideoLesson;