import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Error from './pages/Error/Error';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';

export default function App() {
  return (
    <BrowserRouter>
      <SideBar/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}