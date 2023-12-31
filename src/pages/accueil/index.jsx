import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banniere from '../../components/banniere';
import Card from '../../components/cart';
import annonces from '../../data/data.json';
import bannerImage from '../../assets/banner_img.jpg';

function Accueil() {
  const navigate = useNavigate();

  const handleCardClick = (annonceId) => {
    navigate(`../logement/${annonceId}`);
  };

  return (
    <div>
      <Banniere image={bannerImage} texte={<><span>Chez vous,</span> <span className="responsive-break">partout et ailleurs</span></>} />
      <div className="accueil-cards-container">
        {annonces.map((annonce) => ( // Utilisez annonces directement sans .slice
          <div key={annonce.id} onClick={() => handleCardClick(annonce.id)} style={{ cursor: 'pointer' }}>
            <Card title={annonce.title} imageUrl={annonce.cover} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accueil;
