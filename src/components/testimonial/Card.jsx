import React from "react";

const Card = ({ name, image, message }) => {
  return (
    <div className="start">
      <div className="card-top">
        <img src={image} alt="Testimonial author" />
        <div className="author-info">
          <p className="author-name">{name}</p>
          <p className="author-role"></p>
        </div>
      </div>
      <p className="card-body">{message}</p>
    </div>
  );
};

export default Card;
