import React from 'react';
import Carousel from './Carousel';
import Cards from './Cards';


const Home = () => {
  return (
    <div className="home-content">
      <Carousel />
      <Cards />
    </div>
  );
};

export default Home;