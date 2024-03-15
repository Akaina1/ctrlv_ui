import React from 'react';
import PropTypes from 'prop-types';

const SimpleScrollContainer = ({ title, bgColor, itemTextColor, titleTextColor }) => {

  // Define the items array within component or use external file for larger data sets, then include as props
  const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
    // Add more items as needed
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 max-w-2xl max-h-96 m-auto border-black border-t-2 border-l-2 border-b-4 border-r-4" 
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
};

SimpleScrollContainer.defaultProps = {
  bgColor: 'white',
};

export default SimpleScrollContainer;