import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


export default function Nvabar() {
  return (
    <header>
        <a href="#" className='logo'>Daydream Library</a>
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to=''>BorrowIssued</Link>
            <Link to=''>BorrowHistory</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </nav>
    </header>
  )
}
