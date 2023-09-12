import PropTypes from 'prop-types';
import MarkRead from "./MarkRead";


const Title = ({blog, sumAllTime}) => {
    return (
        <div>
            <h2 className=" text-3xl lg:text-4xl font-bold">{blog.other}</h2>
            <p className=" text-xl font-medium text-[#11111199] my-4">{blog.hashtag}</p>
            <MarkRead blog={blog}
            sumAllTime={sumAllTime}
            ></MarkRead>
        </div>
    );
};
Title.propTypes = {
    blog : PropTypes.object.isRequired,
    sumAllTime : PropTypes.func.isRequired
}
export default Title;