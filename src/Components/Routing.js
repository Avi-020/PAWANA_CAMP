import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import HomePage from './HomePage';
import Gallery from './Gallery';

function Routing() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
