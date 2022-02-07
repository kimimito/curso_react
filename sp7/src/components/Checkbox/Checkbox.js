import React, {useState} from 'react';


const Checkbox = ({ label, name, value, onChange }) => {

    
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
        onChange({name, value, checked});
    };


    return (
        <div>
            <input type="checkbox" name={name} checked={checked} value={value} onChange={handleChange} />
            <label htmlFor={name} className="ms-2">{label}</label>
        </div>
    );
  };

export {Checkbox};