import React, { useState, useEffect, useRef } from 'react';
import './HeroCarousel.css';
import img1 from '../assets/images/dino_screen.jpg';
import img2 from '../assets/images/lion.jpg';
import img3 from '../assets/images/museum_front.jpg';

const images = [img1, img2, img3];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const carouselRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const startAutoPlay = () => {
      timeoutRef.current = setInterval(nextSlide, 5000);
    };
    startAutoPlay();
    return () => clearInterval(timeoutRef.current);
  }, []);

  // Touch swipe support
  useEffect(() => {
    const carousel = carouselRef.current;
    let startX = 0;

    const handleTouchStart = (e) => (startX = e.touches[0].clientX);
    const handleTouchEnd = (e) => {
      const deltaX = e.changedTouches[0].clientX - startX;
      if (deltaX > 50) prevSlide();
      else if (deltaX < -50) nextSlide();
    };

    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchend', handleTouchEnd);
    return () => {
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="carousel-container" ref={carouselRef}>
      {images.map((src, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <button className="carousel-arrow left" onClick={prevSlide}>&#10094;</button>
      <button className="carousel-arrow right" onClick={nextSlide}>&#10095;</button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;
