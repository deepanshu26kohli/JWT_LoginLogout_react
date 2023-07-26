import React from 'react'
import Form from './Form'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';

import NoPage from './NoPage';
import GuestNavbar from './GuestNavbar';
const Guest = () => {
  return (
    <>
      
      <GuestNavbar/>
     
     
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Form />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
        
      
    </>
  )
}

export default Guest
