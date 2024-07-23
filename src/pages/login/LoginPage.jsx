import React from "react"
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'

const Login = () => {
    const navigate = useNavigate()

    const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/')
    }
    
    return (
        <div className="login-container">
            <div className="login-image">
                <img src="./public/image 7.png" alt="Login" />
            </div>
            <div className="login-form">
                <div className="header">
                    <ul className="logo">
                        <li><img src="./public/chevalier logo 2.png" alt="Chevalier Logo" width={'50px'} /></li>
                        <li><img src="./public/cheva logo 2.png" alt="Chevalier Lab" width={'129px'} height={'50px'}/></li>
                    </ul>
                    <h1>Welcome!</h1>
                    <p>Enter your username and password to access your account</p>
                </div>
                <form>
                    <div className="from-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username"/>
                    </div>
                    <div className="from-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"/>
                    </div>
                    <div className="form-group remember-me">
                        <input type="checkbox" id="remember-me"/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="login-button" onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login