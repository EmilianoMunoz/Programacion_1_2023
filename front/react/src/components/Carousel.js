import React from 'react';
import estacion from '../images/estacion_carga.jpg';
import camara from '../images/cam_estacionamiento.jpg';
import lavado from '../images/lavado.jpg';
import '../styles/Carousel.css';



export const Carousel = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2>¿Por qué elegirnos?</h2>
        <div style={{ width: '600px', backgroundColor: '#F5B041', height: '5px', margin: 'auto' }}></div>
      </div>
      <div id="carouselExampleAutoplaying" className="carousel slide carousel-container col-md-6" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-image-wrapper">
              <img src={estacion} className="d-block w-100" alt="foto: estación de carga" />
              <div className="carousel-caption">
                <h4>Estación de carga</h4>
                <p>Disfrutá nuestra estación de carga para autos eléctricos de última generación</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image-wrapper">
              <img src={camara} className="d-block w-100" alt="foto: seguridad 24 hs." />
              <div className="carousel-caption">
                <h4>Seguridad 24 hs</h4>
                <p>Sistema cerrado de cámaras las 24 hs, además del mejor servicio de seguridad privada para resguardar tu vehículo y todo en su interior.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image-wrapper">
              <img src={lavado} className="d-block w-100" alt="foto: servicio premium" />
              <div className="carousel-caption">
                <h4>Servicio premium</h4>
                <p>Con tu membresía black, obtenés un lavado semanal de tu vehículo, incluye neumáticos e interiores, si así lo deseas.</p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;