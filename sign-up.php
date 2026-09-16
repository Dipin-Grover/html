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
</head>

<body>

<div class="vh-100 d-flex align-items-center justify-content-center overflow-hidden bg-light">
   
   <div class="w-100 bg-white d-flex flex-column flex-lg-row h-100 overflow-hidden">
      
      <!-- Left Form Side -->
      <div class="flex-grow-1 d-flex flex-column align-items-center justify-content-center p-4 position-relative overflow-auto" style="flex: 1;">
         <a href="index.php" class="position-absolute top-0 start-0 m-4 fw-medium text-secondary text-decoration-none d-flex align-items-center"><i class="fal fa-arrow-left me-2"></i> Back to home</a>
         
         <div class="w-100 bg-white p-4 p-md-5 rounded-4 shadow-sm border" style="max-width: 480px;">
            
            <div class="text-center mb-4">
               <h2 class="fs-5 fw-bolder text-uppercase mb-1" style="color: #10302a; letter-spacing: 0.5px;">SIGN UP TO YOUR ACCOUNT</h2>
               <?php if($error): ?>
                   <div class="alert alert-danger p-2 mt-2 border-0 rounded fs-6"><?php echo htmlspecialchars($error); ?></div>
               <?php endif; ?>
            </div>
            
            <form action="sign-up.php" method="POST">
               
               <div class="row g-2 mb-3">
                  <div class="col-sm-6 position-relative">
                     <i class="fal fa-user position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></i>
                     <input type="text" name="fname" class="form-control rounded-pill ps-5 py-2 shadow-none border" placeholder="First Name *" required>
                  </div>
                  <div class="col-sm-6 position-relative">
                     <i class="fal fa-user position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></i>
                     <input type="text" name="lname" class="form-control rounded-pill ps-5 py-2 shadow-none border" placeholder="Last Name *" required>
                  </div>
               </div>
               
               <div class="row g-2 mb-3">
                  <div class="col-sm-6 position-relative">
                     <i class="fal fa-envelope position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></i>
                     <input type="email" name="email" class="form-control rounded-pill ps-5 py-2 shadow-none border" placeholder="Email id *" required>
                  </div>
                  <div class="col-sm-6 position-relative">
                     <i class="fal fa-phone position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></i>
                     <input type="tel" name="phone" class="form-control rounded-pill ps-5 py-2 shadow-none border" placeholder="Mobile No. *" required>
                  </div>
               </div>
               
               <div class="row g-2 mb-3">
                  <div class="col-sm-6 position-relative">
                     <i class="fal fa-lock position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></i>
                     <input type="password" name="password" class="form-control rounded-pill ps-5 py-2 shadow-none border" placeholder="Password *" required>
                     <i class="fal fa-eye position-absolute top-50 translate-middle-y text-secondary pe-3 end-0" role="button"></i>
                  </div>
                  <div class="col-sm-6 position-relative">
                     <i class="fal fa-lock position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></i>
                     <input type="password" name="confirm_password" class="form-control rounded-pill ps-5 py-2 shadow-none border" placeholder="Confirm Password *" required>
                     <i class="fal fa-eye position-absolute top-50 translate-middle-y text-secondary pe-3 end-0" role="button"></i>
                  </div>
               </div>
               
               <div class="input-group mb-3">
                  <span class="input-group-text bg-primary text-white fw-bold border-primary rounded-start-pill px-4" style="letter-spacing: 1px;"><?php echo $captcha_num1; ?> + <?php echo $captcha_num2; ?> =</span>
                  <input type="text" name="captcha" class="form-control rounded-end-pill py-2 shadow-none border-start-0" placeholder="Enter captcha*" required>
               </div>
               
               <div class="d-flex align-items-start mb-4">
                  <div class="form-check mb-0">
                     <input type="checkbox" class="form-check-input shadow-none mt-1" id="terms" required>
                     <label class="form-check-label text-secondary" style="font-size: 12px; line-height: 1.4;" for="terms">I have read the Privacy Policy, Terms and agree to allow DeltaView to process my personal data for the purposes above. <a href="#" class="text-primary text-decoration-underline">privacy policy</a></label>
                  </div>
               </div>
               
               <button type="submit" class="btn btn-primary w-100 rounded-pill py-2 fw-bold mb-3 shadow-none">Register Now</button>
               
               <div class="text-center mb-3">
                  <p class="fs-6 mb-0 text-secondary">Already have an account? <a href="sign-in.php" class="text-primary fw-semibold">Sign In</a></p>
               </div>
               
               <div class="d-flex align-items-center text-secondary small text-uppercase mb-3" style="letter-spacing: 1px;">
                  <hr class="flex-grow-1 mx-3"> OR <hr class="flex-grow-1 mx-3">
               </div>
               
               <a href="#" class="btn btn-outline-secondary w-100 rounded-pill py-2 fw-bold d-flex align-items-center justify-content-center shadow-none text-dark bg-white">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" class="me-2" style="width: 16px;">
                  Continue with Gmail
               </a>
               
            </form>
         </div>
      </div>
      
      <!-- Right Graphic Side -->
      <div class="d-none d-lg-flex flex-column p-0 position-relative" style="flex: 1;">
         <div class="flex-grow-1 bg-dark position-relative auth-right-top" style="background-image: url('assets/img/auth-bg-1.jpg'); background-size: cover; background-position: center; transition: background-image 0.5s ease; min-height: 65%;">
            <div class="position-absolute w-100 h-100 top-0 start-0" style="background: rgba(0,0,0,0.1);"></div>
         </div>
         <div class="text-white p-5 d-flex flex-column justify-content-center position-relative overflow-hidden" style="background: #10302a; min-height: 35%;">
            <div class="position-relative z-3 auth-content-box">
               <div class="d-flex gap-2 mb-3 auth-slider-dots">
                  <span class="rounded-pill bg-white active" style="width: 20px; height: 6px; cursor: pointer; transition: all 0.3s ease;"></span>
                  <span class="rounded-pill bg-white opacity-50" style="width: 6px; height: 6px; cursor: pointer; transition: all 0.3s ease;"></span>
                  <span class="rounded-pill bg-white opacity-50" style="width: 6px; height: 6px; cursor: pointer; transition: all 0.3s ease;"></span>
               </div>
               <h3 class="fs-3 fw-bold mb-3 lh-sm text-white">Smarter Solutions<br>for Modern Teams</h3>
               <p class="text-white-50 mb-0 w-75">Receive personalized tips and recommendations. Our insights features help you make informed decisions effortlessly.</p>
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
         if(i === currentSlide) {
             dot.classList.add('active');
             dot.style.width = '20px';
             dot.classList.remove('opacity-50');
         } else {
             dot.classList.remove('active');
             dot.style.width = '6px';
             dot.classList.add('opacity-50');
         }
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
