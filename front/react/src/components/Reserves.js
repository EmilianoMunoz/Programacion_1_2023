import React, { useState, useEffect, useContext } from 'react';
import parking from '../images/parking foto.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { format } from 'date-fns';

export const Reserves = () => {

    
    const { user } = useContext(UserContext);

    const userIdReserve = user.id

    const [reserves, setReserves] = useState([]);


    useEffect(() => {
        fetchMyReserves();
      }, []);

      
    const fetchMyReserves = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/reserves/${userIdReserve}`);
            console.log('Info',response.data)
            setReserves(response.data);
        } catch (error) {
            console.error(error);
        }
    };


    
  return (
    <div className="container-fluid col-md-8 mt-5">
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Realizar Reserva</h1>
        <div style={{ width: '100%', backgroundColor: '#F5B041', height: '5px', marginBottom: '20px' }}></div>
      </div>
      <div className="row row-cols-3 row-cols-md-3 g-4">
        <div className="col">
          <div className="card text-center border-warning" style={{ borderRadius: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <img src={parking} className="card-img-top" alt={'foto: parking'} style={{ maxWidth: "500px" }} />
            <div className="card-body">
              <h3 className="card-title">Parking San Martín</h3>
              <div>
                <Link className="btn text-white" style={{ backgroundColor: '#F5B041', marginRight: "5px", marginBottom: "5px" }} to="/confirmationreserve">Reservar</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center border-warning" style={{ borderRadius: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <img src={parking} className="card-img-top" alt={'foto: parking'} style={{ maxWidth: "500px" }} />
            <div className="card-body">
              <h3 className="card-title">Parking Francia</h3>
              <div>
                <Link className="btn text-white" style={{ backgroundColor: '#F5B041', marginRight: "5px", marginBottom: "5px" }} to="/confirmationreserve">Reservar</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center border-warning" style={{ borderRadius: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <img src={parking} className="card-img-top" alt={'foto: parking'} style={{ maxWidth: "500px" }} />
            <div className="card-body">
              <h3 className="card-title">Parking Plaza España</h3>
              <div>
                <Link className="btn text-white" style={{ backgroundColor: '#F5B041', marginRight: "5px", marginBottom: "5px" }} to="/confirmationreserve">Reservar</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Mis Reservas</h1>
        <div style={{ width: '100%', backgroundColor: '#F5B041', height: '5px', marginBottom: '20px' }}></div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Parking</th>
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

export default Reserves;
