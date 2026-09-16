import React from 'react';

const ProductGallery = ({ images }) => {
  return (
    <section className="ag-photo-gallery-block">
      <div className="ag-format-container">
        <div className="ag-photo-gallery_list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {images.map((src, idx) => (
            <div key={idx} className="ag-photo-gallery_item" style={{ overflow: 'hidden', borderRadius: '12px', border: '1px solid #e0e0e0', aspectRatio: '1/1' }}>
              <figure className="ag-photo-gallery_figure" style={{ margin: 0, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={src} className="ag-photo-gallery_img" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} alt="Gallery" />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
