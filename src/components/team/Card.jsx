import React from "react";

const Card = ({ name, position, image }) => {
  return (
    <div class="influencer">
      <img src={image} alt={position} class="influencer-photo" />
      <p class="influencer-name">{name}</p>
      <p class="influencer-name">{position}</p>
    </div>
  );
};

export default Card;
