// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const AdminHeader = () => {
  return (
    <div style={styles.header}>
      <div style={styles.logo}> <Link style={styles.link} to="/home">Update 24 X7</Link></div>

      <div style={styles.navLinks}>
        <Link style={styles.link} to="/newsform">News Form</Link>
        <Link style={styles.link} to="/newslist">Edit News</Link>
        <Link style={styles.link}to="/login">Logout</Link>
      </div>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#343c43',
    padding: '15px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginRight : '30px',
    color: 'white'
  },
  navLinks: {
    display: 'flex',
    gap: '30px',
  },

  link: {
    color: 'white', // Set the desired link color
    textDecoration: 'none', // Remove underline (optional)
  }
};

export default AdminHeader;
