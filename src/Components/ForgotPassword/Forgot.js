import React, { useState } from 'react'
import Toastoptions from '../Toastoptions'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import env from '../settings'
import {toastnoemail, toastsuccess } from '../utils'

function Forgot() {
    let navigate = useNavigate()
    const [forgotEmail, setForgotEmail] = useState("")
    const [disable, setDisable] = useState(false)
    const [notification, setNotification] = useState(false)
    const forgotSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${env.api}/forgot-password-email?q=${forgotEmail}`)
            setNotification(true)
            setForgotEmail("")
            setDisable(true)
            toastsuccess()
            setTimeout(() => {
                navigate(`/Forgot/${forgotEmail}`)
            }, 3000);
        } catch (error) {
            console.log(error)
            toastnoemail()
        }
    }
    return (
        <>
            <Toastoptions />
            <div className="container text-center col-lg-3" id="login_container">
                <div className="loginClose_button">
                    <Link to="/" className="badge rounded-pill bg-danger">X</Link>
                </div>
                {
                    notification? <h6><i class="fas fa-check-circle"></i> OTP sent to mail!</h6> : ""
                }
                <h4 className="mt-1 mb-3"><u>Forgot Password:</u></h4>
                <form onSubmit={forgotSubmit}>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} autoComplete="email" placeholder="name@example.com" required disabled={disable} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="emailsubmit-button">
                        <button className="btn btn-success m-3" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Forgot
