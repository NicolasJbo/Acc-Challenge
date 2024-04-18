import React from 'react';
import './navbar.css';

const Navbar = () => {

  return (
    <div className='container-navbar'>
        <p>W <span className='secondary-color'> O </span> L <span className=' primary-color'> O </span> X</p>
        <ul>
            <li>Inicio</li>
            <li>Beneficios</li>
            <li className='btn'> Login</li>
        </ul>
    </div>
  );
};

export default Navbar;
