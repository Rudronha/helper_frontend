import React from 'react';
import Navbar from './home/Navbar';
import './Home.css';
import backgroundImage from '../image/joe-woods.jpg';
import Products from './home/Products';

function Home(){
    return (
      <div>
        <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <Navbar/>
          <Products/>
        </div>
      </div>
    );
}
export default Home;
