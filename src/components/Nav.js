import React from 'react'
import logo from "../Assests/Asset 20@4x.png"
export default function Nav() {
  return (
    <nav>
            <img src={logo} />
        <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservation</a></li>
            <li><a>Order online</a></li>
            <li><a>Login</a></li>
        </ul>
    </nav>
  )
}
