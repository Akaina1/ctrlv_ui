import React from 'react';
import PropTypes from 'prop-types';
import SimpleBadge from '../Icons/SimpleBadge'; 

// TODO: Accessibility features - maybe? this component is just for displaying badges with no functionality

const BadgeContainer = ({ bgColor, title, titleColor, items }) => {

  return (
    <div className={`flex flex-col items-center p-4 w-full sm:w-2/5 border-black border-l-2 border-t-2 border-r-4 border-b-4`}
    style={{ backgroundColor: bgColor }}>
      <div className="mb-2">
        <h3 className={`text-xl font-bold`} style={{ color: titleColor }}>
          {title}
        </h3>
      </div>
      <div className={`flex flex-wrap justify-center`}>
        {items.map((badge, index) => (
          <div key={index} className="mr-2 mb-2">
            <SimpleBadge
              title={badge.title}
              bgColor={badge.bgColor}
              textColor={badge.textColor}
              icon={badge.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

BadgeContainer.propTypes = {
  bgColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired, // Assuming icons are React nodes (Valid JSX elements)
  })).isRequired, // Prop type for badges array of objects with specified shape
};

export default BadgeContainer;