import React from 'react';


const Checkbox = ({ label, name, value, onChange, checked }) => {

    const handleChange = (e) => {
        onChange(e);
    };

    return (
        <div>
            <input type="checkbox" name={name} checked={checked} value={value} onChange={handleChange} />
            <label htmlFor={name} className="ms-2">{label}</label>
        </div>
    );
};

export { Checkbox };