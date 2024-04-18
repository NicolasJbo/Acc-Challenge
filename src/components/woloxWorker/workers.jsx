import React from 'react';
import './workers.css';
import TwitterLogo from '../../assets/follow-us/twitter.png';

const Workers = () => {

  return (
    <div className='container-worker'>
        <div className='left-content'>
            <h1><span className='primary-color'>350+</span><span className='secondary-color'>Woloxers</span> </h1>
            <div className="social-media">
                <img className='logo-twitter' src={TwitterLogo} alt="Twitter" />
                @Wolox
                
            </div>
            <button type="button" className='btn'> Seguinos</button>
        </div>
        <div className="right-content">
            <p>Trabajamos para <span className='primary-color'> convertir</span> <span className='secondary-color'>ideas </span>en productos.</p>
        </div>
    </div>
  );
};

export default Workers;
