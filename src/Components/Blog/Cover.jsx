import PropTypes from 'prop-types';
const Cover = ({blog}) => {
    return (
        <div className="">
            <img src={blog.cover} 
                className="mb-5 h-[300px] lg:h-[400px] w-full" alt=""/>
        </div>
    );
};
Cover.propTypes ={
    blog : PropTypes.object.isRequired
}
export default Cover;