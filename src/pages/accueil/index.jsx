import React from 'react';
import Banniere from '../../components/banniere'; 
import Card from '../../components/cart'; 
import annonces from '../../data/data.json'; 
function Accueil() {
  return (
    <div>
      <Banniere />
      <div className="accueil-cards-container">
        {annonces.map((annonce) => (
          <Card key={annonce.id} title={annonce.title} imageUrl={annonce.cover} />

        ))}
      </div>
    </div>
  );
}

export default Accueil;