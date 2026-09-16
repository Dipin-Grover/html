<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
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
    <!-- Add Font Awesome specifically for the cart icons if not included in head -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    />
  </head>

  <body>
    <?php include 'inc/header.php'; ?>

    <main>
      <div class="pb-5 bg-light cart-wrapper pt-5 mt-5">
        <div class="container">
          <div class="mx-auto" style="max-width: 1100px">
            
            <!-- Page Heading -->
            <div class="text-center mb-5 mt-3">
               <h1 class="fs-1 fw-bold text-dark mb-2">Shopping Cart</h1>
               <p class="text-secondary fs-6">Review your items and proceed to checkout.</p>
            </div>

            <!-- Full Screen Empty Cart Message -->
            <div
              class="empty-cart-message bg-white rounded shadow-sm text-center py-5 px-3"
              style="display: none"
            >
              <i class="fas fa-shopping-cart text-muted mb-4 d-block display-1"></i>
              <h3 class="fs-4 text-dark mb-3">Your cart is empty</h3>
              <p class="text-secondary mb-4 fs-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <a
                href="index.php"
                class="btn btn-primary fw-semibold px-4 py-2 fs-6"
                >Continue Shopping</a
              >
            </div>

            <div class="cart-main-container border rounded bg-white mb-5">
              <!-- Header -->
              <div
                class="d-flex justify-content-between align-items-center p-4 border-bottom cart-header-top"
              >
                <div class="fs-4 fw-bold text-dark cart-title-main">
                  Shopping Cart
                </div>
                <div
                  class="fs-6 fw-medium text-secondary cart-items-count-text"
                >
                  <span class="cart-count-num">2</span> Items
                </div>
              </div>

              <div class="row g-0 cart-layout">
                <!-- Items Column -->
                <div class="col-lg-8 p-4 border-end cart-items-col">
                  <div class="cart-items-wrapper pe-md-3">
                    <div
                      class="d-none d-lg-flex border-bottom pb-3 mb-4 fs-6 fw-bold text-dark cart-table-header"
                    >
                      <div class="flex-grow-1 th-product">Product</div>
                      <div class="text-center th-price" style="width: 100px">
                        Price
                      </div>
                      <div class="text-center th-qty" style="width: 120px">
                        Quantity
                      </div>
                      <div class="text-end th-total" style="width: 100px">
                        Total
                      </div>
                    </div>

                    <!-- Dynamic Items Container -->
                    <div id="dynamic-cart-items"></div>
                  </div>
                </div>

                <!-- Summary Column -->
                <div class="col-lg-4 p-4 cart-summary-col">
                  <div
                    class="bg-transparent border-0 rounded-0 p-0 mb-0 cart-box"
                  >
                    <h3 class="fs-6 fw-bold text-dark mb-4 mt-0 summary-title">
                      Order Summary
                    </h3>
                    <div
                      class="border-top border-bottom py-3 mb-4 summary-list"
                    >
                      <div
                        class="d-flex justify-content-between mb-3 text-secondary fs-6 summary-row"
                      >
                        <span>Subtotal</span>
                        <span id="cart-subtotal" class="text-dark fw-medium"
                          >₹276,224.00</span
                        >
                      </div>
                      <div
                        class="justify-content-between mb-3 text-success fs-6 summary-row discount-row"
                        style="display: none !important"
                      >
                        <span id="discount-label">Discount</span>
                        <span id="cart-discount" class="fw-medium">-₹0.00</span>
                      </div>
                      <div
                        class="d-flex justify-content-between mb-3 text-secondary fs-6 align-items-start summary-row shipping-row"
                      >
                        <span>Shipping</span>
                        <div class="d-flex flex-column align-items-end text-end gap-1 shipping-details flex-grow-1 w-75">
                          <span class="text-dark fw-medium shipping-method"
                            >Free shipping</span
                          >
                          <span class="text-muted shipping-destination small">Shipping to Haryana.</span>
                        </div>
                      </div>
                      <div
                        class="d-flex justify-content-between text-secondary fs-6 summary-row mb-0"
                      >
                        <span>Tax (18%)</span>
                        <span id="cart-tax" class="text-dark fw-medium"
                          >₹49,720.32</span
                        >
                      </div>
                    </div>

                    <div class="d-flex justify-content-between align-items-center fw-bold text-dark mb-4 summary-row total fs-5">
                      <span>Total</span>
                      <span id="cart-total" class="fs-5">₹326,444.32</span>
                    </div>

                    <a
                      href="checkout.php"
                      class="btn btn-primary w-100 py-2 fw-medium fs-6 checkout-btn"
                      >Proceed to Checkout</a
                    >
                    <a
                      href="index.php"
                      class="d-block text-center mt-3 text-secondary text-decoration-none fs-6 continue-shopping"
                      >Continue Shopping</a
                    >

                    <div class="mt-4 promo-section">
                      <div class="fw-medium text-secondary mb-2 promo-title small">
                        Do you have a promo code?
                      </div>
                      <div class="position-relative d-block promo-input-group">
                        <input type="text" class="form-control form-control-lg rounded-3 fs-6 promo-input" style="padding-right: 90px;" placeholder="Enter promo code" />
                        <button class="btn btn-dark position-absolute top-50 end-0 translate-middle-y me-2 px-3 promo-apply-btn btn-sm rounded-2" type="button" style="z-index: 5;">
                          Apply
                        </button>
                      </div>
                      <div
                        id="promo-message"
                        class="mt-2 fw-medium"
                        style="font-size: 13px; display: none"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ Section -->
          <div class="mx-auto faq-section container my-5 py-5">
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
          <!-- End FAQ Section -->
        </div>
      </div>
    </main>

    <?php include 'inc/footer.php'; ?>

    <!-- JS here -->
    <?php include 'inc/footer-links.php'; ?>
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        let currentDiscount = 0;

        function loadCartFromStorage() {
          const cartDataStr = localStorage.getItem("deltaCartData");
          let cartData = { items: [] };
          if(cartDataStr) {
            try { cartData = JSON.parse(cartDataStr); } catch(e) {}
          }
          return cartData;
        }

        function saveCartToStorage(cartData) {
          localStorage.setItem("deltaCartData", JSON.stringify(cartData));
        }

        function formatCurrency(number) {
          return "₹" + number.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }

        function renderCart() {
          const cartData = loadCartFromStorage();
          const container = document.getElementById("dynamic-cart-items");
          if (!container) return;
          
          container.innerHTML = "";
          let subtotal = 0;

          cartData.items.forEach((item, index) => {
            const itemTotal = item.qty * item.price;
            subtotal += itemTotal;

            const itemHtml = `
              <div class="d-flex flex-wrap flex-lg-nowrap align-items-center border-bottom pb-4 mb-4 gap-3 cart-item" data-index="${index}" data-price="${item.price}">
                <div class="flex-grow-1 d-flex align-items-center gap-3 item-product-col" style="flex-basis: 100%">
                  <div class="bg-light rounded p-2 item-image-wrapper" style="width: 80px; height: 80px">
                    <img src="${item.image}" alt="${item.name}" class="w-100 h-100 object-fit-contain" />
                  </div>
                  <div class="d-flex flex-column item-info">
                    <div class="fw-bold text-dark text-uppercase mb-1 item-name small">${item.name}</div>
                    <button class="btn btn-link text-danger p-0 mt-2 text-decoration-none d-flex align-items-center gap-1 text-remove-btn action-btn remove small fw-medium" data-index="${index}">
                      <i class="far fa-trash-alt"></i> Remove
                    </button>
                  </div>
                </div>
                <div class="text-center text-secondary d-none d-lg-block item-price-col small" style="width: 100px;">
                  ${formatCurrency(item.price)}
                </div>
                <div class="d-flex justify-content-start justify-content-lg-center item-qty-col" style="width: 120px">
                  <div class="d-flex align-items-center border rounded-pill bg-white qty-control" style="height: 32px; width: 90px">
                    <button class="btn btn-sm text-dark px-2 border-0 bg-transparent h-100 d-flex align-items-center justify-content-center qty-btn minus" data-index="${index}" style="width: 30px">
                      <i class="fas fa-minus"></i>
                    </button>
                    <input type="text" class="form-control form-control-sm border-0 text-center fw-bold bg-transparent shadow-none px-0 qty-input" value="${item.qty}" readonly style="width: 30px; font-size: 12px; pointer-events: none;" />
                    <button class="btn btn-sm text-dark px-2 border-0 bg-transparent h-100 d-flex align-items-center justify-content-center qty-btn plus" data-index="${index}" style="width: 30px">
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
                <div class="text-start text-lg-end fw-bold text-dark item-total-col price-current small" style="width: 100px;">
                  ${formatCurrency(itemTotal)}
                </div>
              </div>
            `;
            container.insertAdjacentHTML('beforeend', itemHtml);
          });

          updateTotalsAndCount(cartData, subtotal);
          attachEventListeners();
        }

        function updateTotalsAndCount(cartData, subtotal) {
          // calculate totals
          let discountAmount = subtotal * currentDiscount;
          let discountedSubtotal = subtotal - discountAmount;
          const tax = discountedSubtotal * 0.18;
          const total = discountedSubtotal + tax;

          // save totals
          cartData.subtotal = subtotal;
          cartData.discountRate = currentDiscount;
          cartData.discountAmount = discountAmount;
          cartData.tax = tax;
          cartData.total = total;
          saveCartToStorage(cartData);

          // update DOM elements
          const subtotalEl = document.getElementById("cart-subtotal");
          const taxEl = document.getElementById("cart-tax");
          const totalEl = document.getElementById("cart-total");
          const discountAmountEl = document.getElementById("cart-discount");

          if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
          if (discountAmountEl && currentDiscount > 0) discountAmountEl.textContent = "-" + formatCurrency(discountAmount);
          if (taxEl) taxEl.textContent = formatCurrency(tax);
          if (totalEl) totalEl.textContent = formatCurrency(total);

          // Header cart badge
          const headerCartBadge = document.querySelector(".tp-header-pb-cart-count");
          if (headerCartBadge) headerCartBadge.textContent = cartData.items.length;

          // Item count in cart page
          const countEl = document.querySelector(".cart-count-num");
          if (countEl) countEl.textContent = cartData.items.length;

          // Empty message toggle
          const emptyMessage = document.querySelector(".empty-cart-message");
          const cartLayout = document.querySelector(".cart-layout");
          if (cartData.items.length === 0) {
            if (emptyMessage) emptyMessage.style.display = "block";
            if (cartLayout) cartLayout.style.display = "none";
          } else {
            if (emptyMessage) emptyMessage.style.display = "none";
            if (cartLayout) cartLayout.style.display = "flex";
          }
        }

        function attachEventListeners() {
          const minusBtns = document.querySelectorAll(".qty-btn.minus");
          const plusBtns = document.querySelectorAll(".qty-btn.plus");
          const removeBtns = document.querySelectorAll(".action-btn.remove");

          minusBtns.forEach(btn => {
            btn.addEventListener("click", function(e) {
              e.preventDefault();
              const index = this.getAttribute("data-index");
              const cartData = loadCartFromStorage();
              if (cartData.items[index].qty > 1) {
                cartData.items[index].qty--;
              } else {
                cartData.items.splice(index, 1);
              }
              saveCartToStorage(cartData);
              renderCart();
            });
          });

          plusBtns.forEach(btn => {
            btn.addEventListener("click", function(e) {
              e.preventDefault();
              const index = this.getAttribute("data-index");
              const cartData = loadCartFromStorage();
              cartData.items[index].qty++;
              saveCartToStorage(cartData);
              renderCart();
            });
          });

          removeBtns.forEach(btn => {
            btn.addEventListener("click", function(e) {
              e.preventDefault();
              const index = this.getAttribute("data-index");
              const cartData = loadCartFromStorage();
              cartData.items.splice(index, 1);
              saveCartToStorage(cartData);
              renderCart();
            });
          });
        }

        // Initialize cart on load
        renderCart();

        // Geolocation logic for shipping
        function fetchLocationAndUpdate() {
          const destEl = document.querySelector(".shipping-destination");
          if (destEl) destEl.textContent = "Locating...";

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                fetch(
                  `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`,
                )
                  .then((res) => res.json())
                  .then((data) => {
                    const location =
                      data.principalSubdivision ||
                      data.city ||
                      data.countryName ||
                      "your location";
                    if (destEl) destEl.textContent = `Shipping to ${location}.`;
                  })
                  .catch(() => {
                    if (destEl)
                      destEl.textContent = "Shipping to your location.";
                  });
              },
              (error) => {
                if (destEl) destEl.textContent = "Location access denied.";
              },
            );
          } else {
            if (destEl) destEl.textContent = "Location not supported.";
          }
        }

        // Auto-fetch on load
        fetchLocationAndUpdate();

        const promoInput = document.querySelector(".promo-input");
        const promoApplyBtn = document.querySelector(".promo-apply-btn");
        const discountRow = document.querySelector(".discount-row");
        const discountLabel = document.getElementById("discount-label");
        const promoMessage = document.getElementById("promo-message");

        if (promoApplyBtn && promoInput) {
          promoApplyBtn.addEventListener("click", function (e) {
            e.preventDefault();
            const code = promoInput.value.trim().toLowerCase();
            if (code === "delta10") {
              currentDiscount = 0.1;
              if (discountRow) discountRow.style.display = "flex";
              if (discountLabel) discountLabel.textContent = "Discount (10%)";
              if (promoMessage) {
                promoMessage.textContent = "Yay! 10% discount applied.";
                promoMessage.style.color = "#16a34a";
                promoMessage.style.display = "block";
              }
              renderCart();
            } else {
              currentDiscount = 0;
              if (discountRow) discountRow.style.display = "none";
              if (promoMessage) {
                promoMessage.textContent = "Invalid promo code.";
                promoMessage.style.color = "#dc2626";
                promoMessage.style.display = "block";
              }
              renderCart();
            }
          });
        }

        // FAQ logic has been removed as it now uses Bootstrap 5 native accordion.
      });
    </script>
  </body>
</html>
