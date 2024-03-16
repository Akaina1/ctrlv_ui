import React from 'react';
import PropTypes from 'prop-types';
import defaultProfileIcon from '../../IMG/Profile_Default.svg'; // Import a default SVG image - one is provided or can import your own

// TODO: Accessibility features
// https://www.w3.org/WAI/ARIA/apg/patterns/button/

const ProfileIcon = ({ onClick, photoUrl, bgColor }) => {
  return (
    <div className="block">
      <button
        className="relative flex items-center m-2 
        before:content-[''] before:absolute before:inset-0 before:border-b-4 before:border-r-4 
        before:border-l-2 before:border-t-2 before:border-black before:transition before:duration-200 
        hover:before:border-b-2 hover:before:border-r-2 hover:scale-95 hover:bg-transparent"
        style={{ backgroundColor: bgColor }}
        onClick={onClick}
        aria-label="Profile"
      >
        {photoUrl ? ( // Check if photoUrl is provided
          <img
            src={photoUrl}
            alt="Profile Icon"
            className="w-full h-full object-cover"
          />
        ) : ( // If no photoUrl provided, show default profile icon
          <img
            src={defaultProfileIcon} // Use the imported SVG
            alt="Profile Icon"
            width={80}
            height={80} //can edit width and height as needed
          />
        )}
      </button>
    </div>
  );
};

// Define PropTypes
ProfileIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  photoUrl: PropTypes.string, // photoUrl is optional
  bgColor: PropTypes.string.isRequired,
};

export default ProfileIcon;