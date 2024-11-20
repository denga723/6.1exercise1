import React from "react";

const Card = ({ image, title, description }) => (
  <div className="card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Card;
