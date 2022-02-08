import React from 'react';
import {SubHeading} from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Rechercher la nouvelle saveur"/>
      <h1 className="app__header-h1">La clé de la gastronomie</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}} >
        Sunt elit fugiat cillum quis id nostrud. Nulla exercitation officia duis ad do quis cillum labore enim aliqua aliquip sunt. Eiusmod eu in est eu do ipsum ipsum incididunt in sunt. Ut voluptate quis exercitation excepteur ullamco nisi do quis esse occaecat.
      </p>
      <button type="button" className="custom__button">Parcourir le menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img"/>
    </div>
  </div>
);

export default Header;
