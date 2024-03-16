import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SimpleAlert from '../Alerts-Notifications/SimpleAlert'; // Import the SimpleAlert component if not already imported

// TODO: Accessibility features
// for button: https://www.w3.org/WAI/ARIA/apg/patterns/button/
// https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/ - this should be implemented in the SimpleAlert component

const SimpleTextField = 
({ id, 
  label, 
  bgColor, 
  onChange, 
  value,
  textColor, 
  onSubmit, 
  buttonColor, 
  showButton, 
  inputLimit, 
  isRequired, type = 'text' 
}) => {
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility
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
    if (isRequired && inputValue.trim() === '') {
      setShowAlert(true); // Show the alert if the field is required and the input value is empty
      return;
    }
    if (onSubmit) {
      onSubmit(inputValue, id);
    }
  };

  return (
    <div className="flex flex-col">
      {showAlert && (
        <SimpleAlert
          bgColor="red"
          title="Incomplete Field"
          description="Please enter a value before submitting."
          options={['OK']}
          onSelect={() => setShowAlert(false)} // Hide the alert when the user clicks OK
          ariaLabel="Incomplete Field Alert"
        />
      )}
      <label htmlFor={id} className="mb-2 font-julius-sans-one font-bold">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        value={inputValue}
        onChange={handleChange}
        style={{ backgroundColor: bgColor, color: textColor }}
        className="p-2 border-l-2 border-t-2 border-r-4 border-b-4 border-black focus:outline-1 focus:outline-blue-500"
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
  textColor: PropTypes.string,
  inputLimit: PropTypes.number, // Define inputLimit prop
  isRequired: PropTypes.bool, // Define isRequired prop
  type: PropTypes.string, // Define type prop with possible value 'text'
};

export default SimpleTextField;