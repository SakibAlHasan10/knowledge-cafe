import PropTypes from 'prop-types'

const AddReadTime = ({sum}) => {
    return (
        <div className="bg-slate-200 px-8 py-6 border-2 border-solid
        border-[#6047EC] rounded-md">
            <p className='text-[#6047EC] text-2xl font-bold text-center'>Spent time on read: {sum} min</p>
        </div>
    );
};
AddReadTime.propTypes ={
    sum : PropTypes.number.isRequired
}
export default AddReadTime;