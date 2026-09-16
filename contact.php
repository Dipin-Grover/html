<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?>
<!doctype html>
<html class="no-js" lang="zxx">
<head>
<?php include 'inc/head.php'; ?>
</head>

<body>
<?php include 'inc/header.php'; ?>

<div id="smooth-content">
   <main>
      <!-- Heading -->
      <div class="tp-hero-area pre-header pt-60 pb-20 p-relative">
         <div class="container">
            <div class="row align-items-end">
               <div class="col-lg-8 mx-auto">
                  <div class="mb-30 text-center">
                     <div>
                        <h2 class="mb-15 tp-ff-dm fs-60 fs-md-50 fs-xs-37 lh-120-per ls-m-2 tp-text-common-black-1">Let’s Connect With Us
                        </h2>
                        <p class="fs-18 tp-ff-dm tp-text-common-black-1">Have questions or need assistance? Our team is here to help you with the right solutions.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- Heading -->
      <!--  -->
      <div class="contact-area pb-60 p-relative">
         <div class="container">
            <div class="row g-2">
               <div class="col-lg-4 d-flex">
                  <a href="contact.php" class="cttab-link active">
                     <span>
                        <svg width="40" height="40" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                           <path d="M4 5V16H20V5H4ZM2 4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V18H2V4.00748ZM1 19H23V21H1V19Z"></path>
                        </svg>
                     </span>
                     <div class="cttab-content">
                        <h4 class="text-white">Talk to an Expert</h4>
                        <p class="text-white mb-0">
                           Talk to our team to find out how Poppulo can help your business.
                        </p>
                     </div>
                  </a>
               </div>
               <div class="col-lg-4 d-flex">
                  <a href="service-request.php" class="cttab-link">
                     <span>
                        <svg width="40" height="40" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M22 17.0022C21.999 19.8731 19.9816 22.2726 17.2872 22.8616L16.6492 20.9476C17.8532 20.7511 18.8765 20.0171 19.4649 19H17C15.8954 19 15 18.1046 15 17V13C15 11.8954 15.8954 11 17 11H19.9381C19.446 7.05369 16.0796 4 12 4C7.92038 4 4.55399 7.05369 4.06189 11H7C8.10457 11 9 11.8954 9 13V17C9 18.1046 8.10457 19 7 19H4C2.89543 19 2 18.1046 2 17V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V12.9987V13V17V17.0013V17.0022ZM20 17V13H17V17H20ZM4 13V17H7V13H4Z"></path>
                        </svg>
                     </span>
                     <div class="cttab-content">
                        <h4 class="text-white">Service Request</h4>
                        <p class="text-white mb-0">
                           We’re always here to help you. Tell us what you’re looking for.
                        </p>
                     </div>
                  </a>
               </div>
               <div class="col-lg-4 d-flex">
                  <a href="book-demo.php" class="cttab-link">
                     <span>
                        <svg width="40" height="40" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
                        </svg>
                     </span>
                     <div class="cttab-content">
                        <h4 class="text-white">Book A  Demo</h4>
                        <p class="text-white mb-0">
                           Talk to our team to find out how Poppulo can help your business.
                        </p>
                     </div>
                  </a>
               </div>
            </div>
         </div>
      </div>
      <!--  -->
      <!-- CT tab Wrapper -->
       <div class="cttab-wrapper">
            <div class="container-fliud">
               <div class="row">
                  <div class="col-lg-6 d-flex">
                     <div class="left-cont">
                        <h3>Ready to Find Out More?</h3>
                        <p class="fs-20 mb-40">See why the best companies in the world choose Poppulo to deliver more impactful communications.</p>
                        <figure><img src="assets/img/about/thumb.webp" alt="about"></figure>
                     </div>
                  </div>
                  <div class="col-lg-6 d-flex">
                     <div class="right-cont">
                        <h3>Get in Touch To Set Up a Call!</h3>
                        <p class="fs-20 mb-40">Our team would love to hear from you.</p>
                        <form>
                           <div class="row">
                              <div class="col-lg-12 mb-20">
                                 <label class="fw-500 form-label">Full name<span class="text-danger">*</span></label>
                                 <input type="text" name="fname" class="form-control">
                              </div>
                              <div class="col-lg-12 mb-20">
                                 <label class="fw-500 form-label">Email address<span class="text-danger">*</span></label>
                                 <input type="email" name="emai_address" class="form-control">
                              </div>
                              <div class="col-lg-12 mb-20">
                                 <label class="fw-500 form-label">Mobile Number<span class="text-danger">*</span></label>
                                 <input type="text" name="fnumber" class="form-control">
                              </div>
                              <div class="col-lg-12 mb-20">
                                 <label class="fw-500 form-label">Location<span class="text-danger">*</span></label>
                                 <input type="text" name="location" class="form-control">
                              </div>
                              <div class="col-lg-12 mb-20">
                                 <label class="fw-500 form-label">Message<span class="text-danger">*</span></label>
                                 <textarea name="message" class="form-control" rows="4"></textarea>
                              </div>
                              <div class="col-lg-12">
                                 <a class="al-btn-blue mb-20 mr-10" href="#!">Submit</a>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
       </div>
      <!-- CT tab Wrapper -->
      
   </main>
   <?php include 'inc/footer.php'; ?>
</div>


   <!-- JS here -->
   <?php include 'inc/footer-links.php'; ?>
</body>
</html>