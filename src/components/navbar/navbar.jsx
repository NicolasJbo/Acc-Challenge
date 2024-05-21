import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

  return (
    <div className='container-navbar'>
        <p>W <span className='secondary-color'> O </span> L <span className=' primary-color'> O </span> X</p>
        <ul>
            <li>Inicio</li>
            <li>Beneficios</li>
           <Link to="/login" style={{ textDecoration: 'none' }}> <li className='btn' >Login </li></Link>
        </ul>
    </div>
  );
};

export default Navbar;
