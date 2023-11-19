import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.scss';
import logoImage from "../assets/LOGO.jpg";

function Header() {
  const getNavLinkClass = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logoImage} alt="Kasa" />
        </NavLink>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/" className={getNavLinkClass}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/a-propos" className={getNavLinkClass}>
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

