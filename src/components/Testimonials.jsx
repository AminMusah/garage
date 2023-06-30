import React from "react";

const Testimonials = () => {
  return (
    <div class="testimonial-section">
      <div class="top-row">
        <h2 className="h2 section-title text-center">
          What our client say about us
        </h2>
      </div>
      <div className="testimonial-carousel">
        <div className="start">
          <div className="card-top">
            <img
              src="/assets/images/pexels-photo-5905897.jpeg"
              alt="Testimonial author"
            />
            <div className="author-info">
              <p className="author-name">Hajia Lad</p>
              <p className="author-role"></p>
            </div>
          </div>
          <p class="card-body">
            Working with Garage has brought about improvement to my business
          </p>
        </div>
        <div className="start">
          <div className="card-top">
            <img
              src="/assets/images/istockphoto-1299077558-612x612.jpg"
              alt="Testimonial author"
            />
            <div className="author-info">
              <p className="author-name">Gladys Zanu</p>
              <p className="author-role"></p>
            </div>
          </div>
          <p className="card-body">
            I was very happy when i got discounts because i don't get that
            elsewhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
