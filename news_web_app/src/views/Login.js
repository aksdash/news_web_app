// Login.js
import React, { useState } from 'react';
import './Login.css'; // Import styles from App.css
import {loginApi} from "../util/api.js"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function loginHandler(credentials){
    try {
        const userData = await loginApi(credentials);
          console.log('Login successful. User data:', userData);  
      } catch (error) {
        console.error('Login failed:', error.message);
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
        email,
        password,
      };
      loginHandler(credentials)
    };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className="form-container"> {/* Apply the same class as in Register component */}
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={resetForm}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
