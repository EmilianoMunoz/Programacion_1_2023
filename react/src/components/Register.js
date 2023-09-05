import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Register = () => {
    const navigate = useNavigate();

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
    };

    const handleRegister = async (values) => {
        if (values.password !== values.confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Las contraseñas no coinciden',
            });
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/auth/register', values);
            console.log(response.data);
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                showConfirmButton: false,
                timer: 1800,
            });
            navigate('/dashboard');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El correo electrónico ya está registrado',
                });
            } else {
                console.log(error);
            }
        }
    };

    return (
        <div>
            <br />
            <div className="row">
                <div className="col-md-4 col-sm-1"></div>
                <div className="col-md-4 col-sm-1 border border-1">
                    <div style={{ padding: "30px" }}>
                        <h2>Registrarse</h2>
                        <Formik initialValues={initialValues} onSubmit={handleRegister}>
                            <Form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Nombre y Apellido</label>
                                    <Field type="text" className="form-control" id="name" name="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <Field type="email" className="form-control" id="email" name="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Telefono</label>
                                    <Field type="text" className="form-control" id="phone" name="phone" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <Field type="password" className="form-control" id="password" name="password" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña</label>
                                    <Field type="password" className="form-control" id="confirmPassword" name="confirmPassword" />
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn m-2 text-white" style={{ backgroundColor: '#F5B041' }}>Registrarme</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <div className="col-md-4 col-sm-1"></div>
            </div>
        </div>
    )
}

export default Register;


