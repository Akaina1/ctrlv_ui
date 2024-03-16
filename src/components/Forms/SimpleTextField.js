import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SimpleTextField = ({ id, label, bgColor, onChange, value, onSubmit, buttonColor, showButton = true, inputLimit }) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (event) => {
    let newValue = event.target.value;
    // Apply character limit if inputLimit is specified
    if (inputLimit && newValue.length > inputLimit) {
      newValue = newValue.substring(0, inputLimit);
    }
    setInputValue(newValue);
    if (onChange) {
      onChange(id, newValue);
    }
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(inputValue, id);
    }
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2">
        {label}
      </label>
      <input
        type="text"
        id={id}
        value={inputValue}
        onChange={handleChange}
        style={{ backgroundColor: bgColor }}
        className="p-2 border border-black focus:outline-1 focus:outline-blue-500"
        aria-label={label}
        maxLength={inputLimit} // Set maxLength to enforce character limit
      />
      {showButton && (
        <button 
          className="relative font-julius-sans-one text-lg lg:text-xl mt-2 font-bold
          text-black block navbar:flex items-center px-4 py-2 mb-4 navbar:mb-0 
          before:content-[''] before:absolute before:inset-0 before:border-b-4 
          before:border-r-4 before:border-l-2 before:border-t-2 before:border-black 
          before:transition before:duration-200 hover:before:border-b-2 hover:before:border-r-2 
          hover:scale-95 hover:brightness-125"
          onClick={handleSubmit}
          type="submit"
          style={{ backgroundColor: buttonColor }} 
        >
          Submit
        </button>
      )}
    </div>
  );
};

SimpleTextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  showButton: PropTypes.bool,
  buttonColor: PropTypes.string,
  inputLimit: PropTypes.number, // Define inputLimit prop
};

export default SimpleTextField;