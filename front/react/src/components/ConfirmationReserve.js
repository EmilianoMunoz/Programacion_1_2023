import React, { useState, useContext, useEffect } from 'react'; 
import Swal from 'sweetalert2';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const ConfirmationReserve = () => {
  const [parkingOption, setParkingOption] = useState('san_martin');
  const [hoursOption, setHoursOption] = useState('1');
  const [allPlaces, setAllPlaces] = useState([]);
  const { user } = useContext(UserContext);
  const [place, setPlace] = useState(null);
  const navigate = useNavigate();

  const handleParkingChange = (e) => {
    const selectedParkingOption = e.target.value;
    setParkingOption(selectedParkingOption);
  };

  const handleHoursChange = (e) => {
    const selectedHoursOption = e.target.value;
    setHoursOption(selectedHoursOption);
  };

  useEffect(() => {
    fetchPlace();
  }, [parkingOption]); 

  const fetchPlace = async () => {
    try {
      const response = await axios.get('http://localhost:5000/parkingform');
      const allPlaces = response.data;
      const selectedPlace = allPlaces.find(place => place.parking === parkingOption);
  
      if (selectedPlace) {
        setPlace(selectedPlace);
      } else {
        console.error('No se encontró un lugar para el parking seleccionado.');
      }
    } catch (error) {
      console.error(error);
    }
  }; 
  
  const prices = {
    hour: 500,
    shift: 2000, 
    noon: 3500, 
    fullDay: 5000,
  };

  const calculateTotalPrice = () => {
    const selectedPrice = prices;
    
    switch (hoursOption) {
      case '1':
        return selectedPrice.hour;
      case 'turno':
        return selectedPrice.shift;
      case 'medio-dia':
        return selectedPrice.noon;
      case 'dia-completo':
        return selectedPrice.fullDay;
      default:
        return 0;
    }
  };

  

  
  const handleConfirmReservation = async () => {
    if (place) {
      const selectedPrice = prices[parkingOption];
      const durationInHours = parseFloat(hoursOption);
      const currentTime = new Date();
  
      let endTime;
      switch (hoursOption) {
        case '1':
          endTime = new Date(currentTime.getTime() + durationInHours * 60 * 60 * 1000);
          break;
        case 'turno':
          endTime = new Date(currentTime.getTime() + 4 * 60 * 60 * 1000);
          break;
        case 'medio-dia':
          endTime = new Date(currentTime.getTime() + 12 * 60 * 60 * 1000);
          break;
        case 'dia-completo':
          endTime = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);
          break;
        default:
          endTime = currentTime;
      }
  
      const formatDateTime = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      };
  
      const values = {
        userId: user.id,
        placeId: place.id,
        startTime: formatDateTime(currentTime),
        endTime: formatDateTime(endTime),
        totalCost: calculateTotalPrice(),
      };
  
      console.log('Objeto values:', values);
  
      try {
        const response = await axios.post('http://localhost:5000/reserveslist', values);
        console.log(response.data);
        Swal.fire({
          icon: 'success',
          title: 'Reserva correcta',
          showConfirmButton: false,
          timer: 1800,
        });
        navigate('/reserves');
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('No se ha seleccionado un lugar.');
    }
  };
  


  return (
    <div className="container" style={{ width: '50%', marginTop: '50px' }}>
      <div style={{ textAlign: 'center' }}>
          <h1>Confirmación de Reserva</h1>
          <div style={{ width: '100%', backgroundColor: '#F5B041', height: '5px', margin: 'auto', marginBottom: '20px' }}></div>
      </div>
      <form>
        <div className="mb-3" style={{ marginTop: '50px' }}>
          <label htmlFor="parkingOption" className="form-label">
            <h4>Parking</h4>
          </label>
          <select
            className="form-select"
            id="parkingOption"
            name="parkingOption"
            value={parkingOption}
            onChange={handleParkingChange}
          >
            <option value="san_martin">Parking San Martín</option>
            <option value="francia">Parking Francia</option>
            <option value="plaza_esp">Parking Plaza España</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="hoursOption" className="form-label">
            <h4>Seleccione la duración</h4>
          </label>
          <select
            className="form-select"
            id="hoursOption"
            name="hoursOption"
            value={hoursOption}
            onChange={handleHoursChange}
          >
            <option value="1">1 hora</option>
            <option value="turno">Turno (4 horas)</option>
            <option value="medio-dia">Medio día (12 horas)</option>
            <option value="dia-completo">Día completo(24 horas)</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="totalPrice" className="form-label">
            <h4>Precio Total</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="totalPrice"
            name="totalPrice"
            value={`$${calculateTotalPrice()}`} 
            readOnly
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            type="button"
            className="btn btn-warning text-white"
            onClick={() => handleConfirmReservation()}
          >
            Confirmar Reserva
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmationReserve;
