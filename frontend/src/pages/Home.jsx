import React, { useState } from 'react'
import axios from'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import"./Home.css"

const Home = () => {

  return (
      <div className='page'>
        <Navbar/>
        <div className='home'>
            <h2>Welcome to the Book Management System!</h2>
            <p>You can Store the Details About Books and Manage the Book data.</p>
              <button className='Button'> <Link to={"/books/Menu"}><ArrowForwardIcon/></Link></button>
              
        </div>
    </div>
  )
}

export default Home
