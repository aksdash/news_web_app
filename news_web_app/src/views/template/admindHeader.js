// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const AdminHeader = () => {
  return (
    <div style={styles.header}>
      <div style={styles.logo}>Logo</div>

      <div style={styles.navLinks}>
        <Link to="/newsform">News Form</Link>
        <Link to="/newslist">Edit News</Link>
        <Link to="/Logout">Logout</Link>
      </div>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#ccc',
    padding: '15px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginRight : '30px'
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
