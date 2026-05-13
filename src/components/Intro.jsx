import React, { useEffect, useState } from 'react';
import './Intro.css';

const Intro = ({ onComplete }) => {
  const [stage, setStage] = useState('entering');

  useEffect(() => {
    // 0s: Logo e texto aparecem
    // 1.8s: Conteúdo central começa a desaparecer
    // 2.1s: As faixas verticais (barras de cabeleireiro) começam a subir escalonadas
    // 3.5s: Intro é destruída
    
    const fadeTimeout = setTimeout(() => setStage('fading-content'), 1800);
    const revealTimeout = setTimeout(() => setStage('revealing'), 2100);
    const doneTimeout = setTimeout(() => {
      setStage('done');
      if (onComplete) onComplete();
    }, 3500);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(revealTimeout);
      clearTimeout(doneTimeout);
    };
  }, [onComplete]);

  if (stage === 'done') return null;

  return (
    <div className={`intro-overlay ${stage === 'revealing' ? 'ribbons-up' : ''}`}>
      {/* 5 Fitas Verticais (Barras de Cabeleireiro Clássicas) */}
      <div className="intro-ribbon"></div>
      <div className="intro-ribbon"></div>
      <div className="intro-ribbon"></div>
      <div className="intro-ribbon"></div>
      <div className="intro-ribbon"></div>
      
      {/* Elementos Centrais */}
      <div className={`intro-content ${stage === 'fading-content' || stage === 'revealing' ? 'fade-out' : ''}`}>
        <img src={`${import.meta.env.BASE_URL}images/logo .png`} alt="Cookitwos" className="intro-logo" />
        <p className="intro-love-text smooth-fade-up">
          <span className="text-white">FEITO COM </span>
          <span className="text-red">MUITO AMOR</span>
        </p>
      </div>
    </div>
  );
};

export default Intro;
