import React from 'react';

const Card = ({ id, title, description }) => {
  return(
    <div>
      <span>ID: {id}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;