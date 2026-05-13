import React from 'react';
import './Footer.css';

// SVG Inline do Instagram
const InstagramIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// SVG Inline do WhatsApp para evitar dependências extras, seguindo a estética
const WhatsappIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer bg-bg">
      <div className="container">
        <div className="footer-content animate-fade-up">
          <div className="footer-brand">
            <h2>Cookitwos.</h2>
            <p>O Autêntico Cookie Americano</p>
          </div>
          <div className="footer-social">
            <a href="https://www.instagram.com/cookitwos" target="_blank" rel="noopener noreferrer" className="social-icon">
              <InstagramIcon size={28} />
            </a>
            <a href="#" className="social-icon">
              <WhatsappIcon size={28} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Cookitwos. Todos os Direitos Reservados. Fatec Assis.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
