import React, { useState } from 'react';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCartContext } from '../../context/CartProvider';



export default function Navbar() {
  const navigate = useNavigate();
  const { cartCount } = useCartContext();

  const handleLogout = (e) => {
    e.preventDefault();
    let user = localStorage.getItem('user');
    if (user) {
      localStorage.removeItem('user');
      toast.success('Logout successfully.');
      navigate('/login');
    }
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <header>
        <a href="#" className="logo">
          Daydream Library
        </a>
        <nav className="navbar">
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/borrowIssued">
            Borrow Issued
          </NavLink>
          <NavLink to="/borrowHistory">
            Borrow History
          </NavLink>
          <NavLink to="/login">
            Login
          </NavLink>
          <NavLink to="/signup">
            Signup
          </NavLink>
          <NavLink to='/logout' onClick={handleLogout}>
            Logout
          </NavLink>
          <span id='cart-btn'>
            <i className='bx bx-cart'></i>
            <span>{cartCount}</span>

          </span>

        </nav>

      </header>
    </>
  );
}
