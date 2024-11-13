import React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const { totalAmount } = location.state || { totalAmount: 0 }; // Retrieve totalAmount from state

  const handlePayment = async () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY", // Your Razorpay key
      amount: totalAmount * 100, // Amount in paise
      currency: "INR",
      name: "Your Company Name",
      description: "Order Description",
      handler: async (response) => {
        const paymentData = {
          razorpay_payment_id: response.razorpay_payment_id,
          order_id: response.razorpay_order_id,
          signature: response.razorpay_signature,
        };

        try {
          const res = await axios.post('/api/payment/verify', paymentData);
          console.log(res.data); // Handle success response
        } catch (err) {
          console.error('Payment verification failed.', err);
        }
      },
      theme: {
        color: "#8b5a2b", // Customize Razorpay button color
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Checkout</h1>
      <div style={styles.totalAmount}>
        <strong>Total Amount: ₹{totalAmount}</strong>
      </div>
      <button onClick={handlePayment} style={styles.submitButton}>Pay Now</button>
    </div>
  );
};

const styles = {
  // container: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: '100vh',
  //   backgroundColor: '#f0e5d9', // Light background
  // },
  title: {
    color: 'green',
    marginBottom: '20px',
  },
  totalAmount: {
    margin: '20px 0',
    fontSize: '24px',
    color: 'green',
  },
  submitButton: {
    backgroundColor: '#8b5a2b', // Brown button
    color: 'white',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  },
};

export default Checkout;
