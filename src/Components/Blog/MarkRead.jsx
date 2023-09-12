import PropTypes from 'prop-types';
const MarkRead = ({blog, addBookmark}) => {
    // console.log("proptype",blog)
    return (
        <div>
            <button onClick={()=>addBookmark(blog)} className=" text-blue-700 underline mb-12">Mark as read</button>
        </div>
    );
};
MarkRead.propTypes ={
    blog : PropTypes.object.isRequired,
    addBookmark : PropTypes.func.isRequired,
}
export default MarkRead;