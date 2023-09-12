import PropTypes from 'prop-types';
import Author from "../Author/Author";
import Cover from "./Cover";
import Title from "./Title";

const Blog = ({blog, sumAllTime, addBookmark}) => {
    return (
        <div className="">
            <div >
                <Cover blog={blog}></Cover>
                <Author blog={blog} addBookmark={addBookmark}></Author>
                <Title blog={blog}
                sumAllTime={sumAllTime}
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