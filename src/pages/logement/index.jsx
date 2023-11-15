import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/carousel';
import annonces from '../../data/data.json';
import '../../styles/logement.scss';

function Logement() {
  const { id } = useParams();
  const annonce = annonces.find(a => a.id === id);

  if (!annonce) {
    return <div>Annonce non trouvée</div>;
  }

  return (
    <div className="logement-container">
      <Carousel images={annonce.pictures} />
    </div>
  );
}

export default Logement;
