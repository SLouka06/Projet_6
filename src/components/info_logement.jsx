import React from 'react';
import MenuDeroulant from './menu_deroulant';
import '../styles/info_logement.scss';
import HotePlaceholder from '../assets/Host_pictures.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

const InfoLogement = ({ annonce }) => {
    const etoiles = Array.from({ length: 5 }, (_, index) => (
        <FontAwesomeIcon 
            key={index} 
            icon={solidStar} 
            className={index < annonce.rating ? 'active' : ''} 
        />
    ));

    const hoteImageSrc = annonce.host.picture || HotePlaceholder;

    return (
        <div className="info-logement">
            <div className="logement-top">
                <div className="logement-header">
                    <h1>{annonce.title}</h1>
                    <p className="location">{annonce.location}</p>
                </div>
                <div className="host-info">
                    <span className="host-name">{annonce.host.name}</span>
                    <img 
                        src={hoteImageSrc} 
                        alt={`Hôte: ${annonce.host.name}`} 
                        className="host-image" 
                    />
                </div>
            </div>
            <div className="tags-rating-container">
                <div className="tags">
                    {annonce.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
                <div className="rating">{etoiles}</div>
            </div>
            <div className="menus-container">
                <MenuDeroulant
                    titre="Description"
                    contenu={annonce.description}
                    className="logement-menu-deroulant description-menu"
                />
                <MenuDeroulant
                    titre="Équipements"
                    contenu={
                        <ul className="equipments-list">
                            {annonce.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    }
                    className="equipments-menu" 
                />
            </div>
        </div>
    );
};

export default InfoLogement;
