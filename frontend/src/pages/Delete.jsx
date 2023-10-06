import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import "./Delete.css"
const Delete = () => {
  return (
    <div className='page'>
        <Navbar/>
        <div className='delete'>
        <h1 className='text'>Deleted</h1>
        <Link to={'/'}>
            <button>
                Back to Home
            </button>
        </Link>
        </div>
    </div>
  )
}

export default Delete
