import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt, faUserPlus, faTachometerAlt, faPaw } from '@fortawesome/free-solid-svg-icons';
import logo from '../components/images/logo.jpeg'; // Adjust the path as necessary
import './NavBar.css'; 

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">
          <img src={logo} alt="pet" className="logo-image" />
          <span className="logo-text">Paws And Home</span>
        </Link>
      </div>
      <ul className="navbar-links">
        <Link to="/aboutus">
          <li className='colo'>About</li>
        </Link>
        <Link to="/pets">
          <li className='colo'>Pets</li>
        </Link>
        <Link to="/getpets">
          <li className='colo'>
            <FontAwesomeIcon icon={faPaw} />Pet Pickup
          </li>
        </Link>
        <Link to="/PaymentForm">
          <li className='colo'>Payment
          </li>
        </Link>
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </Link>
        </li>
         
        <li className="account-dropdown">
          <FontAwesomeIcon icon={faUser} onClick={toggleDropdown} />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/" onClick={() => setDropdownOpen(false)}>
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Link>
              <Link to="/sign" onClick={() => setDropdownOpen(false)}>
                <FontAwesomeIcon icon={faUserPlus} /> Sign Up
              </Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
