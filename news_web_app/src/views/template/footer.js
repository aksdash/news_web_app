// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div style={styles.footerContainer}>
      <p style={styles.text}>Page Number: 1</p>
      <div style={styles.text}>&copy; 2023 Your Company. All rights reserved.</div>
      <div style={styles.text}>Contact: +1 123-456-7890</div>
    </div>
  );
};

const styles = {
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '20px',
    backgroundColor: '#343c43',
    padding: '10px', // Optional padding for visual appeal
    textColor: "white"
  },
  text: {
    color: "white",
    fontSize: '10px'
    
  }
};

export default Footer;
