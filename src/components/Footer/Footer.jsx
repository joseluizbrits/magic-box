import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './FooterStyled';
import { ReactComponent as Logo } from '../../assets/icons/box.svg';

function Footer() {
  return (
    <Container>
      <div className="content">
        <div className="brand">
          <Link id="logo">
            magic
            <Logo />
            box
          </Link>
          <h3>Academia Magic Box Ltda.</h3>
          <p>Desenvolvimento esportivo de alta performance</p>
          <span id="instagram"></span>
          <span id="facebook"></span>
          <span id="whatsapp"></span>
        </div>
        <div className="links">
          <div className="menu">
            <h2>Menu</h2>
            <a href="#planos">Planos</a>
            <a href="#modalidades">Modalidades</a>
            <a href="#infraestrutura">Infraestrutura</a>
            <a href="#time">Time</a>
            <a href="#contato">Contato</a>
          </div>
          <div className="network">
            <h2>Redes</h2>
            <Link>Intagram</Link>
            <Link>Facebook</Link>
            <Link>WhatsApp</Link>
            <Link>Youtube</Link>
            <Link>LinkedIn</Link>
          </div>
        </div>
        <div className="location">
          <h2>Localização</h2>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6636085318605!2d-43.39518962697059!3d-22.999394295173477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb990e1fc13d%3A0xad7dbc00d175eedb!2sR.%20Isidoro%20Lopes%2C%20146%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022793-273!5e0!3m2!1spt-BR!2sbr!4v1693526535243!5m2!1spt-BR!2sbr"
              width="316"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p>Rua Ali Perto, 255 - Barra da Tijuca, RJ</p>
        </div>
        <p className="copyright">
          © Copyright 2023 - 2024 | Magic Box | Todos os Direitos Reservados |
          Criado por BRITS
        </p>
      </div>
    </Container>
  );
}

export default Footer;
