import PropTypes from 'prop-types';
import AddReadTime from "./AddReadTime";

const SideBar = ({blog}) => {
    return (
        <div className=" bg-slate-500">
            <AddReadTime blog={blog}></AddReadTime>
            <h2>my name</h2>
        </div>
    );
};
SideBar.propTypes = {
    blog : PropTypes.object.isRequired
}
export default SideBar;