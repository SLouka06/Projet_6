import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InfoLogement from '../../components/info_logement';
import Carousel from '../../components/carousel';
import annonces from '../../data/data.json';
import '../../styles/logement.scss'


function Logement() {
  let { annonceId } = useParams();
  const navigate = useNavigate();
  const [annonce, setAnnonce] = useState(null);

  useEffect(() => {
    const annonceTrouvee = annonces.find(an => an.id === annonceId);
    if (annonceTrouvee) {
      setAnnonce(annonceTrouvee);
    } else {
      navigate('/page-erreur');
    }
  }, [annonceId, navigate]);

  if (!annonce) {
    console.log('Affichage du chargement, annonce non trouvée'); // Pour le débogage
    return <div>annonce non disponible</div>;
  }

  return (
    <div className='logement-container'>
      <Carousel images={annonce.pictures} />
      <InfoLogement annonce={annonce} />
    </div>
  );
}


export default Logement;

