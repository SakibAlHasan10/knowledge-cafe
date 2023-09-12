import PropTypes from 'prop-types';
const MarkRead = ({blog, sumAllTime}) => {
    const {reading_time_minutes:time, id} = blog
    // console.log("proptype",blog)
    return (
        <div>
            <button onClick={()=>sumAllTime(time, id)} className=" text-blue-700 underline mb-12">Mark as read</button>
        </div>
    );
};
MarkRead.propTypes ={
    blog : PropTypes.object.isRequired,
    sumAllTime : PropTypes.func.isRequired,
}
export default MarkRead;