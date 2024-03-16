import React from 'react';
import PropTypes from 'prop-types';

// NOTE: don't think this needs accessibility features but will revisit in the future

const SimpleBadge = ({ title, icon, bgColor, textColor }) => {
  return (
    <div
      className="flex items-center justify-center w-32 h-14 px-2 py-1 text-sm font-bold font-aldrich 
      border-black border-t-2 border-r-2 border-l-2 border-b-4 hover:brightness-125 m-2"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {icon && (
        <img
          src={icon}
          alt="Badge Icon"
          className="w-6 h-6 mr-1"
        />
      )}
      {title}
    </div>
  );
};

SimpleBadge.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string, // Optional icon URL
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default SimpleBadge;
