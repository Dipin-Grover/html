import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { glossaryContent } from '../data/glossaryContent';
import GlossaryContactForm from '../components/Glossary/GlossaryContactForm';
import GlossaryCTA from '../components/Glossary/GlossaryCTA';
import GlossaryFAQ from '../components/Glossary/GlossaryFAQ';
import GlossaryCategories from '../components/Glossary/GlossaryCategories';
import { FiCheckCircle } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GlossaryTerm = () => {
  const { term } = useParams();

  const [sections, setSections] = useState([]);
  const [activeSection, setActiveSection] = useState('');
  const [showToc, setShowToc] = useState(false);

  const isScrolling = useRef(false);
  const articleColRef = useRef(null);
  const rightFormColRef = useRef(null);

  /* =========================================================
     SETUP SECTIONS + SCROLL DETECTION
  ========================================================= */

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      const articleNode = document.querySelector(
        '.glossary-article-content'
      );

      if (!articleNode) return;

      const h3s = Array.from(
        articleNode.querySelectorAll('h3')
      );

      const extraHeaders = Array.from(
        document.querySelectorAll('.glossary-extra-header')
      );

      const allHeaders = [...h3s, ...extraHeaders];

      const newSections = allHeaders.map((h3) => {
        const title = h3.innerText;

        const id =
          h3.id ||
          title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-');

        if (!h3.id) {
          h3.id = id;
        }

        return {
          id,
          title,
        };
      });

      setSections(newSections);

      /* -----------------------------------------
         Detect current section while scrolling
      ----------------------------------------- */

      const handleScroll = () => {
        if (!isScrolling.current) {
          let current = '';

          allHeaders.forEach((h3) => {
            const rect = h3.getBoundingClientRect();

            if (rect.top <= 250) {
              current = h3.id;
            }
          });

          setActiveSection(
            current || newSections[0]?.id || ''
          );
        }

        if (articleColRef.current) {
          const rect = articleColRef.current.getBoundingClientRect();
          const midScreen = window.innerHeight / 2;
          setShowToc(rect.top < midScreen && rect.bottom > midScreen);
        }
      };

      window.addEventListener(
        'scroll',
        handleScroll
      );

      handleScroll();

      return () => {
        window.removeEventListener(
          'scroll',
          handleScroll
        );
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [term]);

  /* =========================================================
     (Removed GSAP SCROLLTRIGGER FOR RIGHT FORM)
  ========================================================= */

  /* =========================================================
     SCROLL TO SECTION
  ========================================================= */

  const scrollToSection = (id) => {
    setActiveSection(id);

    isScrolling.current = true;

    const el = document.getElementById(id);
    console.log("Scrolling to:", id, el);

    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topOffset - 20, // 20px buffer from the very top
        behavior: 'smooth'
      });

      el.classList.add('highlight-section');

      setTimeout(() => {
        el.classList.remove('highlight-section');
        isScrolling.current = false;
      }, 1000);
    } else {
      isScrolling.current = false;
    }
  };


  /* =========================================================
     FIND TERM
  ========================================================= */

  const item = Object.values(glossaryContent).find(
    (t) =>
      t.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') === term
  );


  /* =========================================================
     TERM NOT FOUND
  ========================================================= */

  const modifiedArticle = useMemo(() => {
    if (!item || !item.article) return '';
    if (typeof document === 'undefined') return item.article;

    const div = document.createElement('div');
    div.innerHTML = item.article;
    const h3s = div.querySelectorAll('h3');
    h3s.forEach((h3) => {
      if (!h3.id) {
        h3.id = h3.innerText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      }
    });
    return div.innerHTML;
  }, [item]);

  if (!item) {
    return (
      <div
        className="container mt-80 mb-50 text-center"
        style={{
          minHeight: '50vh',
          paddingTop: '100px',
        }}
      >
        <h2>Term Not Found</h2>

        <p className="text-muted">
          The glossary term you are looking for does not exist.
        </p>

        <Link
          to="/glossary"
          className="btn btn-primary mt-3 rounded-pill px-4"
        >
          Back to Glossary
        </Link>
      </div>
    );
  }


  /* =========================================================
     MAIN PAGE
  ========================================================= */

  return (
    <div
      className="bg-white"
      style={{
        fontFamily: 'var(--tp-ff-body, sans-serif)',
        color: '#1E293B',
      }}
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="position-relative overflow-hidden bg-dark">

        <img
          src="/assets/img/glossary/hero_banner_image.png"
          alt=""
          className="img-fluid w-100 d-block"
          style={{
            objectFit: 'cover',
            minHeight: '350px',
            maxHeight: '400px',
          }}
        />

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              'linear-gradient(90deg, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.7) 50%, rgba(15,23,42,0.4) 100%)',
          }}
        >

          <div
            className="container h-100"
            style={{
              maxWidth: '1200px',
            }}
          >

            <div className="row align-items-center h-100">

              <div className="col-lg-8">

                <h1 className="display-4 fw-bold text-white mb-3">
                  {item.title}
                </h1>

                <p
                  className="lead text-white-50 mb-0"
                  style={{
                    maxWidth: '800px',
                    lineHeight: '1.6',
                  }}
                >
                  {item.shortDescription}
                </p>

                {/* Meta Information (Published Date & Category) */}
                <div className="d-flex align-items-center gap-3 mt-4 text-white-50">
                  {item.publishedDate && (
                    <span className="d-flex align-items-center" style={{ fontSize: '0.95rem' }}>
                      <i className="far fa-calendar-alt me-2"></i>Published on {item.publishedDate}
                    </span>
                  )}
                  {item.displayCategory && (
                    <span className="ms-3">
                      <a href="#" className="btn btn-outline-light btn-sm rounded-pill px-3 py-1" style={{ fontSize: '0.85rem' }}>
                        {item.displayCategory}
                      </a>
                    </span>
                  )}
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTENT WRAPPER
      ===================================================== */}

      <div
        className="container mt-5 mb-50"
        style={{
          maxWidth: '1200px',
          marginTop: '-40px',
          position: 'relative',
          zIndex: 10,
        }}
      >

        <div className="row g-4 g-lg-5 align-items-start">


          {/* =================================================
              FIXED LEFT SECTION NAVIGATION
          ================================================= */}

          <div className="d-none d-lg-block">

            <div
              className="position-fixed top-50 start-0 translate-middle-y ms-5"
              style={{
                zIndex: 1050,
                opacity: showToc ? 1 : 0,
                visibility: showToc ? 'visible' : 'hidden',
                transition: 'opacity 0.3s ease, visibility 0.3s ease',
              }}
            >

              {sections.length > 0 && (

                <div className="toc-container position-relative">

                  <div className="d-flex flex-column gap-3 py-3">

                    {sections.map((section) => {

                      const isActive =
                        activeSection === section.id;

                      return (
                        <div
                          key={section.id}
                          onClick={() =>
                            scrollToSection(section.id)
                          }
                          className="toc-line transition-all"
                          title={section.title}
                          style={{
                            cursor: 'pointer',
                            width: '24px', /* Same width for all lines */
                            height: '4px',
                            borderRadius: '4px',
                            backgroundColor: isActive
                              ? '#0d6efd'
                              : '#6c757d',
                            opacity: isActive
                              ? 1
                              : 0.4,
                            transition:
                              'all 0.2s ease',
                          }}
                        />
                      );

                    })}

                  </div>

                  {/* TOC Dropdown */}
                  <div
                    className="toc-dropdown"
                    style={{
                      position: 'absolute',
                      left: '100%',
                      top: '50%',
                      transform: 'translateY(-50%) translateX(-10px)',
                      marginLeft: '25px',
                      backgroundColor: '#f8f9fa',
                      padding: '24px 20px', /* Increased padding to make box bigger */
                      borderRadius: '12px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                      width: 'max-content',
                      minWidth: '220px', /* Ensured minimum width */
                      maxWidth: '320px',
                      opacity: 0,
                      visibility: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: '1px solid #e2e8f0',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        left: '-8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '0',
                        height: '0',
                        borderTop: '8px solid transparent',
                        borderBottom: '8px solid transparent',
                        borderRight: '8px solid #f8f9fa'
                      }}
                    />
                    <div className="d-flex flex-column gap-1">
                      {sections.map((s) => (
                        <div
                          key={`link-${s.id}`}
                          onClick={() => scrollToSection(s.id)}
                          style={{
                            cursor: 'pointer',
                            color: activeSection === s.id ? '#ffffff' : '#475569', /* Different color for selected */
                            backgroundColor: activeSection === s.id ? '#0d6efd' : 'transparent', /* Added background for selected */
                            fontWeight: activeSection === s.id ? '600' : '500',
                            fontSize: '1rem', /* Slightly larger font */
                            padding: '8px 12px',
                            borderRadius: '6px',
                            transition: 'all 0.2s ease',
                            lineHeight: '1.4'
                          }}
                          onMouseEnter={(e) => {
                            if (activeSection !== s.id) {
                              e.target.style.color = '#0d6efd';
                              e.target.style.backgroundColor = 'rgba(13, 110, 253, 0.08)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (activeSection !== s.id) {
                              e.target.style.color = '#475569';
                              e.target.style.backgroundColor = 'transparent';
                            }
                          }}
                        >
                          {s.title}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              )}

            </div>

          </div>


          {/* =================================================
              MAIN ARTICLE
          ================================================= */}

          <div className="col-lg-7" ref={articleColRef}>

            <div className="px-2 px-md-4 py-4">

              <div
                className="glossary-article-content"
                dangerouslySetInnerHTML={{
                  __html: modifiedArticle,
                }}
              />


              {/* =================================================
                  KEY BENEFITS
              ================================================= */}

              {item.benefits &&
                item.benefits.length > 0 && (

                  <div className="mt-5">

                    <h3
                      id="key-benefits"
                      className="fw-bold mb-4 glossary-extra-header"
                      style={{
                        fontSize: '1.5rem',
                        color: '#0f172a',
                      }}
                    >
                      Key Benefits
                    </h3>

                    <div className="row g-3">

                      {item.benefits.map(
                        (benefit, idx) => (

                          <div
                            key={idx}
                            className="col-12"
                          >

                            <div className="d-flex align-items-start gap-3">

                              <FiCheckCircle
                                className="text-primary flex-shrink-0 mt-1"
                                size={20}
                              />

                              <span
                                style={{
                                  fontSize: '1.1rem',
                                  color: '#475569',
                                  lineHeight: '1.6',
                                }}
                              >
                                {benefit}
                              </span>

                            </div>

                          </div>

                        )
                      )}

                    </div>

                  </div>

                )}




              {/* END OF MAIN ARTICLE */}

            </div>

          </div>


          {/* =================================================
              RIGHT CONTACT FORM
          ================================================= */}

          <div className="col-lg-4 offset-lg-1 align-self-start">
  <div
    className="position-sticky"
    style={{
      top: '120px',
      zIndex: 10
    }}
  >
    <GlossaryContactForm />
  </div>
</div>

        </div>

      </div>


      {/* =====================================================
          CATEGORIES (Explore By Category)
      ===================================================== */}
      <div className="container" style={{ maxWidth: '1200px' }}>
        <GlossaryCategories columns={3} />
      </div>

      {/* =====================================================
          FAQS (Full Page Width)
      ===================================================== */}
      <GlossaryFAQ faqs={item.faqs} />


      {/* =====================================================
          CTA
      ===================================================== */}

      <div className="container-fluid p-0">
        <GlossaryCTA />
      </div>


      {/* =====================================================
          EXISTING ARTICLE / TOC STYLES
      ===================================================== */}

      <style>
        {`

          .toc-container:hover .toc-dropdown {
            opacity: 1 !important;
            visibility: visible !important;
            transform: translateY(-50%) translateX(0) !important;
          }

          .toc-line:hover {
            opacity: 1 !important;
            transform: scaleX(1.15);
          }

          .glossary-article-content h3,
          .glossary-extra-header {
            color: #0f172a;
            margin-top: 2rem;
            margin-bottom: 1rem;
            scroll-margin-top: 130px;
          }

          .glossary-article-content p {
            color: #475569;
            font-size: 1.1rem;
            line-height: 1.8;
            margin-bottom: 1.5rem;
          }

          .glossary-article-content a {
            color: #0d6efd;
            text-decoration: none;
          }

          .glossary-article-content a:hover {
            text-decoration: underline;
          }

          .highlight-section {
            animation: highlightFade 1s ease-out;
            border-radius: 4px;
            padding: 2px 8px;
            margin-left: -8px;
          }

          @keyframes highlightFade {

            0% {
              background-color: rgba(13, 110, 253, 0.15);
              color: #0d6efd;
            }

            100% {
              background-color: transparent;
            }

          }

        `}
      </style>

    </div>
  );
};

export default GlossaryTerm;