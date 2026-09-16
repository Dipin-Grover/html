<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?>
<!doctype html>
<html class="no-js" lang="zxx">
<head>
<?php include 'inc/head.php'; ?>
<link rel="stylesheet" href="assets/css/spark.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" />
<style>
.ag-photo-gallery-block {
  width: 100%;
}
.ag-format-container {
  width: 100%;
  margin: 0 auto;
}

.ag-photo-gallery_list {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 65px;
}
.ag-photo-gallery_item {
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
  aspect-ratio: 1/1;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
}
.ag-photo-gallery_figure {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
.ag-photo-gallery_img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  object-position: center;
  transition: transform 0.3s ease;
}
.ag-photo-gallery_img:hover {
  transform: scale(1.05);
}


@media only screen and (max-width: 767px) {
  .ag-photo-gallery_list {
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }
}
</style>
</head>

<body>
<?php include 'inc/header.php'; ?>

   <main>
      <div class="pt-170 pb-60">
          <div class="container-fluid px-lg-5">
              <div class="row align-items-start">
                  <div class="col-lg-7">
                      <section class="ag-photo-gallery-block">
                          <div class="ag-format-container">
                            <div class="ag-photo-gallery_list">
                              <div class="ag-photo-gallery_item ag-photo-gallery_item__wide">
                                <figure class="ag-photo-gallery_figure">
                                  <a href="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop" data-fancybox="gallery">
                                    <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop" class="ag-photo-gallery_img grid-img" alt="" />
                                  </a>
                                </figure>
                              </div>

                              <div class="ag-photo-gallery_item">
                                <figure class="ag-photo-gallery_figure">
                                  <a href="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" data-fancybox="gallery">
                                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" class="ag-photo-gallery_img grid-img" alt="" />
                                  </a>
                                </figure>
                              </div>

                              <div class="ag-photo-gallery_item ag-photo-gallery_item__narrow">
                                <figure class="ag-photo-gallery_figure">
                                  <a href="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026&auto=format&fit=crop" data-fancybox="gallery">
                                    <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop" class="ag-photo-gallery_img grid-img" alt="" />
                                  </a>
                                </figure>
                              </div>

                              <div class="ag-photo-gallery_item ag-photo-gallery_item__middle">
                                <figure class="ag-photo-gallery_figure">
                                  <a href="https://www.deltaview.in/wp-content/uploads/2023/09/final-3.webp" data-fancybox="gallery">
                                    <img src="https://www.deltaview.in/wp-content/uploads/2023/09/final-3.webp" class="ag-photo-gallery_img grid-img" alt="" />
                                  </a>
                                </figure>
                              </div>

                              <div class="ag-photo-gallery_item ag-photo-gallery_item__narrow">
                                <figure class="ag-photo-gallery_figure">
                                  <a href="https://www.edusquadz.in/cdn/shop/files/evota-digital-board-front.webp?v=1773397890" data-fancybox="gallery">
                                    <img src="https://www.edusquadz.in/cdn/shop/files/evota-digital-board-front.webp?v=1773397890" class="ag-photo-gallery_img grid-img" alt="" />
                                  </a>
                                </figure>
                              </div>

                              <div class="ag-photo-gallery_item ag-photo-gallery_item__wide">
                                <figure class="ag-photo-gallery_figure">
                                  <a href="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2042&auto=format&fit=crop" data-fancybox="gallery">
                                    <img src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop" class="ag-photo-gallery_img grid-img" alt="" />
                                  </a>
                                </figure>
                              </div>

                              <div class="ag-photo-gallery_item">
                                <figure class="ag-photo-gallery_figure">
                                  <a href="https://images.unsplash.com/photo-1585792180666-f7347c490ee2?q=80&w=2077&auto=format&fit=crop" data-fancybox="gallery">
                                    <img src="https://images.unsplash.com/photo-1585792180666-f7347c490ee2?q=80&w=800&auto=format&fit=crop" class="ag-photo-gallery_img grid-img" alt="" />
                                  </a>
                                </figure>
                              </div>

                              <div class="ag-photo-gallery_item ag-photo-gallery_item__narrow">
                                <figure class="ag-photo-gallery_figure">
                                  <a href="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2074&auto=format&fit=crop" data-fancybox="gallery">
                                    <img src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=800&auto=format&fit=crop" class="ag-photo-gallery_img grid-img" alt="" />
                                  </a>
                                </figure>
                              </div>
                            </div>
                          </div>
                      </section>
                  </div>
                  <div class="col-lg-5 ps-lg-5 position-sticky" style="top: 120px; height: fit-content;">
                      <h1 class="premium-title fw-bold text-dark mb-3">DeltaView Spark 65" <br></h1>
                      <p class="fs-6 text-secondary mb-4 lh-lg">Revolutionizing digital education and corporate meetings through engaging, hands-on interactive experiences.</p>
                      
                      
                      <div class="mb-4 d-flex align-items-center gap-3">
                          <span class="premium-price fw-bold text-dark">₹1,09,824</span>
                          <span class="fs-5 text-secondary text-decoration-line-through">₹2,30,100</span>
                          <span class="discount-badge">-52% OFF</span>
                      </div>

                      <div class="d-flex flex-wrap justify-content-between gap-5 mb-15 rounded-4 ">
                          <div>
                              <h4 class="fs-6 fw-bold mb-3 text-uppercase text-secondary letter-spacing-1">Screen Size</h4>
                              <div class="d-flex align-items-center gap-2 size-options">
                                  <button class="btn btn-buy-now text-white fw-bold size-btn d-flex align-items-center justify-content-center" style="height: 40px; min-width: 55px;" data-size="65">65"</button>
                                  <button class="btn btn-outline-secondary text-dark bg-white fw-bold size-btn d-flex align-items-center justify-content-center" style="height: 40px; min-width: 55px;" data-size="75">75"</button>
                                  <button class="btn btn-outline-secondary text-dark bg-white fw-bold size-btn d-flex align-items-center justify-content-center" style="height: 40px; min-width: 55px;" data-size="86">86"</button>
                                  <button class="btn btn-outline-secondary text-dark bg-white fw-bold size-btn d-flex align-items-center justify-content-center" style="height: 40px; min-width: 55px;" data-size="98">98"</button>
                              </div>
                          </div>

                          <div>
                              <h4 class="fs-6 fw-bold mb-3 text-uppercase text-secondary letter-spacing-1">Quantity</h4>
                              <div class="d-flex align-items-center">
                                  <button class="btn btn-outline-secondary px-2 py-1 qty-btn minus" type="button" style="border-radius: 6px 0 0 6px; height: 40px; width: 40px;">-</button>
                                  <input type="number" class="form-control text-center fw-bold border-secondary qty-input px-0" value="1" min="1" style="width: 50px; height: 40px; border-radius: 0; border-left: none; border-right: none; appearance: none; -moz-appearance: textfield;">
                                  <button class="btn btn-outline-secondary px-2 py-1 qty-btn plus" type="button" style="border-radius: 0 6px 6px 0; height: 40px; width: 40px;">+</button>
                              </div>
                          </div>
                      </div>

                      <div class="d-flex gap-3 mb-5">
                          <button class="btn btn-dark btn-add-cart fw-bold text-uppercase px-5 py-3 w-50">Add to Cart</button>
                          <button class="btn btn-buy-now fw-bold text-uppercase px-5 py-3 w-50 border-0">Buy Now</button>
                      </div>

                      <div class="d-flex justify-content-between text-center py-4 mb-5 border-top border-light">
                          <div class="feature-box flex-grow-1 cursor-pointer">
                              <div class="feature-icon-wrapper shadow-sm">
                                  <i class="far fa-truck fs-4"></i>
                              </div>
                              <span class="d-block fs-6 fw-semibold text-dark">Fast Delivery</span>
                          </div>
                          <div class="feature-box flex-grow-1 cursor-pointer">
                              <div class="feature-icon-wrapper shadow-sm">
                                  <i class="far fa-shield-check fs-4"></i>
                              </div>
                              <span class="d-block fs-6 fw-semibold text-dark">3 Yrs Warranty</span>
                          </div>
                          <div class="feature-box flex-grow-1 cursor-pointer">
                              <div class="feature-icon-wrapper shadow-sm">
                                  <i class="far fa-check-circle fs-4"></i>
                              </div>
                              <span class="d-block fs-6 fw-semibold text-dark">100% Original</span>
                          </div>
                          <div class="feature-box flex-grow-1 cursor-pointer">
                              <div class="feature-icon-wrapper shadow-sm">
                                  <i class="far fa-headset fs-4"></i>
                              </div>
                              <span class="d-block fs-6 fw-semibold text-dark">Tech Support</span>
                          </div>
                      </div>

                      <div class="bg-light p-4 ">
                          <h4 class="fs-5 fw-bold mb-4 text-dark">Key Features</h4>
                          <ul class="desc-list fs-6 lh-lg mb-0">
                              <li>Ultra HD display with up to 3840 x 2160 resolution of input signal available.</li>
                              <li>Built-in Wi-Fi realizes miracasting without any cable connection.</li>
                              <li>Various audio and video interfaces for device access.</li>
                              <li>Built-in network switch chip saves a network switch.</li>
                              <li>Built-in Android system provides kinds of applications.</li>
                              <li>Ultra-thin design with aluminum profile frame.</li>
                              <li>Looping-out display available.</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      

      

      <!-- Specification Section -->
      <div class="container py-5">
          <div class="text-center mb-4">
              <h2 class="fw-bold mb-2 text-dark fs-2 letter-spacing-1">SPECIFICATION</h2>
              <button class="btn text-primary text-decoration-none fs-6 d-inline-flex align-items-center gap-2" id="spec-toggle-btn" type="button" data-bs-toggle="collapse" data-bs-target="#specTableCollapse" aria-expanded="true" aria-controls="specTableCollapse">
                  <span id="spec-toggle-text">Close</span> <i id="spec-toggle-icon" class="far fa-chevron-up"></i>
              </button>
          </div>
          
          <div class="collapse show" id="specTableCollapse">
              <div class="table-responsive">
                  <table class="table table-bordered mb-0 spec-table-font" style="border: 5px solid #ebe4e4; --bs-table-border-color: #ebe4e4;">
                      <thead class="bg-light">
                          <tr>
                              <th class="py-3 px-4 border-0 text-secondary bg-light text-nowrap">Product Model</th>
                              <th class="py-3 px-4 border-0 text-center text-secondary bg-light">65"</th>
                              <th class="py-3 px-4 border-0 text-center text-secondary bg-light">75"</th>
                              <th class="py-3 px-4 border-0 text-center text-secondary bg-light">86"</th>
                              <th class="py-3 px-4 border-0 text-center text-secondary bg-light">98"</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Model No.</td>
                              <td class="py-3 px-4 text-center text-secondary">DV65S13</td>
                              <td class="py-3 px-4 text-center text-secondary">DV75S13</td>
                              <td class="py-3 px-4 text-center text-secondary">DV86S13</td>
                              <td class="py-3 px-4 text-center text-secondary">DV98S13</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Part Number</td>
                              <td class="py-3 px-4 text-center text-secondary">S65432</td>
                              <td class="py-3 px-4 text-center text-secondary">S75432</td>
                              <td class="py-3 px-4 text-center text-secondary">S86432</td>
                              <td class="py-3 px-4 text-center text-secondary">S98432</td>
                          </tr>
                          
                          <!-- DISPLAY -->
                          <tr>
                              <td colspan="5" class="fw-bold py-3 px-4 border-bottom-0 bg-light" >Display</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Panel Type</td>
                              <td class="py-3 px-4 text-center text-secondary">IPS</td>
                              <td class="py-3 px-4 text-center text-secondary">IPS</td>
                              <td class="py-3 px-4 text-center text-secondary">IPS</td>
                              <td class="py-3 px-4 text-center text-secondary">IPS</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Back Light</td>
                              <td class="py-3 px-4 text-center text-secondary">D-LED</td>
                              <td class="py-3 px-4 text-center text-secondary">D-LED</td>
                              <td class="py-3 px-4 text-center text-secondary">D-LED</td>
                              <td class="py-3 px-4 text-center text-secondary">D-LED</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Active Display Area</td>
                              <td class="py-3 px-4 text-center text-secondary">(L) 1515 (W) 98 (H) 945 mm</td>
                              <td class="py-3 px-4 text-center text-secondary">(L) 1745 (W) 110 (H) 1070 mm</td>
                              <td class="py-3 px-4 text-center text-secondary">(L) 1990 (W) 114 (H) 1213 mm</td>
                              <td class="py-3 px-4 text-center text-secondary">(L) 1990 (W) 114 (H) 1213 mm</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Resolution</td>
                              <td class="py-3 px-4 text-center text-secondary">3840 x 2160 (4K, RGB)</td>
                              <td class="py-3 px-4 text-center text-secondary">3840 x 2160 (4K, RGB)</td>
                              <td class="py-3 px-4 text-center text-secondary">3840 x 2160 (4K, RGB)</td>
                              <td class="py-3 px-4 text-center text-secondary">3840 x 2160 (4K, RGB)</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Contrast Ratio</td>
                              <td class="py-3 px-4 text-center text-secondary">1200:1</td>
                              <td class="py-3 px-4 text-center text-secondary">1200:1</td>
                              <td class="py-3 px-4 text-center text-secondary">1200:1</td>
                              <td class="py-3 px-4 text-center text-secondary">1200:1</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Brightness</td>
                              <td class="py-3 px-4 text-center text-secondary">450 CD/M2</td>
                              <td class="py-3 px-4 text-center text-secondary">450 CD/M2</td>
                              <td class="py-3 px-4 text-center text-secondary">450 CD/M2</td>
                              <td class="py-3 px-4 text-center text-secondary">450 CD/M2</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Display Colors</td>
                              <td class="py-3 px-4 text-center text-secondary">1.07B (10 BIT)</td>
                              <td class="py-3 px-4 text-center text-secondary">1.07B (10 BIT)</td>
                              <td class="py-3 px-4 text-center text-secondary">1.07B (10 BIT)</td>
                              <td class="py-3 px-4 text-center text-secondary">1.07B (10 BIT)</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Aspect Ratio</td>
                              <td class="py-3 px-4 text-center text-secondary">16:9</td>
                              <td class="py-3 px-4 text-center text-secondary">16:9</td>
                              <td class="py-3 px-4 text-center text-secondary">16:9</td>
                              <td class="py-3 px-4 text-center text-secondary">16:9</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Dynamic Aspect Ratio</td>
                              <td class="py-3 px-4 text-center text-secondary">30000:1</td>
                              <td class="py-3 px-4 text-center text-secondary">30000:1</td>
                              <td class="py-3 px-4 text-center text-secondary">30000:1</td>
                              <td class="py-3 px-4 text-center text-secondary">30000:1</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Response Time</td>
                              <td class="py-3 px-4 text-center text-secondary">2-5 ms</td>
                              <td class="py-3 px-4 text-center text-secondary">2-5 ms</td>
                              <td class="py-3 px-4 text-center text-secondary">2-5 ms</td>
                              <td class="py-3 px-4 text-center text-secondary">2-5 ms</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Viewing Angle</td>
                              <td class="py-3 px-4 text-center text-secondary">178°(H) / 178°(W)</td>
                              <td class="py-3 px-4 text-center text-secondary">178°(H) / 178°(W)</td>
                              <td class="py-3 px-4 text-center text-secondary">178°(H) / 178°(W)</td>
                              <td class="py-3 px-4 text-center text-secondary">178°(H) / 178°(W)</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">LED Life Time</td>
                              <td class="py-3 px-4 text-center text-secondary">60000 HRS</td>
                              <td class="py-3 px-4 text-center text-secondary">60000 HRS</td>
                              <td class="py-3 px-4 text-center text-secondary">60000 HRS</td>
                              <td class="py-3 px-4 text-center text-secondary">60000 HRS</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Bonding Technology</td>
                              <td class="py-3 px-4 text-center text-secondary">ZERO BONDING</td>
                              <td class="py-3 px-4 text-center text-secondary">ZERO BONDING</td>
                              <td class="py-3 px-4 text-center text-secondary">ZERO BONDING</td>
                              <td class="py-3 px-4 text-center text-secondary">ZERO BONDING</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Screen Protector</td>
                              <td class="py-3 px-4 text-center text-secondary">3MM TEMPERED AG GLASS / 8MOHS</td>
                              <td class="py-3 px-4 text-center text-secondary">3MM TEMPERED AG GLASS / 8MOHS</td>
                              <td class="py-3 px-4 text-center text-secondary">3MM TEMPERED AG GLASS / 8MOHS</td>
                              <td class="py-3 px-4 text-center text-secondary">3MM TEMPERED AG GLASS / 8MOHS</td>
                          </tr>

                          <!-- SPEAKER -->
                          <tr>
                              <td colspan="5" class="fw-bold py-3 px-4 border-bottom-0 bg-light" >Speaker</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Sound Output</td>
                              <td class="py-3 px-4 text-center text-secondary">20Wx2</td>
                              <td class="py-3 px-4 text-center text-secondary">20Wx2</td>
                              <td class="py-3 px-4 text-center text-secondary">20Wx2</td>
                              <td class="py-3 px-4 text-center text-secondary">20Wx2</td>
                          </tr>

                          <!-- POWER PARAMETERS -->
                          <tr>
                              <td colspan="5" class="fw-bold py-3 px-4 border-bottom-0 bg-light" >Power Parameters</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Power (No PC)</td>
                              <td class="py-3 px-4 text-center text-secondary">≤250 W</td>
                              <td class="py-3 px-4 text-center text-secondary">-</td>
                              <td class="py-3 px-4 text-center text-secondary">-</td>
                              <td class="py-3 px-4 text-center text-secondary">-</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Working Voltage</td>
                              <td class="py-3 px-4 text-center text-secondary">100V~240V AC</td>
                              <td class="py-3 px-4 text-center text-secondary">100V~240V AC</td>
                              <td class="py-3 px-4 text-center text-secondary">100V~240V AC</td>
                              <td class="py-3 px-4 text-center text-secondary">100V~240V AC</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Standby Power</td>
                              <td class="py-3 px-4 text-center text-secondary">&lt; 0.5W</td>
                              <td class="py-3 px-4 text-center text-secondary">&lt; 0.5W</td>
                              <td class="py-3 px-4 text-center text-secondary">&lt; 0.5W</td>
                              <td class="py-3 px-4 text-center text-secondary">&lt; 0.5W</td>
                          </tr>

                          <!-- ANDROID OS -->
                          <tr>
                              <td colspan="5" class="fw-bold py-3 px-4 border-bottom-0 bg-light" >Android OS</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Android System</td>
                              <td class="py-3 px-4 text-center text-secondary">Android 16</td>
                              <td class="py-3 px-4 text-center text-secondary">Android 16</td>
                              <td class="py-3 px-4 text-center text-secondary">Android 16</td>
                              <td class="py-3 px-4 text-center text-secondary">Android 16</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">RAM & ROM</td>
                              <td class="py-3 px-4 text-center text-secondary">DDR4 8GB & EMMC 128GB</td>
                              <td class="py-3 px-4 text-center text-secondary">DDR4 8GB & EMMC 128GB</td>
                              <td class="py-3 px-4 text-center text-secondary">DDR4 8GB & EMMC 128GB</td>
                              <td class="py-3 px-4 text-center text-secondary">DDR4 8GB & EMMC 128GB</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">CPU / GPU</td>
                              <td class="py-3 px-4 text-center text-secondary">OCTA CORE</td>
                              <td class="py-3 px-4 text-center text-secondary">OCTA CORE, Cortex A55, G52MP2</td>
                              <td class="py-3 px-4 text-center text-secondary">OCTA CORE, Cortex A55, G52MP2</td>
                              <td class="py-3 px-4 text-center text-secondary">OCTA CORE, Cortex A55, G52MP2</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Wi-Fi</td>
                              <td class="py-3 px-4 text-center text-secondary">Wi-Fi 5, 802.11ac/b/g/n/a/ax<br>(2.4GHz + 5GHz) : Hotspot 5GHz</td>
                              <td class="py-3 px-4 text-center text-secondary">Wi-Fi 5, 802.11ac/b/g/n/a/ax<br>(2.4GHz + 5GHz) : Hotspot 5GHz</td>
                              <td class="py-3 px-4 text-center text-secondary">Wi-Fi 5, 802.11ac/b/g/n/a/ax<br>(2.4GHz + 5GHz) : Hotspot 5GHz</td>
                              <td class="py-3 px-4 text-center text-secondary">Wi-Fi 5, 802.11ac/b/g/n/a/ax<br>(2.4GHz + 5GHz) : Hotspot 5GHz</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Bluetooth</td>
                              <td class="py-3 px-4 text-center text-secondary">Bluetooth 5.1</td>
                              <td class="py-3 px-4 text-center text-secondary">Bluetooth 5.1</td>
                              <td class="py-3 px-4 text-center text-secondary">Bluetooth 5.1</td>
                              <td class="py-3 px-4 text-center text-secondary">Bluetooth 5.1</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Ethernet Network</td>
                              <td class="py-3 px-4 text-center text-secondary">10M/100M/1000M (Default)</td>
                              <td class="py-3 px-4 text-center text-secondary">10M/100M/1000M (Default)</td>
                              <td class="py-3 px-4 text-center text-secondary">10M/100M/1000M (Default)</td>
                              <td class="py-3 px-4 text-center text-secondary">10M/100M/1000M (Default)</td>
                          </tr>

                          <!-- INPUT & OUTPUT -->
                          <tr>
                              <td colspan="5" class="fw-bold py-3 px-4 border-bottom-0 bg-light" >Input & Output</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Back Interface</td>
                              <td class="py-3 px-4 text-center text-secondary">USB 3.0*2, Touch USB*1, Type C*1, HDMI IN*2, USB 2.0*1, Audio IN*1, DP IN*1, VGA*1, RJ45 IN*1, RJ45 OUT*1, HDMI OUT*1</td>
                              <td class="py-3 px-4 text-center text-secondary">USB 3.0*2, Touch USB*1, Type C*1, HDMI IN*2, USB 2.0*1, Audio IN*1, DP IN*1, VGA*1, RJ45 IN*1, RJ45 OUT*1, HDMI OUT*1</td>
                              <td class="py-3 px-4 text-center text-secondary">USB 3.0*2, Touch USB*1, Type C*1, HDMI IN*2, USB 2.0*1, Audio IN*1, DP IN*1, VGA*1, RJ45 IN*1, RJ45 OUT*1, HDMI OUT*1</td>
                              <td class="py-3 px-4 text-center text-secondary">USB 3.0*2, Touch USB*1, Type C*1, HDMI IN*2, USB 2.0*1, Audio IN*1, DP IN*1, VGA*1, RJ45 IN*1, RJ45 OUT*1, HDMI OUT*1</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Front Connection</td>
                              <td class="py-3 px-4 text-center text-secondary">USB 3.0*2, HDMI IN*1 : Touch USB*1 : Type C*1</td>
                              <td class="py-3 px-4 text-center text-secondary">USB 3.0*2, HDMI IN*1 : Touch USB*1 : Type C*1</td>
                              <td class="py-3 px-4 text-center text-secondary">USB 3.0*2, HDMI IN*1 : Touch USB*1 : Type C*1</td>
                              <td class="py-3 px-4 text-center text-secondary">USB 3.0*2, HDMI IN*1 : Touch USB*1 : Type C*1</td>
                          </tr>

                          <!-- TOUCH PARAMETERS -->
                          <tr>
                              <td colspan="5" class="fw-bold py-3 px-4 border-bottom-0 bg-light" >Touch Parameters</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Touch Technology</td>
                              <td class="py-3 px-4 text-center text-secondary">INFRARED TECHNOLOGY (IR)</td>
                              <td class="py-3 px-4 text-center text-secondary">INFRARED TECHNOLOGY (IR)</td>
                              <td class="py-3 px-4 text-center text-secondary">INFRARED TECHNOLOGY (IR)</td>
                              <td class="py-3 px-4 text-center text-secondary">INFRARED TECHNOLOGY (IR)</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Touch Points</td>
                              <td class="py-3 px-4 text-center text-secondary">WINDOWS & ANDROID SYSTEM : 60 TOUCH POINTS</td>
                              <td class="py-3 px-4 text-center text-secondary">WINDOWS & ANDROID SYSTEM : 60 TOUCH POINTS</td>
                              <td class="py-3 px-4 text-center text-secondary">WINDOWS & ANDROID SYSTEM : 60 TOUCH POINTS</td>
                              <td class="py-3 px-4 text-center text-secondary">WINDOWS & ANDROID SYSTEM : 60 TOUCH POINTS</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Inductive Objects</td>
                              <td class="py-3 px-4 text-center text-secondary">FINGER OR PEN</td>
                              <td class="py-3 px-4 text-center text-secondary">FINGER OR PEN</td>
                              <td class="py-3 px-4 text-center text-secondary">FINGER OR PEN</td>
                              <td class="py-3 px-4 text-center text-secondary">FINGER OR PEN</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Accuracy</td>
                              <td class="py-3 px-4 text-center text-secondary">Φ 1 MM</td>
                              <td class="py-3 px-4 text-center text-secondary">Φ 1 MM</td>
                              <td class="py-3 px-4 text-center text-secondary">Φ 1 MM</td>
                              <td class="py-3 px-4 text-center text-secondary">Φ 1 MM</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Response Time</td>
                              <td class="py-3 px-4 text-center text-secondary">2 -5 MS</td>
                              <td class="py-3 px-4 text-center text-secondary">2 -5 MS</td>
                              <td class="py-3 px-4 text-center text-secondary">2 -5 MS</td>
                              <td class="py-3 px-4 text-center text-secondary">2 -5 MS</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Operating System</td>
                              <td class="py-3 px-4 text-center text-secondary">SUPPORT WINDOWS, MAC, ANDROID, LINUX, CHORME</td>
                              <td class="py-3 px-4 text-center text-secondary">SUPPORT WINDOWS, MAC, ANDROID, LINUX, CHORME</td>
                              <td class="py-3 px-4 text-center text-secondary">SUPPORT WINDOWS, MAC, ANDROID, LINUX, CHORME</td>
                              <td class="py-3 px-4 text-center text-secondary">SUPPORT WINDOWS, MAC, ANDROID, LINUX, CHORME</td>
                          </tr>

                          <!-- ENVIRONMENT -->
                          <tr>
                              <td colspan="5" class="fw-bold py-3 px-4 border-bottom-0 bg-light" >Environment</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Environment</td>
                              <td class="py-3 px-4 text-center text-secondary">WORKING TEMPERATURE: 0º C~45º C<br>STORAGE TEMPERATURE: 20º C~60º C</td>
                              <td class="py-3 px-4 text-center text-secondary">WORKING TEMPERATURE: 0º C~45º C<br>STORAGE TEMPERATURE: 20º C~60º C</td>
                              <td class="py-3 px-4 text-center text-secondary">WORKING TEMPERATURE: 0º C~45º C<br>STORAGE TEMPERATURE: 20º C~60º C</td>
                              <td class="py-3 px-4 text-center text-secondary">WORKING TEMPERATURE: 0º C~45º C<br>STORAGE TEMPERATURE: 20º C~60º C</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Storage & Working Humidity</td>
                              <td class="py-3 px-4 text-center text-secondary">10% ~ 90%</td>
                              <td class="py-3 px-4 text-center text-secondary">10% ~ 90%</td>
                              <td class="py-3 px-4 text-center text-secondary">10% ~ 90%</td>
                              <td class="py-3 px-4 text-center text-secondary">10% ~ 90%</td>
                          </tr>

                          <!-- PACKING PARAMETERS -->
                          <tr>
                              <td colspan="5" class="fw-bold py-3 px-4 border-bottom-0 bg-light" >Packing Parameters</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Physical Size</td>
                              <td class="py-3 px-4 text-center text-secondary">1490.6*904.8*88.95MM</td>
                              <td class="py-3 px-4 text-center text-secondary">1712.9*1030.9*89.15MM</td>
                              <td class="py-3 px-4 text-center text-secondary">1958.9*1169.75*89.15MM</td>
                              <td class="py-3 px-4 text-center text-secondary">1958.9*1169.75*89.15MM</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Carton Size</td>
                              <td class="py-3 px-4 text-center text-secondary">1576*980*200MM</td>
                              <td class="py-3 px-4 text-center text-secondary">1785*1125*200MM</td>
                              <td class="py-3 px-4 text-center text-secondary">2040*1260*200MM</td>
                              <td class="py-3 px-4 text-center text-secondary">2040*1260*200MM</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Net Weight</td>
                              <td class="py-3 px-4 text-center text-secondary">42+1 KG</td>
                              <td class="py-3 px-4 text-center text-secondary">54+1 KG</td>
                              <td class="py-3 px-4 text-center text-secondary">69+1 KG</td>
                              <td class="py-3 px-4 text-center text-secondary">69+1 KG</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary">Gross Weight</td>
                              <td class="py-3 px-4 text-center text-secondary">56.5+1 KG</td>
                              <td class="py-3 px-4 text-center text-secondary">69+1 KG</td>
                              <td class="py-3 px-4 text-center text-secondary">83.8+1 KG</td>
                              <td class="py-3 px-4 text-center text-secondary">83.8+1 KG</td>
                          </tr>

                          <!-- STANDARD CONFIGURATION -->
                          <tr>
                              <td colspan="5" class="fw-bold py-3 px-4 border-bottom-0 bg-light" >Standard Configuration</td>
                          </tr>
                          <tr>
                              <td class="py-3 px-4 text-secondary border-bottom">Mounting Hardware</td>
                              <td class="py-3 px-4 text-center text-secondary border-bottom">Remote Control*1, Power Cable 1.8M*1, Stylus Pen*2, Wall Mounted Bracket*1</td>
                              <td class="py-3 px-4 text-center text-secondary border-bottom">Remote Control*1, Power Cable 1.8M*1, Stylus Pen*2, Wall Mounted Bracket*1</td>
                              <td class="py-3 px-4 text-center text-secondary border-bottom">Remote Control*1, Power Cable 1.8M*1, Stylus Pen*2, Wall Mounted Bracket*1</td>
                              <td class="py-3 px-4 text-center text-secondary border-bottom">Remote Control*1, Power Cable 1.8M*1, Stylus Pen*2, Wall Mounted Bracket*1</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div


      <!-- What is in the box Section -->
      <div class="bg-dark py-5 border-top">
          <div class="container text-center py-4">
              <h2 class="fw-bold mb-20 text-light fs-2">What is in the box ?</h2>
              <div class="d-flex flex-wrap justify-content-center gap-4">
                  <div class="box-feature-card">
                      <i class="far fa-tv box-feature-icon"></i>
                      <span class="box-feature-text">Display Unit</span>
                  </div>
                  <div class="box-feature-card">
                      <i class="far fa-plug box-feature-icon"></i>
                      <span class="box-feature-text">Power Cabel</span>
                  </div>
                  <div class="box-feature-card">
                      <i class="far fa-tools box-feature-icon"></i>
                      <span class="box-feature-text">Wall mount Kit</span>
                  </div>
                  <div class="box-feature-card">
                      <svg class="box-feature-icon" style="width: 32px; height: 32px; fill: currentColor; stroke: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <rect x="6" y="2" width="12" height="20" rx="3" fill="none" stroke-width="2"/>
                          <circle cx="12" cy="6" r="1.5" stroke="none" />
                          <circle cx="9" cy="11" r="1" stroke="none" />
                          <circle cx="15" cy="11" r="1" stroke="none" />
                          <circle cx="9" cy="14" r="1" stroke="none" />
                          <circle cx="15" cy="14" r="1" stroke="none" />
                          <circle cx="9" cy="17" r="1" stroke="none" />
                          <circle cx="15" cy="17" r="1" stroke="none" />
                      </svg>
                      <span class="box-feature-text">Remote</span>
                  </div>
                  <div class="box-feature-card">
                      <i class="far fa-pen box-feature-icon"></i>
                      <span class="box-feature-text">Styler Pen</span>
                  </div>
                  <div class="box-feature-card">
                      <i class="far fa-network-wired box-feature-icon"></i>
                      <span class="box-feature-text">Wire connectivity kit</span>
                  </div>
              </div>
          </div>
      </div>


        <!-- testimonial area start -->
         <div class="ais-testimonial-ptb p-relative pt-100 pb-80" data-bg-color="#f6f4fe">
            <div class="container">
               <div class="row justify-content-center">
                     <div class="col-lg-8">
                        <div class="app-testimonial-warp mb-55">
                           <div class="app-testimonial-heading text-center p-relative mb-20">
                                 <span class="ais-section-subtitle">Our Testimonial</span>
                                 <h4 class="ais-section-title">Trusted by 21,000+ customers <br> worldwide today</h4>
                                 <div class="app-testimonial-big-text">
                                    <h3>4.86</h3>
                                 </div>
                           </div>
                           <div class="app-testimonial-review-width tp_fade_anim" data-delay=".6" data-fade-from="top" data-ease="bounce">
                                 <div class="app-testimonial-review">
                                    <div class="app-testimonial-review-icon">
                                       <span>
                                             <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                                <path d="M18.9995 15.5454V22.9036H29.2249C28.7759 25.27 27.4285 27.2737 25.4076 28.6209L31.5739 33.4055C35.1667 30.0893 37.2394 25.2183 37.2394 19.432C37.2394 18.0847 37.1185 16.7891 36.8939 15.5456L18.9995 15.5454Z" fill="#4285F4" />
                                                <path d="M8.35164 22.6162L6.96089 23.6808L2.03809 27.5153C5.16444 33.7161 11.5721 37.9998 18.9994 37.9998C24.1292 37.9998 28.4301 36.3071 31.5738 33.4054L25.4075 28.6208C23.7147 29.7608 21.5556 30.4517 18.9994 30.4517C14.0594 30.4517 9.86224 27.1181 8.3594 22.6272L8.35164 22.6162Z" fill="#34A853" />
                                                <path d="M2.03803 10.4846C0.74265 13.0409 0 15.9255 0 19C0 22.0744 0.74265 24.959 2.03803 27.5153C2.03803 27.5325 8.35996 22.6098 8.35996 22.6098C7.97996 21.4699 7.75535 20.2608 7.75535 18.9998C7.75535 17.7387 7.97996 16.5297 8.35996 15.3897L2.03803 10.4846Z" fill="#FBBC05" />
                                                <path d="M18.9998 7.56545C21.798 7.56545 24.2852 8.5327 26.2716 10.3982L31.7124 4.95734C28.4133 1.88284 24.1298 0 18.9998 0C11.5725 0 5.16444 4.26636 2.03809 10.4846L8.35982 15.39C9.86246 10.8991 14.0598 7.56545 18.9998 7.56545Z" fill="#EA4335" />
                                             </svg>
                                       </span>
                                    </div>
                                    <div class="app-testimonial-review-content">
                                       <span><i>4.9/5</i> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                <path d="M6.12215 1.09728C6.24667 0.739057 6.75328 0.739057 6.8778 1.09728L8.17194 4.82036C8.22687 4.97839 8.37435 5.08554 8.54162 5.08895L12.4824 5.16925C12.8616 5.17698 13.0181 5.6588 12.7159 5.88792L9.57495 8.26922C9.44163 8.37029 9.3853 8.54366 9.43375 8.70379L10.5751 12.4765C10.685 12.8395 10.2751 13.1373 9.9638 12.9207L6.72845 10.6693C6.59112 10.5738 6.40883 10.5738 6.2715 10.6693L3.03615 12.9207C2.72485 13.1373 2.31499 12.8395 2.42481 12.4765L3.5662 8.70379C3.61465 8.54366 3.55832 8.37029 3.425 8.26922L0.284053 5.88792C-0.0181605 5.6588 0.138392 5.17698 0.517561 5.16925L4.45833 5.08895C4.6256 5.08554 4.77308 4.97839 4.82801 4.82036L6.12215 1.09728Z" fill="#FFAF1B" />
                                             </svg> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                <path d="M6.12215 1.09728C6.24667 0.739057 6.75328 0.739057 6.8778 1.09728L8.17194 4.82036C8.22687 4.97839 8.37435 5.08554 8.54162 5.08895L12.4824 5.16925C12.8616 5.17698 13.0181 5.6588 12.7159 5.88792L9.57495 8.26922C9.44163 8.37029 9.3853 8.54366 9.43375 8.70379L10.5751 12.4765C10.685 12.8395 10.2751 13.1373 9.9638 12.9207L6.72845 10.6693C6.59112 10.5738 6.40883 10.5738 6.2715 10.6693L3.03615 12.9207C2.72485 13.1373 2.31499 12.8395 2.42481 12.4765L3.5662 8.70379C3.61465 8.54366 3.55832 8.37029 3.425 8.26922L0.284053 5.88792C-0.0181605 5.6588 0.138392 5.17698 0.517561 5.16925L4.45833 5.08895C4.6256 5.08554 4.77308 4.97839 4.82801 4.82036L6.12215 1.09728Z" fill="#FFAF1B" />
                                             </svg><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                <path d="M6.12215 1.09728C6.24667 0.739057 6.75328 0.739057 6.8778 1.09728L8.17194 4.82036C8.22687 4.97839 8.37435 5.08554 8.54162 5.08895L12.4824 5.16925C12.8616 5.17698 13.0181 5.6588 12.7159 5.88792L9.57495 8.26922C9.44163 8.37029 9.3853 8.54366 9.43375 8.70379L10.5751 12.4765C10.685 12.8395 10.2751 13.1373 9.9638 12.9207L6.72845 10.6693C6.59112 10.5738 6.40883 10.5738 6.2715 10.6693L3.03615 12.9207C2.72485 13.1373 2.31499 12.8395 2.42481 12.4765L3.5662 8.70379C3.61465 8.54366 3.55832 8.37029 3.425 8.26922L0.284053 5.88792C-0.0181605 5.6588 0.138392 5.17698 0.517561 5.16925L4.45833 5.08895C4.6256 5.08554 4.77308 4.97839 4.82801 4.82036L6.12215 1.09728Z" fill="#FFAF1B" />
                                             </svg><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                <path d="M6.12215 1.09728C6.24667 0.739057 6.75328 0.739057 6.8778 1.09728L8.17194 4.82036C8.22687 4.97839 8.37435 5.08554 8.54162 5.08895L12.4824 5.16925C12.8616 5.17698 13.0181 5.6588 12.7159 5.88792L9.57495 8.26922C9.44163 8.37029 9.3853 8.54366 9.43375 8.70379L10.5751 12.4765C10.685 12.8395 10.2751 13.1373 9.9638 12.9207L6.72845 10.6693C6.59112 10.5738 6.40883 10.5738 6.2715 10.6693L3.03615 12.9207C2.72485 13.1373 2.31499 12.8395 2.42481 12.4765L3.5662 8.70379C3.61465 8.54366 3.55832 8.37029 3.425 8.26922L0.284053 5.88792C-0.0181605 5.6588 0.138392 5.17698 0.517561 5.16925L4.45833 5.08895C4.6256 5.08554 4.77308 4.97839 4.82801 4.82036L6.12215 1.09728Z" fill="#FFAF1B" />
                                             </svg><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                <path d="M6.12215 1.09728C6.24667 0.739057 6.75328 0.739057 6.8778 1.09728L8.17194 4.82036C8.22687 4.97839 8.37435 5.08554 8.54162 5.08895L12.4824 5.16925C12.8616 5.17698 13.0181 5.6588 12.7159 5.88792L9.57495 8.26922C9.44163 8.37029 9.3853 8.54366 9.43375 8.70379L10.5751 12.4765C10.685 12.8395 10.2751 13.1373 9.9638 12.9207L6.72845 10.6693C6.59112 10.5738 6.40883 10.5738 6.2715 10.6693L3.03615 12.9207C2.72485 13.1373 2.31499 12.8395 2.42481 12.4765L3.5662 8.70379C3.61465 8.54366 3.55832 8.37029 3.425 8.26922L0.284053 5.88792C-0.0181605 5.6588 0.138392 5.17698 0.517561 5.16925L4.45833 5.08895C4.6256 5.08554 4.77308 4.97839 4.82801 4.82036L6.12215 1.09728Z" fill="#FFAF1B" />
                                             </svg></span>
                                       <p>Based on 1,258 reviews</p>
                                    </div>
                                 </div>
                           </div>
                        </div>
                     </div>
               </div>
            </div>
            <div class="ais-testimonial-wrap z-index-1 p-relative">
               <div class="app-testimonial-wrapper">
                     <div class="app-testimonial-slider d-flex">
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">Sarah Jenkins</h4>
                                    <p>School Principal</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"DeltaView Spark has completely transformed our classrooms. The interactive features keep students engaged and the 4K display is stunningly clear!"</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">Rahul Sharma</h4>
                                    <p>Corporate Trainer</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"Presentations are seamless now. The wireless casting works flawlessly, and the touch response is the best I've experienced in any corporate setting."</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">Emily Chen</h4>
                                    <p>University Professor</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"I love how intuitive the interface is. I can annotate over my slides instantly, making my lectures much more dynamic and easier for students to follow."</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">Mark Davies</h4>
                                    <p>IT Director</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"Deploying the DeltaView panels was incredibly straightforward. The remote management features save my team hours of maintenance every week."</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">Priya Patel</h4>
                                    <p>Primary School Teacher</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"The kids absolutely love coming up to the board. It's responsive, bright, and the built-in educational tools are fantastic for everyday use."</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">David Wilson</h4>
                                    <p>Operations Manager</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"We replaced our old projectors with these interactive panels. The difference in meeting productivity and collaboration is night and day."</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">Anita Desai</h4>
                                    <p>Design Lead</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"The color accuracy and zero-lag touch make it perfect for our design review sessions. We can sketch and ideate together effortlessly."</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">James McCarthy</h4>
                                    <p>High School Teacher</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"Switching between different inputs and apps is so fast. It doesn't interrupt the flow of my teaching at all. Highly recommended!"</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">Sarah Jenkins</h4>
                                    <p>School Principal</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"DeltaView Spark has completely transformed our classrooms. The interactive features keep students engaged and the 4K display is stunningly clear!"</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">Rahul Sharma</h4>
                                    <p>Corporate Trainer</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"Presentations are seamless now. The wireless casting works flawlessly, and the touch response is the best I've experienced in any corporate setting."</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">Emily Chen</h4>
                                    <p>University Professor</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"I love how intuitive the interface is. I can annotate over my slides instantly, making my lectures much more dynamic and easier for students to follow."</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">Mark Davies</h4>
                                    <p>IT Director</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"Deploying the DeltaView panels was incredibly straightforward. The remote management features save my team hours of maintenance every week."</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                 </div>
                           </div>
                        </div>
                     </div>
               </div>
               <div class="app-testimonial-wrapper ais-rtl">
                     <div class="app-testimonial-slider d-flex">
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">Priya Patel</h4>
                                    <p>Primary School Teacher</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"The kids absolutely love coming up to the board. It's responsive, bright, and the built-in educational tools are fantastic for everyday use."</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">David Wilson</h4>
                                    <p>Operations Manager</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"We replaced our old projectors with these interactive panels. The difference in meeting productivity and collaboration is night and day."</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">Anita Desai</h4>
                                    <p>Design Lead</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"The color accuracy and zero-lag touch make it perfect for our design review sessions. We can sketch and ideate together effortlessly."</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">James McCarthy</h4>
                                    <p>High School Teacher</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"Switching between different inputs and apps is so fast. It doesn't interrupt the flow of my teaching at all. Highly recommended!"</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">Sarah Jenkins</h4>
                                    <p>School Principal</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"DeltaView Spark has completely transformed our classrooms. The interactive features keep students engaged and the 4K display is stunningly clear!"</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">Rahul Sharma</h4>
                                    <p>Corporate Trainer</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"Presentations are seamless now. The wireless casting works flawlessly, and the touch response is the best I've experienced in any corporate setting."</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">Emily Chen</h4>
                                    <p>University Professor</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"I love how intuitive the interface is. I can annotate over my slides instantly, making my lectures much more dynamic and easier for students to follow."</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">Mark Davies</h4>
                                    <p>IT Director</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"Deploying the DeltaView panels was incredibly straightforward. The remote management features save my team hours of maintenance every week."</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">Priya Patel</h4>
                                    <p>Primary School Teacher</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"The kids absolutely love coming up to the board. It's responsive, bright, and the built-in educational tools are fantastic for everyday use."</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg></span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">David Wilson</h4>
                                    <p>Operations Manager</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"We replaced our old projectors with these interactive panels. The difference in meeting productivity and collaboration is night and day."</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">Anita Desai</h4>
                                    <p>Design Lead</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"The color accuracy and zero-lag touch make it perfect for our design review sessions. We can sketch and ideate together effortlessly."</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                 </div>
                           </div>
                        </div>
                        <div class="app-testimonial-item">
                           <div class="app-testimonial-item-icon-box d-flex align-items-center mb-20">
                                 <div class="app-testimonial-item-icon">
                                    <span>
                                       <img src="assets/img/testi1.webp" alt="">
                                    </span>
                                 </div>
                                 <div class="app-testimonial-item-icon-content">
                                    <h4 class="app-testimonial-item-icon-title">James McCarthy</h4>
                                    <p>High School Teacher</p>
                                 </div>
                           </div>
                           <div class="app-testimonial-item-content">
                                 <p>"Switching between different inputs and apps is so fast. It doesn't interrupt the flow of my teaching at all. Highly recommended!"</p>
                                 <div class="app-testimonial-item-star">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                             <path d="M7.21451 0.878193C7.30431 0.6018 7.69534 0.6018 7.78514 0.878193L9.34084 5.66614C9.381 5.78975 9.49619 5.87343 9.62616 5.87343L14.6605 5.87343C14.9511 5.87343 15.0719 6.24532 14.8368 6.41614L10.764 9.37525C10.6588 9.45164 10.6148 9.58706 10.655 9.71066L12.2107 14.4986C12.3005 14.775 11.9841 15.0048 11.749 14.834L7.67616 11.8749C7.57101 11.7985 7.42864 11.7985 7.32349 11.8749L3.25062 14.834C3.01551 15.0048 2.69916 14.775 2.78897 14.4986L4.34467 9.71066C4.38483 9.58706 4.34083 9.45164 4.23568 9.37525L0.162814 6.41614C-0.0723004 6.24532 0.0485323 5.87343 0.339149 5.87343L5.37349 5.87343C5.50346 5.87343 5.61865 5.78975 5.65881 5.66614L7.21451 0.878193Z" fill="#FFAF1B" />
                                       </svg>
                                    </span>
                                 </div>
                           </div>
                        </div>
                     </div>
               </div>
            </div>
         </div>
      <!-- testimonial area end -->


    <!-- faq area start -->
         <div class="cst-faq-ptb p-relative pt-80 pb-80 bg-light">
            <div class="container">
               <div class="row">
                     <div class="col-lg-5">
                        <div class="cst-faq-heading p-relative mb-50">
                           <span class="cst-section-subtitle mb-10 tp_fade_anim" data-delay=".3">Faq</span>
                           <h4 class="cst-section-title mb-50 tp_fade_anim" data-delay=".5">Frequently <br> Asked Questions</h4>
                           <div class="cst-faq-btn tp_fade_anim" data-delay=".7">
                                 <a class="cst-btn black-t" href="#!">
                                    <span>
                                       <span class="text-1">
                                             Enquire Now
                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                                                <path d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM15.2803 6.05328C15.5732 5.76039 15.5732 5.28551 15.2803 4.99262L10.5074 0.219648C10.2145 -0.0732449 9.73959 -0.0732449 9.4467 0.219648C9.15381 0.512542 9.15381 0.987415 9.4467 1.28031L13.6893 5.52295L9.4467 9.76559C9.15381 10.0585 9.15381 10.5334 9.4467 10.8263C9.73959 11.1191 10.2145 11.1191 10.5074 10.8263L15.2803 6.05328ZM0.75 5.52295V6.27295H14.75V5.52295V4.77295H0.75V5.52295Z" fill="currentColor"/>
                                             </svg>
                                       </span>
                                       <span class="text-2">
                                             Enquire Now
                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                                                <path d="M0.75 4.77295C0.335786 4.77295 0 5.10874 0 5.52295C0 5.93716 0.335786 6.27295 0.75 6.27295V5.52295V4.77295ZM15.2803 6.05328C15.5732 5.76039 15.5732 5.28551 15.2803 4.99262L10.5074 0.219648C10.2145 -0.0732449 9.73959 -0.0732449 9.4467 0.219648C9.15381 0.512542 9.15381 0.987415 9.4467 1.28031L13.6893 5.52295L9.4467 9.76559C9.15381 10.0585 9.15381 10.5334 9.4467 10.8263C9.73959 11.1191 10.2145 11.1191 10.5074 10.8263L15.2803 6.05328ZM0.75 5.52295V6.27295H14.75V5.52295V4.77295H0.75V5.52295Z" fill="currentColor"/>
                                             </svg>
                                       </span>
                                    </span>
                                 </a>
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-7">
                        <div class="cst-faq-wrap pl-70">
                           <div class="ai-faq-accordion-wrap tp_fade_anim" data-delay=".3" data-fade-from="right" data-ease="bounce">
                                 <div class="accordion" id="accordionExample">
                                    <div class="accordion-items">
                                       <h2 class="accordion-header">
                                             <button class="accordion-buttons" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                               What are the sizes of products?
                                                <span class="accordion-icon"></span>
                                             </button>
                                       </h2>
                                       <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                             <div class="accordion-body">
                                                <p>
                                                   DeltaView intelligent interactive panels are available in a variety of sizes to suit different spaces and requirements. Our standard sizes typically range from 65", 75", 86", up to 98" to ensure the perfect fit for anything from small huddle rooms to large lecture halls and boardrooms.
                                                </p>
                                             </div>
                                       </div>
                                    </div>
                                    <div class="accordion-items">
                                       <h2 class="accordion-header">
                                             <button class="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Does this panel connect to a smartphone?
                                                <span class="accordion-icon"></span>
                                             </button>
                                       </h2>
                                       <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                             <div class="accordion-body">
                                                <p>
                                                   Yes, absolutely. DeltaView panels support seamless wireless casting. You can easily connect, mirror, and share content directly from your smartphone, tablet, or laptop (supporting iOS, Android, Windows, and Mac) without the need for additional cables.
                                                </p>
                                             </div>
                                       </div>
                                    </div>
                                    <div class="accordion-items">
                                       <h2 class="accordion-header">
                                             <button class="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How much power does it consume?
                                                <span class="accordion-icon"></span>
                                             </button>
                                       </h2>
                                       <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                             <div class="accordion-body">
                                                <p>
                                                   Our panels are designed with energy efficiency in mind. While power consumption varies slightly depending on the screen size, a standard 75" panel generally consumes around 250W to 350W during active use, and drops to less than 0.5W when in standby mode.
                                                </p>
                                             </div>
                                       </div>
                                    </div>
                                    <div class="accordion-items">
                                       <h2 class="accordion-header">
                                             <button class="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Can we connect to it remotely?
                                                <span class="accordion-icon"></span>
                                             </button>
                                       </h2>
                                       <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                             <div class="accordion-body">
                                                <p>
                                                   Yes, you can. DeltaView panels are built for modern hybrid collaboration. They support remote device management and are fully compatible with popular video conferencing applications, allowing your team or students to connect, interact, and collaborate from anywhere in the world.
                                                </p>
                                             </div>
                                       </div>
                                    </div>
                                    
                                    <div class="accordion-items">
                                       <h2 class="accordion-header">
                                             <button class="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                If I have a problem with the smart board, what is the turnaround time <br>for support?
                                                <span class="accordion-icon"></span>
                                             </button>
                                       </h2>
                                       <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                             <div class="accordion-body">
                                                <p>
                                                   We pride ourselves on our after-sales service. We offer 24/7 Customer Support and a 3-Year On-Site Warranty. Because we cover over 15,000+ serviceable pin codes across India, our technical experts ensure a rapid response, typically providing on-site support and resolving issues within 24 to 48 hours.
                                                </p>
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
      <!-- faq area end -->
      

      
   </main>
   <?php include 'inc/footer.php'; ?>

   <!-- JS here -->
   <?php include 'inc/footer-links.php'; ?>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>
   <script>
      const productData = {
          '65': {
              title: 'DeltaView Spark 65"',
              discount: '-52% OFF',
              price: '₹1,09,824.00',
              mrp: '₹2,30,100.00',
              images: [
                  'https://www.deltaview.in/wp-content/uploads/2023/09/Product_Spark_65-3.webp',
                  'https://www.deltaview.in/wp-content/uploads/2025/01/Product-Side.webp',
                  'https://www.deltaview.in/wp-content/uploads/2025/01/Product-Back.webp',
                  'https://www.deltaview.in/wp-content/uploads/2023/09/final-3.webp'
              ]
          },
          '75': {
              title: 'DeltaView Spark 75"',
              discount: '-53% OFF',
              price: '₹1,24,800.00',
              mrp: '₹2,65,500.00',
              images: [
                  'assets/img/product/product_blaze_75.webp',
                  'https://www.deltaview.in/wp-content/uploads/2025/01/Product-Side.webp',
                  'https://www.deltaview.in/wp-content/uploads/2025/01/Product-Back.webp',
                  'https://www.deltaview.in/wp-content/uploads/2023/09/final-3.webp'
              ]
          },
          '86': {
              title: 'DeltaView Spark 86"',
              discount: '-51% OFF',
              price: '₹1,66,400.00',
              mrp: '₹3,36,300.00',
              images: [
                  'assets/img/product/product_blaze_86.webp',
                  'https://www.deltaview.in/wp-content/uploads/2025/01/Product-Side.webp',
                  'https://www.deltaview.in/wp-content/uploads/2025/01/Product-Back.webp',
                  'https://www.deltaview.in/wp-content/uploads/2023/09/final-3.webp'
              ]
          },
          '98': {
              title: 'DeltaView Spark 98"',
              discount: '-35% OFF',
              price: '₹4,16,000.00',
              mrp: '₹6,40,000.00',
              images: [
                  'assets/img/product/product_blaze_98.webp',
                  'https://www.deltaview.in/wp-content/uploads/2025/01/Product-Side.webp',
                  'https://www.deltaview.in/wp-content/uploads/2025/01/Product-Back.webp',
                  'https://www.deltaview.in/wp-content/uploads/2023/09/final-3.webp'
              ]
          }
      };

      document.querySelectorAll('.size-btn').forEach(button => {
          button.addEventListener('click', (e) => {
              const size = e.target.getAttribute('data-size');
              if(!size || !productData[size]) return;

              // Update active button state
              document.querySelectorAll('.size-btn').forEach(btn => {
                  btn.classList.remove('btn-buy-now', 'text-white');
                  btn.classList.add('btn-outline-secondary', 'text-dark', 'bg-white');
              });
              e.target.classList.remove('btn-outline-secondary', 'text-dark', 'bg-white');
              e.target.classList.add('btn-buy-now', 'text-white');

              // Update product details
              const data = productData[size];
              document.querySelector('.premium-title').innerHTML = data.title;
              document.querySelector('.discount-badge').textContent = data.discount;
              document.querySelector('.premium-price').textContent = data.price;
              document.querySelector('.text-decoration-line-through').textContent = data.mrp;

              // Update grid images
              const gridImages = document.querySelectorAll('.grid-img');
              if(gridImages.length > 0 && data.images.length > 0) {
                  gridImages.forEach((img, idx) => {
                      if(data.images[idx]) {
                          img.src = data.images[idx];
                          if (img.parentElement && img.parentElement.tagName === 'A') {
                              img.parentElement.href = data.images[idx];
                          }
                      }
                  });
              }
          });
      });



      // Specification Toggle Logic
      const specCollapse = document.getElementById('specTableCollapse');
      const specToggleText = document.getElementById('spec-toggle-text');
      const specToggleIcon = document.getElementById('spec-toggle-icon');

      if(specCollapse) {
          specCollapse.addEventListener('hide.bs.collapse', event => {
              specToggleText.textContent = 'Open';
              specToggleIcon.className = 'far fa-chevron-down';
          });
          specCollapse.addEventListener('show.bs.collapse', event => {
              specToggleText.textContent = 'Close';
              specToggleIcon.className = 'far fa-chevron-up';
          });
      }

      // Add to Cart Logic
      const btnAddCart = document.querySelector('.btn-add-cart');
      const btnBuyNow = document.querySelector('.btn-buy-now');

      function addToCart(redirect = false) {
          const name = document.querySelector('.premium-title').textContent.trim();
          const priceStr = document.querySelector('.premium-price').textContent.replace(/₹|,/g, '');
          const price = parseFloat(priceStr);
          const qty = parseInt(document.querySelector('.qty-input').value) || 1;
          const image = document.querySelector('.grid-img').src;
          
          let cartDataStr = localStorage.getItem("deltaCartData");
          let cartData = { items: [] };
          if(cartDataStr) {
            try { cartData = JSON.parse(cartDataStr); } catch(e) {}
          }
          
          let existingItem = cartData.items.find(i => i.name === name);
          if (existingItem) {
              existingItem.qty += qty;
          } else {
              cartData.items.push({ name: name, qty: qty, price: price, image: image });
          }
          localStorage.setItem("deltaCartData", JSON.stringify(cartData));
          
          // Update header cart count if present
          const headerCartBadge = document.querySelector(".tp-header-pb-cart-count");
          if (headerCartBadge) headerCartBadge.textContent = cartData.items.length;

          if (redirect) {
              window.location.href = 'cart.php';
          } else {
              // Show some feedback to user
              const originalText = btnAddCart.innerHTML;
              btnAddCart.innerHTML = 'ADDED <i class="far fa-check ms-2"></i>';
              btnAddCart.classList.replace('btn-dark', 'btn-success');
              setTimeout(() => {
                  btnAddCart.innerHTML = originalText;
                  btnAddCart.classList.replace('btn-success', 'btn-dark');
              }, 2000);
          }
      }

      if (btnAddCart) {
          btnAddCart.addEventListener('click', () => addToCart(false));
      }
      if (btnBuyNow) {
          btnBuyNow.addEventListener('click', () => addToCart(true));
      }

      // Quantity Buttons Logic
      const qtyInput = document.querySelector('.qty-input');
      const btnMinus = document.querySelector('.qty-btn.minus');
      const btnPlus = document.querySelector('.qty-btn.plus');

      if (btnMinus && btnPlus && qtyInput) {
          btnMinus.addEventListener('click', () => {
              let val = parseInt(qtyInput.value) || 1;
              if (val > 1) qtyInput.value = val - 1;
          });
          btnPlus.addEventListener('click', () => {
              let val = parseInt(qtyInput.value) || 1;
              qtyInput.value = val + 1;
          });
      }
   </script>
   <!-- jQuery (Required for Fancybox 3) -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
   
   <!-- Fancybox JS -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>
</body>
</html>
