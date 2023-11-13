import React, { useState } from 'react';
import './Register.css'; // Import your CSS file for styling
import axios from "axios";
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import LoginHeader from './template/loginHeader';


async function registerApiCall(user,navigate){
    console.log('api call started')
    try {
        const response = await axios.post('http://localhost:4000' + '/user/registerUser',user)
        if (response.status === 201){
            alert("User registered successfully. Press Ok to login")
            navigate("/login")
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
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form the data object to send the details to  API
    const userData = {
      email,
      password,
      name,
    };
    registerApiCall(userData,navigate)
  }

  function reset() {
    setEmail('')
    setPassword('')
    setName('')
}   

  return (
    <>
        <LoginHeader />
        < br/>
        <h2 style={{display:"flex",justifyContent:'center'}}>Registration</h2>
        <br />
         <div className="form-container">
       
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
          <div>
          </div>
          <div className='button-container'>
          <button className="login-button" type="submit">
            Register
          </button>
          <Link to="/login">
            <button className="reset-button" onClick={reset}>
            Cancel
          </button>
          </Link>
          
          </div>
        </form>
      </div>
    </>
   
  );
}

export default Register
