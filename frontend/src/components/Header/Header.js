import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div className='logo-header-container'>

      </div>
      <div className='nav-header-container'>

      </div>
      <div className='login-header-container'>
        <div>
          <Link to={'/login'} className="home-link">
            <FontAwesomeIcon icon={faRightToBracket} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;