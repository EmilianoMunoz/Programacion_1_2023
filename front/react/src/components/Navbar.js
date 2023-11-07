import React from 'react';
import logo from '../images/logoname.png';
import { Link } from 'react-router-dom';
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export const Navbar = () => {
    const { user, setUser } = useContext(UserContext);

    const handleLogOut = () => {
        setUser(false);
        console.log('salir');
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#4C4F62' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/home'>
                        <img src={logo} width="250px" height="110px" alt="Logo y nombre" to="/home" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav w-100 justify-content-between align-items-end">
                            <li className="nav-item mx-auto d-block">
                                <Link className="nav-link active" aria-current="page"><h5>Medios de pago</h5></Link>
                            </li>
                            <li className="nav-item mx-auto d-block">
                                <Link className="nav-link active" aria-current="page"><h5>Nosotros</h5></Link>
                            </li>
                            <li className="nav-item mx-auto d-block">
                                <Link className="nav-link active" aria-current="page"><h5>Contacto</h5></Link>
                            </li>
                            {user && user.role === '1' && (
                                <li className="nav-item mx-auto d-block">
                                    <Link className="nav-link active" aria-current="page" to='/dashboard'><h5>Panel</h5></Link>
                                </li>
                            )}
                            {user && user.role === '2' && (
                                <li className="nav-item mx-auto d-block">
                                    <Link className="nav-link active" aria-current="page" to='/reserves'><h5>Reservas</h5></Link>
                                </li>
                            )}
                            {user.logged ? (
                                <li className="nav-item mx-auto d-block">
                                    <button className="btn text-white" style={{ backgroundColor: '#F5B041' }} onClick={handleLogOut}>
                                        Cerrar Sesión
                                    </button>
                                </li>
                            ) : (
                                <li className="nav-item mx-auto d-block">
                                    <Link className="btn text-white" style={{ backgroundColor: '#F5B041', marginRight: "5px", marginBottom: "5px" }} to="/login">Ingresar</Link>
                                    <Link className="btn text-white" style={{ backgroundColor: '#F5B041', marginBottom: "5px" }} to="/register">Registrarme</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

