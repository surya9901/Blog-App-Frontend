import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './Components/Homepage/Home';
import Posts from './Components/Posts/Posts';
import PostBlog from './Components/WriteBlog/PostBlog';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register'
import Reset from './Components/ResetPassword/Reset';
import Forgot from './Components/ForgotPassword/Forgot'
import MyBlog from './Components/MyBlog/MyBlog';
import ViewBlog from './Components/ViewBlog/ViewBlog';
import EditBlog from './Components/Editblog/EditBlog';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/write-blog" element={<PostBlog />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route exact path="/MyPostedBlogs" element={<MyBlog />} />
        <Route exact path="/forgot/:id" element={<Reset />} />
        <Route exact path="/view/:id" element={<ViewBlog />} />
        <Route exact path="/myBlog/view/:id" element={<ViewBlog />} />
        <Route exact path="/edit-blog/:id" element={<EditBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
