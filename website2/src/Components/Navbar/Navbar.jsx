import React from 'react'
import "./Navbar.css"
import {NavLink} from "react-router-dom"


const Navbar = () => {

  return (
    <div className='navbar'>
      <nav className='nav-info'>
        <div className='logo'>
            <img src="/Images/img.png" alt="logo" />
            <h2>IT'S TIME TO TRAVEL</h2>
            <ul className='list'>
                <li><NavLink to="/" className={({isActive})=>isActive? "active-link":"no-active"}>Home</NavLink></li>
                <li><NavLink to="/Support" className={({isActive})=>isActive? "active-link":"no-active"}>Support</NavLink></li>
                <li><NavLink to="/Blog" className={({isActive})=>isActive? "active-link":"no-active"}>Blog</NavLink></li>
                <li><NavLink to="/Services" className={({isActive})=>isActive? "active-link":"no-active"}>Services</NavLink></li>
                <li><NavLink to="/Contact" className={({isActive})=>isActive? "active-link":"no-active"}>Contact</NavLink></li>
                <li><NavLink to="/Account" className={({isActive})=>isActive? "active-link":"no-active"}>Account</NavLink></li>
                
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
