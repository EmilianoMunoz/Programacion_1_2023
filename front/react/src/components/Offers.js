import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const tableContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    margin: '0 auto',
};

const searchContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '20px',
};

const searchInputStyle = {
    flex: 1, 
    marginRight: '10px',
};

const tableStyle = {
    border: '1px solid #ccc',
    borderCollapse: 'collapse',
    width: '100%',
};

const thStyle = {
    background: '#f2f2f2',
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'left',
};

const tdStyle = {
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'left',
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
const centerButtonContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px', 
};

export const Offers = () => {
    const [parkingData, setParkingData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchParkingData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/parkingform');
                const data = response.data;
                setParkingData(data);
            } catch (error) {
                console.error('Error al obtener los datos de estacionamientos', error);
            }
        };

        fetchParkingData();
    }, []);

    const handleDeleteParking = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/parkingform/${id}`);
            setParkingData((prevData) => prevData.filter((parking) => parking.id !== id));
        } catch (error) {
            console.error('Error al eliminar el estacionamiento', error);
        }
    };

    const filteredParkingData = parkingData.filter((parking) =>
        parking.parking.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={tableContainerStyle}>
            <h1 style={{ marginTop: '20px' }}>Plazas de estacionamiento</h1>
            <div style={{ width: '600px', backgroundColor: '#F5B041', height: '5px', marginBottom: '20px' }}></div>
            <div style={searchContainerStyle}>
                
                <input
                    type="text"
                    placeholder="Buscar por parking"
                    className="form-control"
                    style={searchInputStyle} 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                
                <button
                    className="btn btn-secondary"
                    onClick={() => setSearchTerm('')}
                >
                    Borrar
                </button>
            </div>

            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>ID</th>
                        <th style={thStyle}>Disponibilidad</th>
                        <th style={thStyle}>Parking</th>
                        <th style={thStyle}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredParkingData.map((parking) => (
                        <tr key={parking.id}>
                            <td style={tdStyle}>{parking.id}</td>
                            <td style={tdStyle}>{parking.availability ? 'Disponible' : 'Ocupado'}</td>
                            <td style={tdStyle}>{parking.parking}</td>
                            <td style={tdStyle}>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteParking(parking.id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
            <Link to="/parkingform" style={buttonStyle}>
                Crear plaza de estacionamiento
            </Link>
        </div>
    );
};
