import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="gericht logo"/>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Accueil</a></li>
        <li className="p__opensans"><a href="#about">A propos</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Récompenses</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Connexion / Créer un compte</a>
        <div />
        <a href="/" className="p__opensans">Réserver une table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu className="overlay__open" color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu className="overlay__close" fontSize={27} onClick={() => setToggleMenu(false)}/>
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><a href="#home">Accueil</a></li>
              <li className="p__opensans"><a href="#about">A propos</a></li>
              <li className="p__opensans"><a href="#menu">Menu</a></li>
              <li className="p__opensans"><a href="#awards">Récompenses</a></li>
              <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
