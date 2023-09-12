import PropTypes from 'prop-types';
import AddReadTime from "./AddReadTime";
import BookMark from './BookMark';

const SideBar = ({sum, bookMark}) => {
    // console.log(blog)
    return (
        <div className=" ">
            <AddReadTime sum={sum}></AddReadTime>
            <BookMark 
            bookMark={bookMark}
            ></BookMark>
        </div>
    );
};
SideBar.propTypes = {
    sum : PropTypes.number.isRequired,
    bookMark : PropTypes.array.isRequired
}
export default SideBar;