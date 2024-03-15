import React from 'react';
import PropTypes from 'prop-types';

const SimpleScrollContainer = ({ title, bgColor, itemTextColor, titleTextColor, items }) => {
  return (
    <div className="flex flex-col items-center 
    justify-center p-6 max-w-2xl max-h-96 m-auto 
    border-black border-t-2 border-l-2 border-b-4 border-r-4" 
      style={{ backgroundColor: bgColor }}>
      <div className="flex items-center justify-between w-full mb-4">
        <div className="text-lg font-medium"
          style={{ color: titleTextColor }}
        >
          {title}
        </div>
      </div>
      <div className={`flex-1 w-full overflow-y-auto scrollbar-thin scrollbar-track-color scrollbar-thumb-color`}>
        {items.map((item, index) => (
          <div key={index} className="p-4 border-b border-gray-200"
            style={{ color: itemTextColor }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

SimpleScrollContainer.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  itemTextColor: PropTypes.string,
  titleTextColor: PropTypes.string,
  items: PropTypes.array.isRequired, // Prop type for items array
};

SimpleScrollContainer.defaultProps = {
  bgColor: 'white',
};

export default SimpleScrollContainer;
