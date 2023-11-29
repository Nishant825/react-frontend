import React, { useState } from 'react'
import './Auth.css'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {
        if (username == '' || password == '') {
            toast.error("credentials not entered")
            return;
        }

        try {
            var response = await fetch('http://127.0.0.1:8000/accounts/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            var response = await response.json();
            if (response.status) {
                localStorage.setItem("user", response.user);
                toast.success("login successfull")
                navigate('/')
            } else {
                navigate('/login')
                toast.error('credential error')
            }
        } catch (error) {
            console.log('Error during login:', error);
        }
    };

    return (
        <>
            <div className="auth-container">
                <div className="login form">
                    <h2 className='form-head'>Login</h2>
                    <form action="" method="post">
                        <input className="user-input" value={username} onChange={(e) => setUsername(e.target.value)} name="username" type="text" placeholder="Username" autoComplete='username' />
                        <input className="user-input" value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="Enter your password" autoComplete="current-password" />
                        <div className="g-recaptcha" data-sitekey="6Le1otMoAAAAACcDx3obXi-ZBhLfReyXZh_e-iDY" required></div>
                        <a href="#">Forgot password?</a>
                        <input type="button" onClick={handleLogin} className="button" value="Login" />
                    </form>
                    <div className="signup">
                        <span className="signup">Don't have an account?&nbsp;
                            <Link to='/signup'>Signup</Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;