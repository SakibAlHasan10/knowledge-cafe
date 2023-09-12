import Author from "../Author/Author";
import Cover from "./Cover";
import Title from "./Title";

const Blog = ({blog}) => {
    console.log(blog)
    return (
        <div>
            <div>
                <Cover blog={blog}></Cover>
                <Author blog={blog}></Author>
                <Title blog={blog}></Title>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Blog;