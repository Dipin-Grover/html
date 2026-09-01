<?php
require_once 'inc/auth.php';
redirectIfNotLoggedIn('sign-in.php');
$user = getLoggedInUser();
?>
<!doctype html>
<html class="no-js" lang="zxx">
  <head>
    <?php include 'inc/head.php'; ?>
    <style>
      .account-sidebar-link {
        font-size: 14px; 
        border: none;
        transition: all 0.2s ease;
      }
      .account-sidebar-link:hover, .account-sidebar-link.active {
        background-color: rgba(13, 110, 253, 0.1) !important;
        color: #0d6efd !important;
        font-weight: 600 !important;
      }
      .account-sidebar-link.active i {
        color: #0d6efd !important;
      }
      .dashboard-card {
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        cursor: pointer;
        border-radius: 12px;
      }
      .dashboard-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important;
      }
      .dashboard-icon-box {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        font-size: 24px;
      }
      /* Colors based on image 2 */
      .icon-order { color: #f59e0b; }
      .icon-address { color: #ef4444; }
      .icon-security { color: #eab308; }
      .icon-warranty { color: #22c55e; }
      .icon-delivery { color: #3b82f6; }
      .icon-invoice { color: #6366f1; }
      .icon-support { color: #06b6d4; }
      .icon-logout { color: #f43f5e; }
    </style>
  </head>

  <body>
    <?php include 'inc/header.php'; ?>

    <div id="smooth-content">
      <main>
        <div class="py-5 bg-light orders-wrapper" style="padding-top: 120px !important; padding-bottom: 120px !important; min-height: 80vh;">
          <div class="container" style="max-width: 1200px;">
            
            <div class="row mb-4">
              <div class="col-12">
                <h2 class="fw-bold text-dark fs-3 mb-1">Your Account</h2>
                <p class="text-secondary mb-0" style="font-size: 14px;"><?php echo htmlspecialchars($user['name']); ?>, Email: <?php echo htmlspecialchars($user['email']); ?></p>
              </div>
            </div>

            <div class="row">
              <!-- Sidebar (Image 1 Style with Image 2 Fields) -->
              <div class="col-lg-3 mb-4 mb-lg-0">
                <div class="list-group list-group-flush bg-white rounded shadow-sm p-2" style="border: none;">
                  <a href="orders.php" class="list-group-item list-group-item-action py-2 px-3 fw-medium text-dark rounded mb-1 account-sidebar-link active">
                    <i class="fas fa-truck text-muted me-2" style="width: 20px;"></i> Your Order
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 px-3 fw-medium text-dark rounded mb-1 account-sidebar-link">
                    <i class="fas fa-map-marker-alt text-muted me-2" style="width: 20px;"></i> Your Address
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 px-3 fw-medium text-dark rounded mb-1 account-sidebar-link">
                    <i class="fas fa-lock text-muted me-2" style="width: 20px;"></i> Login & Security
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 px-3 fw-medium text-dark rounded mb-1 account-sidebar-link">
                    <i class="fas fa-certificate text-muted me-2" style="width: 20px;"></i> Warranty Check
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 px-3 fw-medium text-dark rounded mb-1 account-sidebar-link">
                    <i class="fas fa-shipping-fast text-muted me-2" style="width: 20px;"></i> Delivery Status
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 px-3 fw-medium text-dark rounded mb-1 account-sidebar-link">
                    <i class="fas fa-download text-muted me-2" style="width: 20px;"></i> Download invoice
                  </a>
                  <div class="border-top my-2"></div>
                  <a href="contact.php" class="list-group-item list-group-item-action py-2 px-3 fw-medium text-dark rounded mb-1 account-sidebar-link">
                    <i class="fas fa-comment-dots text-muted me-2" style="width: 20px;"></i> Support
                  </a>
                  <a href="sign-in.php" class="list-group-item list-group-item-action py-2 px-3 fw-medium text-dark rounded mb-1 account-sidebar-link">
                    <i class="fas fa-sign-out-alt text-muted me-2" style="width: 20px;"></i> Logout
                  </a>
                </div>
              </div>

              <!-- Main Content (Dashboard Grid from Image 2) -->
              <div class="col-lg-9">
                <div class="bg-white rounded shadow-sm p-4 p-md-5 border mb-4">
                  <h3 class="fw-bold mb-2">Welcome!</h3>
                  <p class="fw-medium text-dark mb-1">Hi, <?php echo htmlspecialchars($user['name']); ?></p>
                  <p class="text-secondary mb-4" style="font-size: 15px;">
                    Today is a great day to check your account page. You can check your last order or have a look to your wishlist. Or may be you can start to shop and check our latest offers?
                  </p>

                  <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                    
                    <!-- Card 1 -->
                    <div class="col">
                      <div class="card h-100 border dashboard-card" onclick="window.location.href='orders.php'">
                        <div class="card-body d-flex align-items-start p-4">
                          <div class="dashboard-icon-box me-3 bg-light">
                            <i class="fas fa-box-open icon-order"></i>
                          </div>
                          <div>
                            <h6 class="fw-bold mb-1">Your Order</h6>
                            <p class="text-secondary mb-0" style="font-size: 13px;">Track, return, or buy things again</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="col">
                      <div class="card h-100 border dashboard-card">
                        <div class="card-body d-flex align-items-start p-4">
                          <div class="dashboard-icon-box me-3 bg-light">
                            <i class="fas fa-map-marker-alt icon-address"></i>
                          </div>
                          <div>
                            <h6 class="fw-bold mb-1">Your Address</h6>
                            <p class="text-secondary mb-0" style="font-size: 13px;">Edit addresses for orders and gifts</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="col">
                      <div class="card h-100 border dashboard-card">
                        <div class="card-body d-flex align-items-start p-4">
                          <div class="dashboard-icon-box me-3 bg-light">
                            <i class="fas fa-lock icon-security"></i>
                          </div>
                          <div>
                            <h6 class="fw-bold mb-1">Login & Security</h6>
                            <p class="text-secondary mb-0" style="font-size: 13px;">Edit login, name, and mobile number</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Card 4 -->
                    <div class="col">
                      <div class="card h-100 border dashboard-card">
                        <div class="card-body d-flex align-items-start p-4">
                          <div class="dashboard-icon-box me-3 bg-light">
                            <i class="fas fa-shield-alt icon-warranty"></i>
                          </div>
                          <div>
                            <h6 class="fw-bold mb-1">Warranty Check</h6>
                            <p class="text-secondary mb-0" style="font-size: 13px;">Check your product warranty</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Card 5 -->
                    <div class="col">
                      <div class="card h-100 border dashboard-card">
                        <div class="card-body d-flex align-items-start p-4">
                          <div class="dashboard-icon-box me-3 bg-light">
                            <i class="fas fa-truck icon-delivery"></i>
                          </div>
                          <div>
                            <h6 class="fw-bold mb-1">Delivery Status</h6>
                            <p class="text-secondary mb-0" style="font-size: 13px;">Check your product delivery status</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Card 6 -->
                    <div class="col">
                      <div class="card h-100 border dashboard-card">
                        <div class="card-body d-flex align-items-center p-4">
                          <div class="dashboard-icon-box me-3 bg-light">
                            <i class="fas fa-file-invoice-dollar icon-invoice"></i>
                          </div>
                          <div>
                            <h6 class="fw-bold mb-0">Download invoice</h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Card 7 -->
                    <div class="col">
                      <div class="card h-100 border dashboard-card" onclick="window.location.href='contact.php'">
                        <div class="card-body d-flex align-items-center p-4">
                          <div class="dashboard-icon-box me-3 bg-light">
                            <i class="fas fa-headset icon-support"></i>
                          </div>
                          <div>
                            <h6 class="fw-bold mb-0">Support</h6>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Card 8 -->
                    <div class="col">
                      <div class="card h-100 border dashboard-card" onclick="window.location.href='sign-in.php'">
                        <div class="card-body d-flex align-items-center p-4">
                          <div class="dashboard-icon-box me-3 bg-light">
                            <i class="fas fa-sign-out-alt icon-logout"></i>
                          </div>
                          <div>
                            <h6 class="fw-bold mb-0">Logout</h6>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <?php include 'inc/footer.php'; ?>
    </div>

    <!-- JS here -->
    <?php include 'inc/footer-links.php'; ?>
  </body>
</html>
