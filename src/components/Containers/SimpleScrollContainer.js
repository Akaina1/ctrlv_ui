import React from 'react';
import PropTypes from 'prop-types';

const SimpleScrollContainer = ({ title, bgColor }) => {

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
    <div className="flex flex-col items-center justify-center p-6 max-w-2xl max-h-96 m-auto border-black border-t-4 border-l-4 border-b-8 border-r-8">
      <div className="flex items-center justify-between w-full mb-4">
        <div className="text-lg font-medium">{title}</div>
      </div>
      <div className={`flex-1 w-full overflow-y-auto scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-500`} style={{ backgroundColor: bgColor }}>
        {items.map((item, index) => (
          <div key={index} className="p-4 border-b border-gray-200">
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
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
};

SimpleScrollContainer.defaultProps = {
  bgColor: 'white',
};

export default SimpleScrollContainer;