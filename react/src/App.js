import React from 'react';
import './App.css';
import {Route, Routes } from 'react-router-dom'

import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {Cards} from './components/Cards'
import {Carousel} from './components/Carousel'
import {Login} from './components/Login'

export const App = () => {
  return (
    <div  style={{backgroundColor: '#eeee'}}>
      
      <Navbar />
      
      <br /><br /><br /><br />
      <div style={{ textAlign: 'center' }}>
        <h2>¿Por qué elegirnos?</h2>
        <div style={{ width: '30%', backgroundColor: '#F5B041', height: '5px', margin: 'auto' }}></div>
      </div>
      <br /><br />
      <Carousel />
      <br /><br /><br /><br />
      <div style={{ textAlign: 'center' }}>
        <h2>Nuestros establecimientos</h2>
        <div style={{ width: '30%', backgroundColor: '#F5B041', height: '5px', margin: 'auto' }}></div>
      </div>

      <br /><br />
      <Cards />
      <br /><br /><br /><br />
  <Footer />
  <Routes>
    <Route exact path='/navbar' element={<Navbar />} />
    <Route exact path='/login' element={<Login />} />
  </Routes>

    </div>
  )
}

export default App;

