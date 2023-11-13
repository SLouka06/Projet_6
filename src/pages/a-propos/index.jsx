import React from 'react';
import '../../styles/a-propos.scss'
import Banniere from '../../components/banniere';
import aboutBannerImage from '../../assets/banner_img_about.jpg';
import MenuDeroulant from '../../components/menu_deroulant';

function APropos() {
  return (
    <div>
      <Banniere image={aboutBannerImage} /> 
      <div className='menu'>
      <MenuDeroulant titre="Fiabilité"contenu={<p>Les annonces postées sur Kasa garantissent une fabilité total. Les photos sont conforment aux logements, 
          et toutes les informations sont régulièrement verifiées par nos equipes</p>}>
      </MenuDeroulant>
      <MenuDeroulant titre="Respect"contenu={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbation de voisinage entraînera une exclusion de la platforme</p>}>
      
      </MenuDeroulant>
      <MenuDeroulant titre="Service" contenu={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbation de voisinage entraînera une exclusion de la platforme</p>}>
     </MenuDeroulant>
      <MenuDeroulant titre="Sécurité" contenu={<p>La sécurité est la priorité chez Kasa. Aussi bien pour nos hôtes que nos voyageurs, chaques logement correspond aux critères de sécurité établis par nos services
          En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que nos standards sont bien respectés.
          Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
        </p>} >
        
      </MenuDeroulant>
      </div>
    </div>
  );
}

export default APropos;