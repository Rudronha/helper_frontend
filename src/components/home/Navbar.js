import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.model.css';
import sms from '../../image/icons-sms.png';
import img_user from '../../image/icons-user.png';
import logo from '../../image/icons8-logo-80.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo}/>
        </Link>
        <div className="navbar-search">
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <div className="navbar-icons">
          <div className="navbar-icon">
            <i className="fas fa-bell"><img src={sms}/></i>
          </div>
          <div className="navbar-icon">
            <i className="fas fa-user"><img src={img_user}/></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
