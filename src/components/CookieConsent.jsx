import React, { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import './CookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Verificar se já aceitou
    const accepted = localStorage.getItem('cookitwos_consent');
    if (!accepted) {
      setTimeout(() => setIsVisible(true), 2500); // Mostra depois de 2.5s
    }

    // Carregar a animação JSON dinamicamente
    fetch('/cookie-policy.json')
      .then(res => {
        if (!res.ok) throw new Error("Arquivo não encontrado");
        return res.json();
      })
      .then(data => setAnimationData(data))
      .catch(err => console.error("Erro ao carregar Lottie:", err));
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookitwos_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible || !animationData) return null;

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent-box">
        <div className="cookie-lottie-container">
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: '120px', width: '120px' }}
          />
        </div>
        <div className="cookie-consent-text">
          <h3>Aviso de Cookies</h3>
          <p>
            Nós usamos "cookies" artesanais (os de comer!) para garantir a sua felicidade. 
            No site também usamos alguns cookies digitais. Você aceita um cookie nosso?
          </p>
          <div className="cookie-consent-actions">
            <button className="btn btn-primary btn-hover-magic" onClick={handleAccept}>
              Aceitar Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
