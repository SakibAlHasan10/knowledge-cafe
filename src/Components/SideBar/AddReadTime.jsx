import PropTypes from 'prop-types';
import { useState } from "react";

const AddReadTime = ({blog}) => {
    const [sum, setSum] = useState(0)
    const AddReadTime = () =>{
        
    }
    return (
        <div className="">
            <p>Spent time on read : {} min</p>
        </div>
    );
};
AddReadTime.propTypes ={
    blog : PropTypes.object.isRequired
}
export default AddReadTime;