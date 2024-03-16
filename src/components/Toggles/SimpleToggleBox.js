import React, { useState } from 'react';
import PropTypes from 'prop-types';

// TODO: Accessibility features

const SimpleToggleBox = ({
  onToggle,
  initialState,
  onLabel,
  offLabel,
  containerBackgroundColor,
  containerBorderColor,
  toggleBackgroundColor,
  toggleOffColor,
  toggleOnColor
}) => {
  const [isToggled, setIsToggled] = useState(initialState);

  const handleToggle = () => {
    const newState = !isToggled;
    setIsToggled(newState);
    onToggle(newState);
  };

  return (
    <div className="flex flex-col md:flex-row justify-start items-center w-full mb-2">
      {/* Toggle Container */}
      <div className="flex items-center mb-2 md:mb-0">
        <div
          className={`relative inline-block w-16 mr-2 select-none 
          transition duration-200 ease-in 
          border-l-2 border-t-2 border-r-4 border-b-4 cursor-pointer
          ${!isToggled ? 'opacity-50' : ''}`}
          onClick={handleToggle}
          style={{
            backgroundColor: containerBackgroundColor,
            borderColor: containerBorderColor,
          }}
        >
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="opacity-0 absolute block w-0 h-0"
            checked={isToggled}
            onChange={() => {}}
          />
          <div className="block w-full h-8"></div>
          <div
            className={`absolute w-6 h-6 bg-white shadow transition duration-200 ease-in border-gray-900 border-2 ${
              isToggled ? 'translate-x-full' : ''
            }`}
            style={{
              backgroundColor: toggleBackgroundColor,
              top: '50%',
              left: '3px',
              transform: `translateY(-50%) ${isToggled ? 'translateX(31px)': ''}`,
            }}
          >
            <span className="sr-only">{isToggled ? onLabel : offLabel}</span>
          </div>
        </div>
      </div>
      
      {/* On/Off Labels */}
      <div className="ml-2">
        {isToggled && (
          <div className="font-bold font-julius-sans-one text-sm md:text-md" style={{ color: toggleOnColor }}>
            {onLabel}
          </div>
        )}
        {!isToggled && (
          <div className="font-bold font-julius-sans-one text-sm md:text-md justify-center" style={{ color: toggleOffColor }}>
            {offLabel}
          </div>
        )}
      </div>
    </div>
  );
};

SimpleToggleBox.propTypes = {
  onToggle: PropTypes.func.isRequired,
  initialState: PropTypes.bool,
  onLabel: PropTypes.string,
  offLabel: PropTypes.string,
  containerBackgroundColor: PropTypes.string,
  containerBorderColor: PropTypes.string,
  toggleBackgroundColor: PropTypes.string,
  toggleOffColor: PropTypes.string,
  toggleOnColor: PropTypes.string,
};

SimpleToggleBox.defaultProps = {
  initialState: false,
  onLabel: 'On',
  offLabel: 'Off',
  containerBackgroundColor: 'white',
  containerBorderColor: 'gray',
  toggleBackgroundColor: 'gray',
  toggleOffColor: 'black',
  toggleOnColor: 'black',
};

export default SimpleToggleBox;