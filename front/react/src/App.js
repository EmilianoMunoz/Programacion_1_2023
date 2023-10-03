import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';
import { UserContext } from './context/UserContext';

export const App = () => {
  const [user, setUser] = useState({
    role: '',
    logged: false,
  });

  return (
    <div style={{ backgroundColor: '#eeee', minHeight: '100vh', position: 'relative' }}>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Routes>
          {user.logged ? (
            <Route path="/*" element={<PrivateRoutes />} />
          ) : (
            <Route path="/*" element={<PublicRoutes />} />
          )}
        </Routes>
      </UserContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
