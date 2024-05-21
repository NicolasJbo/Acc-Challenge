import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/login/login';
import PrivateRoute from './components/PrivateRoute';
import Pokemon from './components/pokemon/pokemon';

ReactDOM.render(
  <Router>
  
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/home"/>} /> 
        <Route path="/pokemon" element={<PrivateRoute element={Pokemon} />} />
      </Routes>
 
  </Router>,
  document.getElementById('root')
);
