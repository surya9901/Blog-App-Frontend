import axios from 'axios'
import React, { useEffect, useState } from 'react'
import env from '../settings'
import { useNavigate } from 'react-router-dom'
import Loader from '../loader'

function Posts() {
    let navigate = useNavigate()

    useEffect(() => {
        fetchData()
    }, [])

    const [load, setLoad] = useState(true)

    const [BlogData, setBlogData] = useState([])
    const fetchData = async () => {
        try {
            let data = await axios.get(`${env.api}/blogs`)
            setBlogData([...data.data])
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleview = (id) => {
        navigate(`/view/${id}`)
        setLoad(false)
    }

    return (
        <div className="container mt-3">
            <div className="latest-blog">
                <h4 className="mb-3">Blog Posts:</h4>
                <div className="row">
                    {
                        load ? <div className="text-center" style={{ "alignItems": "center" }}>
                            <Loader />
                        </div> :
                            <>
                                {
                                    BlogData == "" ? <h4 className="text-center mt-5 text-muted">No Blogs Posted yet</h4> :
                                        BlogData.map(obj => {
                                            return (
                                                <div className="col col-md-6 col-lg-4 mb-3" >
                                                    <div className="card">
                                                        <h5 className="card-header">{obj.title}</h5>
                                                        <div className="card-body">
                                                            <p className="card-text" style={{ overflow: "hidden", height: "30px" }}>{obj.content}</p>
                                                            <div styel={{ display: "flex", justifyContent: "space-between" }}>
                                                                <button className="btn btn-primary" onClick={() => handleview(obj._id)}>View More</button>
                                                            </div>
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

export default Posts
