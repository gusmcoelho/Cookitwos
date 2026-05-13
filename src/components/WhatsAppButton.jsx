import React, { useEffect, useState } from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const [scrollDir, setScrollDir] = useState(0);
  const phoneNumber = "5518997028899"; 
  const message = encodeURIComponent("Olá! Vi o site da Cookitwos e gostaria de fazer um pedido!");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;
      
      // Reduzindo a intensidade para ser mais elegante
      const rotation = Math.max(Math.min(diff * 0.15, 12), -12);
      
      setScrollDir(rotation);
      
      // Reset suave após parar de rolar
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      title="Fale conosco no WhatsApp"
      style={{ 
        transform: `rotate(${scrollDir}deg)`,
        transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
      <span className="whatsapp-tooltip">Encomende o seu!</span>
    </a>
  );
};

export default WhatsAppButton;
