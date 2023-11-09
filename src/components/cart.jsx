import React from 'react';
import '../styles/cart.scss';

function Card({ title, imageUrl }) { 
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-title">{title}</div>
    </div>
  );
}

export default Card;
