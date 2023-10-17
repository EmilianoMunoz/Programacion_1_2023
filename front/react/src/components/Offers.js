import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    flex: 1, // Hace que el campo de búsqueda ocupe el espacio restante
    marginRight: '10px', // Añade un margen a la derecha del campo de búsqueda
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
            <h1>Plazas de Estacionamiento Disponibles</h1>

            <div style={searchContainerStyle}>
                {/* Campo de búsqueda */}
                <input
                    type="text"
                    placeholder="Buscar por parking"
                    className="form-control"
                    style={searchInputStyle} // Aplicamos el estilo al campo de búsqueda
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Botón para borrar el campo de búsqueda */}
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
                            <td style={tdStyle}>{parking.availabity ? 'Disponible' : 'Ocupado'}</td>
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
        </div>
    );
};
