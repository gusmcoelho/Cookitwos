import React, { useEffect, useState, useRef } from 'react';
import './Intro.css';

const Intro = ({ onComplete }) => {
  const [stage, setStage] = useState('entering');
  const [showText, setShowText] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef(null);
  const textTimeoutRef = useRef(null);

  const applySpeed = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.3;
    }
  };

  const handlePlay = () => {
    applySpeed();
    if (hasStarted) return;
    setHasStarted(true);

    // Mostra o texto "COOKITWOS" após 1.8s do início real do play
    if (textTimeoutRef.current) clearTimeout(textTimeoutRef.current);
    textTimeoutRef.current = setTimeout(() => {
      setShowText(true);
    }, 1800);
  };

  const handleVideoEnd = () => {
    // Quando o vídeo acaba, esperamos 800ms para dar tempo de ler o texto antes do fade-out
    setTimeout(() => {
      setStage('fading-out');
      setTimeout(() => {
        setStage('done');
        if (onComplete) onComplete();
      }, 800); // tempo do fade out (opacidade de 1 para 0)
    }, 800); // tempo de leitura após fim do vídeo
  };

  useEffect(() => {
    // Fallback: se em 6 segundos a intro não tiver terminado por qualquer motivo (bloqueio do autoplay ou erro de rede),
    // força a conclusão para o usuário não ficar preso na tela de intro.
    const fallbackTimeout = setTimeout(() => {
      if (stage !== 'done') {
        setStage('fading-out');
        setTimeout(() => {
          setStage('done');
          if (onComplete) onComplete();
        }, 800);
      }
    }, 6000);

    return () => {
      clearTimeout(fallbackTimeout);
      if (textTimeoutRef.current) clearTimeout(textTimeoutRef.current);
    };
  }, [stage, onComplete]);

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
          onPlay={handlePlay}
          onPlaying={handlePlay}
          onLoadedMetadata={applySpeed}
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
