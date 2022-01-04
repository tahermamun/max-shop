import React from 'react';
import './valueInput.scss'

const ValueInput = ({label, ...rest }) => {
    return (
        <>
            <div className="value_input_div">
                <label className="label_for_input">{label}</label>
                <input {...rest} />
            </div>
        </>
    );
};

export default ValueInput;