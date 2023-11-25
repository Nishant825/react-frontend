import React from 'react'
import './Navbar.css'


export default function Nvabar() {
  return (
    <header>
        <a href="#" className='logo'>Daydream Library</a>
        <nav className='navbar'>
            <a href="" className='active'>Home</a>
            <a href="">BorrowIssued</a>
            <a href="">BorrowHistory</a>
            <a href="">Login</a>
            <a href="">Signup</a>
        </nav>
    </header>
  )
}
