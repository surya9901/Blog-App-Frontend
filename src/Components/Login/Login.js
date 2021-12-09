import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { toastwrongentry } from '../utils'
import Toastoptions from '../Toastoptions'
import env from '../settings'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showForgot, setShowForgot] = useState(false)
    let handleLogin = async (e) => {
        e.preventDefault()
        try {
            let login = await axios.post(`${env.api}/login`, { email, password })
            window.localStorage.setItem("app_token", login.data.token)
            navigate("/write-blog")
        } catch (error) {
            console.error()
            setShowForgot(true)
            toastwrongentry()
        }
    }
    return (
        <>
            <Toastoptions />
            <div className="container text-center col-lg-3" id="login_container">
                <div className="loginClose_button">
                    <Link to="/" className="badge rounded-pill bg-danger">X</Link>
                </div>
                <h4 className="mt-1 mb-3"><u>Login:</u></h4>
                <form onSubmit={handleLogin}>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Password</label>
                    </div>
                    <Link to="/Register">Not a user? Click Here</Link>
                    {
                        showForgot ?
                            <div className="mt-1">
                                <Link to="/forgot">Forgot Password?</Link>
                            </div> : ""
                    }
                    <div className="login-button">
                        <button className="btn btn-success m-3" type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
