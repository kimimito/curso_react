import React, { useEffect, useState } from 'react';


const Checkbox = ({ label, name, value, onChange, defaultChecked }) => {


    const [checked, setChecked] = useState(defaultChecked);

    useEffect(() => {
        if (checked) {
            onChange({ name, value, checked });
        }
    },[])

    const handleChange = () => {
        setChecked(!checked);
        onChange({ name, value, checked });
    };


    return (
        <div>
            <input type="checkbox" name={name} checked={checked} value={value} onChange={handleChange} />
            <label htmlFor={name} className="ms-2">{label}</label>
        </div>
    );
};

export { Checkbox };