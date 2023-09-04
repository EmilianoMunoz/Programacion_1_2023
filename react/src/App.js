import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register'

export const App = () => {
  return (
    <div style={{ backgroundColor: '#eeee', minHeight: '100vh', position: 'relative' }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer style={{ position: 'fixed', bottom: '0', width: '100%' }} />
    </div>
  );
};

export default App;
