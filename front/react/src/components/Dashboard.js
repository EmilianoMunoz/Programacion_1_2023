import React from 'react';
import { Link } from 'react-router-dom';

const panelStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '20px',
    marginTop: '50px',
    marginBottom: '360px'
};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center', 
    marginTop: '20px', 
};

const buttonStyle = {
    backgroundColor: '#F5B041',
    color: 'white',
    padding: '10px 20px',
    margin: '5px',
    borderRadius: '5px',
    fontSize: '18px',
    textDecoration: 'none', 
};

const Dashboard = () => {
    return (
        <div style={panelStyle}>
            <h1>Panel de Administración</h1>
            <div style={{ width: '600px', backgroundColor: '#F5B041', height: '5px', marginBottom: '20px' }}></div>
            <div style={buttonContainerStyle}>
                <Link to="/offers" style={buttonStyle}>
                    Estacionamientos
                </Link>
                <Link to="/userlist" style={buttonStyle}>
                    Usuarios
                </Link>
                <Link to="/reservelist" style={buttonStyle}>
                    Reservas
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;
