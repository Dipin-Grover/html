import React from 'react';

const ServiceRequestForm = () => {
  return (
    <div className="cttab-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h3 className="text-center">Your Product Information</h3>
            <p className="fs-20 mb-40 text-center">
              If you have any questions or requests concerning your purchase in the DeltaView shop, please fill in the below information.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="right-cont">
              <form>
                <div className="row">
                  <div className="col-lg-4 mb-20">
                    <label className="fw-500 form-label">Product<span className="text-danger">*</span></label>
                    <select name="product" className="form-select" defaultValue="">
                      <option value="" disabled>Select</option>
                      <option value="0">DeltaView Spark</option>
                      <option value="1">DeltaView Blaze</option>
                    </select>
                  </div>
                  <div className="col-lg-4 mb-20">
                    <label className="fw-500 form-label">Size<span className="text-danger">*</span></label>
                    <select name="product_size" className="form-select" defaultValue="">
                      <option value="" disabled>Select</option>
                      <option value='Spark 65" (4GB Ram - 32GB Storage)'>Spark 65" (4GB Ram - 32GB Storage)</option>
                      <option value='Spark 65" (4GB Ram - 64GB Storage)'>Spark 65" (4GB Ram - 64GB Storage)</option>
                      <option value='Spark 65" (4GB Ram - 128GB Storage)'>Spark 65" (4GB Ram - 128GB Storage)</option>
                      <option value='Spark 65" (8GB Ram - 128GB Storage)'>Spark 65" (8GB Ram - 128GB Storage)</option>
                      <option value='Spark 75" (4GB Ram - 32GB Storage)'>Spark 75" (4GB Ram - 32GB Storage)</option>
                      <option value='Spark 75" (4GB Ram - 64GB Storage)'>Spark 75" (4GB Ram - 64GB Storage)</option>
                      <option value='Spark 75" (4GB Ram - 128GB Storage)'>Spark 75" (4GB Ram - 128GB Storage)</option>
                      <option value='Spark 75" (8GB Ram - 128GB Storage)'>Spark 75" (8GB Ram - 128GB Storage)</option>
                      <option value='Spark 86" (4GB Ram - 32GB Storage)'>Spark 86" (4GB Ram - 32GB Storage)</option>
                      <option value='Spark 86" (4GB Ram - 64GB Storage)'>Spark 86" (4GB Ram - 64GB Storage)</option>
                      <option value='Spark 86" (4GB Ram - 128GB Storage)'>Spark 86" (4GB Ram - 128GB Storage)</option>
                      <option value='Spark 86" (8GB Ram - 128GB Storage)'>Spark 86" (8GB Ram - 128GB Storage)</option>
                    </select>
                  </div>
                  <div className="col-lg-4 mb-20">
                    <label className="fw-500 form-label">Industry<span className="text-danger">*</span></label>
                    <select name="industry" className="form-select" defaultValue="">
                      <option value="" disabled>Select</option>
                      <option value="0">Education</option>
                      <option value="1">Enterprises</option>
                    </select>
                  </div>
                  <div className="col-lg-4 mb-20">
                    <label className="fw-500 form-label">Full name<span className="text-danger">*</span></label>
                    <input type="text" name="fname" className="form-control" />
                  </div>
                  <div className="col-lg-4 mb-20">
                    <label className="fw-500 form-label">Email address<span className="text-danger">*</span></label>
                    <input type="email" name="emai_address" className="form-control" />
                  </div>
                  <div className="col-lg-4 mb-20">
                    <label className="fw-500 form-label">Mobile Number<span className="text-danger">*</span></label>
                    <input type="text" name="fnumber" className="form-control" />
                  </div>
                  <div className="col-lg-4 mb-20">
                    <label className="fw-500 form-label">Subject<span className="text-danger">*</span></label>
                    <input type="text" name="subject" className="form-control" />
                  </div>
                  <div className="col-lg-8 mb-20">
                    <label className="fw-500 form-label">Address<span className="text-danger">*</span></label>
                    <input type="text" name="address" className="form-control" />
                  </div>
                  <div className="col-lg-4 mb-20">
                    <label className="fw-500 form-label">Pincode<span className="text-danger">*</span></label>
                    <input type="text" name="pincode" className="form-control" />
                  </div>
                  <div className="col-lg-4 mb-20">
                    <label className="fw-500 form-label">City</label>
                    <input type="text" name="city" className="form-control" />
                  </div>
                  <div className="col-lg-4 mb-20">
                    <label className="fw-500 form-label">State</label>
                    <input type="text" name="state" className="form-control" />
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

export default ServiceRequestForm;
