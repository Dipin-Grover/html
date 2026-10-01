import React from "react";
import {
    BookOpen,
    FolderOpen,
    Smartphone,
} from "lucide-react";

const EbookLibrary = () => {
    return (
        <section className="ebook-library-section">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-7">
                        <div className="ebook-library-image">
                            <img
                                src="assets/img/deltaviewLearn/e_book_library.png"
                                alt="DeltaView eBook Library"
                            />
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="ebook-library-content">

                            <span className="ebook-library-tag">
                                <BookOpen size={16} />
                                Knowledge for a Better Tomorrow
                            </span>

                            <h2>
                                Library of eBooks for{" "}
                                <span>Comprehensive Growth</span>
                            </h2>

                            <p>
                                Access a rich collection of eBooks across subjects,
                                designed to nurture curiosity and build strong
                                foundations. Learn anytime, anywhere with an
                                organized and easy-to-use digital library.
                            </p>

                            <div className="ebook-library-features">

                                <div className="ebook-library-feature">
                                    <div className="ebook-feature-icon">
                                        <BookOpen size={22} />
                                    </div>

                                    <div>
                                        <h6>Wide Collection</h6>
                                        <p>Books for all subjects</p>
                                    </div>
                                </div>

                                <div className="ebook-library-feature">
                                    <div className="ebook-feature-icon">
                                        <FolderOpen size={22} />
                                    </div>

                                    <div>
                                        <h6>Organized Content</h6>
                                        <p>Easy chapter navigation</p>
                                    </div>
                                </div>

                                <div className="ebook-library-feature">
                                    <div className="ebook-feature-icon">
                                        <Smartphone size={22} />
                                    </div>

                                    <div>
                                        <h6>Learn Anytime</h6>
                                        <p>On any device</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EbookLibrary;