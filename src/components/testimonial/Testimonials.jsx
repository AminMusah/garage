import React, { useState, useEffect } from "react";
import testimonialData from "../api/testimonials.json";
import Card from "./Card";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    try {
      //simulate fetching data
      setTimeout(() => {
        setTestimonial(testimonialData.testimonials);
      }, 1000);
    } catch (error) {}
  }, []);
  return (
    <div className="testimonial-section" id="testimonials">
      <div className="top-row">
        <h2 className="h2 section-title text-center">
          What our client say about us
        </h2>
      </div>
      <div className="testimonial-carousel">
        {testimonial.map((testimonies) => (
          <Card
            key={testimonies.id}
            name={testimonies.name}
            message={testimonies.message}
            image={testimonies.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
