import React from 'react';
import './footer.css';

const Footer = () => {

  return (<>
    <div className='container-footer' id='footer'>
        <h1>Gracias por <span className='secondary-color'>completar el ejercicio</span></h1>
        <h2>Te invitamos a ver mas informacion.</h2>
        <button className='btn'>Conocer mas</button>
    </div>
    <div className='text-end'>W o l o x</div>
    </>
  );
};

export default Footer;
