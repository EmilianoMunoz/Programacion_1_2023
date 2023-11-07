import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const formContainerStyle = {
  width: '50%',
  display: 'flex',
};

const formStyle = {
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  flex: 1,
};

export const UserEdit = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/userlist/${userId}`);
        const data = response.data;
        setUserData(data);
      } catch (error) {
        console.error('Error al obtener los datos del usuario', error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <div style={formStyle}>
          <h1>Editar Usuario</h1>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre y Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={userData.name || ''}
              readOnly 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={userData.email || ''}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Teléfono
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={userData.phone || ''}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={userData.password || ''}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
