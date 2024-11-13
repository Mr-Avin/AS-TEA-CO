import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
       <div className='main'>
      <div className="footer-logo">
        <h1>AS TEA.CO</h1>
        <p>Bold Flavors, Energized Days.</p>
      </div>
      <div className="footer-contact">
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <span>+91 7709818416</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>100 ft road neminath colony, Sangli</span>
        </div>
      </div>
     </div>
      <div className="footer-rights">
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
