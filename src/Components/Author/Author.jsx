import ReadTime from "./ReadTime";

const Author = ({blog}) => {
    // console.log(blog)
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center my-5 gap-4">
                <img src={blog.other_img}
                className=" w-16 h-16 rounded-full"
                alt="" />
                <div>
                    <h3 className="text-2xl font-bold">{blog.author}</h3>
                    <p className="text-[#11111199] text-md font-semibold">{blog.posted_date}</p>
                </div>
            </div>
            <div>
                <ReadTime blog={blog}></ReadTime>
            </div>
        </div>
    );
};

export default Author;