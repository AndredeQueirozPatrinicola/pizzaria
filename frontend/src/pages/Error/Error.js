import React from 'react';
import { useRouteError } from "react-router-dom";
import './Error.css';


export default function Error() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="Error">
      <div className='mainError'>
          erro
      </div>
    </div>
  );
}