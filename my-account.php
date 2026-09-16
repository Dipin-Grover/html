<?php
require_once 'inc/auth.php';
redirectIfNotLoggedIn('sign-in.php');
$user = getLoggedInUser();

$tab = $_GET['tab'] ?? 'orders';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'save_address') {
    $addressId = $_POST['address_id'] ?? '';
    $firstName = $_POST['first_name'] ?? '';
    $lastName = $_POST['last_name'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $email = $_POST['email'] ?? '';
    $company = $_POST['company'] ?? '';
    $gst = $_POST['gst'] ?? '';
    $addressLine1 = $_POST['address_line1'] ?? '';
    $addressLine2 = $_POST['address_line2'] ?? '';
    $city = $_POST['city'] ?? '';
    $state = $_POST['state'] ?? '';
    $zip = $_POST['zip'] ?? '';
    
    if (!empty($addressId)) {
        $stmt = $pdo->prepare("UPDATE addresses SET first_name = ?, last_name = ?, phone = ?, email = ?, company = ?, gst = ?, address_line1 = ?, address_line2 = ?, city = ?, state = ?, zip = ? WHERE id = ? AND user_id = ?");
        $stmt->execute([$firstName, $lastName, $phone, $email, $company, $gst, $addressLine1, $addressLine2, $city, $state, $zip, $addressId, $user['id']]);
    } else {
        $checkStmt = $pdo->prepare("SELECT id FROM addresses WHERE user_id = ? AND LOWER(TRIM(address_line1)) = LOWER(TRIM(?)) AND LOWER(TRIM(city)) = LOWER(TRIM(?)) AND LOWER(TRIM(state)) = LOWER(TRIM(?)) AND zip = ?");
        $checkStmt->execute([$user['id'], $addressLine1, $city, $state, $zip]);
        if ($checkStmt->rowCount() === 0) {
            $stmt = $pdo->prepare("INSERT INTO addresses (user_id, type, first_name, last_name, phone, email, company, gst, address_line1, address_line2, city, state, zip, country) VALUES (?, 'billing', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'India')");
            $stmt->execute([$user['id'], $firstName, $lastName, $phone, $email, $company, $gst, $addressLine1, $addressLine2, $city, $state, $zip]);
        }
    }
    
    header("Location: my-account.php?tab=addresses");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'make_default') {
    $addressId = $_POST['address_id'] ?? '';
    if (!empty($addressId)) {
        $stmt = $pdo->prepare("UPDATE addresses SET created_at = CURRENT_TIMESTAMP WHERE id = ? AND user_id = ?");
        $stmt->execute([$addressId, $user['id']]);
    }
    
    header("Location: my-account.php?tab=addresses");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'save_security') {
    $firstName = $_POST['first_name'] ?? '';
    $lastName = $_POST['last_name'] ?? '';
    $displayName = trim($firstName . ' ' . $lastName);
    $email = $_POST['email'] ?? '';
    $currentPassword = $_POST['current_password'] ?? '';
    $newPassword = $_POST['new_password'] ?? '';
    $confirmPassword = $_POST['confirm_password'] ?? '';
    
    $securityFieldErrors = [];
    $securitySuccess = null;
    
    // Check if password change is requested
    if (!empty($newPassword) || !empty($currentPassword) || !empty($confirmPassword)) {
        if (empty($currentPassword)) {
            $securityFieldErrors['current_password'] = "Please enter your current password.";
        } elseif (!password_verify($currentPassword, $user['password_hash'])) {
            $securityFieldErrors['current_password'] = "Invalid old password.";
        } elseif (empty($newPassword)) {
            $securityFieldErrors['new_password'] = "Please enter a new password.";
        } elseif ($newPassword !== $confirmPassword) {
            $securityFieldErrors['confirm_password'] = "Passwords do not match.";
        } else {
            // Update everything including password
            $newHash = password_hash($newPassword, PASSWORD_DEFAULT);
            $stmt = $pdo->prepare("UPDATE users SET first_name = ?, last_name = ?, display_name = ?, email = ?, password_hash = ? WHERE id = ?");
            $stmt->execute([$firstName, $lastName, $displayName, $email, $newHash, $user['id']]);
            $securitySuccess = "Account details and password updated successfully.";
        }
    } else {
        // Just update names and email
        $stmt = $pdo->prepare("UPDATE users SET first_name = ?, last_name = ?, display_name = ?, email = ? WHERE id = ?");
        $stmt->execute([$firstName, $lastName, $displayName, $email, $user['id']]);
        $securitySuccess = "Account details updated successfully.";
    }
    
    // Refresh user object
    if (empty($securityFieldErrors)) {
        $user = getLoggedInUser();
    }
}

// Fetch orders and their associated addresses
$stmt = $pdo->prepare("SELECT o.*, a.address_line1, a.city, a.state, a.zip, a.country 
                       FROM orders o 
                       LEFT JOIN addresses a ON o.address_id = a.id 
                       WHERE o.user_id = ? 
                       ORDER BY o.created_at DESC");
$stmt->execute([$user['id']]);
$orders = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Fetch all billing addresses
$stmt = $pdo->prepare("SELECT * FROM addresses WHERE user_id = ? AND type = 'billing' ORDER BY created_at DESC");
$stmt->execute([$user['id']]);
$billingAddresses = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Fetch latest shipping address
$stmt = $pdo->prepare("SELECT * FROM addresses WHERE user_id = ? AND type = 'shipping' ORDER BY created_at DESC LIMIT 1");
$stmt->execute([$user['id']]);
$shippingAddress = $stmt->fetch(PDO::FETCH_ASSOC);
?>
<!doctype html>
<html class="no-js" lang="zxx">
  <head>
    <?php include 'inc/head.php'; ?>
  </head>

  <body style="background-color: #f8fafc;">
    <?php include 'inc/header.php'; ?>

    <div id="smooth-content">
      <main>
        <div class="py-5" style="padding-top: 120px !important; padding-bottom: 120px !important; min-height: 80vh;">
          <div class="container" style="max-width: 1200px;">
            
            <div class="row mb-5">
              <div class="col-12">
                <h2 class="fw-bold text-dark fs-3 mb-1">Your Account</h2>
                <?php $headerName = !empty($user['display_name']) ? $user['display_name'] : (!empty(trim(($user['first_name'] ?? '') . ' ' . ($user['last_name'] ?? ''))) ? trim(($user['first_name'] ?? '') . ' ' . ($user['last_name'] ?? '')) : $user['name']); ?>
                <p class="text-secondary mb-0" style="font-size: 14px;"><?php echo htmlspecialchars($headerName); ?> &bull; <?php echo htmlspecialchars($user['email']); ?></p>
              </div>
            </div>

            <div class="row">
              <!-- Sidebar -->
              <div class="col-lg-3 mb-4 mb-lg-0">
                <div class="list-group list-group-flush bg-white rounded-4 shadow-sm p-3 border">
                    <a href="?tab=orders" class="list-group-item list-group-item-action border-0 d-flex align-items-center px-3 py-2 mb-1 rounded-3 <?php echo $tab === 'orders' ? 'bg-light text-primary fw-semibold' : 'text-secondary'; ?>">
                    <i class="fal fa-truck <?php echo $tab === 'orders' ? 'text-primary' : 'text-muted'; ?> me-2" style="width: 26px; font-size: 18px;"></i> Your Order
                  </a>
                  <a href="?tab=addresses" class="list-group-item list-group-item-action border-0 d-flex align-items-center px-3 py-2 mb-1 rounded-3 <?php echo $tab === 'addresses' ? 'bg-light text-primary fw-semibold' : 'text-secondary'; ?>">
                    <i class="fal fa-map-marker-alt <?php echo $tab === 'addresses' ? 'text-primary' : 'text-muted'; ?> me-2" style="width: 26px; font-size: 18px;"></i> Your Address
                  </a>
                  <a href="?tab=security" class="list-group-item list-group-item-action border-0 d-flex align-items-center px-3 py-2 mb-1 rounded-3 <?php echo $tab === 'security' ? 'bg-light text-primary fw-semibold' : 'text-secondary'; ?>">
                    <i class="fal fa-lock <?php echo $tab === 'security' ? 'text-primary' : 'text-muted'; ?> me-2" style="width: 26px; font-size: 18px;"></i> Login & Security
                  </a>
                  <a href="warranty-check.php" class="list-group-item list-group-item-action border-0 d-flex align-items-center px-3 py-2 mb-1 rounded-3 text-secondary">
                    <i class="fal fa-shield-check text-muted me-2" style="width: 26px; font-size: 18px;"></i> Warranty Check
                  </a>
                  <a href="?tab=delivery-status" class="list-group-item list-group-item-action border-0 d-flex align-items-center px-3 py-2 mb-1 rounded-3 <?php echo $tab === 'delivery-status' ? 'bg-light text-primary fw-semibold' : 'text-secondary'; ?>">
                    <i class="fal fa-shipping-fast <?php echo $tab === 'delivery-status' ? 'text-primary' : 'text-muted'; ?> me-2" style="width: 26px; font-size: 18px;"></i> Delivery Status
                  </a>
                  <!-- <a href="?tab=download-invoice" class="list-group-item list-group-item-action border-0 d-flex align-items-center px-3 py-2 mb-1 rounded-3 <?php echo $tab === 'download-invoice' ? 'bg-light text-primary fw-semibold' : 'text-secondary'; ?>">
                    <i class="fal fa-file-invoice <?php echo $tab === 'download-invoice' ? 'text-primary' : 'text-muted'; ?> me-2" style="width: 26px; font-size: 18px;"></i> Download invoice
                  </a> -->
                  <div class="border-top my-3 mx-3"></div>
                  <a href="?tab=support" class="list-group-item list-group-item-action border-0 d-flex align-items-center px-3 py-2 mb-1 rounded-3 <?php echo $tab === 'support' ? 'bg-light text-primary fw-semibold' : 'text-secondary'; ?>">
                    <i class="fal fa-headset <?php echo $tab === 'support' ? 'text-primary' : 'text-muted'; ?> me-2" style="width: 26px; font-size: 18px;"></i> Support
                  </a>
                  <a href="logout.php" class="list-group-item list-group-item-action border-0 d-flex align-items-center px-3 py-2 mb-1 rounded-3 text-secondary">
                    <i class="fal fa-sign-out-alt text-muted me-2" style="width: 26px; font-size: 18px;"></i> Logout
                  </a>
                </div>
              </div>

            <!-- Main Content -->
              <div class="col-lg-9">
                <?php if ($tab === 'orders'): ?>
                <div id="orders-container">
                  <?php if (empty($orders)): ?>
                    <div class="alert alert-info text-center py-5 rounded-4 shadow-sm" style="border: 1px solid #e2e8f0; background-color: #f8fafc;">
                      <i class="fal fa-shopping-bag fa-3x text-secondary mb-3"></i>
                      <h4 class="fw-bold mb-2">No Orders Found</h4>
                      <p class="text-muted mb-4">Looks like you haven't made your first purchase yet.</p>
                      <a href="index.php" class="btn btn-primary px-4 py-2" style="border-radius: 8px;">Start Shopping</a>
                    </div>
                  <?php else: ?>
                    <?php foreach ($orders as $order): ?>
                      <?php
                        $stmtItems = $pdo->prepare("SELECT * FROM order_items WHERE order_id = ?");
                        $stmtItems->execute([$order['id']]);
                        $items = $stmtItems->fetchAll(PDO::FETCH_ASSOC);
                      ?>
                      <div class="card mb-5 border shadow-sm rounded-4 overflow-hidden">
                        <div class="card-header bg-light border-bottom py-3 px-4 d-flex justify-content-between align-items-center">
                          <div>
                            <h5 class="fw-bold mb-1 text-dark">Order #: <?php echo $order['id']; ?></h5>
                            <span class="text-secondary" style="font-size: 13px;">
                              <?php echo count($items); ?> Products | By <?php echo htmlspecialchars($user['name']); ?> | <?php echo date('M j, Y, g:i a', strtotime($order['created_at'])); ?>
                            </span>
                          </div>
                          <div>
                            <button class="btn btn-outline-secondary btn-sm px-4 py-2 fw-semibold text-dark me-2" style="border-radius: 8px; font-size: 13px;"><i class="fal fa-arrow-down-to-bracket me-2 text-muted"></i>Invoice</button>
                          </div>
                        </div>
                        <div class="card-body p-4">
                          <div class="row">
                            <!-- Left Side: Products -->
                            <div class="col-lg-7 border-end pe-lg-4 mb-4 mb-lg-0" style="border-color: #e2e8f0 !important;">
                              <h6 class="fw-bold mb-4" style="font-size: 15px; color: #334155;">Products</h6>
                              <div class="row row-cols-1 row-cols-md-2 g-4">
                                <?php foreach ($items as $item): ?>
                                   <?php
                                   $imgHtml = $item['image'] ? '<img src="'.htmlspecialchars($item['image']).'" alt="'.htmlspecialchars($item['product_name']).'" style="width: 100%; height: 100%; object-fit: cover; border-radius: 11px;">' : '<i class="fal fa-box-open text-secondary fs-3"></i>';
                                   ?>
                                   <div class="col">
                                      <div class="d-flex align-items-center">
                                         <div class="bg-light border rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 me-3" style="width: 72px; height: 72px;">
                                            <?php echo $imgHtml; ?>
                                         </div>
                                         <div>
                                            <h6 class="mb-1 fw-semibold" style="font-size: 14px; line-height: 1.4; color: #1e293b;"><?php echo htmlspecialchars($item['product_name']); ?></h6>
                                            <p class="mb-0" style="font-size: 13px; color: #64748b;">Qty: <?php echo $item['quantity']; ?></p>
                                         </div>
                                      </div>
                                   </div>
                                <?php endforeach; ?>
                              </div>
                            </div>
                            
                            <!-- Right Side: Order Summary -->
                            <div class="col-lg-5 ps-lg-4">
                              <h6 class="fw-bold mb-4" style="font-size: 15px; color: #334155;">Order Summary</h6>
                              <table class="table table-borderless table-sm mb-0 order-summary-table" style="font-size: 14px;">
                                <tbody>
                                  <tr>
                                    <td class="py-2 ps-0 align-middle" style="color: #64748b; width: 35%;">Status:</td>
                                    <td class="py-2 align-middle">
                                      <?php
                                      $statusClass = (strtolower($order['status']) === 'delivered') ? 'bg-success text-white' : 'bg-warning text-dark';
                                      ?>
                                      <span class="badge rounded-pill fw-semibold px-3 py-2 <?php echo $statusClass; ?>"><?php echo htmlspecialchars($order['status']); ?></span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="py-2 ps-0 align-middle" style="color: #64748b;">Date of delivery:</td>
                                    <td class="py-2 align-middle" style="color: #334155; font-weight: 500;">Est. 3-5 business days</td>
                                  </tr>
                                  <tr>
                                    <td class="py-2 ps-0 align-middle" style="color: #64748b;">Delivered to:</td>
                                    <td class="py-2 align-middle" style="color: #334155; font-weight: 500;">
                                      <?php 
                                        if (!empty($order['address_line1'])) {
                                          echo htmlspecialchars(trim($order['address_line1'] . ', ' . $order['city'] . ', ' . $order['state'] . ', ' . $order['country'] . ', PO: ' . $order['zip'], ', '));
                                        } else {
                                          echo "Great street, New York Brooklyn 5A, PO: 212891";
                                        }
                                      ?>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="py-3 ps-0 align-middle" style="color: #64748b;">Total:</td>
                                    <td class="py-3 align-middle fw-bold text-dark fs-5">₹<?php echo number_format($order['total_amount'], 2); ?></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    <?php endforeach; ?>
                  <?php endif; ?>
                </div>
                <?php elseif ($tab === 'addresses'): ?>
                  
                  <!-- Your Address Section -->
                  <div id="address-list-container" class="mb-5">
                    <div class="row g-4">
                      <?php if (!empty($billingAddresses)): ?>
                        <?php foreach ($billingAddresses as $index => $addr): ?>
                          <div class="col-md-6">
                            <div class="card h-100 border shadow-sm rounded-4 p-4 bg-white">
                              <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="fw-bold mb-0 text-dark fs-4">Address <?php echo $index + 1; ?></h4>
                                <?php if ($index === 0): ?>
                                  <span class="badge bg-primary rounded-pill">Default</span>
                                <?php endif; ?>
                              </div>
                              <div class="text-secondary lh-base mb-4 fs-6">
                                <div class="text-dark mb-1 fw-medium"><?php echo htmlspecialchars(trim(($addr['first_name'] ?? '') . ' ' . ($addr['last_name'] ?? ''))); ?></div>
                                <div><?php echo htmlspecialchars($addr['address_line1']); ?></div>
                                <?php if (!empty($addr['address_line2'])): ?>
                                  <div><?php echo htmlspecialchars($addr['address_line2']); ?></div>
                                <?php endif; ?>
                                <div><?php echo htmlspecialchars($addr['city']); ?> <?php echo htmlspecialchars($addr['zip']); ?></div>
                                <div><?php echo htmlspecialchars($addr['state']); ?></div>
                                <div><?php echo htmlspecialchars($addr['country']); ?></div>
                                <div class="mt-1"><?php echo htmlspecialchars(!empty($addr['phone']) ? $addr['phone'] : '+91 8700805950'); ?></div>
                                <div><?php echo htmlspecialchars(!empty($addr['email']) ? $addr['email'] : $user['email']); ?></div>
                                <?php if (!empty($addr['company'])): ?><div>Company: <?php echo htmlspecialchars($addr['company']); ?></div><?php endif; ?>
                                <?php if (!empty($addr['gst'])): ?><div>GST: <?php echo htmlspecialchars($addr['gst']); ?></div><?php endif; ?>
                              </div>
                              <div class="mt-auto d-flex align-items-center gap-2">
                                <button class="btn btn-dark fw-medium px-4 py-2" onclick="openAddressForm('<?php echo $addr['id']; ?>', '<?php echo addslashes($addr['first_name'] ?? ''); ?>', '<?php echo addslashes($addr['last_name'] ?? ''); ?>', '<?php echo addslashes($addr['phone'] ?? ''); ?>', '<?php echo addslashes($addr['email'] ?? ''); ?>', '<?php echo addslashes($addr['company'] ?? ''); ?>', '<?php echo addslashes($addr['gst'] ?? ''); ?>', '<?php echo addslashes($addr['address_line1'] ?? ''); ?>', '<?php echo addslashes($addr['address_line2'] ?? ''); ?>', '<?php echo addslashes($addr['city'] ?? ''); ?>', '<?php echo addslashes($addr['zip'] ?? ''); ?>', '<?php echo addslashes($addr['state'] ?? ''); ?>')">Edit</button>
                                <?php if ($index > 0): ?>
                                  <form action="my-account.php?tab=addresses" method="POST" class="m-0">
                                    <input type="hidden" name="action" value="make_default">
                                    <input type="hidden" name="address_id" value="<?php echo $addr['id']; ?>">
                                    <button type="submit" class="btn btn-outline-secondary fw-medium px-4 py-2">Make Default</button>
                                  </form>
                                <?php endif; ?>
                              </div>
                            </div>
                          </div>
                        <?php endforeach; ?>
                      <?php endif; ?>

                      <!-- Add New Address Card -->
                      <div class="col-md-6">
                        <div class="card h-100 border shadow-sm rounded-4 p-4 d-flex align-items-center justify-content-center bg-light" role="button" onclick="openAddressForm()" style="border-style: dashed !important; border-width: 2px !important; min-height: 250px;">
                          <div class="text-center text-secondary">
                            <i class="fal fa-plus fa-3x mb-3 text-muted"></i>
                            <h5 class="fw-semibold mb-0 text-muted">Add New Address</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Inline Address Form -->
                  <div id="address-form-container" class="mb-5" style="display: none;">
                    <div class="bg-white border rounded-4 p-4 p-md-5 shadow-sm mb-4">
                      <h2 class="fs-4 fw-bold text-dark mb-4 pb-2" id="addressFormTitle">Billing address</h2>
                      <form action="my-account.php?tab=addresses" method="POST" class="row g-4 checkout-layout">
                        <input type="hidden" name="action" value="save_address">
                        <input type="hidden" name="address_id" id="form_address_id" value="">

                        <div class="row g-3 mb-4 form-grid">
                          <div class="col-md-6">
                            <label class="form-label fw-medium text-secondary mb-2" style="font-size: 14px">First name <span class="text-danger req">*</span></label>
                            <input type="text" name="first_name" id="form_first_name" class="form-control py-2 shadow-none border-secondary-subtle" placeholder="First name" required />


                          </div>
                          <div class="col-md-6">
                            <label class="form-label fw-medium text-secondary mb-2" style="font-size: 14px">Last name <span class="text-danger req">*</span></label>
                            <input type="text" name="last_name" id="form_last_name" class="form-control py-2 shadow-none border-secondary-subtle" placeholder="Last name" required />


                          </div>
                        </div>

                        <div class="row g-3 mb-4 form-grid">
                          <div class="col-md-6">
                            <label class="form-label fw-medium text-secondary mb-2" style="font-size: 14px">Phone No. <span class="text-danger req">*</span></label>
                            <input type="text" name="phone" id="form_phone" class="form-control py-2 shadow-none border-secondary-subtle" placeholder="Phone No." required pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number" maxlength="10" oninput="this.value = this.value.replace(/[^0-9]/g, '')" />


                          </div>
                          <div class="col-md-6">
                            <label class="form-label fw-medium text-secondary mb-2" style="font-size: 14px">Email address <span class="text-danger req">*</span></label>
                            <input type="email" name="email" id="form_email" class="form-control py-2 shadow-none border-secondary-subtle" placeholder="Email address" required readonly style="background-color: #f8fafc;" />


                          </div>
                        </div>

                        <div class="row g-3 mb-4 form-grid">
                          <div class="col-md-6">
                            <label class="form-label fw-medium text-secondary mb-2" style="font-size: 14px">Company name (optional)</label>
                            <input type="text" name="company" id="form_company" class="form-control py-2 shadow-none border-secondary-subtle" placeholder="Company name (optional)" />
                          </div>
                          <div class="col-md-6">
                            <label class="form-label fw-medium text-secondary mb-2" style="font-size: 14px">GST Number (optional)</label>
                            <input type="text" name="gst" id="form_gst" class="form-control py-2 shadow-none border-secondary-subtle" placeholder="GST Number (optional)" />
                          </div>
                        </div>

                        <div class="row mb-4 form-grid full">
                          <div class="col-12">
                            <label class="form-label fw-medium text-secondary mb-2" style="font-size: 14px">Address <span class="text-danger req">*</span></label>
                            <input type="text" name="address_line1" id="form_address_line1" class="form-control py-2 shadow-none border-secondary-subtle" placeholder="House number and street name" required />
                          </div>
                        </div>

                        <div class="row g-3 mb-4 form-grid">
                          <div class="col-md-6">
                            <label class="form-label fw-medium text-secondary mb-2" style="font-size: 14px">PIN Code <span class="text-danger req">*</span></label>
                            <input type="text" name="zip" id="form_zip" class="form-control py-2 shadow-none border-secondary-subtle" placeholder="PIN Code" required pattern="[0-9]{6}" title="Please enter a valid 6-digit PIN code" maxlength="6" minlength="6" oninput="this.value = this.value.replace(/[^0-9]/g, ''); if(this.value.length === 6) fetchLocationData(this.value);" />


                          </div>
                          <div class="col-md-6">
                            <label class="form-label fw-medium text-secondary mb-2" style="font-size: 14px">Town / City <span class="text-danger req">*</span></label>
                            <input type="text" name="city" id="form_city" class="form-control py-2 shadow-none border-secondary-subtle" placeholder="Town / City" required />


                          </div>
                        </div>

                        <div class="row mb-4 form-grid full">
                          <div class="col-12">
                            <label class="form-label fw-medium text-secondary mb-2" style="font-size: 14px">State <span class="text-danger req">*</span></label>
                            <select name="state" id="form_state" class="form-control py-2 shadow-none border-secondary-subtle" required>
                              <option value="" disabled selected>Select State</option>
                              <option value="Andhra Pradesh">Andhra Pradesh</option>
                              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                              <option value="Assam">Assam</option>
                              <option value="Bihar">Bihar</option>
                              <option value="Chhattisgarh">Chhattisgarh</option>
                              <option value="Goa">Goa</option>
                              <option value="Gujarat">Gujarat</option>
                              <option value="Haryana">Haryana</option>
                              <option value="Himachal Pradesh">Himachal Pradesh</option>
                              <option value="Jharkhand">Jharkhand</option>
                              <option value="Karnataka">Karnataka</option>
                              <option value="Kerala">Kerala</option>
                              <option value="Madhya Pradesh">Madhya Pradesh</option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Manipur">Manipur</option>
                              <option value="Meghalaya">Meghalaya</option>
                              <option value="Mizoram">Mizoram</option>
                              <option value="Nagaland">Nagaland</option>
                              <option value="Odisha">Odisha</option>
                              <option value="Punjab">Punjab</option>
                              <option value="Rajasthan">Rajasthan</option>
                              <option value="Sikkim">Sikkim</option>
                              <option value="Tamil Nadu">Tamil Nadu</option>
                              <option value="Telangana">Telangana</option>
                              <option value="Tripura">Tripura</option>
                              <option value="Uttar Pradesh">Uttar Pradesh</option>
                              <option value="Uttarakhand">Uttarakhand</option>
                              <option value="West Bengal">West Bengal</option>
                              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                              <option value="Chandigarh">Chandigarh</option>
                              <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                              <option value="Delhi">Delhi</option>
                              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                              <option value="Ladakh">Ladakh</option>
                              <option value="Lakshadweep">Lakshadweep</option>
                              <option value="Puducherry">Puducherry</option>
                            </select>


                          </div>
                        </div>

                        <div class="col-12 mt-4 pt-2 d-flex align-items-center">
                          <button type="submit" class="btn btn-dark fw-bold px-4 py-2" style="background-color: #1e293b; border-radius: 8px;">Save address</button>
                          <button type="button" class="btn fw-bold px-4 py-2 ms-3 text-secondary" onclick="closeAddressForm()">Cancel</button>
                        </div>
                      </form>
                    </div>
                  </div>

                <?php elseif ($tab === 'security'): ?>
                  
                  <div id="security-container" class="mb-5">
                    <?php if (!empty($securityFieldErrors) && isset($securityFieldErrors['general'])): ?>
                        <div class="alert alert-danger rounded-3 shadow-sm border-0 mb-4"><?php echo htmlspecialchars($securityFieldErrors['general']); ?></div>
                    <?php endif; ?>
                    <?php if (!empty($securitySuccess)): ?>
                        <div class="alert alert-success rounded-3 shadow-sm border-0 mb-4"><?php echo htmlspecialchars($securitySuccess); ?></div>
                    <?php endif; ?>

                    <div class="bg-white border rounded-4 p-4 p-md-5 shadow-sm mb-4">
                      <h2 class="fs-4 fw-bold text-dark mb-4 pb-2" style="font-size: 24px; color: #1e293b;">Login & security</h2>
                      <form action="my-account.php?tab=security" method="POST" class="checkout-layout">
                        <input type="hidden" name="action" value="save_security">
                        
                        <div class="row g-3 mb-4 form-grid">
                          <div class="col-md-6">
                            <label class="form-label fw-medium text-secondary mb-2" style="font-size: 14px">First name <span class="text-danger req">*</span></label>
                            <input type="text" id="sec_first_name" name="first_name" class="form-control py-2 shadow-none border-secondary-subtle" value="<?php echo htmlspecialchars($user['first_name'] ?? ''); ?>" required />
                          </div>
                          <div class="col-md-6">
                            <label class="form-label fw-medium text-secondary mb-2" style="font-size: 14px">Last name <span class="text-danger req">*</span></label>
                            <input type="text" id="sec_last_name" name="last_name" class="form-control py-2 shadow-none border-secondary-subtle" value="<?php echo htmlspecialchars($user['last_name'] ?? ''); ?>" required />
                          </div>
                        </div>


                        <div class="row mb-5 form-grid full">
                          <div class="col-12">
                            <label class="form-label fw-medium text-secondary mb-2" style="font-size: 14px">Email address <span class="text-danger req">*</span></label>
                            <input type="email" name="email" class="form-control py-2 shadow-none border-secondary-subtle" value="<?php echo htmlspecialchars($user['email'] ?? ''); ?>" required readonly style="background-color: #f8fafc;" />
                          </div>
                        </div>

                        <fieldset class="border rounded-3 p-4 mb-4" style="border-color: #cbd5e1 !important; margin-top: 60px;">
                          <legend class="float-none w-auto px-3 fw-bold text-dark fs-5 mb-0" style="color: #334155;">Password change</legend>
                          
                          <div class="row mb-4 form-grid full mt-3">
                            <div class="col-12">
                              <div class="d-flex justify-content-between align-items-center mb-2">
                                <label class="form-label fw-medium text-secondary mb-0" style="font-size: 14px">Current password (leave blank to leave unchanged)</label>
                                <!-- <a href="forgot-password.php" class="text-primary text-decoration-none" style="font-size: 13px; font-weight: 500;">Forgot password?</a> -->
                              </div>
                              <div class="input-group">
                                <input type="password" name="current_password" id="current_password" class="form-control py-2 shadow-none border-secondary-subtle border-end-0" <?php echo isset($securityFieldErrors['current_password']) ? 'style="border-color: #ef4444 !important;"' : ''; ?> />
                                <span class="input-group-text bg-white border-secondary-subtle border-start-0" style="cursor: pointer; <?php echo isset($securityFieldErrors['current_password']) ? 'border-color: #ef4444 !important;' : ''; ?>" onclick="togglePassword('current_password', this)">
                                  <i class="fal fa-eye-slash text-muted"></i>
                                </span>
                              </div>
                              <?php if(isset($securityFieldErrors['current_password'])): ?>
                                <span class="error-msg" style="color: #ef4444; font-size: 12px; display: block; margin-top: 4px;"><?php echo htmlspecialchars($securityFieldErrors['current_password']); ?></span>
                              <?php endif; ?>
                            </div>
                          </div>

                          <div class="row mb-4 form-grid full">
                            <div class="col-12">
                              <label class="form-label fw-medium text-secondary mb-2" style="font-size: 14px">New password (leave blank to leave unchanged)</label>
                              <div class="input-group">
                                <input type="password" name="new_password" id="new_password" class="form-control py-2 shadow-none border-secondary-subtle border-end-0" <?php echo isset($securityFieldErrors['new_password']) ? 'style="border-color: #ef4444 !important;"' : ''; ?> />
                                <span class="input-group-text bg-white border-secondary-subtle border-start-0" style="cursor: pointer; <?php echo isset($securityFieldErrors['new_password']) ? 'border-color: #ef4444 !important;' : ''; ?>" onclick="togglePassword('new_password', this)">
                                  <i class="fal fa-eye-slash text-muted"></i>
                                </span>
                              </div>
                              <?php if(isset($securityFieldErrors['new_password'])): ?>
                                <span class="error-msg" style="color: #ef4444; font-size: 12px; display: block; margin-top: 4px;"><?php echo htmlspecialchars($securityFieldErrors['new_password']); ?></span>
                              <?php endif; ?>
                            </div>
                          </div>

                          <div class="row mb-2 form-grid full">
                            <div class="col-12">
                              <label class="form-label fw-medium text-secondary mb-2" style="font-size: 14px">Confirm new password</label>
                              <div class="input-group">
                                <input type="password" name="confirm_password" id="confirm_password" class="form-control py-2 shadow-none border-secondary-subtle border-end-0" <?php echo isset($securityFieldErrors['confirm_password']) ? 'style="border-color: #ef4444 !important;"' : ''; ?> />
                                <span class="input-group-text bg-white border-secondary-subtle border-start-0" style="cursor: pointer; <?php echo isset($securityFieldErrors['confirm_password']) ? 'border-color: #ef4444 !important;' : ''; ?>" onclick="togglePassword('confirm_password', this)">
                                  <i class="fal fa-eye-slash text-muted"></i>
                                </span>
                              </div>
                              <?php if(isset($securityFieldErrors['confirm_password'])): ?>
                                <span class="error-msg" style="color: #ef4444; font-size: 12px; display: block; margin-top: 4px;"><?php echo htmlspecialchars($securityFieldErrors['confirm_password']); ?></span>
                              <?php endif; ?>
                            </div>
                          </div>
                        </fieldset>

                        <div class="mt-4 pt-2">
                          <button type="submit" class="btn btn-dark fw-bold px-4 py-2" style="background-color: #1e293b; border-radius: 8px;">Save changes</button>
                        </div>
                      </form>
                    </div>
                  </div>

                <?php elseif ($tab === 'delivery-status'): ?>
                  
                  <div class="bg-white p-4 p-md-5 rounded-4 shadow-sm overflow-hidden border">
                     <h2 class="fs-4 fw-bold mb-4 text-dark text-center text-md-start">Your Order</h2>
                     
                     <div class="table-responsive mb-5 border rounded">
                        <table class="table table-borderless align-middle mb-0 text-nowrap">
                           <thead class="bg-light border-bottom">
                              <tr>
                                 <th class="py-3 px-4 text-dark fw-semibold" style="font-size: 14px;">Order</th>
                                 <th class="py-3 px-4 text-dark fw-semibold" style="font-size: 14px;">Date</th>
                                 <th class="py-3 px-4 text-dark fw-semibold" style="font-size: 14px;">Order Status</th>
                                 <th class="py-3 px-4 text-dark fw-semibold" style="font-size: 14px;">Total</th>
                                 <th class="py-3 px-4 text-dark fw-semibold" style="font-size: 14px;">Payment Status</th>
                                 <th class="py-3 px-4 text-dark fw-semibold" style="font-size: 14px;">Delivery Status</th>
                                 <th class="py-3 px-4 text-dark fw-semibold" style="font-size: 14px;">Actions</th>
                              </tr>
                           </thead>
                           <tbody>
                              <?php if(!empty($orders)): ?>
                                 <?php foreach($orders as $idx => $order): ?>
                                    <?php
                                      $stmtItems = $pdo->prepare("SELECT SUM(quantity) as total_qty FROM order_items WHERE order_id = ?");
                                      $stmtItems->execute([$order['id']]);
                                      $itemCount = $stmtItems->fetchColumn() ?: 0;
                                      $borderClass = ($idx < count($orders) - 1) ? 'border-bottom' : '';
                                    ?>
                                    <tr class="<?php echo $borderClass; ?>">
                                       <td class="py-3 px-4"><a href="?tab=orders" class="text-primary text-decoration-underline fw-medium" style="font-size: 14px;">#<?php echo $order['id']; ?></a></td>
                                       <td class="py-3 px-4 text-secondary" style="font-size: 14px;"><?php echo date('F j, Y', strtotime($order['created_at'])); ?></td>
                                       <td class="py-3 px-4 text-secondary" style="font-size: 14px;"><?php echo htmlspecialchars($order['status']); ?></td>
                                       <td class="py-3 px-4 text-secondary" style="font-size: 14px;"><span class="fw-semibold text-dark">₹<?php echo number_format($order['total_amount'], 2); ?></span> for <?php echo $itemCount; ?> item(s)</td>
                                       <td class="py-3 px-4 text-secondary" style="font-size: 14px;">Paid</td>
                                       <td class="py-3 px-4 text-secondary" style="font-size: 14px;">
                                          <?php 
                                          if (strtolower($order['status']) === 'delivered') echo 'Delivered';
                                          elseif (strtolower($order['status']) === 'shipped') echo 'In Transit';
                                          else echo 'Pending Dispatch';
                                          ?>
                                       </td>
                                       <td class="py-3 px-4"><a href="?tab=orders" class="btn btn-dark btn-sm rounded px-3 py-1 fw-medium shadow-none">View</a></td>
                                    </tr>
                                 <?php endforeach; ?>
                              <?php else: ?>
                                 <tr>
                                    <td colspan="7" class="py-4 text-center text-muted" style="font-size: 14px;">No orders found.</td>
                                 </tr>
                              <?php endif; ?>
                           </tbody>
                        </table>
                     </div>
                  </div>


                <?php elseif ($tab === 'download-invoice'): ?>
                  
                  <div class="bg-white p-4 p-md-5 rounded-4 shadow-sm overflow-hidden border">
                     <h2 class="fs-4 fw-bold mb-4 text-dark text-center text-md-start">Download Invoices</h2>
                     
                     <div class="table-responsive mb-0 border rounded">
                        <table class="table table-borderless align-middle mb-0 text-nowrap">
                           <thead class="bg-light border-bottom">
                              <tr>
                                 <th class="py-3 px-4 text-dark fw-semibold" style="font-size: 14px;">Order ID</th>
                                 <th class="py-3 px-4 text-dark fw-semibold" style="font-size: 14px;">Date</th>
                                 <th class="py-3 px-4 text-dark fw-semibold" style="font-size: 14px;">Total Amount</th>
                                 <th class="py-3 px-4 text-dark fw-semibold text-end" style="font-size: 14px;">Action</th>
                              </tr>
                           </thead>
                           <tbody>
                              <?php if(!empty($orders)): ?>
                                 <?php foreach($orders as $idx => $order): ?>
                                    <?php $borderClass = ($idx < count($orders) - 1) ? 'border-bottom' : ''; ?>
                                    <tr class="<?php echo $borderClass; ?>">
                                       <td class="py-3 px-4 text-dark fw-medium" style="font-size: 14px;">#<?php echo $order['id']; ?></td>
                                       <td class="py-3 px-4 text-secondary" style="font-size: 14px;"><?php echo date('F j, Y', strtotime($order['created_at'])); ?></td>
                                       <td class="py-3 px-4 text-secondary" style="font-size: 14px;">₹<?php echo number_format($order['total_amount'], 2); ?></td>
                                       <td class="py-3 px-4 text-end">
                                          <a href="#" class="btn btn-outline-secondary btn-sm px-3 py-1 fw-medium" style="font-size: 13px; border-radius: 6px;">
                                            <i class="fal fa-download me-1"></i> Download
                                          </a>
                                       </td>
                                    </tr>
                                 <?php endforeach; ?>
                              <?php else: ?>
                                 <tr>
                                    <td colspan="4" class="py-4 text-center text-muted" style="font-size: 14px;">No invoices available.</td>
                                 </tr>
                              <?php endif; ?>
                           </tbody>
                        </table>
                     </div>
                  </div>

                <?php elseif ($tab === 'support'): ?>
                  


                  <!-- Section 1: Reach Out Us -->
                  <div class="bg-white p-4 p-md-5 rounded-4 shadow-sm mb-50 text-center border">
                     <h2 class="fs-1 fw-bold text-dark mb-4 mt-2">Reach Out Us</h2>
                     <!-- <p class="text-secondary fs-6 lh-lg mx-auto mb-5" style="max-width: 800px;">
                        With DeltaView, you benefit from innovative solutions carefully tailored to meet your specific requirements. Our platform is designed to promote efficiency, transparency, and measurable performance improvements. We are committed to delivering dependable results supported by professional expertise. Partner with DeltaView to experience a higher standard of service and operational excellence.
                     </p> -->
                     
                     <div class="row g-4 text-start mt-4">
                        <!-- Corporate Office Card -->
                        <div class="col-md-4">
                           <div class="border border-light-subtle rounded-3 p-4 h-100 bg-light">
                              <div class="d-inline-flex align-items-center justify-content-center bg-white text-primary rounded-circle mb-4 shadow-sm" style="width: 50px; height: 50px;">
                                 <i class="fal fa-map-marker-alt" style="font-size: 20px;"></i>
                              </div>
                              <h4 class="fs-5 fw-bold text-dark mb-3">Corporate Office</h4>
                              <p class="text-secondary mb-0" style="font-size: 14px; line-height: 1.6;">
                                 SCO-38, 4th Floor, Old Judicial Complex, Civil Lines, Gurugram, Haryana - 122001
                              </p>
                           </div>
                        </div>
                        
                        <!-- Sales Enquiries Card -->
                        <div class="col-md-4">
                           <div class="border border-light-subtle rounded-3 p-4 h-100 bg-light">
                              <div class="d-inline-flex align-items-center justify-content-center bg-white text-primary rounded-circle mb-4 shadow-sm" style="width: 50px; height: 50px;">
                                 <i class="fal fa-phone-alt" style="font-size: 20px;"></i>
                              </div>
                              <h4 class="fs-5 fw-bold text-dark mb-3">Sales Enquiries</h4>
                              <p class="text-secondary mb-2" style="font-size: 14px;">
                                 <strong class="text-dark fw-medium">Toll Free:</strong> 1800-571-7167
                              </p>
                              <p class="text-secondary mb-0" style="font-size: 14px;">
                                 <strong class="text-dark fw-medium">Email:</strong> sales@deltaview.in
                              </p>
                           </div>
                        </div>

                        <!-- Technical Support Card -->
                        <div class="col-md-4">
                           <div class="border border-light-subtle rounded-3 p-4 h-100 bg-light">
                              <div class="d-inline-flex align-items-center justify-content-center bg-white text-primary rounded-circle mb-4 shadow-sm" style="width: 50px; height: 50px;">
                                 <i class="fal fa-headset" style="font-size: 20px;"></i>
                              </div>
                              <h4 class="fs-5 fw-bold text-dark mb-3">Technical Support</h4>
                              <p class="text-secondary mb-2" style="font-size: 14px;">
                                 <strong class="text-dark fw-medium">Toll Free:</strong> 1800-571-7167
                              </p>
                              <p class="text-secondary mb-0" style="font-size: 14px;">
                                 <strong class="text-dark fw-medium">Email:</strong> support@deltaview.in
                              </p>
                           </div>
                        </div>
                     </div>

                     <!-- Section 2: Contact Form moved inside Reach Out Us -->
                     <div class="text-start border-top border-light-subtle" style="margin-top: 50px; padding-top: 50px;">
                        <h2 class="fs-3 fw-bold text-dark text-center mb-5">Welcome To Contact DeltaView</h2>
                        <form action="#" method="POST" class="checkout-layout needs-validation" novalidate id="contactSupportForm">
                           <div class="row g-4">
                              <div class="col-md-6">
                                 <label class="form-label fw-medium text-dark" style="font-size: 14px;">Full name <span class="text-danger">*</span></label>
                                 <input type="text" class="form-control py-2 shadow-none border-secondary-subtle" required minlength="2" pattern="[A-Za-z\s]+" title="Name must contain at least 2 characters (letters and spaces only)">
                                 <div class="invalid-feedback">This field is required.</div>
                              </div>
                              <div class="col-md-6">
                                 <label class="form-label fw-medium text-dark" style="font-size: 14px;">Email address <span class="text-danger">*</span></label>
                                 <input type="email" class="form-control py-2 shadow-none border-secondary-subtle" required title="Please enter a valid email address">
                                 <div class="invalid-feedback">This field is required.</div>
                              </div>
                              <div class="col-md-6">
                                 <label class="form-label fw-medium text-dark" style="font-size: 14px;">Phone number <span class="text-danger">*</span></label>
                                 <input type="text" class="form-control py-2 shadow-none border-secondary-subtle" required pattern="[0-9]{10}" maxlength="10" title="Please enter a valid 10-digit phone number" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
                                 <div class="invalid-feedback">This field is required.</div>
                              </div>
                              <div class="col-md-6">
                                 <label class="form-label fw-medium text-dark" style="font-size: 14px;">Location <span class="text-danger">*</span></label>
                                 <input type="text" id="location_input" class="form-control py-2 shadow-none border-secondary-subtle" required minlength="2" title="Location cannot be empty">
                                 <div class="invalid-feedback">This field is required.</div>
                              </div>
                              <div class="col-12">
                                 <label class="form-label fw-medium text-dark" style="font-size: 14px;">Please enter your message here <span class="text-danger">*</span></label>
                                 <textarea class="form-control py-2 shadow-none border-secondary-subtle" rows="4" required minlength="10" title="Message must be at least 10 characters long"></textarea>
                                 <div class="invalid-feedback">This field is required.</div>
                              </div>
                              <div class="col-12 mt-2">
                                 <div class="d-flex border rounded border-secondary-subtle overflow-hidden" style="max-width: 250px;">
                                    <div class="bg-dark text-white px-3 py-2 fw-bold d-flex align-items-center text-nowrap">7 + 7 =</div>
                                    <input type="text" class="form-control border-0 shadow-none px-3 py-2" placeholder="Enter captcha" required>
                                 </div>
                                 <div class="invalid-feedback" style="display: none;">This field is required.</div>
                              </div>
                              <div class="col-12 mt-4">
                                 <button type="submit" class="btn fw-bold px-4 py-2 d-inline-flex align-items-center gap-2 shadow-none" style="background-color: #bfdbfe; color: #000; border-radius: 4px;">SUBMIT &rarr;</button>
                              </div>
                           </div>
                        </form>
                        <script>
                           document.addEventListener('DOMContentLoaded', function() {
                               var form = document.getElementById('contactSupportForm');
                               if(form) {
                                   form.addEventListener('submit', function(event) {
                                       if (!form.checkValidity()) {
                                           event.preventDefault();
                                           event.stopPropagation();
                                       }
                                       form.classList.add('was-validated');
                                   }, false);
                               }
                           });
                        </script>
                     </div>
                  </div>

                <?php endif; ?>
              </div>
            </div>
          </div>
          
          <?php if (in_array($tab, ['delivery-status', 'support', 'download-invoice'])): ?>
          <!-- FAQ Section (Centered in Viewport) -->
          <div class="mx-auto faq-section my-5 pt-5" style="max-width: 900px;">
            <h2 class="fs-5 fw-bold text-dark border-bottom pb-3 mb-4 text-center faq-title">
              Frequently Asked Questions
            </h2>
            <div class="accordion accordion-flush bg-white" id="faqAccordion">
              
              <!-- Item 1 -->
              <div class="accordion-item border-bottom">
                <h2 class="accordion-header" id="faqHeading1">
                  <button class="accordion-button collapsed fw-medium text-dark p-3 fs-6 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1" aria-expanded="false" aria-controls="faqCollapse1">
                    What are the sizes of products?
                  </button>
                </h2>
                <div id="faqCollapse1" class="accordion-collapse collapse" aria-labelledby="faqHeading1" data-bs-parent="#faqAccordion">
                  <div class="accordion-body text-secondary p-3 pt-0 fs-6 lh-lg">
                    DeltaView intelligent interactive panels are available in a variety of sizes to suit different spaces and requirements. Our standard sizes typically range from 65", 75", 86", up to 98" to ensure the perfect fit for anything from small huddle rooms to large lecture halls and boardrooms.
                  </div>
                </div>
              </div>

              <!-- Item 2 -->
              <div class="accordion-item border-bottom">
                <h2 class="accordion-header" id="faqHeading2">
                  <button class="accordion-button collapsed fw-medium text-dark p-3 fs-6 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2" aria-expanded="false" aria-controls="faqCollapse2">
                    Does this panel connect to a smartphone?
                  </button>
                </h2>
                <div id="faqCollapse2" class="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#faqAccordion">
                  <div class="accordion-body text-secondary p-3 pt-0 fs-6 lh-lg">
                    Yes, absolutely. DeltaView panels support seamless wireless casting. You can easily connect, mirror, and share content directly from your smartphone, tablet, or laptop (supporting iOS, Android, Windows, and Mac) without the need for additional cables.
                  </div>
                </div>
              </div>

              <!-- Item 3 -->
              <div class="accordion-item border-bottom">
                <h2 class="accordion-header" id="faqHeading3">
                  <button class="accordion-button collapsed fw-medium text-dark p-3 fs-6 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3" aria-expanded="false" aria-controls="faqCollapse3">
                    How much power does it consume?
                  </button>
                </h2>
                <div id="faqCollapse3" class="accordion-collapse collapse" aria-labelledby="faqHeading3" data-bs-parent="#faqAccordion">
                  <div class="accordion-body text-secondary p-3 pt-0 fs-6 lh-lg">
                    Our panels are designed with energy efficiency in mind. While power consumption varies slightly depending on the screen size, a standard 75" panel generally consumes around 250W to 350W during active use, and drops to less than 0.5W when in standby mode.
                  </div>
                </div>
              </div>

              <!-- Item 4 -->
              <div class="accordion-item border-bottom">
                <h2 class="accordion-header" id="faqHeading4">
                  <button class="accordion-button collapsed fw-medium text-dark p-3 fs-6 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse4" aria-expanded="false" aria-controls="faqCollapse4">
                    Can we connect to it remotely?
                  </button>
                </h2>
                <div id="faqCollapse4" class="accordion-collapse collapse" aria-labelledby="faqHeading4" data-bs-parent="#faqAccordion">
                  <div class="accordion-body text-secondary p-3 pt-0 fs-6 lh-lg">
                    Yes, you can. DeltaView panels are built for modern hybrid collaboration. They support remote device management and are fully compatible with popular video conferencing applications, allowing your team or students to connect, interact, and collaborate from anywhere in the world.
                  </div>
                </div>
              </div>

              <!-- Item 5 -->
              <div class="accordion-item border-0">
                <h2 class="accordion-header" id="faqHeading5">
                  <button class="accordion-button collapsed fw-medium text-dark p-3 fs-6 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse5" aria-expanded="false" aria-controls="faqCollapse5">
                    If I have a problem with the smart board, what is the turnaround time for support?
                  </button>
                </h2>
                <div id="faqCollapse5" class="accordion-collapse collapse" aria-labelledby="faqHeading5" data-bs-parent="#faqAccordion">
                  <div class="accordion-body text-secondary p-3 pt-0 fs-6 lh-lg">
                    We pride ourselves on our after-sales service. We offer 24/7 Customer Support and a 3-Year On-Site Warranty. Because we cover over 15,000+ serviceable pin codes across India, our technical experts ensure a rapid response, typically providing on-site support and resolving issues within 24 to 48 hours.
                  </div>
                </div>
              </div>

            </div>
          </div>
          <?php endif; ?>

        </div>
      </main>
      <?php include 'inc/footer.php'; ?>
    <!-- JS here -->
    </div>

    <script>
      function togglePassword(inputId, iconSpan) {
        const input = document.getElementById(inputId);
        const icon = iconSpan.querySelector('i');
        if (input.type === 'password') {
          input.type = 'text';
          icon.classList.remove('fa-eye-slash');
          icon.classList.add('fa-eye');
        } else {
          input.type = 'password';
          icon.classList.remove('fa-eye');
          icon.classList.add('fa-eye-slash');
        }
      }

      function openAddressForm(id = '', firstName = '', lastName = '', phone = '', email = '', company = '', gst = '', addressLine1 = '', addressLine2 = '', city = '', zip = '', state = '') {
        document.getElementById('address-list-container').style.display = 'none';
        document.getElementById('address-form-container').style.display = 'block';
        
        document.getElementById('form_address_id').value = id;
        document.getElementById('form_first_name').value = firstName;
        document.getElementById('form_last_name').value = lastName;
        document.getElementById('form_phone').value = phone;
        document.getElementById('form_email').value = email || '<?php echo addslashes($user['email']); ?>';
        document.getElementById('form_company').value = company;
        document.getElementById('form_gst').value = gst;
        document.getElementById('form_address_line1').value = addressLine1;
        document.getElementById('form_address_line2').value = addressLine2;
        document.getElementById('form_city').value = city;
        document.getElementById('form_zip').value = zip;
        document.getElementById('form_state').value = state;
        
        if (id) {
          document.getElementById('addressFormTitle').innerText = 'Edit Billing address';
        } else {
          document.getElementById('addressFormTitle').innerText = 'Add Billing address';
        }
      }

      function closeAddressForm() {
        document.getElementById('address-list-container').style.display = 'block';
        document.getElementById('address-form-container').style.display = 'none';
      }
      
      function fetchLocationData(pincode) {
        fetch(`https://api.postalpincode.in/pincode/${pincode}`)
          .then((res) => res.json())
          .then((data) => {
            if (data[0].Status === "Success") {
              const postOffice = data[0].PostOffice[0];
              const cityInput = document.getElementById('form_city');
              cityInput.value = postOffice.District;
              cityInput.dispatchEvent(new Event('input', { bubbles: true }));
              
              let stateName = postOffice.State;
              if (stateName === 'Andaman & Nicobar Islands') stateName = 'Andaman and Nicobar Islands';
              if (stateName === 'Dadra & Nagar Haveli' || stateName === 'Daman & Diu') stateName = 'Dadra and Nagar Haveli and Daman and Diu';
              
              const stateSelect = document.getElementById('form_state');
              let found = false;
              for (let i = 0; i < stateSelect.options.length; i++) {
                if (stateSelect.options[i].value.toLowerCase() === stateName.toLowerCase()) {
                  stateSelect.selectedIndex = i;
                  stateSelect.dispatchEvent(new Event('input', { bubbles: true }));
                  found = true;
                  break;
                }
              }
            }
          })
          .catch((err) => console.error("Error fetching PIN code data:", err));
      }
    </script>
    <?php include 'inc/footer-links.php'; ?>
  
<script>
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".checkout-layout");
  forms.forEach(form => {
    form.addEventListener("input", function (e) {
      const field = e.target;
      if ((field.tagName === "INPUT" && field.type !== "checkbox" && field.type !== "hidden") || field.tagName === "SELECT") {
        let errorSpan = field.nextElementSibling;
        if (!errorSpan || !errorSpan.classList.contains("error-msg")) {
          errorSpan = document.createElement("span");
          errorSpan.classList.add("error-msg");
          errorSpan.style.color = "#ef4444";
          errorSpan.style.fontSize = "12px";
          errorSpan.style.display = "block";
          errorSpan.style.marginTop = "4px";
          field.insertAdjacentElement("afterend", errorSpan);
        }

        if (!field.validity.valid && field.value !== "") {
          field.style.borderColor = "#ef4444";
          if (field.type === "email" && field.validity.typeMismatch) {
            errorSpan.textContent = "Please enter a valid email address (must contain @)";
          } else if (field.validity.patternMismatch) {
            errorSpan.textContent = field.title || "Invalid format";
          } else {
            errorSpan.textContent = "Invalid input";
          }
        } else {
          field.style.borderColor = "#e5e7eb";
          errorSpan.textContent = "";
        }
      }
    });

    form.addEventListener("focusout", function (e) {
      const field = e.target;
      if (((field.tagName === "INPUT" && field.type !== "checkbox" && field.type !== "hidden") || field.tagName === "SELECT") && field.hasAttribute("required")) {
        let errorSpan = field.nextElementSibling;
        if (!errorSpan || !errorSpan.classList.contains("error-msg")) {
          errorSpan = document.createElement("span");
          errorSpan.classList.add("error-msg");
          errorSpan.style.color = "#ef4444";
          errorSpan.style.fontSize = "12px";
          errorSpan.style.display = "block";
          errorSpan.style.marginTop = "4px";
          field.insertAdjacentElement("afterend", errorSpan);
        }
        if (field.validity.valueMissing) {
          field.style.borderColor = "#ef4444";
          errorSpan.textContent = "This field is required";
        }
      }
    });

    form.addEventListener("invalid", function (e) {
      e.preventDefault(); // Suppress the native browser tooltip
      const field = e.target;
      if (field.hasAttribute("required") && !field.validity.valid && field.type !== "checkbox" && field.type !== "hidden") {
        let errorSpan = field.nextElementSibling;
        if (!errorSpan || !errorSpan.classList.contains("error-msg")) {
          errorSpan = document.createElement("span");
          errorSpan.classList.add("error-msg");
          errorSpan.style.color = "#ef4444";
          errorSpan.style.fontSize = "12px";
          errorSpan.style.display = "block";
          errorSpan.style.marginTop = "4px";
          field.insertAdjacentElement("afterend", errorSpan);
        }
        if (field.validity.valueMissing) {
          field.style.borderColor = "#ef4444";
          errorSpan.textContent = "This field is required";
        } else if (field.type === "email" && field.validity.typeMismatch) {
          field.style.borderColor = "#ef4444";
          errorSpan.textContent = "Please enter a valid email address (must contain @)";
        } else if (field.validity.patternMismatch) {
          field.style.borderColor = "#ef4444";
          errorSpan.textContent = field.title || "Invalid format";
        }
      }
      }
    }, true);
  });

  const securityForm = document.querySelector('form[action="my-account.php?tab=security"]');
  if (securityForm) {
    securityForm.addEventListener('submit', function(e) {
      const newPassword = document.getElementById('new_password');
      const confirmPassword = document.getElementById('confirm_password');
      
      if (newPassword.value !== confirmPassword.value) {
        e.preventDefault();
        confirmPassword.style.borderColor = "#ef4444";
        let errorSpan = confirmPassword.parentElement.nextElementSibling;
        if (!errorSpan || !errorSpan.classList.contains("error-msg")) {
          errorSpan = document.createElement("span");
          errorSpan.classList.add("error-msg");
          errorSpan.style.color = "#ef4444";
          errorSpan.style.fontSize = "12px";
          errorSpan.style.display = "block";
          errorSpan.style.marginTop = "4px";
          confirmPassword.parentElement.insertAdjacentElement("afterend", errorSpan);
        }
        errorSpan.textContent = "Passwords do not match";
      }
    });

    const clearPasswordError = () => {
        const confirmPassword = document.getElementById('confirm_password');
        const newPassword = document.getElementById('new_password');
        if (newPassword.value === confirmPassword.value || confirmPassword.value === "") {
            confirmPassword.style.borderColor = "#e5e7eb";
            const errorSpan = confirmPassword.parentElement.nextElementSibling;
            if (errorSpan && errorSpan.classList.contains("error-msg")) {
                errorSpan.textContent = "";
            }
        }
    };
    
    const newPassField = document.getElementById('new_password');
    const confPassField = document.getElementById('confirm_password');
    if (newPassField && confPassField) {
        newPassField.addEventListener('input', clearPasswordError);
        confPassField.addEventListener('input', clearPasswordError);
    }
  }
});

</script>
  </body>
</html>
