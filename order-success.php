<!doctype html>
<html class="no-js" lang="zxx">
  <head>
    <?php include 'inc/head.php'; ?>
    <style>
      /* 
  Custom styles have been removed. 
  This page now strictly uses Bootstrap 5 utilities for a clean structure. 
*/
      @keyframes scaleIn {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
    </style>
  </head>
  <body>
    <?php include 'inc/header.php'; ?>

    <main>
      <div
        class="bg-light d-flex align-items-center justify-content-center"
        style="
          padding: 120px 0 100px;
          min-height: 70vh;
          font-family:
            &quot;Inter&quot;,
            -apple-system,
            BlinkMacSystemFont,
            &quot;Segoe UI&quot;,
            Roboto,
            sans-serif;
        "
      >
        <div
          class="bg-white border p-5 text-center shadow-sm"
          style="border-radius: 16px; max-width: 600px; width: 100%"
        >
          <div
            class="mb-4"
            style="
              font-size: 80px;
              color: #10b981;
              animation: scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
                forwards;
            "
          >
            <i class="fa-regular fa-cart-shopping"></i>
          </div>
          <h1 class="fs-2 fw-bold text-dark mb-3">Your Order is Placed!</h1>
          <p class="fs-6 text-secondary lh-base mb-5">
            Thank you for shopping with us. We have received your order and are
            currently processing it. You will receive an email confirmation
            shortly with your order details.
          </p>
          <a
            href="orders.php"
            class="btn btn-dark px-4 py-3 fw-semibold shadow-sm"
            style="
              border-radius: 8px;
              font-size: 16px;
              transition: all 0.2s ease;
            "
            >View Order History</a
          >
        </div>
      </div>
    </main>

    <?php include 'inc/footer.php'; ?> <?php include 'inc/footer-links.php'; ?>
  </body>
</html>
