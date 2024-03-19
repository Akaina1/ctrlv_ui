import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SimpleAlert from '../Alerts-Notifications/SimpleAlert'; // for form validation

// TODO: Accessibility features
// For Button: https://www.w3.org/WAI/ARIA/apg/patterns/button/

// TODO: Responsive Design (mobile sizing)

const FormSkeleton = ({ onSubmit, children, buttonColor, header, bgColor }) => {
  const initialFieldValues = React.Children.toArray(children).reduce((acc, child) => {
    if (React.isValidElement(child)) {
      const { id, value } = child.props;
      acc[id] = value !== undefined ? value : ''; // Ensure default value is an empty string for non-checkbox fields
    }
    return acc;
  }, {});

  const [fieldValues, setFieldValues] = useState(initialFieldValues);
  const [showAlert, setShowAlert] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleFieldChange = (id, value) => {
    setFieldValues(prevFieldValues => ({
      ...prevFieldValues,
      [id]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  
    // Check if all required fields are filled
    const requiredFields = React.Children.toArray(children)
      .filter(child => React.isValidElement(child) && child.props.isRequired)
      .map(child => ({
        id: child.props.id,
        isRequired: child.props.isRequired,
        type: (child.props.type !== undefined ? (child.props.type === 'textDate' ? 'textDate' : 'checkbox') : 'text'),
      }));
  
    const incompleteFields = requiredFields.filter(field => {
      const fieldValue = fieldValues[field.id];
      if (field.type === 'text' && field.isRequired && (!fieldValue || String(fieldValue).trim() === '')) {
        console.log('Field ID:', field.id, 'fieldValue:', fieldValue, 'fieldType:', field.type, 'fieldIsRequired:', field.isRequired);
        return true; // Text field is required but empty
      }
      if (field.type === 'textDate' && field.isRequired && (!fieldValue || String(fieldValue).trim() === '')) {
        console.log('Field ID:', field.id, 'fieldValue:', fieldValue, 'fieldType:', field.type, 'fieldIsRequired:', field.isRequired);
        return true; // TextDate field is required but empty
      }
      if (field.type === 'checkbox' && field.isRequired && fieldValue !== true) {    
        console.log('Field ID:', field.id, 'fieldValue:', fieldValue, 'fieldType:', field.type, 'fieldIsRequired:', field.isRequired);
        return true; // Checkbox is required but unchecked
      }
      console.log('All required fields are filled'); // all required fields are filled, return false
      return false;
    });
  
    if (incompleteFields.length > 0) {
      setShowAlert(true);
      return; 
    } else {
      // Only call onSubmit if there are no incomplete fields
      onSubmit({ ...fieldValues }); // Pass form data object to onSubmit
    }
  };

  const formChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const { type, id } = child.props;
      if (type === 'checkbox' && id) {
        const value = fieldValues[id] !== undefined ? fieldValues[id] : false;
        return React.cloneElement(child, {
          onChange: handleFieldChange,
          value: value,
        });
      } else if (type === 'textDate' && id) { // Add an else if statement for 'textDate'
        return React.cloneElement(child, {
          onDateChange: handleFieldChange, // onDateChange is the prop for date change
          value: fieldValues[id] !== undefined ? fieldValues[id] : '',
        });
      } else {
        return React.cloneElement(child, {
          onChange: handleFieldChange,
          value: fieldValues[id] !== undefined ? fieldValues[id] : '',
        });
      }
    }
    return child;
});

  return (
    <>
      {formSubmitted && showAlert && (
        <SimpleAlert
          bgColor="red"
          title="Incomplete Form"
          description="Please fill in all fields before submitting."
          options={['OK']}
          onSelect={() => setShowAlert(false)}
          ariaLabel="Incomplete Form Alert"
        />
      )}
      <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4 border-black border-l-2 border-t-2 border-r-4 border-b-4 p-4"
        style={{ backgroundColor: bgColor }}>
        {header && (
          <div className="text-center mb-4 font-darker-grotesque font-bold text-2xl">
            {header}
          </div>
        )}
        {formChildren}

        <button
          className="relative font-julius-sans-one text-lg lg:text-xl font-bold 
          text-black block navbar:flex items-center px-4 py-2 mb-4 navbar:mb-0 
          before:content-[''] before:absolute before:inset-0 before:border-b-4 
          before:border-r-4 before:border-l-2 before:border-t-2 before:border-black 
          before:transition before:duration-200 hover:before:border-b-2 hover:before:border-r-2 
          hover:scale-95 hover:brightness-125"
          type="submit"
          style={{ backgroundColor: buttonColor }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

FormSkeleton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  buttonColor: PropTypes.string,
  header: PropTypes.node,
  bgColor: PropTypes.string,
};

export default FormSkeleton;