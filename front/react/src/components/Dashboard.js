import React from 'react';
import { Link } from 'react-router-dom';

const panelStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '20px', // Añade un espacio superior al texto
};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Alinea los botones horizontalmente
    marginTop: '20px', // Añade un espacio superior a los botones
};

const buttonStyle = {
    backgroundColor: '#F5B041',
    color: 'white',
    padding: '10px 20px',
    margin: '5px',
    borderRadius: '5px',
    fontSize: '18px',
    textDecoration: 'none', // Elimina el subrayado del texto
};

const Dashboard = () => {
    return (
        <div style={panelStyle}>
            <h1>Panel de Administración</h1>
            <div style={buttonContainerStyle}>
                <Link to="/offers" style={buttonStyle}>
                    Estacionamientos
                </Link>
                <Link to="/userlist" style={buttonStyle}>
                    Usuarios
                </Link>
                <Link to="/reservas" style={buttonStyle}>
                    Reservas
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;
