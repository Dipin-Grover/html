import React from 'react';

const BookDemoForm = () => {
  return (
    <div className="cttab-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="left-cont">
              <h3>Contact DeltaView for A Personalized Demo</h3>
              <p className="fs-20 mb-40">Elevate Your Experience: Reach Out to DeltaView for a Tailored Showcase!</p>
              <form>
                <div className="row">
                  <div className="col-lg-6 mb-20">
                    <label className="fw-500 form-label">Full name<span className="text-danger">*</span></label>
                    <input type="text" name="fname" className="form-control" />
                  </div>
                  <div className="col-lg-6 mb-20">
                    <label className="fw-500 form-label">Email address<span className="text-danger">*</span></label>
                    <input type="email" name="emai_address" className="form-control" />
                  </div>
                  <div className="col-lg-6 mb-20">
                    <label className="fw-500 form-label">Mobile Number<span className="text-danger">*</span></label>
                    <input type="text" name="fnumber" className="form-control" />
                  </div>
                  <div className="col-lg-6 mb-20">
                    <label className="fw-500 form-label">Location<span className="text-danger">*</span></label>
                    <input type="text" name="location" className="form-control" />
                  </div>
                  <div className="col-lg-12 mb-20">
                    <label className="fw-500 form-label">Message<span className="text-danger">*</span></label>
                    <textarea name="message" className="form-control" rows="4"></textarea>
                  </div>
                  <div className="col-lg-12">
                    <a className="al-btn-blue mb-20 mr-10" href="#!">Submit</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemoForm;
