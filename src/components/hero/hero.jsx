import React from 'react';
import './hero.css';
import hero from '../../assets/header/Ic_ilustra_Hero.png';

const Hero = () => {
  return (
    <nav className='container-hero' id='hero'>
        <div className='left-content-hero'>
            <p>Bienvenido a tu <span className='primary-color-hero'><b> Entrevista Tecnica</b></span> en <span className='secondary-color-hero'>Wolox.</span></p>
        </div>
        <div className="right-content-hero">
          <img src={hero} alt="Hero" />
        </div>
    </nav>
  );
};

export default Hero;
