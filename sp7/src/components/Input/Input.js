import React from 'react';

const Input = ({ label, name, value, onChange, defaultValue }) => {

    const handleChange = (event) => {
        const value = event.target.value
        onChange(name, value);
    };

    return (
        <div className="mb-4">
            <label className="me-2 d-block">{label}</label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={handleChange}
                defaultValue={defaultValue}
            />
        </div>
    );

}

export { Input };