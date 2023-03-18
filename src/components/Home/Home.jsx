import React from 'react'
import './Home.css'
import spoon from '../../assets/spoon.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <div className='title'>
        <div className='name'>
        <h1>Fridge</h1><h1 className='yellowtext'>Frenzy</h1>
        </div>
        <p className='desc'>With FridgeFrenzy, you'll never be stuck with the question "what's for dinner?" again! This recipe search app helps you whip up delicious meals using the ingredients you have on hand.</p>
        <Link className='button' to='/search'>Get Started</Link>
      </div>     
    </div>
  )
}

export default Home
