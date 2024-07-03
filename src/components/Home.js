import React from 'react';
import Navbar from './home/Navbar';
import './Home.css';
import backgroundImage from '../image/joe-woods.jpg';
import Products from './home/Products';
import Sidebar from './home/Sidebar';

function Home(){
    return (
        <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <Navbar/>
          <Sidebar/>
          <Products/>
        </div>
    );
}
export default Home;
