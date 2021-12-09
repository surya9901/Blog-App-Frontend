import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const [showDropDown, setShowDropDown] = useState(false)

    const handleDropDown = () =>{
        setShowDropDown(!showDropDown)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" onClick={()=>setShowDropDown(false)} exact to="/">B Blog</Link>
                <div>
                    <button className="navbar-toggler" type="button" onClick={handleDropDown} data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${showDropDown? "show" : ""}`} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact to="/" onClick={handleDropDown} className="nav-link .active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/posts" onClick={handleDropDown} className="nav-link .active">Posts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/write-blog" onClick={handleDropDown} className="nav-link .active">Write a Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
