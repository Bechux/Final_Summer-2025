import React, { useState } from 'react';
import './Gallery.css';
import img1 from '../assets/images/whale.jpg';
import img2 from '../assets/images/moose.jpg';
import img3 from '../assets/images/cafe.jpg';

const images = [img1, img2, img3];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="gallery-container">
      <div className="bento-grid">
        <div className="bento-item bento-main" onClick={() => openLightbox(0)}>
          <img src={img1} alt="Main exhibit" />
        </div>
        <div className="bento-item bento-top" onClick={() => openLightbox(1)}>
          <img src={img2} alt="Upper right exhibit" />
        </div>
        <div className="bento-item bento-bottom" onClick={() => openLightbox(2)}>
          <img src={img3} alt="Lower right exhibit" />
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-arrow left" onClick={showPrev}>&#10094;</button>
            <img src={images[lightboxIndex]} alt="Full size" />
            <button className="lightbox-arrow right" onClick={showNext}>&#10095;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
