import React from 'react';
import '../styles/banniere.scss';
import bannerImage from "../assets/banner_img.jpg";

function Banniere() {
  return (
    <div className="banniere" style={{ backgroundImage: `url(${bannerImage})` }}>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banniere;