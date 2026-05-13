import React from 'react';
import './Flavors.css';

const Flavors = () => {
  const flavors = [
    { 
      name: "Classic Nutella", 
      desc: "Nossa massa secreta recheada com a legítima Nutella.",
      color: "#f4f1ea",
      tag: "Best Seller"
    },
    { 
      name: "Red Velvet", 
      desc: "Massa aveludada vermelha com gotas de chocolate branco.",
      color: "#fdeced",
      tag: "Premium"
    },
    { 
      name: "Double Chocolate", 
      desc: "Massa de cacau intenso com dobro de gotas de chocolate.",
      color: "#f5e8e1",
      tag: "Intenso"
    },
    { 
      name: "Laka & Oreo", 
      desc: "Chocolate branco Laka com a crocância do Oreo original.",
      color: "#eef2f7",
      tag: "Novo"
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
              <div className={`flavor-image-crop crop-${index}`}></div>
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
