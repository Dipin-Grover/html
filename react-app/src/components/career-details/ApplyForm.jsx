import React from 'react';

const ApplyForm = () => {
  return (
    <div className="row mt-40">
      <div className="col-lg-12">
        <div className="career-form" id="applyform">
            <h4 className="mb-30">Apply for this job</h4>
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
                  <label className="fw-500 form-label">Resume<span className="text-danger">*</span></label>
                  <input type="file" name="resume" className="form-control" />
              </div>
              <div className="col-lg-6 mb-20">
                  <label className="fw-500 form-label">How did you hear about this job?<span className="text-danger">*</span></label>
                  <input type="text" name="fnumber" className="form-control" />
              </div>
              <div className="col-lg-6 mb-20">
                  <label className="fw-500 form-label">LinkedIn Profile</label>
                  <input type="text" name="resume" className="form-control" />
              </div>
              <div className="col-lg-12 mb-20">
                  <label className="fw-500 form-label">Message<span className="text-danger">*</span></label>
                  <textarea name="message" className="form-control" rows="4"></textarea>
              </div>
              <div className="col-lg-12">
                  <a className="al-btn-blue" href="#!">Submit</a>
              </div>
            </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
