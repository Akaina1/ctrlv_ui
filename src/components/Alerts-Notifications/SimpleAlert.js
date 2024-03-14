import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const SimpleAlert = ({
  bgColor,
  title,
  description,
  options,
  onSelect,
  titleColor,
  descriptionColor,
  ButtonTextColor,
  ariaLabel,
}) => {
  const alertRef = useRef(null);

  useEffect(() => {
    alertRef.current.focus();
  }, []);

  const handleSelect = (selectedOption) => {
    onSelect(selectedOption);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div 
        ref={alertRef}
        tabIndex="-1"
        role="alert"
        aria-live="assertive"
        className="p-6 w-96 border-black border-l-2 border-t-2 border-r-4 border-b-4" 
        style={{ backgroundColor: bgColor }}
        aria-label={ariaLabel}
      >
        <div aria-hidden="true" className="flex justify-between items-center mb-4">
          <div className="text-3xl font-semibold font-michroma" 
          style={{ color: titleColor }}>
            {title}</div>
        </div>
        <div aria-hidden="true" className="text-lg font-aldrich"
        style={{ color: descriptionColor }}
          >
            {description}</div>
        <div aria-hidden="false" className="flex mt-4 justify-between">
          {options.map((option) => (
            <button className="relative 
            font-julius-sans-one text-2xl
            block navbar:flex items-center mb-4 navbar:mb-0 px-6 py-2
            before:content-[''] before:absolute before:inset-0 before:border-b-4 before:border-r-4 before:border-l-2 
            before:border-t-2 before:border-black before:transition before:duration-200 
            hover:before:border-b-2 hover:before:border-r-2 hover:scale-95 
            hover:bg-transparent" 
            aria-label={option}
            onClick={() => handleSelect(option)}
            style={{ color: ButtonTextColor }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

SimpleAlert.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

SimpleAlert.defaultProps = {
  bgColor: 'blue',
  textColor: 'gray-800',
  options: ['Accept', 'Cancel'],
};

export default SimpleAlert;