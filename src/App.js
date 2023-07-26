import React from 'react'
import Form from './Components/Form'

import { BrowserRouter, Routes, Route , Router } from "react-router-dom";

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import NoPage from './Components/NoPage';
import Authuser from './Components/Authuser';
import Guest from './Components/Guest';
import Dashboard from './Components/Dashboard';
const App = () => {
  const { getToken } = Authuser()
   if(!getToken()){
    return <Guest/>
   }
  return (

    <>
  
  
     
      <Navbar/>
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Form />} />
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route path="*" element={<NoPage />} />
        </Routes>
        
    

    </>
  )
}

export default App
