import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';
const ReadTime = ({blog, addBookmark}) => {
    const {reading_time_minutes: time} = blog
    // console.log(blog)
    return (
        <div className="flex ">
            <p className="text-lg font-medium mr-1">{time} min read</p>
                <button onClick={()=>addBookmark(blog)}><FaBookmark /></button>
        </div>
    );
};
ReadTime.propTypes = {
    blog : PropTypes.object.isRequired,
    addBookmark : PropTypes.func.isRequired
}
export default ReadTime;