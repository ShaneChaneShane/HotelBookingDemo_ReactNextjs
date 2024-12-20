import React from 'react';
import Navbar from '../components/Navbar';
import HotelList from '../components/HotelList';
require('dotenv').config();
const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
        <div className="flex-1 p-4">
          <HotelList />
        </div>
    </div>
  );
};

export default Home;
