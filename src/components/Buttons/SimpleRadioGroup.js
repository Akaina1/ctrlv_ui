import React from 'react';
import PropTypes from 'prop-types';

// TODO: Accessibility features

const SimpleRadioGroup = ({ title, titleTextColor, bgColor, items, itemTextColor, selection, onSelectionChange, buttonTextColor, onSubmit, selectionColor }) => {

  const handleSelectionChange = (event) => {
    const selectedValue = event.target.value;
    onSelectionChange(selectedValue);
  };

  const handleFormSubmit = () => {
    onSubmit(selection);
  };

  return (
    <div className='p-4 border-black border-l-2 border-t-2 border-r-4 border-b-4 max-w-72'
    style={{ backgroundColor: bgColor }}>
      {title && (
        <h3 className='text-lg font-julius-sans-one font-bold'
        style={{ color: titleTextColor }}>{title}</h3>
      )}
      <div>
        {items.map((item, index) => (
          <div className='text-black my-4 flex font-rajdhani font-bold'
          style={{ color: itemTextColor }} 
          key={index}>
            <input
              type="radio"
              id={`radio-${index}`}
              name="radio-group"
              value={item}
              checked={selection === item}
              onChange={handleSelectionChange}
              className='hidden'
            />
            <label htmlFor={`radio-${index}`} className='cursor-pointer relative flex items-center'>
              <div className={`w-6 h-6 border-l-2 border-t-2 border-r-4 border-b-4 
              border-black flex items-center justify-center mr-4 
              ${selection === item ? 'bg-blue-500' : 'bg-transparent'}`} 
              style={{ backgroundColor: selection === item ? selectionColor : 'transparent' }}>
                {/* Use fillColor prop for background color when selected */}
              </div>
              <span>{item}</span>
            </label>         
         </div>
        ))}
      </div >

      {/* To prevent the container from changing with the hover effect of the button we must make use of the before pseudo element */}
      <button className={`relative font-julius-sans-one text-lg lg:text-xl 
      text-black block navbar:flex items-center px-4 py-2 mb-4 navbar:mb-0 
      before:content-[''] before:absolute before:inset-0 before:border-b-4 
      before:border-r-4 before:border-l-2 before:border-t-2 before:border-black 
      before:transition before:duration-200 hover:before:border-b-2 hover:before:border-r-2 
      hover:scale-95 hover:bg-white hover:bg-opacity-20`} 
      onClick={handleFormSubmit}
      style={{ color: buttonTextColor }}
      >Submit</button>
    </div>
  );
};

SimpleRadioGroup.propTypes = {
  title: PropTypes.string,
  titleTextColor: PropTypes.string,
  bgColor: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  selection: PropTypes.string,
  onSelectionChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  itemTextColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  selectionColor: PropTypes.string,
};

export default SimpleRadioGroup;