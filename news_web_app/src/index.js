import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './views/Register.js'
import Login from './views/Login.js';
import Home from './views/Home.js';
import NewsForm from './views/NewsForm.js';
import NewsList from './views/NewsList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element = { <Register />} />
        <Route path='/login' element = { <Login />} />
        <Route path= '/home' element = {<Home />} />
        <Route path='/newsform' element = {<NewsForm  />} />
        <Route path = '/newslist' element = {<NewsList />}  />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
