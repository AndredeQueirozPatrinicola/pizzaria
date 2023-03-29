import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Outlet, Link } from "react-router-dom";
import logo from './logo.png';
import logo1 from './Untitled.png';

function Header() {
  return (
    <div className="Header">
      <div className='logo-header-container'>
        <img src={logo1}></img>
      </div>
      <div className='nav-header-container'>
        <ul>
          <li>
            <Link to={'/cardapio'}>
              Cardápio
            </Link>
          </li>
          <li>
            <Link to={'galeria'}>
              Galeria
            </Link>
          </li>
          <li>
            <Link to={'sobre-nos'}>
              Sobre nós
            </Link>
          </li>
        </ul>
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