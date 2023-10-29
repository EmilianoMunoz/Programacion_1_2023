import React from 'react';
import { Form, Formik, Field } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2'; 
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const { setUser } = useContext(UserContext);

  const handleForm = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', values);
      console.log(response.data);
      const { role } = response.data
      console.log('role', role)

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: '¡Bienvenido de nuevo!',
          showConfirmButton: false,
          timer: 2000, 
        });
        setUser({
          logged:true,
          role: role
        })
        navigate('/home')
      } else {
        
        Swal.fire({
          icon: 'error',
          title: 'Error en el inicio de sesión',
          text: 'Usuario o contraseña incorrectos',
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error en el inicio de sesión',
        text: 'Ocurrió un error al iniciar sesión',
      });
    }
  };

  return (
    <div>
      <br />
      <Formik
        className='formik-selection'
        initialValues={initialValues}
        onSubmit={handleForm}
      >
        <Form className='form-formik'>
          <div className='row'>
            <div className='col-md-4 col-sm-1'></div>
            <div className='col-md-4 col-sm-1 border border-1'>
              <div style={{ padding: '30px' }}>
                <h2>Iniciar Sesión</h2>

                <Field
                  type='email'
                  className='form-control'
                  id='floatingEmail'
                  placeholder='name@example.com'
                  name='email'
                />

                <Field
                  type='password'
                  className='form-control'
                  id='floatingInput'
                  placeholder='password'
                  name='password'
                />

                <div className='d-grid gap-2'>
                  <button
                    className='btn text-white m-2'
                    style={{ backgroundColor: '#F5B041' }}
                    exact='true'
                    to='/login'
                  >
                    Iniciar sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      <div class='col-md-4 col-sm-1'></div>
    </div>
  );
};

export default Login;
