import React from 'react'
import "../CSS/Footer.css"
import logo from "../Assests/Asset 18@4x.png"
export default function Footer() {
  return (
    <div>

    <footer className='container'>
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
            <li className='spical'>Contact Us</li>
            <li>Address</li>
            <li>Phone number</li>
            <li>email</li>

        </ul>
      </div>
      <div>
        <ul>
            <li className='spical'>Social media links</li>
            <li>Address</li>
            <li>Phone number</li>
            <li>email</li>

        </ul>
      </div>
    </footer>
    </div>
  )
}
