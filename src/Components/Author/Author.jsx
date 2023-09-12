import PropTypes from 'prop-types';
import ReadTime from "./ReadTime";

const Author = ({blog, sumAllTime}) => {
    // console.log(blog)
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center my-5 gap-4">
                <img src={blog.other_img}
                className=" w-16 h-16 rounded-full"
                alt="" />
                <div>
                    <h3 className=" text-xl md:text-2xl font-bold">{blog.author}</h3>
                    <p className="text-[#11111199] text-md font-semibold">{blog.posted_date}</p>
                </div>
            </div>
            <div>
                <ReadTime blog={blog} sumAllTime={sumAllTime}></ReadTime>
            </div>
        </div>
    );
};
Author.propTypes ={
    blog : PropTypes.object.isRequired,
    sumAllTime : PropTypes.func.isRequired
}
export default Author;