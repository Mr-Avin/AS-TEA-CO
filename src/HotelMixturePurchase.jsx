// src/components/HotelMixturePurchase.jsx
import React, { useState } from 'react';
import './HotelMixturePurchase.css'; // CSS for styling
import hotelm from './assets/hotelm.png'; 
import { useNavigate } from 'react-router-dom';

const HotelMixturePurchase = () => {
  const [quantity, setQuantity] = useState(0);
  const nav = useNavigate();
  const pricePerUnit = 250; // Price for each product

  // Calculate total price
  const totalPrice = quantity * pricePerUnit;

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleCheckout = () => {
    nav('/payment', { state: { totalAmount: totalPrice } }); // Pass totalPrice to the payment page
  };

  return (
    <div className="purchase-container">
      <h1 style={{ color: 'green' }}>Hotel Mixture</h1>
      <h2 style={{ color: '#57420D' }}>Premium Aromatic Blend</h2>
      <img src={hotelm} alt="Hotel Mixture" className="product-image" />

      <div className="product-info" style={{ color: 'black' }}>
        <p><strong>Ingredients:</strong> A rich blend of premium tea leaves.</p>
        <p><strong>Aroma & Flavor Profile:</strong> A bold, earthy flavor that invigorates the senses.</p>
        <p>
          <strong>Brewing Recommendations:</strong> 
          Steep 1 tsp of Hotel Mixture in boiling water for 4-5 minutes.
        </p>
      </div>

      <div className="quantity-container">
        <h3 style={{ color: '#57420D' }}>Select Quantity</h3>
        <button onClick={decrementQuantity} className="quantity-button">-</button>
        <span className="quantity-display" style={{ color: 'black' }}>{quantity}</span>
        <button onClick={incrementQuantity} className="quantity-button">+</button>
      </div>

      <div className="price-container">
        <h3 style={{ color: 'green' }}>Total Price: ₹{totalPrice}</h3>
      </div>

      <button onClick={handleCheckout} className="checkout-button" disabled={quantity === 0}>
        CHECKOUT
      </button>
    </div>
  );
};

export default HotelMixturePurchase;
