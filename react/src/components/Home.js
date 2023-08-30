import React from 'react';
import { Carousel } from './components/Carousel';
import { Cards } from './components/Cards';

const Home = () => {
  return (
    <div className="home-content">
      <Carousel />
      <Cards />
    </div>
  );
};

export default Home;