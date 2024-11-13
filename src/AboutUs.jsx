import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">ABOUT US</h1>
      <p className="about-us-text">
        At <strong>AS Tea Co.</strong>, we’re passionate about crafting exceptional tea blends that enhance your daily moments. Our signature blends are:
      </p>
      <ul className="about-us-list">
        <li><strong>Hotel Mixture:</strong> A refined blend of premium tea leaves, perfect for a sophisticated and memorable cup.</li>
        <li><strong>Family Mixture:</strong> Rich and full-bodied, designed for comforting family gatherings and shared experiences.</li>
      </ul>
      <p className="about-us-text">
        We take pride in sourcing our tea from the finest estates and adhering to sustainable and ethical practices. Our mission is to deliver quality and tradition in every cup, creating a warm and inviting experience for our customers.
      </p>
      <p className="about-us-text">
        Join us in celebrating the art of tea with AS Tea Co., where every sip is a step into a world of elegance and joy.
      </p>
      <p className="about-us-text">
        <strong>Our Vision:</strong> To lead in premium tea, celebrated for quality and sustainability.
      </p>
      <p className="about-us-text">Thank you for making us part of your tea journey!</p>
    </div>
  );
};

export default AboutUs;
