import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';
import { images } from '../../constants';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">

      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact</h1>
        <p className="p__opensans">2 Rue de la chaussée, 75000 Paris, France</p>
        <p className="p__opensans">01 01 01 01 01</p>
        <p className="p__opensans">01 02 02 02 02</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="logo restaurant" />
        <p className="p__opensans">"La meilleure façon de se trouver est de se perdre au service des autres."</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Ouvertures</h1>
        <p className="p__opensans">Lundi - Vendredi</p>
        <p className="p__opensans">10:00 - 22:00</p>
        <p className="p__opensans">Samedi - Dimanche</p>
        <p className="p__opensans">07:00 - 23:00</p>
      </div>

    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Gargantua. All rights reserved</p>
    </div>
  </div>
);

export default Footer;
