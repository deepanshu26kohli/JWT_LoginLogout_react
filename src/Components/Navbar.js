import React from 'react'
import { Link, Outlet } from "react-router-dom";
import Authuser from './Authuser'
const Navbar = () => {
        const {token , logout} = Authuser()
        const logoutUser = ()=>{
          if (token != undefined){
              logout()
          }
        }
       
  return (
    
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary container ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <span className="nav-link" to="/login" style={{cursor:"pointer"}} onClick={logoutUser}>Logout</span>
        </li>
        
      </ul>
       
    </div>
  </div>
</nav>
<Outlet/>
    </>
  )
}

export default Navbar
