import React from 'react';
import { useRouteError } from "react-router-dom";
import './Error.css';
import { Outlet, Link } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return (
    <div className="Error">
      <div className='mainError'>
          <div className='error-container'>
              <div className='error-title'>
                  Oops...
              </div>
              <div className='error-code'>
                  {error.status} - {error.statusText}
              </div>
              <div className='error-description'>
                  {error.data} - Click to return to <Link to={'/'} className="home-link">Home</Link>
              </div>
          </div>
      </div>  
    </div>
  );
}