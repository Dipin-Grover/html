<?php
require_once 'inc/auth.php'; // Starts session and connects to DB

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fname = trim($_POST['fname'] ?? '');
    $lname = trim($_POST['lname'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';
    $confirm_password = $_POST['confirm_password'] ?? '';
    $captcha = $_POST['captcha'] ?? '';

    // Check captcha from previous request
    if (isset($_SESSION['signup_captcha']) && $captcha != $_SESSION['signup_captcha']) {
        $error = "Incorrect captcha!";
    } elseif ($password !== $confirm_password) {
        $error = "Passwords do not match!";
    } else {
        $name = trim($fname . ' ' . $lname);
        $hash = password_hash($password, PASSWORD_DEFAULT);
        
        try {
            $stmt = $pdo->prepare("INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)");
            if ($stmt->execute([$name, $email, $hash])) {
                $_SESSION['user_id'] = $pdo->lastInsertId();
                header("Location: checkout.php"); // Or index.php
                exit;
            }
        } catch (PDOException $e) {
            if ($e->getCode() == 23000) {
                $error = "Email already registered.";
            } else {
                $error = "Registration failed. Please try again.";
            }
        }
    }
}

// Generate new captcha for current render
$captcha_num1 = rand(10, 50);
$captcha_num2 = rand(1, 20);
$_SESSION['signup_captcha'] = $captcha_num1 + $captcha_num2;
?>
<!doctype html>
<html class="no-js" lang="zxx">
<head>
<?php include 'inc/head.php'; ?>
<style>
   :root {
      --tp-brand-navy: #10302a;
      --tp-brand-indigo: #5956e9;
      --tp-brand-indigo-light: #7463ff;
      --tp-brand-bg-light: #f4f6fb;
   }
   
   body {
      background-color: var(--tp-brand-bg-light);
      font-family: var(--tp-ff-body, 'Urbanist', sans-serif);
      margin: 0;
      overflow-y: hidden; /* Prevent scrolling entirely if desired, but best to just make it fit */
   }
   
   /* Outer Layout Container */
   .auth-page-wrapper {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      overflow: hidden;
   }
   
   .auth-main-container {
      width: 100%;
      max-width: 100%;
      background: #ffffff;
      border-radius: 0;
      box-shadow: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: 100%;
      max-height: 100%;
   }
   @media (min-width: 992px) {
      .auth-main-container {
         flex-direction: row;
      }
   }
   
   /* Left Side: Form */
   .auth-left {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      position: relative;
      overflow-y: auto; /* Just in case it's still too tall on tiny screens */
   }
   
   .auth-form-card {
      width: 100%;
      max-width: 480px; 
      background: #ffffff;
      border-radius: 24px;
      padding: 25px 30px;
      box-shadow: 0 4px 30px rgba(0,0,0,0.03);
      border: 1px solid #f0f0f0;
   }
   
   .auth-logo-box {
      text-align: center;
      margin-bottom: 15px;
   }
   .auth-logo-icon {
      width: 42px;
      height: 42px;
      background: var(--tp-brand-indigo);
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 20px;
      box-shadow: none;
   }

   .auth-header {
      text-align: center;
      margin-bottom: 20px;
   }
   .auth-header h2 {
      font-size: 20px;
      font-weight: 800;
      color: var(--tp-brand-navy);
      margin-bottom: 5px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
   }
   
   /* Form Layout */
   .auth-form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 12px;
   }
   @media (max-width: 576px) {
      .auth-form-grid {
         grid-template-columns: 1fr;
      }
   }
   
   .auth-input-group {
      position: relative;
   }
   .auth-input-wrapper {
      position: relative;
   }
   .auth-input-wrapper i.icon-left {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      color: #9ca3af;
      font-size: 14px;
   }
   input.auth-input {
      width: 100%;
      height: 46px;
      padding: 0 16px 0 44px !important;
      border: 1px solid #e5e7eb;
      border-radius: 30px;
      font-size: 14px;
      color: #111;
      background: #fff;
      transition: all 0.2s ease;
   }
   input.auth-input::placeholder {
      color: #9ca3af;
   }
   input.auth-input:focus {
      border-color: var(--tp-brand-indigo);
      outline: none;
      box-shadow: 0 0 0 3px rgba(7, 82, 197, 0.1);
   }
   
   /* Captcha Field */
   .captcha-row {
      display: flex;
      margin-bottom: 15px;
   }
   .captcha-box {
      background: var(--tp-brand-indigo);
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 1px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px 0 0 30px;
      white-space: nowrap;
   }
   input.captcha-input {
      border-radius: 0 30px 30px 0;
      border-left: none;
      padding-left: 16px !important; /* No icon in captcha */
   }
   input.captcha-input:focus {
      border-left: 1px solid var(--tp-brand-indigo);
   }
   
   /* Checkbox */
   .auth-terms {
      display: flex;
      align-items: flex-start;
      margin-bottom: 20px;
   }
   .auth-terms input {
      margin-top: 3px;
      margin-right: 10px;
      width: 14px;
      height: 14px;
      accent-color: var(--tp-brand-indigo);
   }
   .auth-terms label {
      font-size: 12px;
      color: #6b7280;
      line-height: 1.4;
      margin-bottom: 0;
   }
   .auth-terms label a {
      color: var(--tp-brand-indigo);
      text-decoration: underline;
   }
   
   /* Submit Button */
   .auth-submit-btn {
      width: 100%;
      height: 46px;
      background: var(--tp-brand-indigo);
      color: #fff;
      border: none;
      border-radius: 30px;
      font-weight: 600;
      font-size: 15px;
      margin-bottom: 15px;
      transition: opacity 0.2s ease;
      box-shadow: none;
   }
   .auth-submit-btn:hover {
      opacity: 0.9;
   }
   
   /* Social Google Button */
   .auth-divider {
      display: flex;
      align-items: center;
      text-align: center;
      margin: 15px 0;
      color: #9ca3af;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
   }
   .auth-divider::before, .auth-divider::after {
      content: '';
      flex: 1;
      border-bottom: 1px solid #e5e7eb;
   }
   .auth-divider:not(:empty)::before { margin-right: 1em; }
   .auth-divider:not(:empty)::after { margin-left: 1em; }
   
   .auth-google-btn {
      width: 100%;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 30px;
      color: #4b5563;
      font-size: 14px;
      font-weight: 600;
      transition: 0.2s ease;
   }
   .auth-google-btn:hover {
      background: #f4f6fb;
      border-color: var(--tp-brand-indigo);
   }
   .auth-google-btn img {
      width: 16px;
      margin-right: 8px;
   }
   
   /* Right Side: Split Banner */
   .auth-right {
      flex: 1;
      display: none;
      border-radius: 0;
      overflow: hidden;
      flex-direction: column;
   }
   @media (min-width: 992px) {
      .auth-right {
         display: flex;
      }
   }
   .auth-right-top {
      flex: 3.5;
      background-image: url('assets/img/auth-bg-1.jpg');
      background-size: cover;
      background-position: center;
      position: relative;
      transition: background-image 0.5s ease;
   }
   .auth-right-top::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.1);
   }
   .auth-right-bottom {
      flex: 1;
      background: var(--tp-brand-navy);
      position: relative;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
   }
   .contour-shape {
      position: absolute;
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 40px;
      transform: translate(-50%, -50%) rotate(15deg);
      pointer-events: none;
   }
   .contour-1 { width: 300px; height: 300px; top: 100%; left: 80%; }
   .contour-2 { width: 450px; height: 450px; top: 100%; left: 80%; }
   .contour-3 { width: 600px; height: 600px; top: 100%; left: 80%; }
   .contour-4 { width: 750px; height: 750px; top: 100%; left: 80%; }
   
   .auth-content-box {
      position: relative;
      z-index: 10;
      color: #ffffff;
   }
   .auth-slider-dots {
      display: flex;
      gap: 6px;
      margin-bottom: 15px;
   }
   .auth-slider-dots span {
      display: block;
      width: 6px;
      height: 6px;
      background: rgba(255,255,255,0.4);
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease;
   }
   .auth-slider-dots span.active {
      width: 20px;
      border-radius: 4px;
      background: #fff;
   }
   .auth-content-box h3 {
      font-size: 26px;
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: 12px;
      color: #fff;
      transition: opacity 0.3s ease;
   }
   .auth-content-box p {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.5;
      margin-bottom: 0;
      max-width: 90%;
      transition: opacity 0.3s ease;
   }
   
   .auth-back-link {
      position: absolute;
      top: 20px;
      left: 20px;
      font-weight: 500;
      font-size: 13px;
      color: #6b7280;
      display: flex;
      align-items: center;
      transition: 0.3s;
      z-index: 20;
   }
   .auth-back-link:hover {
      color: var(--tp-brand-navy);
   }
   .auth-back-link i {
      margin-right: 6px;
   }
</style>
</head>

<body>

<div class="auth-page-wrapper">
   
   <div class="auth-main-container">
      
      <!-- Left Form Side -->
      <div class="auth-left">
         <a href="index.php" class="auth-back-link"><i class="fal fa-arrow-left"></i> Back to home</a>
         

         <div class="auth-form-card">
            
            <div class="auth-header">
               <h2>SIGN UP TO YOUR ACCOUNT</h2>
               <?php if($error): ?>
                   <div class="alert alert-danger p-2 mt-2 border-0 rounded" style="font-size:14px; background: rgba(220, 53, 69, 0.1); color: #dc3545;"><?php echo htmlspecialchars($error); ?></div>
               <?php endif; ?>
            </div>
            
            <form action="sign-up.php" method="POST">
               
               <div class="auth-form-grid">
                  <div class="auth-input-group">
                     <div class="auth-input-wrapper">
                        <i class="fal fa-user icon-left"></i>
                        <input type="text" name="fname" class="auth-input" placeholder="First Name *" required>
                     </div>
                  </div>
                  <div class="auth-input-group">
                     <div class="auth-input-wrapper">
                        <i class="fal fa-user icon-left"></i>
                        <input type="text" name="lname" class="auth-input" placeholder="Last Name *" required>
                     </div>
                  </div>
               </div>
               
               <div class="auth-form-grid">
                  <div class="auth-input-group">
                     <div class="auth-input-wrapper">
                        <i class="fal fa-envelope icon-left"></i>
                        <input type="email" name="email" class="auth-input" placeholder="Email id *" required>
                     </div>
                  </div>
                  <div class="auth-input-group">
                     <div class="auth-input-wrapper">
                        <i class="fal fa-phone icon-left"></i>
                        <input type="tel" name="phone" class="auth-input" placeholder="Mobile No. *" required>
                     </div>
                  </div>
               </div>
               
               <div class="auth-form-grid">
                  <div class="auth-input-group">
                     <div class="auth-input-wrapper">
                        <i class="fal fa-lock icon-left"></i>
                        <input type="password" name="password" class="auth-input" placeholder="Password *" required>
                        <i class="fal fa-eye position-absolute" style="right: 14px; top: 50%; transform: translateY(-50%); color: #9ca3af; cursor: pointer; font-size: 15px;"></i>
                     </div>
                  </div>
                  <div class="auth-input-group">
                     <div class="auth-input-wrapper">
                        <i class="fal fa-lock icon-left"></i>
                        <input type="password" name="confirm_password" class="auth-input" placeholder="Confirm Password *" required>
                        <i class="fal fa-eye position-absolute" style="right: 14px; top: 50%; transform: translateY(-50%); color: #9ca3af; cursor: pointer; font-size: 15px;"></i>
                     </div>
                  </div>
               </div>
               
               <div class="captcha-row">
                  <div class="captcha-box"><?php echo $captcha_num1; ?> + <?php echo $captcha_num2; ?> =</div>
                  <input type="text" name="captcha" class="auth-input captcha-input" placeholder="Enter captcha*" required>
               </div>
               
               <div class="auth-terms">
                  <input type="checkbox" id="terms" required>
                  <label for="terms">I have read the Privacy Policy, Terms and agree to allow DeltaView to process my personal data for the purposes above. <a href="#">privacy policy</a></label>
               </div>
               
               <button type="submit" class="auth-submit-btn">Register Now</button>
               
               <div class="text-center">
                  <p class="fs-14 mb-0" style="color: #6b7280;">Already have an account? <a href="sign-in.php" style="color:var(--tp-brand-indigo); font-weight:600;">Sign In</a></p>
               </div>
               
               <div class="auth-divider">OR</div>
               
               <a href="#" class="auth-google-btn">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google">
                  Continue with Gmail
               </a>
               
            </form>
         </div>
      </div>
      
      <!-- Right Graphic Side -->
      <div class="auth-right">
         <div class="auth-right-top"></div>
         <div class="auth-right-bottom">
            
            <div class="contour-shape contour-1"></div>
            <div class="contour-shape contour-2"></div>
            <div class="contour-shape contour-3"></div>
            <div class="contour-shape contour-4"></div>
            
            <div class="auth-content-box">
               <div class="auth-slider-dots">
                  <span class="active"></span>
                  <span></span>
                  <span></span>
               </div>
               <h3>Smarter Solutions<br>for Modern Teams</h3>
               <p>Receive personalized tips and recommendations. Our insights features help you make informed decisions effortlessly.</p>
            </div>
         </div>
      </div>
      
   </div>
   
</div>

<!-- JS here -->
<?php include 'inc/footer-links.php'; ?>

<script>
document.addEventListener('DOMContentLoaded', function() {
   const slides = [
      {
         title: "Smarter Solutions<br>for Modern Teams",
         text: "Receive personalized tips and recommendations. Our insights features help you make informed decisions effortlessly.",
         img: "assets/img/auth-bg-1.jpg"
      },
      {
         title: "Seamless Collaboration<br>Across Workspaces",
         text: "Connect your favorite apps and streamline your workflow. Everything works together in perfect harmony.",
         img: "assets/img/auth-bg-2.jpg" 
      },
      {
         title: "AI Meeting Assistant<br>& Smart Transcription",
         text: "Automatically transcribe meetings, generate smart notes, and identify key action items in real-time.",
         img: "assets/img/auth-bg-3.jpg"
      }
   ];

   let currentSlide = 0;
   const titleEl = document.querySelector('.auth-content-box h3');
   const textEl = document.querySelector('.auth-content-box p');
   const dots = document.querySelectorAll('.auth-slider-dots span');
   const bgEl = document.querySelector('.auth-right-top');

   // Initialize first slide's background to avoid jumping from default css background
   bgEl.style.backgroundImage = `url('${slides[0].img}')`;

   function goToSlide(index) {
      currentSlide = index;
      
      // Update content
      titleEl.style.opacity = 0;
      textEl.style.opacity = 0;
      
      setTimeout(() => {
         titleEl.innerHTML = slides[currentSlide].title;
         textEl.innerHTML = slides[currentSlide].text;
         bgEl.style.backgroundImage = `url('${slides[currentSlide].img}')`;
         
         titleEl.style.opacity = 1;
         textEl.style.opacity = 1;
      }, 300);

      // Update dots
      dots.forEach((dot, i) => {
         if(i === currentSlide) dot.classList.add('active');
         else dot.classList.remove('active');
      });
   }

   // Auto advance
   setInterval(() => {
      let nextSlide = (currentSlide + 1) % slides.length;
      goToSlide(nextSlide);
   }, 4000);

   // Click on dots
   dots.forEach((dot, i) => {
      dot.addEventListener('click', () => goToSlide(i));
   });

   // Password toggle functionality
   const togglePasswordIcons = document.querySelectorAll('.fa-eye');
   togglePasswordIcons.forEach(icon => {
      icon.addEventListener('click', function() {
         const input = this.previousElementSibling;
         if (input && input.tagName === 'INPUT') {
            if (input.type === 'password') {
               input.type = 'text';
               this.classList.remove('fa-eye');
               this.classList.add('fa-eye-slash');
            } else {
               input.type = 'password';
               this.classList.remove('fa-eye-slash');
               this.classList.add('fa-eye');
            }
         }
      });
   });
});
</script>

</body>
</html>
