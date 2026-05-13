import React from 'react';
import './Location.css';

const Location = () => {
  const address = "Avenida Dom Antônio, 2100, Assis - SP, 19806-900";
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="section bg-navy">
      <div className="container">
        <div className="location-grid">
          <div className="location-info">
            <span className="section-tag tag-white animate-fade-up">Venha nos Visitar</span>
            <h2 className="section-title title-white animate-fade-up staggered-1">Fatec Assis</h2>
            <div className="product-separator">★ ★ ★</div>
            <p className="location-desc">
              A verdadeira tradição americana está te esperando na Feira Universitária da Fatec — Campus de Assis.
            </p>
            <div className="address-box vintage-border-white">
              <h4>Fatec — Assis, SP</h4>
              <p>Avenida Dom Antônio, 2100<br/>Parque Universitário, Assis/SP<br/>CEP 19806-900</p>
              <a href="https://www.google.com/maps/place/Av.+Dom+Ant%C3%B4nio,+2100+-+Parque+Universit%C3%A1rio,+Assis+-+SP,+19806-900" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-hover-magic" style={{ marginTop: '1.5rem', width: '100%' }}>
                Como Chegar
              </a>
            </div>
          </div>
          
          <div className="location-map">
            <iframe 
              title="Fatec Assis SP"
              src={mapUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
