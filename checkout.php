<?php
require_once 'inc/auth.php';
redirectIfNotLoggedIn('sign-in.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $cartData = json_decode($_POST['cart_data'] ?? '{}', true);
    if (!empty($cartData['items'])) {
        $userId = getLoggedInUserId();
        $total = $cartData['total'] ?? 0;
        
        // Check if shipping to different address
        $useShipping = isset($_POST['ship_to_different']);
        
        $addressLine = $useShipping ? ($_POST['shipping_address'] ?? '') : ($_POST['billing_address'] ?? '');
        $addressLine2 = $useShipping ? ($_POST['shipping_address_line2'] ?? '') : ($_POST['billing_address_line2'] ?? '');
        $city = $useShipping ? ($_POST['shipping_city'] ?? '') : ($_POST['billing_city'] ?? '');
        $state = $useShipping ? ($_POST['shipping_state'] ?? '') : ($_POST['billing_state'] ?? '');
        $pincode = $useShipping ? ($_POST['shipping_pincode'] ?? '') : ($_POST['billing_pincode'] ?? '');
        $type = $useShipping ? 'shipping' : 'billing';
        
        $firstName = $useShipping ? ($_POST['shipping_first_name'] ?? '') : ($_POST['billing_first_name'] ?? '');
        $lastName = $useShipping ? ($_POST['shipping_last_name'] ?? '') : ($_POST['billing_last_name'] ?? '');
        $phone = $useShipping ? ($_POST['shipping_phone'] ?? '') : ($_POST['billing_phone'] ?? '');
        $email = $useShipping ? ($_POST['shipping_email'] ?? '') : ($_POST['billing_email'] ?? '');
        $company = $useShipping ? ($_POST['shipping_company'] ?? '') : ($_POST['billing_company'] ?? '');
        $gst = $useShipping ? ($_POST['shipping_gst'] ?? '') : ($_POST['billing_gst'] ?? '');
        
        // Check if address exists
        $checkStmt = $pdo->prepare("SELECT id FROM addresses WHERE user_id = ? AND LOWER(TRIM(address_line1)) = LOWER(TRIM(?)) AND LOWER(TRIM(city)) = LOWER(TRIM(?)) AND LOWER(TRIM(state)) = LOWER(TRIM(?)) AND zip = ?");
        $checkStmt->execute([$userId, $addressLine, $city, $state, $pincode]);
        
        if ($existing = $checkStmt->fetch(PDO::FETCH_ASSOC)) {
            $addressId = $existing['id'];
        } else {
            // Save the chosen address
            $stmt = $pdo->prepare("INSERT INTO addresses (user_id, type, first_name, last_name, phone, email, company, gst, address_line1, address_line2, city, state, zip, country) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'India')");
            $stmt->execute([$userId, $type, $firstName, $lastName, $phone, $email, $company, $gst, $addressLine, $addressLine2, $city, $state, $pincode]);
            $addressId = $pdo->lastInsertId();
        }
        
        // Insert order with address_id
        $stmt = $pdo->prepare("INSERT INTO orders (user_id, total_amount, status, address_id) VALUES (?, ?, 'Processing', ?)");
        $stmt->execute([$userId, $total, $addressId]);
        $orderId = $pdo->lastInsertId();
        
        // Insert items
        $stmt = $pdo->prepare("INSERT INTO order_items (order_id, product_name, quantity, price, image) VALUES (?, ?, ?, ?, ?)");
        foreach ($cartData['items'] as $item) {
            $stmt->execute([$orderId, $item['name'], $item['qty'], $item['price'] ?? 0, $item['image'] ?? '']);
        }
        
        header("Location: order-success.php");
        exit;
    }
}
$user = getLoggedInUser();
$stmtBilling = $pdo->prepare("SELECT * FROM addresses WHERE user_id = ? AND type = 'billing' ORDER BY created_at DESC LIMIT 1");
$stmtBilling->execute([$user['id']]);
$defBilling = $stmtBilling->fetch(PDO::FETCH_ASSOC);

$stmtShipping = $pdo->prepare("SELECT * FROM addresses WHERE user_id = ? AND type = 'shipping' ORDER BY created_at DESC LIMIT 1");
$stmtShipping->execute([$user['id']]);
$defShipping = $stmtShipping->fetch(PDO::FETCH_ASSOC);
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
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    />
  </head>
  <body>
    <?php include 'inc/header.php'; ?>

    <main>
      <div
        class="pb-5 bg-light checkout-wrapper"
        style="
          padding-top: 120px;
          font-family:
            &quot;Inter&quot;,
            -apple-system,
            BlinkMacSystemFont,
            &quot;Segoe UI&quot;,
            Roboto,
            sans-serif;
        "
      >
        <div class="mx-auto px-4 checkout-container" style="max-width: 1440px">
          <form
            class="row g-4 checkout-layout"
            id="checkout-form"
            action="checkout.php"
            method="POST"
          >
            <input type="hidden" name="cart_data" id="cart_data_input">
            <!-- Left Column: Forms -->
            <div class="col-lg-8 checkout-main-col">
              <div
                class="bg-white border rounded p-4 p-md-5 shadow-sm mb-4 checkout-box"
              >
                <h2 class="fs-4 fw-bold text-dark mb-4 pb-2">
                  Billing details
                </h2>

                <div class="row g-3 mb-4 form-grid">
                  <div class="col-md-6">
                    <label
                      class="form-label fw-medium text-secondary mb-2"
                      style="font-size: 14px"
                      >First name <span class="text-danger req">*</span></label
                    >
                    <input
                      type="text"
                      name="billing_first_name"
                      class="form-control py-2 shadow-none border-secondary-subtle"
                      placeholder="First name"
                      value="<?php echo htmlspecialchars($defBilling['first_name'] ?? ''); ?>"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label
                      class="form-label fw-medium text-secondary mb-2"
                      style="font-size: 14px"
                      >Last name <span class="text-danger req">*</span></label
                    >
                    <input
                      type="text"
                      name="billing_last_name"
                      class="form-control py-2 shadow-none border-secondary-subtle"
                      placeholder="Last name"
                      value="<?php echo htmlspecialchars($defBilling['last_name'] ?? ''); ?>"
                      required
                    />
                  </div>
                </div>

                <div class="row g-3 mb-4 form-grid">
                  <div class="col-md-6">
                    <label
                      class="form-label fw-medium text-secondary mb-2"
                      style="font-size: 14px"
                      >Phone No. <span class="text-danger req">*</span></label
                    >
                    <input
                      type="text"
                      name="billing_phone"
                      class="form-control py-2 shadow-none border-secondary-subtle"
                      placeholder="Phone No."
                      value="<?php echo htmlspecialchars($defBilling['phone'] ?? ''); ?>"
                      required
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                      maxlength="10"
                      oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                    />
                  </div>
                  <div class="col-md-6">
                    <label
                      class="form-label fw-medium text-secondary mb-2"
                      style="font-size: 14px"
                      >Email address
                      <span class="text-danger req">*</span></label
                    >
                    <input
                      type="email"
                      name="billing_email"
                      class="form-control py-2 shadow-none border-secondary-subtle"
                      value="<?php echo htmlspecialchars($defBilling['email'] ?? $user['email']); ?>"
                      placeholder="Email address"
                      required
                    />
                  </div>
                </div>

                <div class="row g-3 mb-4 form-grid">
                  <div class="col-md-6">
                    <label
                      class="form-label fw-medium text-secondary mb-2"
                      style="font-size: 14px"
                      >Company name (optional)</label
                    >
                    <input
                      type="text"
                      name="billing_company"
                      class="form-control py-2 shadow-none border-secondary-subtle"
                      placeholder="Company name (optional)"
                      value="<?php echo htmlspecialchars($defBilling['company'] ?? ''); ?>"
                    />
                  </div>
                  <div class="col-md-6">
                    <label
                      class="form-label fw-medium text-secondary mb-2"
                      style="font-size: 14px"
                      >GST Number (optional)</label
                    >
                    <input
                      type="text"
                      name="billing_gst"
                      class="form-control py-2 shadow-none border-secondary-subtle"
                      placeholder="GST Number (optional)"
                      value="<?php echo htmlspecialchars($defBilling['gst'] ?? ''); ?>"
                    />
                  </div>
                </div>

                <div class="row mb-4 form-grid full">
                  <div class="col-12">
                    <label
                      class="form-label fw-medium text-secondary mb-2"
                      style="font-size: 14px"
                      >Address <span class="text-danger req">*</span></label
                    >
                    <input
                      type="text"
                      name="billing_address"
                      class="form-control py-2 shadow-none border-secondary-subtle"
                      placeholder="House number and street name"
                      value="<?php echo htmlspecialchars($defBilling['address_line1'] ?? ''); ?>"
                      required
                    />
                  </div>
                </div>

                <div class="row g-3 mb-4 form-grid">
                  <div class="col-md-6">
                    <label
                      class="form-label fw-medium text-secondary mb-2"
                      style="font-size: 14px"
                      >PIN Code <span class="text-danger req">*</span></label
                    >
                    <input
                      type="text"
                      id="billing_pincode"
                      name="billing_pincode"
                      class="form-control py-2 shadow-none border-secondary-subtle"
                      placeholder="PIN Code"
                      value="<?php echo htmlspecialchars($defBilling['zip'] ?? ''); ?>"
                      required
                      pattern="[0-9]{6}"
                      title="Please enter a valid 6-digit PIN code"
                      maxlength="6"
                      minlength="6"
                      oninput="
                        this.value = this.value.replace(/[^0-9]/g, '');
                        if (this.value.length === 6)
                          fetchLocationData(this.value, 'billing');
                      "
                    />
                  </div>
                  <div class="col-md-6">
                    <label
                      class="form-label fw-medium text-secondary mb-2"
                      style="font-size: 14px"
                      >Town / City <span class="text-danger req">*</span></label
                    >
                    <input
                      type="text"
                      id="billing_city"
                      name="billing_city"
                      class="form-control py-2 shadow-none border-secondary-subtle"
                      placeholder="Town / City"
                      value="<?php echo htmlspecialchars($defBilling['city'] ?? ''); ?>"
                      required
                    />
                  </div>
                </div>

                <div class="row mb-4 form-grid full">
                  <div class="col-12">
                    <label
                      class="form-label fw-medium text-secondary mb-2"
                      style="font-size: 14px"
                      >State <span class="text-danger req">*</span></label
                    >
                    <select
                      id="billing_state"
                      name="billing_state"
                      class="form-control py-2 shadow-none border-secondary-subtle"
                      required
                    >
                      <option value="">Select State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
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


                    <script>
                      document.addEventListener('DOMContentLoaded', function() {
                        const savedState = "<?php echo htmlspecialchars($defBilling['state'] ?? ''); ?>";
                        if (savedState) {
                          const stateSelect = document.getElementById('billing_state');
                          for (let i = 0; i < stateSelect.options.length; i++) {
                            if (stateSelect.options[i].value === savedState) {
                              stateSelect.selectedIndex = i;
                              break;
                            }
                          }
                        }
                      });
                    </script>
                  </div>
                </div>

                <div
                  class="d-flex align-items-center gap-2 fw-semibold text-dark my-4"
                  style="font-size: 15px"
                >
                  <input
                    type="checkbox"
                    id="diff-addr"
                    name="ship_to_different"
                    class="form-check-input mt-0 shadow-none"
                    style="cursor: pointer"
                  />
                  <label
                    for="diff-addr"
                    class="form-check-label"
                    style="cursor: pointer"
                    >Ship to a different address?</label
                  >
                </div>

                <div
                  id="shipping-address-form"
                  class="pt-3 border-top mt-2 mb-4"
                  style="display: none"
                >
                  <div class="row g-3 mb-4 form-grid">
                    <div class="col-md-6">
                      <label
                        class="form-label fw-medium text-secondary mb-2"
                        style="font-size: 14px"
                        >First name
                        <span class="text-danger req">*</span></label
                      >
                      <input
                        type="text"
                        name="shipping_first_name"
                        class="form-control py-2 shadow-none border-secondary-subtle"
                        placeholder="First name"
                        value="<?php echo htmlspecialchars($defShipping['first_name'] ?? ''); ?>"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label
                        class="form-label fw-medium text-secondary mb-2"
                        style="font-size: 14px"
                        >Last name <span class="text-danger req">*</span></label
                      >
                      <input
                        type="text"
                        name="shipping_last_name"
                        class="form-control py-2 shadow-none border-secondary-subtle"
                        placeholder="Last name"
                        value="<?php echo htmlspecialchars($defShipping['last_name'] ?? ''); ?>"
                        required
                      />
                    </div>
                  </div>

                  <div class="row g-3 mb-4 form-grid">
                    <div class="col-md-6">
                      <label
                        class="form-label fw-medium text-secondary mb-2"
                        style="font-size: 14px"
                        >Phone No. <span class="text-danger req">*</span></label
                      >
                      <input
                        type="text"
                        name="shipping_phone"
                        class="form-control py-2 shadow-none border-secondary-subtle"
                        placeholder="Phone No."
                        value="<?php echo htmlspecialchars($defShipping['phone'] ?? ''); ?>"
                        required
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit phone number"
                        maxlength="10"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                      />
                    </div>
                    <div class="col-md-6">
                      <label
                        class="form-label fw-medium text-secondary mb-2"
                        style="font-size: 14px"
                        >Email address
                        <span class="text-danger req">*</span></label
                      >
                      <input
                        type="email"
                        name="shipping_email"
                        class="form-control py-2 shadow-none border-secondary-subtle"
                        placeholder="Email address"
                        value="<?php echo htmlspecialchars($defShipping['email'] ?? $user['email']); ?>"
                        required
                      />
                    </div>
                  </div>

                  <div class="row g-3 mb-4 form-grid">
                    <div class="col-md-6">
                      <label
                        class="form-label fw-medium text-secondary mb-2"
                        style="font-size: 14px"
                        >Company name (optional)</label
                      >
                      <input
                        type="text"
                        name="shipping_company"
                        class="form-control py-2 shadow-none border-secondary-subtle"
                        placeholder="Company name (optional)"
                        value="<?php echo htmlspecialchars($defShipping['company'] ?? ''); ?>"
                      />
                    </div>
                    <div class="col-md-6">
                      <label
                        class="form-label fw-medium text-secondary mb-2"
                        style="font-size: 14px"
                        >GST Number (optional)</label
                      >
                      <input
                        type="text"
                        name="shipping_gst"
                        class="form-control py-2 shadow-none border-secondary-subtle"
                        placeholder="GST Number (optional)"
                        value="<?php echo htmlspecialchars($defShipping['gst'] ?? ''); ?>"
                      />
                    </div>
                  </div>

                  <div class="row mb-4 form-grid full">
                    <div class="col-12">
                      <label
                        class="form-label fw-medium text-secondary mb-2"
                        style="font-size: 14px"
                        >Address
                        <span class="text-danger req">*</span></label
                      >
                      <input
                        type="text"
                        name="shipping_address"
                        class="form-control py-2 shadow-none border-secondary-subtle"
                        placeholder="House number and street name"
                        value="<?php echo htmlspecialchars($defShipping['address_line1'] ?? ''); ?>"
                      />
                    </div>
                  </div>

                  <div class="row g-3 mb-4 form-grid">
                    <div class="col-md-6">
                      <label
                        class="form-label fw-medium text-secondary mb-2"
                        style="font-size: 14px"
                        >PIN Code <span class="text-danger req">*</span></label
                      >
                      <input
                        type="text"
                        id="shipping_pincode"
                        name="shipping_pincode"
                        class="form-control py-2 shadow-none border-secondary-subtle"
                        placeholder="PIN Code"
                        value="<?php echo htmlspecialchars($defShipping['zip'] ?? ''); ?>"
                        pattern="[0-9]{6}"
                        title="Please enter a valid 6-digit PIN code"
                        maxlength="6"
                        minlength="6"
                        oninput="
                          this.value = this.value.replace(/[^0-9]/g, '');
                          if (this.value.length === 6)
                            fetchLocationData(this.value, 'shipping');
                        "
                      />
                    </div>
                    <div class="col-md-6">
                      <label
                        class="form-label fw-medium text-secondary mb-2"
                        style="font-size: 14px"
                        >Town / City
                        <span class="text-danger req">*</span></label
                      >
                      <input
                        type="text"
                        id="shipping_city"
                        name="shipping_city"
                        class="form-control py-2 shadow-none border-secondary-subtle"
                        placeholder="Town / City"
                        value="<?php echo htmlspecialchars($defShipping['city'] ?? ''); ?>"
                      />
                    </div>
                  </div>

                  <div class="row mb-4 form-grid full">
                    <div class="col-12">
                      <label
                        class="form-label fw-medium text-secondary mb-2"
                        style="font-size: 14px"
                        >State <span class="text-danger req">*</span></label
                      >
                      <select
                        id="shipping_state"
                        name="shipping_state"
                        class="form-control py-2 shadow-none border-secondary-subtle"
                      >
                        <option value="">Select State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">
                          Arunachal Pradesh
                        </option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">
                          Himachal Pradesh
                        </option>
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
                      <script>
                        document.addEventListener('DOMContentLoaded', function() {
                          const savedShippingState = "<?php echo htmlspecialchars($defShipping['state'] ?? ''); ?>";
                          if (savedShippingState) {
                            const stateSelect = document.getElementById('shipping_state');
                            for (let i = 0; i < stateSelect.options.length; i++) {
                              if (stateSelect.options[i].value === savedShippingState) {
                                stateSelect.selectedIndex = i;
                                break;
                              }
                            }
                          }
                          
                          <?php if ($defShipping): ?>
                          // Auto check the ship to different address box if a shipping address is found
                          const diffAddrCheckbox = document.getElementById("diff-addr");
                          if (diffAddrCheckbox) {
                             diffAddrCheckbox.checked = true;
                             // Trigger change event to show the form
                             diffAddrCheckbox.dispatchEvent(new Event('change'));
                          }
                          <?php endif; ?>
                        });
                      </script>
                    </div>
                  </div>
                </div>

                <div class="row mb-4 form-grid full">
                  <div class="col-12">
                    <label
                      class="form-label fw-medium text-secondary mb-2"
                      style="font-size: 14px"
                      >Order notes (optional)</label
                    >
                    <textarea
                      class="form-control py-2 shadow-none border-secondary-subtle"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      style="min-height: 120px; resize: vertical"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column: Sidebar Summary -->
            <div class="col-lg-4 checkout-sidebar-col">
              <div
                class="bg-white border rounded p-4 shadow-sm mb-4 checkout-box"
              >
                <h2 class="fs-5 fw-bold text-dark mb-4 pb-2 border-bottom">
                  Your order
                </h2>

                <table class="table w-100 mb-4 order-table">
                  <thead>
                    <tr>
                      <th
                        class="border-bottom py-3 fw-bold text-dark border-top-0"
                      >
                        Product
                      </th>
                      <th
                        class="border-bottom py-3 fw-bold text-dark text-end border-top-0"
                      >
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border-bottom py-3 text-secondary">
                        DeltaView Spark 65"
                        <strong class="text-dark ms-1">× 1</strong>
                      </td>
                      <td
                        class="border-bottom py-3 text-end fw-medium text-dark"
                      >
                        ₹109,824.00
                      </td>
                    </tr>
                    <tr>
                      <td class="border-bottom py-3 text-secondary">
                        DeltaView Blaze 75"
                        <strong class="text-dark ms-1">× 1</strong>
                      </td>
                      <td
                        class="border-bottom py-3 text-end fw-medium text-dark"
                      >
                        ₹166,400.00
                      </td>
                    </tr>
                    <tr>
                      <td class="border-bottom py-3 fw-bold text-dark">
                        Subtotal
                      </td>
                      <td
                        class="border-bottom py-3 text-end fw-medium text-dark"
                      >
                        ₹276,224.00
                      </td>
                    </tr>
                    <tr>
                      <td class="border-bottom py-3 fw-bold text-dark">
                        Shipping
                      </td>
                      <td class="border-bottom py-3 text-end text-secondary">
                        Free shipping
                      </td>
                    </tr>
                    <tr class="total-row">
                      <td class="border-bottom-0 pt-4 fw-bold text-dark fs-5">
                        Total
                      </td>
                      <td
                        class="border-bottom-0 pt-4 text-end fw-bold text-dark fs-5"
                      >
                        ₹276,224.00
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="bg-white border rounded p-4 my-4 payment-box">
                  <div class="fs-6 fw-bold text-dark mb-3 payment-title">
                    Pay Online (Easebuzz)
                  </div>
                  <div class="mb-3 payment-logo">
                    <!-- Mimicking the Easebuzz Logo via HTML for immediate visual matching -->
                    <div class="d-flex align-items-center gap-2 mb-3">
                      <div class="d-flex flex-column gap-1">
                        <div
                          style="
                            width: 35px;
                            height: 6px;
                            background-color: #3b82f6;
                            transform: skewX(-15deg);
                          "
                        ></div>
                        <div
                          style="
                            width: 35px;
                            height: 6px;
                            background-color: #2dd4bf;
                            transform: skewX(-15deg);
                          "
                        ></div>
                        <div
                          style="
                            width: 35px;
                            height: 6px;
                            background-color: #8b5cf6;
                            transform: skewX(-15deg);
                          "
                        ></div>
                      </div>
                      <span
                        class="fw-bolder"
                        style="
                          font-size: 32px;
                          color: #1e1b4b;
                          letter-spacing: -1px;
                          line-height: 1;
                        "
                        >Easebuzz</span
                      >
                    </div>
                  </div>
                  <div
                    class="bg-light p-3 rounded border fs-6 text-secondary lh-base payment-desc"
                  >
                    Pay securely by Credit or Debit card or internet banking
                    through Easebuzz.
                  </div>
                </div>

                <div class="fs-6 text-secondary lh-base mb-4 terms-text">
                  I have read the Privacy Policy, Terms and agree to allow
                  DeltaView to process my personal data for the purposes above.
                  <a
                    href="#"
                    class="text-primary fw-semibold text-decoration-none"
                    >privacy policy</a
                  >.
                </div>

                <label
                  class="d-flex align-items-start gap-2 fs-6 fw-medium text-dark mb-4 terms-checkbox"
                  style="cursor: pointer"
                >
                  <input
                    type="checkbox"
                    required
                    class="form-check-input mt-1 shadow-none"
                    style="cursor: pointer; width: 18px; height: 18px"
                  />


                  <span
                    >I have read and agree to the website
                    <a
                      href="#"
                      class="text-primary fw-semibold text-decoration-none"
                      >terms and conditions</a
                    >
                    <span class="text-danger req">*</span></span
                  >
                </label>

                <button
                  type="submit"
                  class="btn btn-dark w-100 py-3 fw-bold shadow-sm fs-6 btn-place-order"
                >
                  Place order
                </button>
              </div>
            </div>
          </form>

          <!-- FAQ Section -->
          <div class="mx-auto faq-section" style="max-width: 1100px; margin-top: 100px; margin-bottom: 100px;">
            <h2 class="fs-5 fw-bold text-dark border-bottom pb-3 mb-4 text-center faq-title">
              Frequently Asked Questions
            </h2>
            <div class="accordion accordion-flush bg-white" id="faqAccordion">
              
              <!-- Item 1 -->
              <div class="accordion-item border-bottom">
                <h2 class="accordion-header" id="faqHeading1">
                  <button class="accordion-button collapsed fw-medium text-dark p-3" style="font-size: 14px; box-shadow: none;" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1" aria-expanded="false" aria-controls="faqCollapse1">
                    What are the sizes of products?
                  </button>
                </h2>
                <div id="faqCollapse1" class="accordion-collapse collapse" aria-labelledby="faqHeading1" data-bs-parent="#faqAccordion">
                  <div class="accordion-body text-secondary p-3 pt-0" style="font-size: 14px; line-height: 1.6">
                    DeltaView intelligent interactive panels are available in a variety of sizes to suit different spaces and requirements. Our standard sizes typically range from 65", 75", 86", up to 98" to ensure the perfect fit for anything from small huddle rooms to large lecture halls and boardrooms.
                  </div>
                </div>
              </div>

              <!-- Item 2 -->
              <div class="accordion-item border-bottom">
                <h2 class="accordion-header" id="faqHeading2">
                  <button class="accordion-button collapsed fw-medium text-dark p-3" style="font-size: 14px; box-shadow: none;" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2" aria-expanded="false" aria-controls="faqCollapse2">
                    Does this panel connect to a smartphone?
                  </button>
                </h2>
                <div id="faqCollapse2" class="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#faqAccordion">
                  <div class="accordion-body text-secondary p-3 pt-0" style="font-size: 14px; line-height: 1.6">
                    Yes, absolutely. DeltaView panels support seamless wireless casting. You can easily connect, mirror, and share content directly from your smartphone, tablet, or laptop (supporting iOS, Android, Windows, and Mac) without the need for additional cables.
                  </div>
                </div>
              </div>

              <!-- Item 3 -->
              <div class="accordion-item border-bottom">
                <h2 class="accordion-header" id="faqHeading3">
                  <button class="accordion-button collapsed fw-medium text-dark p-3" style="font-size: 14px; box-shadow: none;" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3" aria-expanded="false" aria-controls="faqCollapse3">
                    How much power does it consume?
                  </button>
                </h2>
                <div id="faqCollapse3" class="accordion-collapse collapse" aria-labelledby="faqHeading3" data-bs-parent="#faqAccordion">
                  <div class="accordion-body text-secondary p-3 pt-0" style="font-size: 14px; line-height: 1.6">
                    Our panels are designed with energy efficiency in mind. While power consumption varies slightly depending on the screen size, a standard 75" panel generally consumes around 250W to 350W during active use, and drops to less than 0.5W when in standby mode.
                  </div>
                </div>
              </div>

              <!-- Item 4 -->
              <div class="accordion-item border-bottom">
                <h2 class="accordion-header" id="faqHeading4">
                  <button class="accordion-button collapsed fw-medium text-dark p-3" style="font-size: 14px; box-shadow: none;" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse4" aria-expanded="false" aria-controls="faqCollapse4">
                    Can we connect to it remotely?
                  </button>
                </h2>
                <div id="faqCollapse4" class="accordion-collapse collapse" aria-labelledby="faqHeading4" data-bs-parent="#faqAccordion">
                  <div class="accordion-body text-secondary p-3 pt-0" style="font-size: 14px; line-height: 1.6">
                    Yes, you can. DeltaView panels are built for modern hybrid collaboration. They support remote device management and are fully compatible with popular video conferencing applications, allowing your team or students to connect, interact, and collaborate from anywhere in the world.
                  </div>
                </div>
              </div>

              <!-- Item 5 -->
              <div class="accordion-item border-0">
                <h2 class="accordion-header" id="faqHeading5">
                  <button class="accordion-button collapsed fw-medium text-dark p-3" style="font-size: 14px; box-shadow: none;" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse5" aria-expanded="false" aria-controls="faqCollapse5">
                    If I have a problem with the smart board, what is the turnaround time for support?
                  </button>
                </h2>
                <div id="faqCollapse5" class="accordion-collapse collapse" aria-labelledby="faqHeading5" data-bs-parent="#faqAccordion">
                  <div class="accordion-body text-secondary p-3 pt-0" style="font-size: 14px; line-height: 1.6">
                    We pride ourselves on our after-sales service. We offer 24/7 Customer Support and a 3-Year On-Site Warranty. Because we cover over 15,000+ serviceable pin codes across India, our technical experts ensure a rapid response, typically providing on-site support and resolving issues within 24 to 48 hours.
                  </div>
                </div>
              </div>

            </div>
          </div>
          <!-- End FAQ Section -->
        </div>
      </div>
    </main>

    <?php include 'inc/footer.php'; ?> <?php include 'inc/footer-links.php'; ?>
    <script>
      function fetchLocationData(pincode, type) {
        fetch(`https://api.postalpincode.in/pincode/${pincode}`)
          .then((res) => res.json())
          .then((data) => {
            if (data[0].Status === "Success") {
              const postOffice = data[0].PostOffice[0];
              const cityInput = document.getElementById(`${type}_city`);
              const stateSelect = document.getElementById(`${type}_state`);
              if (cityInput) {
                  cityInput.value = postOffice.District;
                  cityInput.dispatchEvent(new Event('input', { bubbles: true }));
              }
              
              let stateName = postOffice.State;
              if (stateName === 'Andaman & Nicobar Islands') stateName = 'Andaman and Nicobar Islands';
              if (stateName === 'Dadra & Nagar Haveli' || stateName === 'Daman & Diu') stateName = 'Dadra and Nagar Haveli and Daman and Diu';
              
              if (stateSelect) {
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
            } else {
              console.warn("Invalid PIN Code or location data not found.");
            }
          })
          .catch((err) => console.error("Error fetching PIN code data:", err));
      }

      document.addEventListener("DOMContentLoaded", function () {
        // Load Cart Data
        const cartDataStr = localStorage.getItem("deltaCartData");
        if (cartDataStr) {
          try {
            const cartData = JSON.parse(cartDataStr);
            const tbody = document.querySelector(".order-table tbody");
            if (tbody && cartData.items && cartData.items.length > 0) {
              let html = "";

              // Items
              cartData.items.forEach((item) => {
                html += `
                  <tr>
                     <td>${item.name} <strong style="color: #111827; margin-left: 5px;">× ${item.qty}</strong></td>
                     <td>₹${(item.price * item.qty).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                  </tr>
               `;
              });

              // Subtotal
              html += `
               <tr>
                  <td style="font-weight: 700; color: #111827;">Subtotal</td>
                  <td>₹${cartData.subtotal.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
               </tr>
            `;

              // Discount
              if (cartData.discountAmount > 0) {
                html += `
                  <tr>
                     <td style="font-weight: 700; color: #16a34a;">Discount (${cartData.discountRate * 100}%)</td>
                     <td style="color: #16a34a;">-₹${cartData.discountAmount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                  </tr>
               `;
              }

              // Shipping
              html += `
               <tr>
                  <td style="font-weight: 700; color: #111827;">Shipping</td>
                  <td style="font-weight: 400; color: #4b5563;">Free shipping</td>
               </tr>
            `;

              // Tax
              html += `
               <tr>
                  <td style="font-weight: 700; color: #111827;">Tax (18%)</td>
                  <td>₹${cartData.tax.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
               </tr>
            `;

              // Total
              html += `
               <tr class="total-row">
                  <td>Total</td>
                  <td>₹${cartData.total.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
               </tr>
            `;

              tbody.innerHTML = html;
            }
          } catch (e) {
            console.error("Error parsing cart data", e);
          }
        }

        // Form Validation Logic
        const checkoutForm = document.getElementById("checkout-form");
        const placeOrderBtn = document.querySelector(".btn-place-order");

        const validateForm = () => {
          if (checkoutForm && placeOrderBtn) {
            let isValid = true;
            for (let i = 0; i < checkoutForm.elements.length; i++) {
              const field = checkoutForm.elements[i];
              if (field.willValidate && !field.validity.valid) {
                isValid = false;
                break;
              }
            }
            if (isValid) {
              placeOrderBtn.style.opacity = "1";
            } else {
              placeOrderBtn.style.opacity = "0.5";
            }
          }
        };

        if (checkoutForm) {
          checkoutForm.addEventListener("input", function (e) {
            validateForm();
            const field = e.target;
            if (
              (field.tagName === "INPUT" && field.type !== "checkbox") ||
              field.tagName === "SELECT"
            ) {
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
                  errorSpan.textContent =
                    "Please enter a valid email address (must contain @)";
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

          checkoutForm.addEventListener("focusout", function (e) {
            const field = e.target;
            if (
              ((field.tagName === "INPUT" && field.type !== "checkbox") ||
                field.tagName === "SELECT") &&
              field.hasAttribute("required")
            ) {
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

          checkoutForm.addEventListener(
            "invalid",
            function (e) {
              e.preventDefault(); // Suppress the native browser tooltip
              const field = e.target;
              if (
                field.hasAttribute("required") &&
                !field.validity.valid &&
                field.type !== "checkbox"
              ) {
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
                } else if (
                  field.type === "email" &&
                  field.validity.typeMismatch
                ) {
                  field.style.borderColor = "#ef4444";
                  errorSpan.textContent =
                    "Please enter a valid email address (must contain @)";
                } else if (field.validity.patternMismatch) {
                  field.style.borderColor = "#ef4444";
                  errorSpan.textContent = field.title || "Invalid format";
                }
              }
            },
            true,
          ); // Use capture phase because invalid events do not bubble

          checkoutForm.addEventListener("submit", function (e) {
            const cartDataStr = localStorage.getItem("deltaCartData");
            if (cartDataStr) {
               document.getElementById("cart_data_input").value = cartDataStr;
               localStorage.removeItem("deltaCartData");
            }
          });
        }

        // Shipping address toggle
        const diffAddrCheckbox = document.getElementById("diff-addr");
        const shippingForm = document.getElementById("shipping-address-form");
        if (diffAddrCheckbox && shippingForm) {
          const shippingFields = shippingForm.querySelectorAll(
            "input[required], select[required]",
          );

          const toggleShippingRequired = (isRequired) => {
            shippingFields.forEach((field) => {
              if (isRequired) {
                field.setAttribute("required", "required");
              } else {
                field.removeAttribute("required");
                field.style.borderColor = "#e5e7eb";
                let errorSpan = field.nextElementSibling;
                if (errorSpan && errorSpan.classList.contains("error-msg")) {
                  errorSpan.textContent = "";
                }
              }
            });
          };

          if (!diffAddrCheckbox.checked) {
            toggleShippingRequired(false);
          }

          validateForm();

          diffAddrCheckbox.addEventListener("change", function () {
            if (this.checked) {
              shippingForm.style.display = "block";
              toggleShippingRequired(true);
            } else {
              shippingForm.style.display = "none";
              toggleShippingRequired(false);
            }
            validateForm();
          });
        } else {
          validateForm();
        }

        // FAQ logic has been removed as it now uses Bootstrap 5 native accordion.
      });
    </script>
  </body>
</html>
