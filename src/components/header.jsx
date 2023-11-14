import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss'; // Assurez-vous que le chemin est correct
import logoImage from "../assets/LOGO.jpg"


function Header() {
  return (
    <header className="header">
      <div className="logo">
      <Link to="/">
          <img src={logoImage} alt="Kasa" />
        </Link>
      </div>
      <nav className="navigation">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/a-propos">À Propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
