<?php
require_once 'inc/auth.php';
redirectIfNotLoggedIn('sign-in.php');
$user = getLoggedInUser();

// Fetch orders
$stmt = $pdo->prepare("SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC");
$stmt->execute([$user['id']]);
$orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<!doctype html>
<html class="no-js" lang="zxx">
  <head>
    <?php include 'inc/head.php'; ?>
    <style>
      /* 
  Custom styles have been removed. 
  This page now strictly uses Bootstrap 5 utilities for a clean structure. 
*/
    </style>
  </head>

  <body>
    <?php include 'inc/header.php'; ?>

    <div id="smooth-content">
      <main>
        <div class="py-5 bg-light orders-wrapper" style="padding-top: 120px !important; padding-bottom: 120px !important; min-height: 80vh; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <div class="container" style="max-width: 1200px;">
            <div class="row mb-4">
              <div class="col-12">
                <h2 class="fw-bold text-dark fs-3 mb-1">Your Account</h2>
                <p class="text-secondary mb-0" style="font-size: 14px;"><?php echo htmlspecialchars($user['name']); ?>, Email: <?php echo htmlspecialchars($user['email']); ?></p>
              </div>
            </div>
            <div class="row">
              <!-- Sidebar -->
              <div class="col-lg-3 mb-4 mb-lg-0">
                <div class="list-group list-group-flush" style="border: none;">
                  <a href="orders.php" class="list-group-item list-group-item-action py-2 px-3 fw-medium text-primary bg-primary bg-opacity-10 rounded mb-1" style="font-size: 14px; border: none;">
                    <i class="fas fa-truck text-primary me-2" style="width: 20px;"></i> My orders
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 px-3 fw-medium text-dark rounded mb-1" style="font-size: 14px; border: none;">
                    <i class="fas fa-map-marker-alt text-muted me-2" style="width: 20px;"></i> Your addresses
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 px-3 fw-medium text-dark rounded mb-1" style="font-size: 14px; border: none;">
                    <i class="fas fa-lock text-muted me-2" style="width: 20px;"></i> Login & security
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 px-3 fw-medium text-dark rounded mb-1" style="font-size: 14px; border: none;">
                    <i class="fas fa-credit-card text-muted me-2" style="width: 20px;"></i> Payments
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 px-3 fw-medium text-dark rounded mb-1" style="font-size: 14px; border: none;">
                    <i class="fas fa-archive text-muted me-2" style="width: 20px;"></i> Archived orders
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 px-3 fw-medium text-dark rounded mb-1" style="font-size: 14px; border: none;">
                    <i class="fas fa-heart text-muted me-2" style="width: 20px;"></i> Saved items
                  </a>
                  <div class="border-top my-3"></div>
                  <a href="#" class="list-group-item list-group-item-action py-2 px-3 fw-medium text-dark rounded mb-1" style="font-size: 14px; border: none;">
                    <i class="fas fa-comment-dots text-muted me-2" style="width: 20px;"></i> Customer support
                  </a>
                  <a href="sign-in.php" class="list-group-item list-group-item-action py-2 px-3 fw-medium text-dark rounded mb-1" style="font-size: 14px; border: none;">
                    <i class="fas fa-sign-out-alt text-muted me-2" style="width: 20px;"></i> Log out
                  </a>
                </div>
              </div>

              <!-- Content -->
              <div class="col-lg-9">
                <!-- Tabs -->
                <div class="d-flex mb-4 bg-white rounded p-1 shadow-sm border" style="width: max-content;">
                  <button class="btn btn-white bg-white rounded px-4 py-1 text-dark fw-medium shadow-sm border" style="font-size: 14px;">Current</button>
                  <button class="btn btn-white rounded px-4 py-1 text-secondary fw-medium border-0 bg-transparent" style="font-size: 14px;">Unpaid</button>
                  <button class="btn btn-white rounded px-4 py-1 text-secondary fw-medium border-0 bg-transparent" style="font-size: 14px;">All orders</button>
                </div>
                
                <div id="orders-container">
                  <?php if (empty($orders)): ?>
                    <div class="text-center py-5 text-secondary bg-white rounded border">No orders found. Start shopping!</div>
                  <?php else: ?>
                    <?php foreach ($orders as $order): ?>
                      <?php
                      // Fetch items for this order
                      $stmtItems = $pdo->prepare("SELECT * FROM order_items WHERE order_id = ?");
                      $stmtItems->execute([$order['id']]);
                      $items = $stmtItems->fetchAll(PDO::FETCH_ASSOC);
                      $totalProducts = array_sum(array_column($items, 'quantity'));
                      $orderDate = date("M j, Y, g:i a", strtotime($order['created_at']));
                      $statusColor = (strtolower($order['status']) === 'processing' || strtolower($order['status']) === 'on the way') ? 'text-warning' : 'text-success';
                      $formattedTotal = '₹' . number_format($order['total_amount'], 2);
                      ?>
                      
                      <div class="card mb-4 border rounded shadow-sm">
                        <div class="card-header bg-white border-bottom p-4 d-flex justify-content-between align-items-center flex-wrap gap-3">
                          <div>
                            <h5 class="fw-bold mb-1 fs-6">Order #: <?php echo $order['id']; ?></h5>
                            <p class="text-secondary mb-0" style="font-size: 13px;"><?php echo $totalProducts; ?> Products | By <?php echo htmlspecialchars($user['name']); ?> | <?php echo $orderDate; ?></p>
                          </div>
                          <div>
                            <button class="btn btn-outline-secondary btn-sm px-3 fw-medium text-dark me-2" style="border-radius: 6px; font-size: 13px;"><i class="fas fa-download me-2"></i>Download invoice</button>
                            <button class="btn btn-outline-secondary btn-sm text-dark px-2" style="border-radius: 6px;"><i class="fas fa-ellipsis-v"></i></button>
                          </div>
                        </div>
                        <div class="card-body p-4">
                          <div class="row mb-4">
                            <div class="col-md-8">
                              <table class="table table-borderless table-sm mb-0" style="font-size: 14px;">
                                <tbody>
                                  <tr>
                                    <td class="text-secondary py-1 ps-0" style="width: 140px;">Status:</td>
                                    <td class="fw-medium <?php echo $statusColor; ?> py-1"><?php echo htmlspecialchars($order['status']); ?></td>
                                  </tr>
                                  <tr>
                                    <td class="text-secondary py-1 ps-0">Date of delivery:</td>
                                    <td class="text-dark py-1">Est. 3-5 business days</td>
                                  </tr>
                                  <tr>
                                    <td class="text-secondary py-1 ps-0">Total:</td>
                                    <td class="fw-bold text-dark py-1"><?php echo $formattedTotal; ?></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          
                          <div class="row row-cols-1 row-cols-md-2 g-4">
                            <?php foreach ($items as $item): ?>
                               <?php
                               $imgHtml = $item['image'] ? '<img src="'.htmlspecialchars($item['image']).'" alt="'.htmlspecialchars($item['product_name']).'" class="img-fluid" style="max-height: 60px;">' : '<i class="fas fa-box text-secondary fs-3"></i>';
                               $priceText = $item['price'] > 0 ? '₹' . number_format($item['price'], 2) : 'N/A';
                               $itemTotal = $item['price'] > 0 ? '₹' . number_format($item['price'] * $item['quantity'], 2) : '';
                               ?>
                               <div class="col">
                                  <div class="d-flex align-items-center">
                                     <div class="bg-light rounded p-2 me-3 d-flex justify-content-center align-items-center" style="width: 80px; height: 80px; border: 1px solid #f1f1f1;">
                                        <?php echo $imgHtml; ?>
                                     </div>
                                     <div>
                                        <h6 class="mb-1 text-dark fs-6" style="font-size: 14px;"><?php echo htmlspecialchars($item['product_name']); ?></h6>
                                        <p class="text-secondary mb-0" style="font-size: 13px;">Quantity: <?php echo $item['quantity']; ?>x = <?php echo $itemTotal ?: $priceText; ?></p>
                                     </div>
                                  </div>
                               </div>
                            <?php endforeach; ?>
                            <?php if (empty($items)): ?>
                               <div class="col"><p class="text-secondary">No items detailed.</p></div>
                            <?php endif; ?>
                          </div>
                        </div>
                      </div>
                    <?php endforeach; ?>
                  <?php endif; ?>
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
    <script>
      document.addEventListener("DOMContentLoaded", function () {
          // JS rendering removed as it's now handled by PHP
      });
    </script>
  </body>
</html>
