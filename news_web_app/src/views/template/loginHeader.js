// HeaderView.js
import React from 'react';
import { Link } from 'react-router-dom';

const LoginHeader = () => {
  return (
    <div style={styles.headerContainer}>
       <div style={styles.box}>Update 24X7</div>
      <div style={styles.box}><Link to="/register" style={styles.link}>Register</Link></div>
      <div style={styles.box}><Link to="/login" style ={styles.link}>Login</Link></div>
    </div>
  );
};

const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '50px',
    backgroundColor: '#343c43',
    padding: '10px', // Optional padding for visual appeal
    color: "white",
    fontSize: "15px"
  },
  box: {
    flex: '1', // Each box gets an equal share of the available space
    border: '1px solid #00000000',
    textAlign: 'center',
    lineHeight: '50px', // Vertically center the text
    boxSizing: 'border-box', // Include padding and border in the box size

  },
  link: {
    color: 'white', // Set the desired link color
    textDecoration: 'none', // Remove underline (optional)
  }
};

export default LoginHeader;
