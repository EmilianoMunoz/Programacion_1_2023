import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import { Offers } from '../components/Offers';
import { UserList } from '../components/UserList';
import { ParkingForm } from '../components/ParkingForm';
import Home from '../components/Home'; // Importa tu componente Home aquí


export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home />} /> {/* Ruta para el componente Home */}
        <Route path='/offers' element={<Offers />} />
        <Route path='/userlist' element={<UserList />} />
        <Route path='/parkingform' element={<ParkingForm />} />
        <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}
