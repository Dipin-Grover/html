import React from "react";
import { FiCheck } from "react-icons/fi";

const LanguageSection = () => {
    return (
        <section className="language-section">

            {/* Left Illustration */}
            <div className="language-illustration language-left">
                <div className="language-glow"></div>

                <div className="speech-bubble speech-blue">
                    Hello
                </div>

                <div className="language-book">
                    <div className="book-cover">A</div>

                    <div className="book-pages">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="language-dots"></div>
            </div>

            {/* Content */}
            <div className="language-content">
                <h2>
                    Available in both{" "}
                    <span className="english-text">English</span>{" "}
                    and{" "}
                    <span className="hindi-text">Hindi</span>
                </h2>

                <div className="language-options">

                    <div className="language-option english-option">
                        <div className="language-icon">
                            A
                        </div>

                        <span>
                            English is my preferred language
                        </span>

                        <div className="language-check">
                            <FiCheck />
                        </div>
                    </div>

                    <div className="language-option hindi-option">
                        <div className="language-icon">
                            अ
                        </div>

                        <span>
                            हिंदी मेरी पसंदीदा भाषा है
                        </span>

                        <div className="language-check">
                            <FiCheck />
                        </div>
                    </div>

                </div>
            </div>

            {/* Right Illustration */}
            <div className="language-illustration language-right">
                <div className="language-glow"></div>

                <div className="speech-bubble speech-orange">
                    नमस्ते
                </div>

                <div className="language-book">
                    <div className="book-cover">अ</div>

                    <div className="book-pages">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="language-dots"></div>
            </div>

        </section>
    );
};

export default LanguageSection;