import React from 'react';

const ProfileIcon = ({ onClick }) => {
  return (
    <div className="block">
      <button
        className="relative flex items-center mb-4 
        before:content-[''] before:absolute before:inset-0 before:border-b-4 before:border-r-4 
        before:border-l-2 before:border-t-2 before:border-black before:transition before:duration-200 
        hover:before:border-b-2 hover:before:border-r-2 hover:scale-95 hover:bg-transparent"
        onClick={onClick}
        aria-label="Profile"
      >
        <img
          src="https://via.placeholder.com/80"
          alt="Profile Icon"
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
};

export default ProfileIcon;
