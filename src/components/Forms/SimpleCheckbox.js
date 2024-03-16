import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SimpleAlert from '../Alerts-Notifications/SimpleAlert'; // Import the SimpleAlert component if not already imported

const SimpleCheckbox = ({
  id,
  label,
  bgColor,
  onChange,
  value,
  onSubmit,
  showButton = true,
  isRequired,
  type = 'checkbox', // Default type is 'checkbox'
}) => {
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility
  const [isChecked, setIsChecked] = useState(value || false);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(id, newValue);
    }
  };

  const handleSubmit = () => {
    if (isRequired && !isChecked) {
      setShowAlert(true); // Show the alert if the checkbox is required and not checked
      return;
    }
    if (onSubmit) {
      onSubmit(isChecked, id);
    }
  };

  return (
    <div className="flex flex-col">
      {showAlert && (
        <SimpleAlert
          bgColor="red"
          title="Incomplete Field"
          description="Please check the checkbox before submitting."
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
        checked={isChecked}
        value={value}  // Confirm that the value is coming from the state
        onChange={handleChange}
        style={{ backgroundColor: bgColor }}
        className="p-2 border border-black focus:outline-1 focus:outline-blue-500"
        aria-label={label}
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
          style={{ backgroundColor: bgColor }}
        >
          Submit
        </button>
      )}
    </div>
  );
};

SimpleCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool,
  onSubmit: PropTypes.func,
  showButton: PropTypes.bool,
  isRequired: PropTypes.bool,
  type: PropTypes.string, // Adding type prop
};

export default SimpleCheckbox;