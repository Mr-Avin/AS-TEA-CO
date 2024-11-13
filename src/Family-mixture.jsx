// src/components/FamilyMixturePurchase.jsx
import React, { useState } from 'react';
import family from './assets/family.png';
import { useNavigate } from 'react-router-dom'; // Corrected import path

const FamilyMixturePurchase = () => {
  const [quantity, setQuantity] = useState(0);
  const pricePerUnit = 300; // Price for each Family Mixture (adjust as needed)
  const nav = useNavigate();
  // Calculate total price
  const totalPrice = quantity * pricePerUnit;

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleCheckout = () => {
    nav('/payment', { state: { totalAmount: totalPrice } }); // Pass totalPrice to the payment page
    // You can redirect to a payment gateway or thank-you page here
  };

  return (
    <div className="purchase-container">
      <h1 style={{ color: 'green' }}>Family Mixture</h1>
      <h2 style={{ color: '#57420D' }}>Perfect Blend for Family Gatherings</h2>
      <img src={family} alt="Family Mixture" className="product-image" />

      <div className="product-info" style={{ color: 'black' }}>
        <p><strong>Ingredients:</strong> A balanced mix of classic tea leaves and herbs.</p>
        <p><strong>Aroma & Flavor Profile:</strong> A smooth, comforting taste perfect for everyone.</p>
        <p>
          <strong>Brewing Recommendations:</strong> 
          Steep 2 tsp of Family Mixture in boiling water for 3-4 minutes.
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

      <button onClick={handleCheckout} className="checkout-button">
        CHECKOUT
      </button>

      <style jsx>{`
        .purchase-container {
          text-align: center;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          max-width: 400px;
          margin: auto;
          background-color: #f9f9f9;
        }
        .product-image {
            width: 200px; /* Set to your desired width */
            height: auto; /* Keep aspect ratio */
            border-radius: 8px;
        }
        .quantity-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 10px 0;
        }
        .quantity-button {
          background-color: #57420D;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          margin: 0 5px;
          border-radius: 4px;
        }
        .quantity-button:hover {
          background-color: #5a4c0e;
        }
        .checkout-button {
          background-color: green;
          color: white;
          border: none;
          padding: 15px 20px;
          cursor: pointer;
          border-radius: 4px;
        }
        .checkout-button:hover {
          background-color: darkgreen;
        }
        .price-container {
          margin: 15px 0;
        }
      `}</style>
    </div>
  );
};

export default FamilyMixturePurchase;
