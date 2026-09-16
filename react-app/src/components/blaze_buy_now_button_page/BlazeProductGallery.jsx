import React, { useEffect, useRef } from "react";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const BlazeProductGallery = ({ images }) => {
  const galleryRef = useRef(null);

   const defaultImages = [
    "https://www.deltaview.in/wp-content/uploads/2023/09/Product_Spark_65-3.webp",
    "https://www.deltaview.in/wp-content/uploads/2025/01/Product-Side.webp",
    "https://www.deltaview.in/wp-content/uploads/2025/01/Product-Back.webp",
    "https://www.deltaview.in/wp-content/uploads/2023/09/final-3.webp",
    "https://www.deltaview.in/wp-content/uploads/2023/09/Product_Spark_65-3.webp",
    "https://www.deltaview.in/wp-content/uploads/2025/01/Product-Side.webp",
    "https://www.deltaview.in/wp-content/uploads/2025/01/Product-Back.webp",
    "https://www.deltaview.in/wp-content/uploads/2023/09/final-3.webp",
  ];

  const galleryImages = images || defaultImages;

  useEffect(() => {
    if (!galleryRef.current) return;

    Fancybox.bind(
      galleryRef.current,
      '[data-fancybox="gallery"]'
    );

    return () => {
      Fancybox.unbind(galleryRef.current);
      Fancybox.close();
    };
  }, []);

  return (
    <section className="container py-5">
      <div ref={galleryRef}>
        <div className="row g-4">
          {galleryImages.slice(0, 8).map((image, index) => (
            <div className="col-6" key={index}>
              
              <a
                href={image}
                data-fancybox="gallery"
                className="d-block ratio ratio-16x9 overflow-hidden rounded shadow-sm"
              >
                <img
                  src={image}
                  className="w-100 h-100 object-fit-cover"
                  alt={`DeltaView Blaze product ${index + 1}`}
                />
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlazeProductGallery;