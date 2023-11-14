
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/page_erreur.scss'; 

function Page_erreur() {
  return (
    <div className="error-container">
      <h1 className="error-number">404</h1>
      <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error-home-link">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Page_erreur;
