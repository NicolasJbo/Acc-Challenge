import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/login/login';

ReactDOM.render(
  <Router>
  
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/home"/>} /> 
      </Routes>
 
  </Router>,
  document.getElementById('root')
);
