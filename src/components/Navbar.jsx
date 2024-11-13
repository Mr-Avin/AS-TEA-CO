// // src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-scroll'; // Import react-scroll
import './Navbar.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const nav = useNavigate()
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li>
          <Link to="product" smooth={true} duration={800} className="rosario-custom">
            PRODUCTS
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={800} className="rosario-custom">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} duration={800} className="rosario-custom">
            TESTIMONIALS
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={800} className="rosario-custom" onClick={()=>{nav('/')}}>
            CART
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
