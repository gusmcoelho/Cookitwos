import React, { useEffect, useState, useRef } from 'react';
import './Intro.css';

const Intro = ({ onComplete }) => {
  const [stage, setStage] = useState('entering');
  const [showText, setShowText] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Acelera o vídeo um pouquinho para caber mais ação em menos tempo
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.3;
    }

    // Mostra o texto "COOKITWOS" após 1.8s (logo após o biscoito quebrar)
    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, 1800);

    // Força a saída após 4.2 segundos para dar tempo de ler o texto
    const endTimeout = setTimeout(() => {
      if (stage !== 'done') {
        handleVideoEnd();
      }
    }, 4200);

    return () => {
      clearTimeout(textTimeout);
      clearTimeout(endTimeout);
    };
  }, [stage]);

  const handleVideoEnd = () => {
    setStage('fading-out');
    setTimeout(() => {
      setStage('done');
      if (onComplete) onComplete();
    }, 800); // tempo do fade out
  };

  if (stage === 'done') return null;

  return (
    <div className={`intro-overlay ${stage === 'fading-out' ? 'fade-out-overlay' : ''}`}>
      <div className="intro-video-wrapper">
        <video 
          ref={videoRef}
          className="intro-video"
          src={`${import.meta.env.BASE_URL}Cookie_breaks_in_half_202605200313.mp4`}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        />
      </div>
      
      {/* Texto surgindo depois que o biscoito quebra */}
      <div className={`intro-brand-overlay ${showText ? 'active' : ''}`}>
        <h1 className="intro-brand-title">COOKITWOS</h1>
      </div>
    </div>
  );
};

export default Intro;
