import PropTypes from 'prop-types';
import AddRead from './AddRead';
const BookMark = ({bookMark}) => {
    // console.log(bookMark.length)
    return (
        <div className="mt-5 border-2 border-solid border-[#6047EC]
         bg-slate-200 py-5 px-5">
            <h2 className=" text-2xl font-bold pb-3" >Bookmarked Blogs:{bookMark.length}</h2>
           <AddRead bookMark={bookMark}></AddRead>
        </div>
    );
};
BookMark.propTypes={
    bookMark : PropTypes.array.isRequired
}
export default BookMark;