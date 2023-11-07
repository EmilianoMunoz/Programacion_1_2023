import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

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
  const { id } = useParams();
  const [userData, setUserData] = useState([]);
  const [editedUser, setEditedUser] = useState({ id: 0, name: '', email: '', phone: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/user/${id}`);
      const data = response.data;
      setEditedUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleUpdateUser = async () => {
    try {
      await axios.put(`http://localhost:5000/user/${id}`, editedUser);
      Swal.fire({
        icon: 'success',
        title: 'Editado correctamente',
        showConfirmButton: false,
        timer: 1800,
      });
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <div style={formStyle}>
          <h1>Editar Usuario</h1>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Nombre y Apellido
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={editedUser.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={editedUser.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Teléfono
            </label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={editedUser.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={editedUser.password}
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-primary" onClick={handleUpdateUser}>
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
