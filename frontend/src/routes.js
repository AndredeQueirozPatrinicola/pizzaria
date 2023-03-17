import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Error from './pages/Error/Error';
import Header from './components/Header/Header';

export default function App() {
  return (
    <Routes>
      <Header/>
      <Route path="/" element={<Home />}></Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
  )
}