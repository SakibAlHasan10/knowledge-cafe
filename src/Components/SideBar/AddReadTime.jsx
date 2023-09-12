import PropTypes from 'prop-types';

const AddReadTime = () => {
    
    return (
        <div className="bg-slate-200 px-8 py-6 border-2 border-solid
        border-[#6047EC] rounded-md">
            <p className='text-[#6047EC] text-2xl font-bold'>Spent time on read : min</p>
        </div>
    );
};
AddReadTime.propTypes ={
    blog : PropTypes.object.isRequired
}
export default AddReadTime;