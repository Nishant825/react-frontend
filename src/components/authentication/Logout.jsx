import React from 'react'
import { redirect, useNavigate } from "react-router-dom";
import Login from './Login';
import { ToastContainer } from 'react-toastify';

export default function Logout() {

    localStorage.removeItem("user")
    return (
        <ToastContainer />
    )
}
