import React from 'react';
import whatsapp from '../images/whatsapp.png';
import instagram from '../images/instagram.png';

export const Footer = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#4C4F62', marginTop: '30px' }}>
        <div class="container-fluid">
          <span class="navbar-text text-white col-sm-3" id="Contacto">
            <p>
              <h3>Atención al cliente</h3>
            </p>
            <p>2604-123456</p>
            <p>contacto@primeparking.com.ar</p>
            <p>Lun a Vie de 09:00 hs. hasta las 20:00 hs.</p>
            <p>Sábados de 09:00 hs. hasta las 13:00 hs.</p>
          </span>
          <span class="navbar-text text-white col-sm-3 justify-content-center text-center">
            <p>
              <h3>Seguinos</h3>
            </p>
            <img src={whatsapp} width="50px" height="50px" alt="whatsapp" />
            <img src={instagram} width="50px" height="50px" alt="instagramf" />
          </span>
          <span class="navbar-text text-white col-sm-3">
            <button class="btn text-white">
              <h5>Preguntas Frecuentes</h5>
            </button>

            <button class="btn text-white">
              <h5>Términos y Condiciones</h5>
            </button>
            <button class="btn text-white">
              <h5>Politicas de Privacidad</h5>
            </button>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
