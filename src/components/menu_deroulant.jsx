import React, { useState } from 'react';
import '../styles/menu_deroulant.scss';
import flecheImage from '../assets/arrow_menu.png';

function MenuDeroulant({ titre, contenu }) {
  const [estOuvert, setEstOuvert] = useState(false);

  const basculerMenu = () => {
    setEstOuvert(!estOuvert);
  };

  return (
    <div className={`menu-deroulant ${estOuvert ? 'estOuvert' : ''}`}>
      <div className="titre-menu">
        {titre}
        <div className="fleche" onClick={basculerMenu}>
          <img src={flecheImage} alt="Flèche" />
        </div>
      </div>
      <div className="contenu-menu">
        {contenu}
      </div>
    </div>
  );
}

export default MenuDeroulant;

