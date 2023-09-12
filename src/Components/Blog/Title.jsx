import MarkRead from "./MarkRead";

const Title = ({blog}) => {
    return (
        <div>
            <h2 className=" text-4xl font-bold">{blog.other}</h2>
            <p className=" text-xl font-medium text-[#11111199] my-4">{blog.hashtag}</p>
            <MarkRead blog={blog}></MarkRead>
        </div>
    );
};

export default Title;