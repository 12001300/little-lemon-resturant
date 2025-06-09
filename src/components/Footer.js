import React from 'react'
import logo from "../Assests/Asset 18@4x.png"
export default function Footer() {
  return (
    <footer>
      <img src={logo}/>
      <div>
        <ul>
            <li>Doormat</li>
            <li>Navigation</li>
            <li>About</li>
            <li>Home</li>
            <li>Menu</li>
            <li>Order online</li>
            <li>Login</li>
        </ul>
      </div>
      <div>
        <ul>
            <li>Contact Us</li>
            <li>Address</li>
            <li>Phone number</li>
            <li>email</li>
            
        </ul>
      </div>
      <div>
        <ul>
            <li>Social media links</li>
            <li>Address</li>
            <li>Phone number</li>
            <li>email</li>

        </ul>
      </div>
    </footer>
  )
}
