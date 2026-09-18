const GlossaryHero = () => {
  return (
    <section className="position-relative overflow-hidden bg-dark">

      {/* Background Image */}
      <img
        src="/assets/img/glossary/hero_banner_image.png"
        alt=""
        className="img-fluid w-100 d-block"
      />

      {/* Content Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div className="container h-100">
          <div className="row align-items-center h-100">

            <div className="col-lg-6">
              <h1 className="display-1 fw-bold text-white mb-3">
                Gloss<span className="text-primary">ary</span>
              </h1>

              <h2 className="h3 fw-normal text-white mb-4">
                Small terms. A bigger tomorrow.
              </h2>

              <p className="lead text-white-50 mb-0">
                Explore essential terms, concepts, and technologies used in
                education and smart collaboration — explained simply.
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default GlossaryHero;