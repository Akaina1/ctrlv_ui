import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FormSkeleton = ({ onSubmit, children, buttonColor }) => {
  const [fieldValues, setFieldValues] = useState({});

  const handleFieldChange = (id, value) => {
    setFieldValues((prevFieldValues) => ({
      ...prevFieldValues,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(fieldValues);
    }
  };

  const formChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        onChange: handleFieldChange,
        value: fieldValues[child.props.id] || '',
      });
    }
    return child;
  });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 border-black border-l-2 border-t-2 border-r-4 border-b-4 p-4">
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
      >Submit</button>

    </form>
  );
};

FormSkeleton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  buttonColor: PropTypes.string,
};

export default FormSkeleton;