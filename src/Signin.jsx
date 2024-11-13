import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    console.log({ username, password });

    try {
      const response = await axios.post('http://localhost:5000/api/user/register', {
        username,
        password,
        address
      });
      localStorage.setItem('token', response.data.token);
      navigate('/cart');
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Sign In</h1>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={{color:"black"}}>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.inputField}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={{color:"black"}}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.inputField}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={{color:"black"}}>Address to ship your orders:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              style={styles.inputField}
            />
          </div>
          <button type="submit" style={styles.submitButton}>Sign In</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  // container: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: '100vh',
  //   backgroundColor: '#f0e5d9', // Light background
  // },
  card: {
    backgroundColor: '#ffffff', // White card background
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '400px',
  },
  title: {
    color: 'green',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: '15px',
  },
  inputField: {
    width: '80%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginRight:'10px',
    transition: 'border 0.3s',
  },
  submitButton: {
    backgroundColor: '#8b5a2b', // Brown button
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    transition: 'background 0.3s',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: '10px',
  },
};

export default SignIn;
