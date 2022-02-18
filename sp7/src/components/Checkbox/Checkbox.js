import React from 'react';


const Checkbox = ({ label, name, value, onChange, checked }) => {

    return (
        <div>
            <input type="checkbox" id={name} name={name} checked={checked} value={value} onChange={onChange} />
            <label htmlFor={name} className="ms-2">{label}</label>
        </div>
    );
};

export { Checkbox };