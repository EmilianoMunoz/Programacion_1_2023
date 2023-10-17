import React from 'react'
import { Route, Routes, Navigate} from "react-router-dom";

import { Offers } from '../components/Offers';
import { UserList } from '../components/UserList';
import { ParkingForm } from '../components/ParkingForm'

export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path='/offers' element={<Offers />} />
        <Route path='/userList' element={<UserList />} />
        <Route path='/parkingform' element={<ParkingForm />} />
        <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}