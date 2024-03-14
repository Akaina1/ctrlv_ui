import React from 'react';

const SimpleButton = ({ children, onClick, buttonLabel, href, bgColor }) => {
  const handleClick = (event) => {
    event.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={href || ""}
      className="relative font-julius-sans-one text-md md:text-2xl text-black
      block navbar:flex items-center px-6 py-4 mb-4 navbar:mb-0 before:content-['']
      before:absolute before:inset-0 before:border-b-4 before:border-r-4 before:border-l-2
      before:border-t-2 before:border-black before:transition before:duration-200 
      hover:before:border-b-2 hover:before:border-r-2 hover:scale-95 hover:brightness-110"
      onClick={handleClick}
      aria-label={buttonLabel}
      style={{ backgroundColor: bgColor }}
    >
    {children}
    </a>
  );
};

export default SimpleButton;