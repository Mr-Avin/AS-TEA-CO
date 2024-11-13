import React from 'react';
import './buybutton.css';

const Buybutton = ({onClick}) => {
  return (
    <button className="buy-now-button" onClick={onClick}>BUY NOW</button>
  );
}

export default Buybutton;
