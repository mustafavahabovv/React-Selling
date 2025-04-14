import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { testimonials } from '../data/data';

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials-section">
      <div className="container">
        <h3>People Say</h3>
        <h2>Testimonials</h2>
        <Carousel>
          {testimonials.map((testimonial) => (
            <Carousel.Item key={testimonial.id}>
              <div className="testimonial-item">
                <img src={testimonial.img} alt={testimonial.name} />
                <p>{testimonial.text}</p>
                <h4>{testimonial.name}</h4>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;