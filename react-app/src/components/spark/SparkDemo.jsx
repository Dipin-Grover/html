const SparkDemo = () => {
  return (
    <div className="cta-area bg2 pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto col-md-12 col-sm-12 col-12">
            <div className="row">
              <div className="col-lg-6">
                <div className="cst-service-heading mb-40 sticky">
                  <h4 className="cst-section-title tp_fade_anim" data-delay=".1">Request a demo</h4>
                  <p>Connect with DeltaView experts to see how teams keep work moving – without resetting.</p>
                  <div className="app-feature-bottom mt-20 tp_fade_anim" data-delay=".9">
                    <p>
                      If you need a PO, please <a href="#" className="tp-text-common-blue fw-500">Request a quote</a>
                    </p>
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5956e9" width="24" height="24" className="me-2"><path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path></svg>
                      Speak to an expert{" "}
                      <a href="tel:18005717167">1800-571-7167</a>
                    </li>
                    <li className="mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5956e9" width="24" height="24" className="me-2"><path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"></path></svg>
                      Sales Enquiries{" "}
                      <a href="mailto:sales@deltaview.in">sales@deltaview.in</a>
                    </li>
                    <li className="mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5956e9" width="24" height="24" className="me-2"><path d="M22 17.0022C21.999 19.8731 19.9816 22.2726 17.2872 22.8616L16.6492 20.9476C17.8532 20.7511 18.8765 20.0171 19.4649 19H17C15.8954 19 15 18.1046 15 17V13C15 11.8954 15.8954 11 17 11H19.9381C19.446 7.05369 16.0796 4 12 4C7.92038 4 4.55399 7.05369 4.06189 11H7C8.10457 11 9 11.8954 9 13V17C9 18.1046 8.10457 19 7 19H4C2.89543 19 2 18.1046 2 17V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V12.9987V13V17V17.0013V17.0022ZM20 17V13H17V17H20ZM4 13V17H7V13H4Z"></path></svg>
                      Technical Support{" "}
                      <a href="mailto:support@deltaview.in">support@deltaview.in</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cta-form p-5 rounded-4">
                  <form>
                    <div className="mb-20">
                      <label>Full name <span className="text-danger">*</span></label>
                      <input type="text" name="fname" className="form-control" />
                    </div>
                    <div className="mb-20">
                      <label>Work email <span className="text-danger">*</span></label>
                      <input type="text" name="wemail" className="form-control" />
                    </div>
                    <div className="mb-20">
                      <label>Phone number <span className="text-danger">*</span></label>
                      <input type="text" name="phone" className="form-control" />
                    </div>
                    <div className="mb-20">
                      <label>Location <span className="text-danger">*</span></label>
                      <input type="text" name="location" className="form-control" />
                    </div>
                    <div className="mb-20">
                      <label>Please enter your message here <span className="text-danger">*</span></label>
                      <textarea className="form-control" rows="4" name="message"></textarea>
                    </div>
                    <div>
                      <a className="al-btn-blue mb-20 mr-10" href="#!">Get a free demo</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparkDemo;