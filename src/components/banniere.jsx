import React from 'react';
import '../styles/banniere.scss';

function Banniere({ image, texte }) {
  return (
    <div className="Banniere" style={{ backgroundImage: `url(${image})` }}>
      {texte && <h1>{texte}</h1>}
    </div>
  );
}
export default Banniere;