import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import About from './components/About';
import Product from './components/Product';
import Flavors from './components/Flavors';
import Ingredients from './components/Ingredients';
import Team from './components/Team';
import Location from './components/Location';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';
import Intro from './components/Intro';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Só anima os elementos quando a intro acaba
    if (isLoaded) {
      document.body.classList.add('is-loaded');
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Observar elementos para adicionar a classe active (IGNORANDO O HERO)
    const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-scale-in, .animate-border');
    animatedElements.forEach(el => {
      // Se o elemento estiver dentro do #home, o observer ignora (O Hero já anima via .is-loaded)
      if (!el.closest('#home')) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <Intro onComplete={() => setIsLoaded(true)} />}
      <Navbar />
      <Hero />
      <Carousel />
      <About />
      <Product />
      <Flavors />
      <Ingredients />
      <Reviews />
      <Location />
      <Team />
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </>
  );
}

export default App;
