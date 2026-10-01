import React, { useEffect, useState } from "react";
import {
    ArrowRight,
    CalendarDays,
    TrendingUp,
    Monitor,
    BarChart3,
    GraduationCap,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const TrendingTopics = () => {
    const topics = [
        {
            category: "Technology",
            date: "August 1, 2026",
            title: "Top 7 Reasons Why Every Meeting Room Needs Smart Boards",
            description:
                "In today's fast-paced world, smart boards are transforming the way we collaborate, learn, and innovate.",
            image: "/assets/img/deltaviewLearn/trending_topics_1.png",
            icon: Monitor,
            color: "blue",
        },
        {
            category: "Productivity",
            date: "July 29, 2026",
            title: "Wireless Screen Sharing: Share Up to 12 Screens with DeltaView Connect",
            description:
                "Wireless screen sharing has transformed the way people collaborate, making meetings and learning more interactive.",
            image: "/assets/img/deltaviewLearn/trending_topics_1.png",
            icon: BarChart3,
            color: "green",
        },
        {
            category: "Education",
            date: "July 24, 2026",
            title: "Digital Transformation in Education: Trends, Tools, and Best Practices",
            description:
                "Education has entered a new era where technology, creativity, and accessibility come together to empower learners worldwide.",
            image: "/assets/img/deltaviewLearn/trending_topics_1.png",
            icon: GraduationCap,
            color: "purple",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Next slide
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % topics.length);
    };

    // Previous slide
    const previousSlide = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + topics.length) % topics.length
        );
    };

    // Automatic slider
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Three cards visible at a time
    const visibleTopics = [
        topics[currentIndex],
        topics[(currentIndex + 1) % topics.length],
        topics[(currentIndex + 2) % topics.length],
    ];

    return (
        <section className="trending-topics-section">

            <div className="container">

                {/* Heading */}
                <div className="trending-topics-heading text-center">

                    <span className="trending-topics-tag">
                        <TrendingUp size={15} />
                        Latest Insights
                    </span>

                    <h2>
                        Explore <span>Trending Topics</span>
                    </h2>

                    <p>
                        Stay updated with the latest trends, insights, and ideas
                        shaping the future of education.
                    </p>

                </div>

                {/* Cards */}
                <div className="row g-4">

                    {visibleTopics.map((topic, index) => {
                        const CategoryIcon = topic.icon;

                        return (
                            <div className="col-lg-4" key={topic.category}>

                                <article
                                    className={`trending-topic-card ${topic.color}`}
                                >

                                    {/* Image */}
                                    <div className="trending-topic-image">

                                        <img
                                            src={topic.image}
                                            alt={topic.title}
                                        />

                                        <div className="trending-category">

                                            <CategoryIcon size={17} />

                                            {topic.category}

                                        </div>

                                    </div>

                                    {/* Content */}
                                    <div className="trending-topic-content">

                                        <div className="trending-topic-date">

                                            <CalendarDays size={14} />

                                            {topic.date}

                                        </div>

                                        <h3>
                                            {topic.title}
                                        </h3>

                                        <p>
                                            {topic.description}
                                        </p>

                                        <a href="#">

                                            <span className="trending-read-icon">
                                                <ArrowRight size={19} />
                                            </span>

                                            <span>
                                                Read More
                                            </span>

                                        </a>

                                    </div>

                                </article>

                            </div>
                        );
                    })}

                </div>

                {/* Controls */}
                <div className="trending-bottom">

                    <div className="trending-navigation">

                        {/* Previous */}
                        <button
                            type="button"
                            onClick={previousSlide}
                            aria-label="Previous article"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        {/* Dots */}
                        {topics.map((_, index) => (
                            <span
                                key={index}
                                className={
                                    index === currentIndex
                                        ? "trending-dot active"
                                        : ""
                                }
                                onClick={() => setCurrentIndex(index)}
                            ></span>
                        ))}

                        {/* Next */}
                        <button
                            type="button"
                            onClick={nextSlide}
                            aria-label="Next article"
                        >
                            <ChevronRight size={18} />
                        </button>

                    </div>

                    {/* View All */}
                    <button
                        type="button"
                        className="trending-view-all"
                        onClick={() => {
                            window.location.href = "/blog";
                        }}
                    >
                        View All Articles
                        <ArrowRight size={18} />
                    </button>

                </div>

            </div>

        </section>
    );
};

export default TrendingTopics;