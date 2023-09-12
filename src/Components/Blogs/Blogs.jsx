import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import SideBar from "../SideBar/SideBar";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('../../../public/Blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:flex">
            <div className="">
            {
                blogs.map(blog => <Blog key={blog.id}
                     blog={blog}></Blog>)
            }
            </div>
            <div className="">
                <SideBar></SideBar>
            </div>
            
        </div>
    );
};

export default Blogs;