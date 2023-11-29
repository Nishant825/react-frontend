import React, { useState } from 'react'
import './Auth.css'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


export default function Signup() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        console.log(formData.first_name, "-------------")
        try {
            var response = await fetch('http://127.0.0.1:8000/accounts/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ formData }),
            });
            var response = await response.json();
            if (response.status) {
                localStorage.setItem("user", response.user);
                toast.success("signup successfull")
                navigate('/login')
            } else {
                navigate('/signup')
                toast.error('credential error')
            }
        } catch (error) {
            console.log('Error during login:', error);
        }
        setFormData({
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <div className="auth-container">
            <div className="registration form">
                <h2 className='form-head'>Signup</h2>
                <form action="" method="post" onSubmit={handleSubmit}>
                    <input name="first_name" type="text" placeholder="First Name" value={formData.first_name} onChange={handleChange} autoComplete="true" required />
                    <input name="last_name" type="text" placeholder="Last Name" value={formData.last_name} onChange={handleChange} autoComplete="true" required />
                    <input name="username" type="text" placeholder="Username" value={formData.username} onChange={handleChange} autoComplete="true" required />
                    <input name="email" type="text" placeholder="Email" value={formData.email} onChange={handleChange} autoComplete="true" required />
                    <input name="password" type="password" placeholder="Create a password" value={formData.password} onChange={handleChange} autoComplete="true" required />
                    <input name="" type="submit" className="button" value="Signup" />
                </form>
                <div className="signup">
                    <span className="signup">Already have an account?&nbsp;
                        <Link to='/login'>Login</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
