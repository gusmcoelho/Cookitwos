import React, { useState, useEffect, memo } from 'react';
import './Hero.css';

const HeroVisual = memo(({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="hero-image-frame">
      {images.map((img, index) => (
        <div 
          key={index}
          className={`hero-img ${index === currentIndex ? 'active' : ''}`} 
          style={{ 
            backgroundImage: `url(${img.src})`,
            '--aura-color': img.color 
          }}
          aria-label="Cookie Cookitwos"
        />
      ))}
      
    </div>
  );
});

const Hero = memo(() => {
  const base = import.meta.env.BASE_URL;
  const images = [
    { src: `${base}images/hero_classic_final.png`, color: '#c28e5e' },
    { src: `${base}images/hero_nutella_final.png`, color: '#5d3a1a' },
    { src: `${base}images/hero_redvelvet_final.png`, color: '#a83232' },
    { src: `${base}images/hero_double_final.png`, color: '#2c1810' },
    { src: `${base}images/hero_oreo_final.png`, color: '#2c3e50' }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-border-wrap hero-animate-border">
        <div className="container hero-container">
          <div className="hero-text">
            <h1 className="hero-title hero-fade-up staggered-2">
              <span>O Autêntico</span>
              Cookie Americano
            </h1>
            
            <div className="hero-stars hero-fade-up staggered-3">
              ★ ★ ★ ★ ★
              <span>5.0 (200+ avaliações)</span>
            </div>

            <p className="hero-sub hero-fade-up staggered-4">
              Receita tradicional dos Estados Unidos, 100% artesanal. Crocante por fora e incrivelmente macio por dentro.
            </p>

            <div className="hero-actions hero-fade-up staggered-5">
              <button className="btn btn-primary btn-hover-magic" onClick={() => document.getElementById('product')?.scrollIntoView({behavior:'smooth'})}>
                Experimente Agora
              </button>
            </div>
          </div>

          <div className="hero-visual hero-scale-in staggered-5">
            <HeroVisual images={images} />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
