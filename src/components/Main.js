import React from 'react'
import "../CSS/Main.css"
import greek from "../Assests/greek salad.jpg"
import lemon from "../Assests/lemon dessert.jpg"

import restFood from "../Assests/restauranfood.jpg"
export default function Main() {
  return (
    <div className='container'>

        <main>
            <div className='hero-section '>
            <div className='hero-section-text '>

        <h1>little lemon</h1>

        <h5>Chicago</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc</p>
        <button className='btn'>book a Table</button>
            </div>
            <div className='hero-section-img'>
                <img src={restFood}/>

            </div>
            </div>
            <div className='hero-cards-sec'>
                <div className='hero-cards-title'>
                    <h2>This Week Specials!</h2>
                    <button className=' btn2' >order online</button>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <img src={greek} />
                        <div className='card-text'>
                            <h3>Greek Salad</h3>
                            <span>$12.29</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <button className='btn3'>order now</button>
                    </div>
                    <div className='card'>
                        <img src={lemon} />
                        <div className='card-text'>
                            <h3>Lemon Dessert</h3>
                            <span>$12.29</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <button className='btn3'>order now</button>
                    </div>
                    <div className='card'>
                        <img src={restFood} />
                        <div className='card-text'>
                            <h3>tiramisu</h3>
                            <span>$12.29</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <button className='btn3'>order now</button>
                    </div>
                </div>
            </div>
        </main>
      
    </div>
  )
}
