import React from 'react';

const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
        <label htmlFor={name} className="form-label">
        {labelText || name }
        </label>
        {/* The value.name get the initial value of the obj, line 10, 19. And the name attribute give the e.target for the form */}
        <input 
            type={type} 
            value={value} 
            name={name} 
            onChange={handleChange} 
            className="form-input"
        />
    </div>
  )
};

export default FormRow;
