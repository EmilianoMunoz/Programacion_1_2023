import React from 'react';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ParkingForm = () => {
    const navigate = useNavigate();

    const initialValues = {
        id: '',
        availabity: true,
        parking: ''
    };

    const handleCreateParking = async (values) => {
        if (values.parking === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error al crear la plaza de estacionamiento',
                text: 'Debes seleccionar un parking válido',
            });
        } else {
            try {
                const response = await axios.post('http://localhost:5000/parkingform', values);
                console.log(response.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Plaza de estacionamiento creada con éxito',
                    showConfirmButton: false,
                    timer: 1800,
                });
                navigate('/offers');
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error al crear la plaza de estacionamiento',
                    text: 'Por favor, inténtalo de nuevo más tarde',
                });
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
                        <h2>Crear Plaza de Estacionamiento</h2>
                        <Formik initialValues={initialValues} onSubmit={handleCreateParking}>
                            <Form>
                                <div className="mb-3">
                                    <label htmlFor="parking" className="form-label">Elija el parking</label>
                                    <Field as="select" className="form-select" id="parking" name="parking">
                                        <option value="">Seleccionar Parking</option>
                                        <option value="parking1">Parking 1</option>
                                        <option value="parking2">Parking 2</option>
                                        <option value="parking3">Parking 3</option>
                                    </Field>
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn m-2 text-white" style={{ backgroundColor: '#F5B041' }}>Crear Plaza</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <div className="col-md-4 col-sm-1"></div>
            </div>
        </div>
    );
};


export default ParkingForm;
