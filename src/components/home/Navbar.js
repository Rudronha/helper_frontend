import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.model.css';
import sms from '../../image/noti bell.png';
import fav from '../../image/half-star.png';
import menu from '../../image/app_1.png';
import logo from '../../image/logo_1.png';


const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img className="logo-img" src={logo} alt='logo'/>
        </Link>
        <div className="navbar-search">
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <div className="navbar-icons">
          <div className="navbar-icon">
            <i className="fas fa-bell"><img src={sms} alt='notification'/></i>
          </div>
          <div className="navbar-icon">
            <i className="fas fa-user"><img src={fav} alt='favroite'/></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
