import React from 'react';
import {Form, Formik, Field} from 'formik';
import axios from 'axios';

export const Login = () => {


const intialValues = {
    email: '',
    password:'',

}

const handleLogin = (values) => {
    console.log('values: ', values)
}

const handleForm = async(values) => { 
    console.log('values:', values) 
    try { 
      const response = await axios.post('http://localhost:5000/auth/login', values) 
      console.log(response.data) 
    } catch (error) { 
    } 
  }

    return (
        <div>
            <br></br>
            <Formik
                className='formik-selection'
                initialValues={intialValues}
                onSubmit={handleForm}
            >
                <Form className='form-formik'>
                    <div className="row">
                        <div className="col-md-4 col-sm-1"></div>
                        <div className="col-md-4 col-sm-1 border border-1">
                            <div style={{padding: "30px"}}>
                                <h2>Iniciar Sesión</h2>
                                
                                    <Field
                                        type="email"
                                        className="form-control"
                                        id="floatingEmail"
                                        placeholder="name@example.com"
                                        name="email"
                                    />
                                    
                                    <Field
                                        type="password"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="password"
                                        name="password"
                                    />
                                    
                                    <div className="d-grid gap-2">
                                        <button className="btn text-white m-2" style={{ backgroundColor: '#F5B041' }} exact='true' to = "/login" >Iniciar sesión</button>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
            <div class="col-md-4 col-sm-1"></div>
        </div>
    )
}

export default Login