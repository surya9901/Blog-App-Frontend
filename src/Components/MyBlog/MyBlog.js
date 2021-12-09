import React, { useEffect, useState } from 'react'
import axios from 'axios'
import env from '../settings'
import { NavLink, useNavigate } from 'react-router-dom'
import Loader from '../loader'

function MyBlog() {
    let navigate = useNavigate()
    useEffect(() => {
        fetchData()
    }, [])

    const [BlogData, setBlogData] = useState([])
    const [load, setLoad] = useState(true)
    const fetchData = async () => {
        try {
            let data = await axios.get(`${env.api}/myblogs`, {
                headers: {
                    "Authorization": window.localStorage.getItem("app_token")
                }
            })
            setBlogData([...data.data])
            setLoad(false)
        } catch (error) {
            console.log(error)
            setLoad(false)
        }
    }

    const handleview = (id) => {
        navigate(`/myBlog/view/${id}`)
    }

    return (
        <div className="container mt-3">
            <div className="latest-blog">
                <div className="head mb-3" style={{ display: "flex", justifyContent: "space-between" }}>
                    <h4>My Blogs:</h4>
                    <NavLink to="/write-blog" className="btn"> Go Back</NavLink>
                </div>
                <div className="row">
                    {load ? <div className="text-center" style={{ "alignItems": "center" }}>
                        <Loader />
                    </div> :
                        <>
                            {
                                BlogData == "" ? <h4 className="text-center mt-5 text-muted">Empty, Add some Blogs!</h4> :
                                    BlogData.map(obj => {
                                        return (
                                            <div className="col col-md-6 col-lg-4 mb-3" >
                                                <div className="card">
                                                    <h5 className="card-header">{obj.title}</h5>
                                                    <div className="card-body">
                                                        <p className="card-text" style={{ overflow: "hidden", height: "30px" }}>{obj.content}</p>
                                                        <button className="btn btn-primary" onClick={() => handleview(obj._id)}>View More</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                            }
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default MyBlog
