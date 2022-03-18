import React from 'react';
import { images} from '../../constants';
import { SubHeading } from '../../components';


const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem'}}>Nous trouver</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id possimus deleniti aperiam laudantium repudiandae est enim exercitationem expedita nisi asperiores!</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Horaires</p>
        <p className="p__opensans">Lundi - Vendredi: 10:00 - 22:00</p>
        <p className="p__opensans">Samedi - Dimanche: 07:00 - 23:00</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem'}}>Nous trouver</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
