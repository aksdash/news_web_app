// HeaderView.js
import React from 'react';

const HeaderView = () => {
  return (
    <div style={styles.headerContainer}>
      <div style={styles.box}>Home</div>
      <div style={styles.box}>Sports</div>
      <div style={styles.box}>About us</div>
      <div style={styles.box}>Contact Us</div>
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
};

export default HeaderView;
