import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='list'>
        <li className='items'><Link to="/">Home</Link></li>
        <li className='items'><Link to="/books/Menu">Menu</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
