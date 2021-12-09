import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import env from '../settings'
import Toastoptions from '../Toastoptions'
import {toasterror, toastsuccess} from '../utils'


function PostBlog() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (window.localStorage.getItem("app_token")) {
            try {
                await axios.post(`${env.api}/post-blog`, { title, content }, {
                    headers: {
                        "Authorization": window.localStorage.getItem("app_token")
                    }
                })
                setTitle("")
                setContent("")
                toastsuccess()
            } catch (error) {
                console.log(error)
                toasterror()
            }
        } else {
            alert("need to login first")
        }
    }

    const handleClear = () => {
        setTitle("")
        setContent("")
    }

    const logout = () => {
        window.localStorage.removeItem("app_token")
    }

    return (
        <div className="container mt-3">
            <Toastoptions/>
            {
                window.localStorage.getItem("app_token") ?
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col col-lg-10">
                                <h5 className="mb-3">Post a Blog</h5>
                                <div className="form-floating mb-3">
                                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="floatingInput" placeholder="abcd" required />
                                    <label htmlFor="floatingInput">Title</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea type="text" value={content} onChange={(e) => setContent(e.target.value)} className="form-control" id="floatingInput" placeholder="abcd" style={{ "height": "300px", "resize": "none" }} required />
                                    <label htmlFor="floatingInput">Content</label>
                                </div>
                                <div className="mb-3 text-center">
                                    <button type="submit" className="btn btn-success m-1">Submit</button>
                                    <button type="button" className="btn btn-danger m-1" onClick={handleClear}>Clear</button>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="options">
                                    <h5>More Options:</h5>
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <NavLink exact to="/MyPostedBlogs" className="nav-link .active">My Blogs </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/" className="nav-link .active" onClick={logout}>Logout</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form> :
                    <div className="container text-center mt-5">
                        <h4>You need to Login First</h4>
                        <NavLink to="/login" className="btn btn-success">Login</NavLink>
                    </div>
            }
        </div>
    )
}

export default PostBlog
