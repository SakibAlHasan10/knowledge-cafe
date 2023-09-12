import PropTypes from 'prop-types';
import Author from "../Author/Author";
import Cover from "./Cover";
import Title from "./Title";

const Blog = ({blog, sumAllTime, addBookmark}) => {
    return (
        <div className="">
            <div >
                <Cover blog={blog}></Cover>
                <Author blog={blog} sumAllTime={sumAllTime}></Author>
                <Title blog={blog}
                addBookmark={addBookmark}
                ></Title>
            </div>
            
        </div>
    );
};
Blog.propTypes ={
    blog : PropTypes.object.isRequired,
    sumAllTime : PropTypes.func.isRequired,
    addBookmark : PropTypes.func.isRequired
}
export default Blog;