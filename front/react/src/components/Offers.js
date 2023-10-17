import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

    return (
        <div>
            <h1>Plazas de Estacionamiento Disponibles</h1>
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
                    {parkingData.map((parking) => (
                        <tr key={parking.id}>
                            <td style={tdStyle}>{parking.id}</td>
                            <td style={tdStyle}>{parking.availabity ? 'Disponible' : 'Ocupado'}</td>
                            <td style={tdStyle}>{parking.parking}</td>
                            <td style={tdStyle}>
                                <button onClick={() => handleDeleteParking(parking.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


