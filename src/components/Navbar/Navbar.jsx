import React from 'react'
import './Navbar.css'
import {Routes,Route,BrowserRouter,Link} from 'react-router-dom'
import Home from '../Home/Home'
import Search from '../Search/Search'
import MyRecipes from '../MyRecipes/MyRecipes'
import { CiForkAndKnife } from "react-icons/ci";

function Navbar() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/myrecipes" element={<MyRecipes />} />
    </Routes>
    <header className='navbar'>
        <div className='icon'><CiForkAndKnife size={35}/></div>
        <div className='links'>
        <div className='item'><Link  className='i' to='/' >Home</Link></div>
        <div className='item'><Link  className='i' to='/search' >Search</Link></div>
        <div className='item'><Link  className='i' to='/myrecipes' >My Recipes</Link></div>
        </div>
    </header>
    </BrowserRouter>
  );
}

export default Navbar;
