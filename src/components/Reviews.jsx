import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviewsRow1 = [
    { name: "Ana Beatriz", text: "Melhor cookie que já comi. A massa é perfeita e o recheio é muito generoso!", rating: 5 },
    { name: "Lucas Mendes", text: "O autêntico sabor americano. É crocante por fora e muito macio por dentro.", rating: 5 },
    { name: "Juliana Silva", text: "Excelente atendimento e os cookies são viciantes. Impossível comer um só!", rating: 5 },
    { name: "Gabriel Souza", text: "A Nutella derrete na boca. É uma experiência de outro mundo!", rating: 5 }
  ];

  const reviewsRow2 = [
    { name: "Mariana Costa", text: "A Fatec precisava disso! O Red Velvet é simplesmente divino.", rating: 5 },
    { name: "Pedro Henrique", text: "Comprei um para provar e tive que voltar para buscar mais cinco!", rating: 5 },
    { name: "Carla Oliveira", text: "O cheiro desse cookie saindo do forno é a melhor coisa da feira.", rating: 5 },
    { name: "Felipe Arantes", text: "Incomparável. Já provei muitos, mas o da Cookitwos é o número 1.", rating: 5 }
  ];

  return (
    <section id="reviews" className="section bg-beige overflow-hidden">
      <div className="container">
        <div className="reviews-header text-center animate-fade-up">
          <span className="section-tag">Feedback</span>
          <h2 className="section-title">O que dizem sobre nós</h2>
        </div>
      </div>

      <div className="marquee-container">
        {/* Fileira 1 - Vai para a esquerda */}
        <div className="marquee-track">
          {[...reviewsRow1, ...reviewsRow1].map((review, index) => (
            <div key={index} className="review-card-mini">
              <div className="review-stars">★★★★★</div>
              <p className="review-text-mini">"{review.text}"</p>
              <h4 className="review-name-mini">— {review.name}</h4>
            </div>
          ))}
        </div>

        {/* Fileira 2 - Vai para a direita */}
        <div className="marquee-track track-reverse">
          {[...reviewsRow2, ...reviewsRow2].map((review, index) => (
            <div key={index} className="review-card-mini">
              <div className="review-stars">★★★★★</div>
              <p className="review-text-mini">"{review.text}"</p>
              <h4 className="review-name-mini">— {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
