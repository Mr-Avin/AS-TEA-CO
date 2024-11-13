
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h1 className="testimonials-title">SEE WHAT PEOPLE SAY</h1>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <h3>Pooja Desai :</h3>
          <p>
            "The Family Mixture tea from AS Tea Co. has become a staple in our household. It’s soothing and perfectly balanced, making our tea time a delightful experience."
          </p>
        </div>
        <div className="testimonial-card">
          <h3>Rohan Kharti :</h3>
          <p>
            "I love the mild and smooth flavor of the Family Mixture. It's just perfect for evenings with the family. Even the kids enjoy it!"
          </p>
        </div>
        <div className="testimonial-card">
          <h3>Neha Sharma :</h3>
          <p>
            "As a hotel owner, finding the right tea that pleases everyone can be tough, but AS Tea Co.'s Hotel Mixture has been a hit with our guests. It's aromatic and flavorful!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
