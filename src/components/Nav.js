import React from 'react'
import "../CSS/Nav.css"
import logo from "../Assests/Asset 20@4x.png"
export default function Nav() {
  return (
    <div className='container'>
    <nav>
            <img src={logo} />
        <ul className='nav-links'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Menu</a></li>
            <li><a href='#'>Reservation</a></li>
            <li><a href='#'>Order online</a></li>
            <li><a href='#'>Login</a></li>
        </ul>
    </nav>
    </div>
  )
}
