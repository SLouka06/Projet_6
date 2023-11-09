import React from 'react';
import '../styles/footer.scss';
import logoImage from "../assets/Logo_blanc.jpg"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logoImage} alt='KasaLogo' />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
