import React from 'react';
import './Ingredients.css';

const Ingredients = () => {
  const data = [
    { title: "Manteiga Cremosa", desc: "A base perfeita para uma massa macia e saborosa." },
    { title: "Açúcar Mascavo", desc: "Garante o aspecto caramelizado único da receita americana." },
    { title: "Cacau Belga", desc: "Gotas puras de chocolate que derretem no calor da fornada." },
    { title: "Creme de Avelã", desc: "A alma do nosso recheio clássico e irresistível." }
  ];

  return (
    <section id="ingredients" className="section bg-navy">
      <div className="container">
        <div className="ingredients-wrapper">
          <div className="ing-header-side animate-fade-up">
            <span className="section-tag">A Qualidade Importa</span>
            <h2 className="section-title">Os Melhores<br/>Ingredientes</h2>
            <div className="ing-decoration">
              <svg viewBox="0 0 100 100" width="150" height="150" className="ing-spin-svg">
                <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                <text font-family="var(--font-body)" font-size="10" font-weight="800" fill="var(--color-red)">
                  <textPath xlinkHref="#circlePath">
                    PREMIUM QUALITY ★ 100% ARTESANAL ★ COOKITWOS ★
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <div className="ing-list-side">
            {data.map((item, index) => (
              <div key={index} className={`ing-row animate-fade-up staggered-${index + 1}`}>
                <div className="ing-number">0{index + 1}</div>
                <div className="ing-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
                <div className="ing-star">★</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
