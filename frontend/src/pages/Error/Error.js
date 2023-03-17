import React from 'react';
import { useRouteError } from "react-router-dom";
import './Error.css';
import { Outlet, Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="Error">
      <div className='mainError'>
          <div className='error-container'>
              <div className='error-title'>
                  Oops...
              </div>
              <div className='error-code'>
                  404 - Not Found
              </div>
              <div className='error-description'>
                 Click to return to <Link to={'/'} className="home-link">Home</Link>
              </div>
          </div>
      </div>  
    </div>
  );
}