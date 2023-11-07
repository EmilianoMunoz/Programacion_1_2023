import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import { Offers } from '../components/Offers';
import { UserList } from '../components/UserList';
import { ParkingForm } from '../components/ParkingForm';
import Home from '../components/Home'; 
import Dashboard from '../components/Dashboard';
import Reserves from '../components/Reserves';
import UserEdit from '../components/UserEdit';
import ConfirmationReserve from '../components/ConfirmationReserve';
import ReserveList from '../components/ReserveList';


export const PrivateRoutes = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home />} /> 
        <Route path='/offers' element={<Offers />} />
        <Route path='/userlist' element={<UserList />} />
        <Route path='/useredit/:id' element={<UserEdit />} />
        <Route path='/parkingform' element={<ParkingForm />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/reserves' element={<Reserves />} />
        <Route path='/reserveList' element={<ReserveList />} />
        <Route path='/ConfirmationReserve' element={<ConfirmationReserve />} />
        <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}
