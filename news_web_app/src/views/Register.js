import React, { useState } from 'react';
import './Register.css'; // Import your CSS file for styling
import axios from "axios";

async function registerApiCall(user){
    console.log('api call started')
    try {
        const response = await axios.post('http://localhost:4000' + '/user/registerUser',user)
        if (response.status === 201){
            alert("User registered successfully")
        }else{
            console.log(response.status)
        }

    }catch(err){
        console.log(err)
    }
}

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form the data object to send the details to  API
    const userData = {
      email,
      password,
      name,
    };

    registerApiCall(userData)
    // Make an API call here using a library like Axios or fetch
    // Example using fetch:
    /*fetch('https://api.example.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.status === 200) {
          // Handle success, e.g., redirect to another page or show a success message
        } else {
          // Handle errors, e.g., display an error message
        }
      })
      .catch((error) => {
        console.error('API call error:', error);
      });*/
  }

  return (
    <div className="App">
      <div className="form-container">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button className="register-button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register
