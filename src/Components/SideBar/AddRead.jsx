import PropTypes  from "prop-types";
import Display from "./Display";

const AddRead = ({bookMark}) => {
    console.log('hello',bookMark)
    // const mark = bookMark.map(newBlog => newBlog)
    // console.log(mark)
    return (
        <div className=" text-lg font-semibold">
            {
                bookMark.map((newBlog, idx) =>  <Display key={idx} newBlog={newBlog}></Display>)
            }
        </div>
    );
};
AddRead.propTypes = {
    bookMark : PropTypes.array.isRequired
}
export default AddRead;