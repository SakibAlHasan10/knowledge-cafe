import PropTypes from 'prop-types';
import AddReadTime from "./AddReadTime";

const SideBar = ({blog}) => {
    // console.log(blog)
    return (
        <div className=" ">
            <AddReadTime blog={blog}></AddReadTime>
        </div>
    );
};
SideBar.propTypes = {
    blog : PropTypes.object.isRequired
}
export default SideBar;