import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  function logOut(){
    localStorage.removeItem('user');
    navigate("/home");
  }
  const user = localStorage.getItem('user');
  return (
    <div className='container-navbar'>
       
       
          {user ? ( <>
            <p>Po <span className='secondary-color'> Ke </span> Mo <span className=' primary-color'> N </span> App </p>
          <ul>
            <li onClick={()=> {logOut()}} className='home-btn-nav'>Home</li>
          </ul>
          </>):
          (<> 
          <p>W <span className='secondary-color'> O </span> L <span className=' primary-color'> O </span> X</p>
          <ul>
            <li onClick={() => scrollToSection('hero')}>Inicio</li>
            <li onClick={() => scrollToSection('benefit')}>Beneficios</li>
            <Link to="/login" style={{ textDecoration: 'none' }}> <li className='btn' >Login </li></Link>
          </ul>
          </>
           )
          }            
           
        
    </div>
  );
};

export default Navbar;
