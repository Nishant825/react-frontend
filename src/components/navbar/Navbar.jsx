import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCartContext } from '../../context/CartProvider';



export default function Navbar() {
  const navigate = useNavigate();
  const { cartCount } = useCartContext();
  const [isAuth, setAuth] = useState(false);
  const goCart = () => {
    navigate('/cart')
  }

  useEffect(() => {
    console.log("useeffect called")
    let user = localStorage.getItem('user')
    if (user != null) {
      setAuth(true)
    }
  })

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
        <nav className="lib-navbar">
          <div>
            <NavLink to="/">
              Home
            </NavLink>
            <NavLink to="/about">
              About

            </NavLink>
            <NavLink to="/contact">
              Contact
            </NavLink>
            {!isAuth ?
              (<>
                <NavLink to="/login">
                  Login
                </NavLink>
                <NavLink to="/signup">
                  Signup
                </NavLink>
              </>
              ) :
              (<NavLink to='/logout' onClick={handleLogout}>
                Logout
              </NavLink>)
            }
            <NavLink to='/cart' className='cart-link'>
              <i className='bx bx-cart'></i>
              {cartCount > 0 && <span className='badge'>{cartCount}</span>}
            </NavLink>
          </div>

          {/* <span id="cart-box" onClick={goCart}><i className='bx bx-cart'>{cartCount}</i></span> */}
          <div>
            <img id='profile-pic' src="https://plus.unsplash.com/premium_photo-1677231559666-53bed9be43ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hii" />

          </div>
        </nav>


      </header>
    </>
  );
}
