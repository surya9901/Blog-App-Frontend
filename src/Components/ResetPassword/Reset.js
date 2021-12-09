import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Toastoptions from '../Toastoptions'
import { useParams } from 'react-router'
import env from '../settings'
import { toastfakeotp, toastmismatch, toastsuccess } from '../utils'

function Reset() {
    let navigate = useNavigate()
    const [otpDiv, setOtpDiv] = useState(true)
    const [pin, setPin] = useState("")
    const { id } = useParams()
    const [pinDisable, setPinDisable] = useState(false)
    const pinsubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${env.api}/verify-otp`, { email: id, PIN: pin })
            setPin("")
            setPinDisable(true)
            setOtpDiv(false)
        } catch (error) {
            console.log(error)
            toastfakeotp()
        }
    }
    const [passwordDisable, setPasswordDisable] = useState(false)
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const passwordChange = async (e) => {
        e.preventDefault()
        try {
            if (newPassword === confirmNewPassword) {
                await axios.post(`${env.api}/new-pass-word`, { email: id, password: newPassword })
                setPasswordDisable(true)
                toastsuccess()
                setNewPassword("")
                setConfirmNewPassword("")
                setTimeout(() => {
                    navigate("/Login")
                }, 3000);
            } else {
                toastmismatch()
            }
        } catch (error) {

        }
    }   

    return (
        <>
            <Toastoptions />
            <div className="container text-center col-lg-3" id="login_container">
                <div className="loginClose_button">
                    <Link to="/" className="badge rounded-pill bg-danger">X</Link>
                </div>
                <h4 className="mt-1 mb-3"><u>Reset Password</u></h4>
                <form onSubmit={otpDiv ? pinsubmit : passwordChange}>
                    {
                        otpDiv ?
                            <div className="form-floating mb-3">
                                <input type="alphanum" className="form-control" value={pin} onChange={(e) => setPin(e.target.value)} autoComplete="email" placeholder="name@example.com" required disabled={pinDisable} />
                                <label htmlFor="floatingInput">Enter OTP here</label>
                            </div> : <>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} autoComplete="new-password" placeholder="******" required disabled={passwordDisable} />
                                    <label htmlFor="floatingInput">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} autoComplete="new-password" placeholder="*****" required disabled={passwordDisable} />
                                    <label htmlFor="floatingInput">Confirm Password</label>
                                </div>
                            </>
                    }
                    <Link exact to="/Forgot">send OTP again</Link>
                    <div className="emailsubmit-button">
                        <button className="btn btn-success m-3" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Reset

