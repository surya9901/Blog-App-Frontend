import React from 'react'
import { NavLink } from 'react-router-dom'
import image from './home.jfif'


function Home() {
    return (
        <>
            <div className="container mt-5">
                <h4 className="text-center mt-5 mb-5">
                    Hi there, Welcome to the B Blog!
                </h4>
                <div className="hompage-image text-center mt-5">
                    <img src={image} alt="blog" style={{ "maxWidth": "100%", "maxHeight": "100%" }} />
                </div>
                <div className="login-register text-center mt-5">
                    <NavLink to={!window.localStorage.getItem("app_token") ? '/login' : "/write-blog"}><button className="btn">Login</button></NavLink>
                    <NavLink to="/register"><button className="btn">Register</button></NavLink>
                </div>
            </div>
            <footer style={{ "position": "absolute", "bottom": "0", "backgroundColor": "grey", "width": "100%", "height": "40px" }}>
                <h6 className="text-center mt-2">©B BLOG</h6>
            </footer>
        </>
    )
}

export default Home
