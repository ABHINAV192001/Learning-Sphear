// src/components/ui/card.js
import React from 'react';
import '../css/card.css'; // Add your own CSS file for styling

export const CardContent = ({ title, description }) => (
  <div className="card-content">
    <h3 className="card-title">{title}</h3>
    <p className="card-description">{description}</p>
  </div>
);

const Card = ({ title, description, imageUrl }) => (
  <div className="card">
    {imageUrl && <img src={imageUrl} alt={title} className="card-img" />}
    <CardContent title={title} description={description} />
  </div>
);

export default Card;
