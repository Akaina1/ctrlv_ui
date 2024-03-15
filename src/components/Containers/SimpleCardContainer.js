import React from 'react';
import PropTypes from 'prop-types';
import SimpleCard from '../Cards/SimpleCard'; // Assuming this is the correct path to SimpleCard

const SimpleCardContainer = ({ header, bgColor, items }) => {
  
  return (
    <div className="border border-black border-t-4 border-l-4 border-b-8 border-r-8 p-4 w-full" // width can be changed as needed
    style={{ backgroundColor: bgColor }}>
      {/* Header */}
      {header && <h1 className="text-black text-3xl font-bold text-center mb-4 font-michroma">
        {header}
      </h1>}

      {/* Card grid with overflow auto */}
      <div className="max-h-[1000px] overflow-auto scrollbar-thin scrollbar-thumb-color scrollbar-track-color"> {/* Adjust maxHeight as needed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((card, index) => (
            <SimpleCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

SimpleCardContainer.propTypes = {
  header: PropTypes.string,
  bgColor: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired,
  })).isRequired, // Prop type for cards array of objects with specified shape
};

SimpleCardContainer.defaultProps = {
  header: '',
  bgColor: 'white',
};

export default SimpleCardContainer;
