// Lista dos sabores disponíveis (usa Objetos)
import React from 'react';
import './Flavors.css';

const Flavors = () => {
  const base = import.meta.env.BASE_URL;
  const flavors = [
    { 
      name: "Clássico", 
      desc: "Nossa massa secreta com gotas de chocolate belga.",
      color: "#f4f1ea",
      tag: "Tradicional",
      image: `${base}images/hero_classic_final.png`
    },
    { 
      name: "Com Nutella", 
      desc: "Nossa massa secreta recheada com a legítima Nutella.",
      color: "#fdeced",
      tag: "Best Seller",
      image: `${base}images/hero_nutella_final.png`
    }
  ];

  return (
    <section id="flavors" className="section bg-white">
      <div className="container">
        <div className="flavors-header text-center animate-fade-up">
          <span className="section-tag">Variedade</span>
          <h2 className="section-title">Nossos Sabores</h2>
          <p className="flavors-sub">Uma seleção pensada para cada tipo de desejo.</p>
        </div>

        <div className="flavors-grid">
          {flavors.map((flavor, index) => (
            <div 
              key={index} 
              className={`flavor-card animate-fade-up staggered-${index + 1}`}
              style={{ backgroundColor: flavor.color }}
            >
              <div className="flavor-tag">{flavor.tag}</div>
              <img src={flavor.image} alt={flavor.name} style={{ width: '150px', height: '150px', objectFit: 'contain', marginBottom: '1.5rem', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }} />
              <h4>{flavor.name}</h4>
              <p>{flavor.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flavors;
