import React, { useEffect, useRef, memo } from 'react';
import './Carousel.css';

const Carousel = memo(() => {
  const base = import.meta.env.BASE_URL;
  const images = [
    { src: `${base}images/carrossel 1.png`, caption: 'Artesanal' },
    { src: `${base}images/carrossel 2.png`, caption: 'Fresco' },
    { src: `${base}images/carrossel 3.png`, caption: 'Gourmet' },
    { src: `${base}images/carrossel 1.png`, caption: 'Premium' },
    { src: `${base}images/carrossel 2.png`, caption: 'Crocante' },
    { src: `${base}images/carrossel 3.png`, caption: 'Sabor' }
  ];

  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const updateFocus = () => {
      if (!containerRef.current || !trackRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      const items = trackRef.current.querySelectorAll('.carousel-item');
      
      let closestItem = null;
      let minDistance = Infinity;

      items.forEach(item => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(centerX - itemCenter);
        
        // Remove foco de todos primeiro
        item.classList.remove('auto-focused');

        if (distance < minDistance) {
          minDistance = distance;
          closestItem = item;
        }
      });

      // Aplica foco apenas ao mais próximo (limite de 150px de distância do centro)
      if (closestItem && minDistance < 150) {
        closestItem.classList.add('auto-focused');
      }
    };

    const interval = setInterval(updateFocus, 100); // Checa a cada 100ms para suavidade
    return () => clearInterval(interval);
  }, []);

  const trackImages = [...images, ...images, ...images];

  return (
    <div className="carousel-section">
      <div className="carousel-container" ref={containerRef}>
        <div className="carousel-track" ref={trackRef}>
          {trackImages.map((img, index) => (
            <div 
              key={index} 
              className="carousel-item" 
              data-caption={img.caption}
            >
              <img src={img.src} alt={`Slide ${index}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Carousel;
