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
            <!-- Hero Section -->
            <section class="position-relative py-5" style="background-image: linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.3) 100%), url('assets/img/warranty/warranty_hero.jpg'); background-size: cover; background-position: center;">
                <div class="container py-5 my-4">
                    <div class="row">
                        <div class="col-lg-8">
                            <h1 class="text-white display-4 fw-bold mb-3">Check Your Warranty Status</h1>
                            <p class="text-white-50 fs-5 mb-0 lh-base" style="max-width: 600px;">To check the validity and details of your warranty, simply provide your serial number below, and let us confirm the coverage for your DeltaView Product.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Check Warranty Section -->
            <section class="bg-light py-5 text-center">
                <div class="container py-5">
                    <h2 class="fs-2 fw-bold text-dark mb-3">Find Your Support Services Status</h2>
                    <p class="text-secondary fs-6 mb-5">Enter a DeltaView Service Tag or a DeltaView Product Serial Number.</p>
                    
                    <form action="#" method="GET" class="mx-auto" style="max-width: 600px;">
                        <div class="input-group input-group-lg shadow-sm rounded-3">
                           <input type="text" name="serial" class="form-control border-secondary-subtle fs-6 py-3 px-4 shadow-none border-end-0" placeholder="Enter your serial number" required>
                           <button type="submit" class="btn btn-dark fw-bold px-4 px-md-5 fs-6 shadow-none" style="letter-spacing: 0.5px; background-color: #1e293b;">CHECK WARRANTY</button>
                        </div>
                    </form>
                </div>
            </section>

            <!-- Warranty Info Section -->
            <section class="py-5 bg-white">
                <div class="container py-5">
                    <div class="row g-0 rounded-4 overflow-hidden border shadow-sm bg-light d-flex align-items-stretch">
                        <div class="col-md-6 p-4 p-lg-5 d-flex align-items-center">
                            <p class="text-secondary fs-6 lh-lg mb-0">Dive into an immersive teaching and collaboration experience with DeltaView's Interactive Panel, backed by a robust three-year warranty. Our commitment to quality ensures a seamless and supported educational and enterprise journey. Please note, while we don't provide intentional damage warranty, our focus on durability guarantees a reliable platform for engaging lessons and collaborative sessions.</p>
                        </div>
                        <div class="col-md-6">
                            <img src="assets/img/warranty/warranty_panel.jpg" alt="Panel" class="w-100 h-100 object-fit-cover" style="min-height: 350px;">
                        </div>
                    </div>
                </div>
            </section>

            <!-- Claim Warranty Section -->
            <section class="py-5 bg-light mb-5">
                <div class="container py-5">
                    <div class="row align-items-center g-5">
                        <div class="col-md-6 text-center text-md-start">
                            <img src="assets/img/warranty/warranty_claim.jpg" alt="Manufacturer's Warranty" class="img-fluid rounded-4 shadow w-100" style="max-width: 500px;">
                        </div>
                        <div class="col-md-6 text-center text-md-start">
                            <h3 class="fs-2 fw-bold text-dark mb-3">Claim Warranty</h3>
                            <p class="text-secondary fs-6 mb-4">Activate warranty coverage for hassle-free support services.</p>
                            <a href="service-request.php" class="btn btn-dark fw-semibold px-4 py-2 rounded">Claim Now</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        
        <?php include 'inc/footer.php'; ?>
        <?php include 'inc/footer-links.php'; ?>
    </div>
</body>
</html>
