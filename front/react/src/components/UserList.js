import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

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

export const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/userlist');
      const data = response.data;
      setUserData(data);
    } catch (error) {
      console.error('Error al obtener los datos de usuarios', error);
    }
  };
  
  
  useEffect(() => {
    fetchUserData();
  }, []);
  

  
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/user/${id}`);
      fetchUserData();
    } catch (error) {
      console.error('Error al eliminar el usuario', error);
    }
  };
  


  const onEditUser = (user) => {
    
    navigate(`/useredit/${user.id}`);
  };

  const filteredUserData = userData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={tableContainerStyle}>
      <h1 style={{ marginTop: '20px' }}>Lista de Usuarios</h1>
      <div
        style={{ width: '600px', backgroundColor: '#F5B041', height: '5px', marginBottom: '20px' }}
      ></div>

      <div style={searchContainerStyle}>
        <input
          type="text"
          placeholder="Buscar por nombre"
          className="form-control"
          style={searchInputStyle}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="btn btn-secondary" onClick={() => setSearchTerm('')}>
          Borrar
        </button>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Nombre</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredUserData.map((user) => (
            <tr key={user.id}>
              <td style={tdStyle}>{user.id}</td>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.email}</td>
              <td style={tdStyle}>
                <button
                  className="btn btn-warning text-white"
                  style={{ marginRight: '10px' }}
                  onClick={() => onEditUser(user)}
                >
                  Editar
                </button>

                <button className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>
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

export default UserList;
