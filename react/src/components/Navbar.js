import React from 'react';
import logo from '../images/logoname.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#4C4F62' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand">
                        <img src={logo} width="250px" height="110px" alt="Logo y nombre" to="/home" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav w-100 justify-content-between align-items-end">
                            <li className="nav-item rounded mx-auto d-block sm-2">
                                <Link className="nav-link active" aria-current="page" to="/reservas"><h5>Reservas</h5></Link>
                            </li>
                            <li className="nav-item mx-auto d-block">
                                <Link className="nav-link active" aria-current="page"><h5>Membresías</h5></Link>
                            </li>
                            <li className="nav-item mx-auto d-block">
                                <Link className="nav-link active" aria-current="page"><h5>Medios de pago</h5></Link>
                            </li>
                            <li className="nav-item mx-auto d-block">
                                <Link className="nav-link active" aria-current="page"><h5>Nosotros</h5></Link>
                            </li>
                            <li className="nav-item mx-auto d-block">
                                <Link className="nav-link active" aria-current="page" to="/login"><h5>Contacto</h5></Link>
                            </li>
                            <li className="nav-item mx-auto d-block">
                                <Link
                                    className="btn text-white" exact='true' style={{ backgroundColor: '#F5B041', marginRight: "5px", marginBottom: "5px" }} to="/login">Ingresar
                                </Link>
                                <Link
                                    className="btn text-white" exact='true' style={{ backgroundColor: '#F5B041', marginBottom: "5px" }} to="/register">Registrarme
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}