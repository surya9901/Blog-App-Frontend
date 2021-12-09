import React, { useState, useEffect } from 'react'
import axios from 'axios'
import env from '../settings'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../loader'

export default function ViewBlog() {
    let { id } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        fetchdata()
    }, [])

    const [load, setLoad] = useState(true)
    const [disable, setDisable] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [userName, setuserName] = useState("")
    const fetchdata = async () => {
        window.location.pathname == `/view/${id}` ? setDisable(true) : setDisable(false)
        try {
            let data = await axios.get(`${env.api}/view-blog?q=${id}`)
            setTitle(data.data[0].title)
            setContent(data.data[0].content)
            getuserName(data.data[0].userid)
            setLoad(false)
        } catch (error) {
            console.log(error)
            setLoad(false)
        }
    }

    const getuserName = async (userid) => {

        try {
            let name = await axios.get(`${env.api}/userName?q=${userid}`)
            setuserName(name.data[0].firstName)
            setLoad(false)
        } catch (error) {
            console.log(error)
            setLoad(false)
        }
    }

    const handleback = () => {
        window.location.pathname == `/view/${id}` ? navigate("/posts") : navigate("/write-blog")
    }

    const handleEdit = () => {
        navigate(`/edit-blog/${id}`)
    }

    return (
        <div className="container mt-3">
            <form>
                <div className="row">
                    <div className="col col-lg-12">
                        <div className="head" style={{ "display": "flex", "justifyContent": "space-between", alignItems: "center" }}>
                            <h5 className="mb-4">Viewing Blog</h5>
                            <div class="head-buttons">
                                <button onClick={handleEdit} className="btn" disabled={disable}>Edit</button>
                                <button onClick={handleback} className="btn">Go Back</button>
                            </div>
                        </div>
                        {load ? <div className="text-center" style={{ "alignItems": "center" }}>
                            <Loader />
                        </div> :
                            <>
                                <div className="form mb-4">
                                    <h4>{title}</h4>
                                </div>
                                <div className="form mb-3">
                                    <textarea type="text" value={content} className="form-control" placeholder="abcd" style={{ "height": "390px", "resize": "none", "border": "none" }} disabled={true} />
                                </div>
                                <div className="mb-3" style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <p className="text-muted">Posted by {userName}</p>
                                </div>
                            </>}
                    </div>
                </div>
            </form>
        </div>
    )
}
