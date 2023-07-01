import React from "react";

const Card = ({ name, position, image }) => {
  return (
    <div className="influencer">
      <img src={image} alt={position} className="influencer-photo" />
      <p className="influencer-name">{name}</p>
      <p className="influencer-name">{position}</p>
    </div>
  );
};

export default Card;
