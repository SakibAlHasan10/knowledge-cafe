import PropTypes from 'prop-types';

const Display = ({newBlog}) => {
    const {other} = newBlog
    return (
        <div >
            <h2 className=' bg-white mb-4 p-4 rounded-lg'>{other}</h2>
        </div>
    );
};
Display.propTypes = {
  newBlog : PropTypes.object.isRequired
}
export default Display;