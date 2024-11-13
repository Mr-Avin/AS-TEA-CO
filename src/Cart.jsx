import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [products, setProducts] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cart/products');
        setProducts(response.data); // Assuming the response is an array of products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setTotalAmount((prevTotal) => prevTotal + product.price);
  };

  const handleCheckout = () => {
    nav('/payment', { state: { totalAmount } });
  };
  
  return (
    <div className="cart-container">
      <h1 style={{ color: 'green' }}>Shopping Cart</h1>

      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-item">
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => addToCart(product)} className="add-button">Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2 style={{ color: '#57420D' }}>Cart Summary</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} style={{ color: 'black' }}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
        <h3 style={{ color: 'green' }}>Total Amount: ₹{totalAmount}</h3>
      </div>

      {cartItems.length > 0 && (
        <button onClick={handleCheckout} className="checkout-button">
          PROCEED TO PAYMENT
        </button>
      )}

      <style jsx>{`
        .cart-container {
          text-align: center;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          max-width: 600px;
          margin: auto;
          background-color: #f9f9f9;
        }
        .product-list {
          margin-bottom: 20px;
        }
        .product-item {
          margin: 15px 0;
        }
        .add-button {
          background-color: #57420D;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          border-radius: 4px;
        }
        .add-button:hover {
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
      `}</style>
    </div>
  );
};

export default Cart;
