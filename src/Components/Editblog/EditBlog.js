import React, { useEffect, useState } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import env from '../settings'
import axios from 'axios'
import Loader from '../loader'
import { toasterror } from '../utils'
import Toastoptions from '../Toastoptions'

function EditBlog() {

    let navigate = useNavigate()

    useEffect(() => {
        fetchedit()
    }, [])

    let { id } = useParams()

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [load, setLoad] = useState(true)

    const fetchedit = async () => {
        if (window.localStorage.getItem("app_token")) {
            try {
                let data = await axios.get(`${env.api}/view-blog?q=${id}`, {
                    headers: {
                        "Authorization": window.localStorage.getItem("app_token")
                    }
                })
                setTitle(data.data[0].title)
                setContent(data.data[0].content)
                setLoad(false)
            } catch (error) {
                console.log(error)
            }
        } else {
            alert("need to login first")
        }
    }

    const editsave = async (e) => {
        e.preventDefault()
        try {
            setLoad(true)
            await axios.put(`${env.api}/edit-post/${id}`, { title, content }, {
                headers: {
                    "Authorization": window.localStorage.getItem("app_token")
                }
            })
            setLoad(false)
            setTitle("")
            setContent("")
            navigate("/MyPostedBlogs")
        } catch (error) {
            console.log(error)
            toasterror()
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        try {
            setLoad(true)
            await axios.delete(`${env.api}/delete-blog?q=${id}`, {
                headers: {
                    "Authorization": window.localStorage.getItem("app_token")
                }
            })
            setLoad(false)
            navigate("/MyPostedBlogs")
        } catch (error) {
            console.log(error)
            toasterror()
        }
    }

    return (
        <div className="container mt-3">
            <Toastoptions />
            {
                load ? <div className="text-center" style={{ "alignItems": "center" }}>
                    <Loader />
                </div> :
                    <>
                        {
                            window.localStorage.getItem("app_token") ?
                                <form onSubmit={editsave}>
                                    <div className="row">
                                        <div className="col col-lg-10">
                                            <h5 className="mb-3">Edit Blog</h5>
                                            <div className="form-floating mb-3">
                                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="floatingInput" placeholder="abcd" required />
                                                <label htmlFor="floatingInput">Title</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <textarea type="text" value={content} onChange={(e) => setContent(e.target.value)} className="form-control" id="floatingInput" placeholder="abcd" style={{ "height": "350px", "resize": "none" }} required />
                                                <label htmlFor="floatingInput">Content</label>
                                            </div>
                                            <div className="mb-3 text-center">
                                                <button type="submit" className="btn btn-success m-1">Save</button>
                                                <button type="button" onClick={() => navigate("/MyPostedBlogs")} className="btn btn-danger m-1" >Cancel</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="options">
                                                <h5>More Options:</h5>
                                                <ul className="navbar-nav">
                                                    <li className="nav-item">
                                                        <button onClick={handleDelete} className="nav-link btn">Delete blog</button>
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
                    </>
            }
        </div>
    )
}

export default EditBlog
