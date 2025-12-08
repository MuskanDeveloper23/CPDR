import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import Logo from '../../assets/web-logo.PNG'
import Menu from '../../assets/menu.PNG'
import Cross from '../../assets/cross.PNG'
const Navbar = () => {
 const [open, setOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  return (

    
<div className={`navbar ${showSearch ? "search-open" : ""}`}>

      <div className='logo'>
        <img src={Logo} />
      </div>

      <ul className={open ? 'nav-links active' : 'nav-links'}>
        <li><Link to="/">Home</Link></li>
        <li> <Link to="/about">About</Link></li>
        <li><Link to="/report">Reports</Link></li>
        <li><Link to="/magzin">Magzins</Link></li>
        <li><Link to="/event">Evants</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

{/* Search Bar */}
      <div className={`search-bar ${showSearch ? "expand" : ""}`}>
        <input type="text" placeholder="Search..." />
       <i  className="fa-solid fa-magnifying-glass" onClick={() => setShowSearch(!showSearch)}></i>
      </div>

      
      {/* Hamburgur icon */}
      <div className='hamburger' onClick={() => {
    const img = document.querySelector('.hamburger img');
    img.style.opacity = 0;         // fade out

    setTimeout(() => {
      setOpen(!open);             // icon change
      img.style.opacity = 1;       // fade in
    }, 150);
  }}
>
        <img src={open ? Cross : Menu} alt=''/>
      </div>
    </div>
  
  )
}

export default Navbar