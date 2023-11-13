import React from 'react';
import Banniere from '../../components/banniere'; 
import Card from '../../components/cart'; 
import annonces from '../../data/data.json'; 
import bannerImage from '../../assets/banner_img.jpg'

const sixPremieresAnnonces = annonces.slice(0, 6);

function Accueil() {
  return (
    <div>
       <Banniere image={bannerImage} texte="Chez vous, partout et ailleurs" />
       <div className="accueil-cards-container">
        {sixPremieresAnnonces.map((annonce) => (
          <Card key={annonce.id} title={annonce.title} imageUrl={annonce.cover} />

        ))}
      </div>
    </div>
  );
}

export default Accueil;