import React from 'react';
import { Link } from 'react-router-dom';
import parking from '../images/parking foto.jpg';
import user from '../images/user_dashboard.png';
import reserves from '../images/reservas.jpg';
import parking_dashboard from '../images/parking_dashboard.png';


const panelStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '20px',
    marginTop: '20px',
    marginBottom: '400px'
};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center', 
    marginTop: '20px', 
};

const cardStyle = {
  maxWidth: '500px',
  borderRadius: '10px',
};

const imageStyle = {
  width: '290px',
  height: '290px',
};

const buttonStyle = {
  backgroundColor: '#F5B041',
  color: 'white',
  marginRight: '5px',
  marginBottom: '5px',
};

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid col-md-8 mt-5" style={{ marginBottom: '90px' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Panel de administración</h2>
          <div style={{ width: '600px', backgroundColor: '#F5B041', height: '5px', margin: 'auto' }}></div>
        </div>
        <br></br>
        <div className="row row-cols-3 row-cols-md-3 g-4" style={{ marginTop: '20px' }}>
          {/* Usuarios */}
          <div className="col" style={{ margin: 'auto' }}>
            <div className="card text-center border-warning" style={cardStyle}>
              <div className="d-flex justify-content-center align-items-center">
                <img src={user} className="card-img-top" alt="foto: usuarios" style={imageStyle} />
              </div>
              <div className="card-body">
                <div style={{ display: 'inline-block' }}>
                  <Link className="btn text-white" style={buttonStyle} to="/userlist">
                    Usuarios
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Estacionamientos */}
          <div className="col" style={{ margin: 'auto' }}>
            <div className="card text-center border-warning" style={cardStyle}>
              <div className="d-flex justify-content-center align-items-center">
                <img src={parking_dashboard} className="card-img-top" alt="foto: estacionamientos" style={imageStyle} />
              </div>
              <div className="card-body">
                <div style={{ display: 'inline-block' }}>
                  <Link className="btn text-white" style={buttonStyle} to="/offers">
                    Estacionamientos
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Reservas */}
          <div className="col" style={{ margin: 'auto' }}>
            <div className="card text-center border-warning" style={cardStyle}>
              <div className="d-flex justify-content-center align-items-center">
                <img src={reserves} className="card-img-top" alt="foto: reservas" style={imageStyle} />
              </div>
              <div className="card-body">
                <div style={{ display: 'inline-block' }}>
                  <Link className="btn text-white" style={buttonStyle} to="/reservelist">
                    Reservas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;