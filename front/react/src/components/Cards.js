import React from 'react';
import parking from '../images/parking foto.jpg';

export const Cards = () => {
    return (
        <div>
            <div class="container-fluid col-md-8 mt-5">
                <div style={{ textAlign: 'center' }}>
                    <h2>Nuestros establecimientos</h2>
                    <div style={{ width: '600px', backgroundColor: '#F5B041', height: '5px', margin: 'auto' }}></div>
                </div>
                <br></br>
                <div class="row row-cols-3 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card text-center h-100 border-warning" style={{ borderRadius: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                            <img src={parking} class="card-img-top" alt="foto: parking" width="500px" />
                            <div class="card-body">
                            <h3 class="card-title">Parking San Martín</h3>
                            <p class="card-text">Frente al hospital central de la ciudad y a 10 minutos del centro, este estacionamiento cuenta con más de 50 cocheras para su comodidad y rápida atención.</p>
                            <br/><br/>
                            <div class="position-absolute fixed-bottom mb-1">
                                <div style={{ display: "inline-block", marginRight: "10px" }}>
                                <a href="" class="btn text-white" style={{ backgroundColor: '#F5B041' }}>Ver ubicación</a>
                                </div>
                                <div style={{ display: "inline-block" }}>
                                <a href="#" class="btn text-white" style={{ backgroundColor: '#F5B041' }}>Contactar</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card text-center h-100 border-warning" style={{ borderRadius: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                            <img src={parking} class="card-img-top" alt="foto: parking" width="500px"/>
                            <div class="card-body">
                            <h3 class="card-title">Parking Francia</h3>
                            <p class="card-text">Frente al hospital central de la ciudad y a 10 minutos del centro, este estacionamiento cuenta con más de 50 cocheras para su comodidad y rápida atención.</p>
                            <br/><br/>
                            <div class="position-absolute fixed-bottom mb-1">
                                <div style={{ display: "inline-block", marginRight: "10px" }}>
                                <a href="#" class="btn text-white" style={{ backgroundColor: '#F5B041' }}>Ver ubicación</a>
                                </div>
                                <div style={{ display: "inline-block" }}>
                                <a href="#" class="btn text-white" style={{ backgroundColor: '#F5B041' }}>Contactar</a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card text-center h-100 border-warning" style={{ borderRadius: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                            <img src={parking} class="card-img-top" alt="foto: parking" width="500px"/>
                            <div class="card-body">
                            <h3 class="card-title">Parking Plaza España</h3>
                            <p class="card-text">Frente a Plaza España, a partir de este estacionamiento usted puede acceder al parque de la ciudad como así tambien al lago y paseo de artesanos.</p>
                            <br/><br/>
                            <div class="position-absolute fixed-bottom mb-1">
                                <div style={{ display: "inline-block", marginRight: "10px" }}>
                                <a href="#" class="btn text-white" style={{ backgroundColor: '#F5B041' }}>Ver ubicación</a>
                                </div>
                                <div style={{ display: "inline-block" }}>
                                <a href="#" class="btn text-white" style={{ backgroundColor: '#F5B041' }}>Contactar</a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;