import React from 'react';
import {  createBrowserRouter,RouterProvider } from "react-router-dom";

import Error from './src/pages/Error/Error';
import Home from './src/pages/Home/Home';
import App from './src/App';


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error/>
    },
    {
      path: "home/",
      element: <Home />,
    },
  ]);
  