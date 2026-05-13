import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-header text-center">
          <span className="section-tag">Desde 2026</span>
          <h2 className="section-title">A Tradição da Confeitaria</h2>
        </div>

        <div className="about-grid">
          <div className="about-card vintage-border hover-lift">
            <div className="about-number">01</div>
            <h3>Nossa Missão</h3>
            <p>Entregar a autêntica experiência americana em forma de cookies artesanais, respeitando a receita original e conectando pessoas através do sabor.</p>
          </div>

          <div className="about-card vintage-border hover-lift">
            <div className="about-number">02</div>
            <h3>Nossa História</h3>
            <p>Inspirados nas grandes confeitarias dos Estados Unidos, trazemos para a Fatec Assis uma tradição de excelência, adaptada para o seu dia a dia.</p>
          </div>

          <div className="about-card vintage-border hover-lift">
            <div className="about-number">03</div>
            <h3>Nossos Valores</h3>
            <p>Qualidade pura e artesanal. Ingredientes premium selecionados a dedo. Dedicação inegociável em cada fornada que sai para você.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
