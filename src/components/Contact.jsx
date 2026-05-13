import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const formDataToSend = {
      ...formData,
      access_key: "47e24db0-74dc-4a1b-a149-1b8685a56b6d"
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        console.error("Erro no envio:", result);
        setStatus('error');
      }
    } catch (error) {
      console.error("Erro de rede:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section section-red">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-info animate-fade-up">
            <span className="section-tag">Fale Conosco</span>
            <h2 className="section-title">Entre em Contato</h2>
            <p className="contact-subtitle">
              Dúvidas, sugestões ou encomendas especiais? Nossa equipe está pronta para te atender com o mesmo carinho que colocamos em nossos cookies.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h4>E-mail</h4>
                  <p>contato@cookitwos.com.br</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <div>
                  <h4>Instagram</h4>
                  <p>@cookitwos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container animate-scale-in">
            <form className="contact-form vintage-border" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Seu nome" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="seu@email.com" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Assunto</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="" disabled>Selecione um assunto</option>
                  <option value="Encomenda">Encomenda Especial</option>
                  <option value="Dúvida">Dúvida Técnica</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Como podemos ajudar?" 
                  rows="4" 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary btn-hover-magic ${status === 'sending' ? 'loading' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Enviando...' : status === 'success' ? 'Mensagem Enviada!' : status === 'error' ? 'Erro ao enviar' : 'Enviar Mensagem'}
              </button>
              
              {status === 'success' && (
                <p className="form-success-msg">Obrigado! Retornaremos o contato em breve.</p>
              )}
              {status === 'error' && (
                <p className="form-error-msg" style={{color: 'red', textAlign: 'center', marginTop: '1rem'}}>Ocorreu um erro. Tente novamente mais tarde.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
