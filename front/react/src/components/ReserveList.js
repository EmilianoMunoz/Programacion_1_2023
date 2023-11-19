import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { format } from 'date-fns';

export const ReserveList = () => {
    const { user } = useContext(UserContext);
    const [reserves, setReserves] = useState([]);

    useEffect(() => {
        fetchMyReserves();
    }, []);

    const fetchMyReserves = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/reserveslist`);
            setReserves(response.data);
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <div className="container-fluid col-md-8 mt-5" style={{marginBottom: '170px'}}>
            <div style={{ textAlign: 'center', marginTop: '20px'}}>
                <h1>Historial Reservas</h1>
                <div style={{ width: '100%', backgroundColor: '#F5B041', height: '5px', marginBottom: '20px' }}></div>
            </div>
            <table className="table table-striped">
                <thead class="table-light">
                <tr>
                    <th scope="col">Parking</th>
                    <th scope="col">Fecha de Inicio</th>
                    <th scope="col">Hora de Inicio</th>
                    <th scope="col">Fecha de Fin</th>
                    <th scope="col">Hora de Fin</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Estado</th>
                </tr>
                </thead>
                
                <tbody>
                {reserves.map((reserve) => (
                    <tr key={reserve.id}>
                    <td>{reserve.placeName}</td>
                    <td>{new Date(reserve.startTime).toLocaleDateString('es-ES', { timeZone: 'Europe/Lisbon' })}</td>
                    <td>{new Date(reserve.startTime).toLocaleTimeString('es-ES', { timeZone: 'Europe/Lisbon', hour: 'numeric', minute: 'numeric' })}</td>
                    <td>{new Date(reserve.endTime).toLocaleDateString('es-ES', { timeZone: 'Europe/Lisbon' })}</td>
                    <td>{new Date(reserve.endTime).toLocaleTimeString('es-ES', { timeZone: 'Europe/Lisbon', hour: 'numeric', minute: 'numeric' })}</td>
                    <td>${reserve.totalCost}</td>
                    <td>{reserve.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReserveList;
