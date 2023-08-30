import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';

export const App = () => {
  return (
    <div style={{ backgroundColor: '#eeee' }}>
      <Navbar />
      <Home />
      <Footer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;