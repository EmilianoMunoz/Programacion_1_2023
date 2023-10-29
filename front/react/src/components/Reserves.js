import React, { useState } from 'react';
import parking from '../images/parking foto.jpg';


const Reserves = ({ name, onReserveClick }) => {
    const [selectedParking, setSelectedParking] = useState('');
    const [selectedTime, setSelectedTime] = useState(1);
    const [selectedTurn, setSelectedTurn] = useState('8h');

    const handleParkingChange = (e) => {
        setSelectedParking(e.target.value);
    };

    const handleTimeChange = (e) => {
        setSelectedTime(parseInt(e.target.value));
    };

    const handleTurnChange = (e) => {
        setSelectedTurn(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos de la reserva al servidor o realizar otras acciones.
    };

    return (
        <div>
            <div class="container-fluid col-md-8 mt-5">
                <div style={{ textAlign: 'center' }}>
                    <h2>Realizar Reserva</h2>
                    <div style={{ width: '600px', backgroundColor: '#F5B041', height: '5px', margin: 'auto' }}></div>
                </div>
                <br></br>
                <div class="row row-cols-3 row-cols-md-3 g-4">
                    <div class="col">
                        <div className="card text-center border-warning" style={{ borderRadius: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                            <img src={parking} className="card-img-top" alt={'foto: parking'} style={{ maxWidth: "500px" }} />
                            <div className="card-body">
                                <h3 className="card-title">Parking San Martín</h3>
                                <div>
                                    <a href="#" className="btn text-white" style={{ backgroundColor: '#F5B041' }} onClick={onReserveClick}>
                                        Reservar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div className="card text-center border-warning" style={{ borderRadius: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                            <img src={parking} className="card-img-top" alt={'foto: parking'} style={{ maxWidth: "500px" }} />
                            <div className="card-body">
                                <h3 className="card-title">Parking Francia</h3>
                                <div>
                                    <a href="#" className="btn text-white" style={{ backgroundColor: '#F5B041' }} onClick={onReserveClick}>
                                        Reservar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card text-center border-warning" style={{ borderRadius: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                            <img src={parking} className="card-img-top" alt={'foto: parking'} style={{ maxWidth: "500px" }} />
                            <div className="card-body">
                                <h3 className="card-title">Parking Plaza España</h3>
                                <div>
                                    <a href="#" className="btn text-white" style={{ backgroundColor: '#F5B041' }} onClick={onReserveClick}>
                                        Reservar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reserves;
