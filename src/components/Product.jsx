import React from 'react';
import './Product.css';

const Product = () => {
  return (
    <section id="product" className="section bg-navy">
      <div className="container">
        <div className="product-layout">
          <div className="product-info">
            <span className="section-tag tag-white animate-fade-up">A Obra Prima</span>
            <h2 className="section-title title-white animate-fade-up staggered-1">Cookie Clássico<br/>Americano</h2>
            <div className="product-separator animate-fade-up staggered-2">★ ★ ★</div>
            <p className="product-desc animate-fade-up staggered-3">
              A verdadeira obra de arte da confeitaria americana. Por fora, uma crosta robusta e crocante. Por dentro, uma massa extremamente macia que esconde um coração abundante de Nutella derretida. Assado na perfeição todos os dias.
            </p>
            
            <ul className="product-features animate-fade-up staggered-4">
              <li>Massa Densa e Baunilhada</li>
              <li>Gotas de Chocolate Belga</li>
              <li>Recheio Explosivo de Nutella</li>
              <li>Receita 100% Artesanal</li>
            </ul>

            <div className="animate-fade-up staggered-5">
              <button className="btn btn-primary btn-hover-magic" onClick={() => document.getElementById('location')?.scrollIntoView({behavior:'smooth'})}>
                Garantir o Meu
              </button>
            </div>
          </div>
          <div className="product-visual animate-scale-in">
            <div className="product-frame vintage-border-white hover-zoom">
              <img src={`${import.meta.env.BASE_URL}images/produto.png`} alt="Cookie Clássico Recheado com Nutella" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
