import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import SideBar from "../SideBar/SideBar";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('./Blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    const [sum, setSum] = useState(0)
    const [bookMark, setBookMark] = useState([])
    const sumAllTime = (time, id) => {
        const blogId = bookMark.filter(newArray => newArray.id !== id)
        setBookMark(blogId)
        const setTime = sum + time;
        setSum(setTime)
    } 
    const addBookmark = (blog) =>{
        const arr = [...bookMark, blog] 
        setBookMark(arr)
}
    return (
        <div className="md:flex md:gap-5">
            <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog key={blog.id}
                     blog={blog}
                     sumAllTime={sumAllTime}
                     addBookmark={addBookmark}
                     ></Blog>)
            }
            </div>
            <div className="md:w-1/3">
                <SideBar sum={sum}
                bookMark={bookMark}
                ></SideBar>
            </div>
            
        </div>
    );
};

export default Blogs;