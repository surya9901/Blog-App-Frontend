import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import env from '../settings'
import { toastmismatch, toasterror, toastsuccess, toastduplicateinfo } from '../utils'
import Toastoptions from '../Toastoptions'


function Register() {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [inputDisable, setInputDisable] = useState(false)
    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            if (password === confirmPassword) {
                let register = await axios.post(`${env.api}/register`, { firstName, lastName, email, password })
                if (register.status === 204) {
                    toastduplicateinfo()
                } else {
                    setFirstName("")
                    setLastName("")
                    setEmail("")
                    setPassword("")
                    setConfirmPassword("")
                    setInputDisable(true)
                    toastsuccess()
                    setTimeout(() => {
                        navigate("/Login")
                    }, 3000);
                }
            } else {
                toastmismatch()
            }
        } catch (error) {
            console.log(error)
            toasterror()
        }
    }

    return (
        <>
            <Toastoptions />
            <div className="container text-center col col-lg-6" id="register_container">
                <div className="registerClose_button">
                    <Link to="/" className="badge rounded-pill bg-danger">X</Link>
                </div>
                <h4 className="mt-1 mb-3"><u>Register:</u></h4>
                <form onSubmit={handleRegister}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} autoComplete="username" placeholder="john" required disabled={inputDisable} />
                                <label htmlFor="floatingInput">First Name</label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} autoComplete="username" placeholder="wick" required disabled={inputDisable} />
                                <label htmlFor="floatingInput">Last Name</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="new-email" placeholder="name@example.com" required disabled={inputDisable} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" placeholder="******" required disabled={inputDisable} />
                        <label htmlFor="floatingInput">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} autoComplete="new-password" placeholder="*****" required disabled={inputDisable} />
                        <label htmlFor="floatingInput">Confirm Password</label>
                    </div>
                    <Link to="/Login">Already a user? Click Here</Link><br />
                    <div className="text-center">
                        <button className="btn btn-success mt-3" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register
