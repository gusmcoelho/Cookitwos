import React, { useState, useEffect, useRef } from 'react';
import './Team.css';

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const base = import.meta.env.BASE_URL;
  const teamMembers = [
    { name: "Ricardo Caron", role: "Gestão Geral", img: `${base}images/pessoa1.jpeg` },
    { name: "Rebeca Rico", role: "Produção & Forno", img: `${base}images/pessoa2.jpeg` },
    { name: "Amanda Dias", role: "Marketing & Redes", img: `${base}images/pessoa3.jpeg` },
    { name: "Nicolly Almeida", role: "Atendimento & Vendas", img: `${base}images/pessoa4.jpeg` },
    { name: "Maria Eduarda", role: "Direção Financeira", img: `${base}images/pessoa5.jpeg` },
    { name: "Dennis Quirino", role: "Pesquisa & Desenvolvimento", img: `${base}images/pessoa6.jpeg` }
  ];

  // Observer próprio para não bugar com o re-render do ciclo automático
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Ciclo automático dos integrantes
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isVisible, teamMembers.length]);

  return (
    <section id="team" className="section bg-bg" ref={sectionRef}>
      <div className="container">
        <div className={`team-header text-center ${isVisible ? 'active' : ''}`} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}>
          <span className="section-tag">Os Confeiteiros</span>
          <h2 className="section-title">Nossa Equipe</h2>
          <p className="team-subtitle">Os talentos por trás da receita que está conquistando a Fatec.</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`team-polaroid ${isVisible ? 'active' : ''} ${index === activeIndex ? 'active-auto' : ''}`}
              style={{ 
                opacity: isVisible ? 1 : 0, 
                transform: isVisible 
                  ? (index === activeIndex ? 'scale(1.1) rotate(0) translateY(-10px)' : (index % 2 === 0 ? 'rotate(2deg)' : 'rotate(-2deg)'))
                  : 'translateY(30px)',
                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: `${index * 0.1}s`,
                zIndex: index === activeIndex ? 10 : 1
              }}
            >
              <div className="polaroid-img-wrapper">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="polaroid-caption">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
