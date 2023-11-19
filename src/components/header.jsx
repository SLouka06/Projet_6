import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.scss'; // Assurez-vous que le chemin est correct
import logoImage from "../assets/LOGO.jpg"


function Header() {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logoImage} alt="Kasa" />
        </NavLink>
      </div>
      <nav className="navigation">
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Accueil</NavLink></li>
          <li><NavLink to="/a-propos" activeClassName="active">A Propos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
