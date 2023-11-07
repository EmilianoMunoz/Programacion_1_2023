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
            console.log('Info',response.data)
            setReserves(response.data);
        } catch (error) {
            console.error(error);
        }
    };
   
  return (
    <div className="container-fluid col-md-8 mt-5">
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Historial Reservas</h1>
        <div style={{ width: '100%', backgroundColor: '#F5B041', height: '5px', marginBottom: '20px' }}></div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Parking</th>
            <th scope="col">Usuario</th>
            <th scope="col">Fecha de Inicio</th>
            <th scope="col">Fecha de Fin</th>
            <th scope="col">Precio</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {reserves.map((reserve) => (
            <tr key={reserve.id}>
                <td>{reserve.placeName}</td>
                <td>{reserve.userName}</td>
                <td>{format(new Date(reserve.startTime), 'HH:mm dd/MM/yyyy ')}</td>
                <td>{format(new Date(reserve.endTime), 'HH:mm dd/MM/yyyy ')}</td>
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
