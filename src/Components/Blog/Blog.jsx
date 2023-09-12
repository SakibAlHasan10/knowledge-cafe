import PropTypes from 'prop-types';
import Author from "../Author/Author";
import Cover from "./Cover";
import Title from "./Title";
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';

const Blog = ({blog}) => {
    // console.log(blog)
    const [sum, setSum] = useState(0)
    const sumAllTime = (time) => {
        const setTime = sum + time;
        setSum(setTime)
    } 
    return (
        <div className="md:flex md:gap-5">
            <div className="md:w-2/3">
                <Cover blog={blog}></Cover>
                <Author blog={blog} sumAllTime={sumAllTime}></Author>
                <Title blog={blog}></Title>
            </div>
            <div className="md:w-1/3">
                <SideBar blog={blog}></SideBar>
            </div>
        </div>
    );
};
Blog.propTypes ={
    blog : PropTypes.object.isRequired
}
export default Blog;