import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';
const ReadTime = ({blog, sumAllTime}) => {
    const {reading_time_minutes: time} = blog
    // console.log(blog, reading_time_minutes)
    return (
        <div className="flex ">
            <p className="text-lg font-medium mr-1">{time} min read</p>
                <button onClick={()=>sumAllTime(time)}><FaBookmark /></button>
        </div>
    );
};
ReadTime.propTypes = {
    blog : PropTypes.object.isRequired,
    sumAllTime : PropTypes.func.isRequired
}
export default ReadTime;