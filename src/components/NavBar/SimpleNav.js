import React from 'react';
import PropTypes from 'prop-types';

// TODO: Accessibility features
// https://www.w3.org/WAI/ARIA/apg/patterns/button/
// https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/
// https://www.w3.org/WAI/ARIA/apg/patterns/menubar/

// TODO: Might need a refactor to utilize the SimpleButton component - maybe?

const SimpleNav = ({ bgColor, textColor }) => {
    return (
    <nav className="border-b-8 border-r-8 border-l-4 border-t-4 border-black p-4 sticky top-0 z-10 w-full"
    style={{ backgroundColor: bgColor }}>
      <div className="flex flex-col navbar:flex-row items-center justify-between w-full">

        {/* Logo (shown on all devices) */}
        <div className="w-32 mb-4 navbar:mb-0">
          <div className="border-b-4 border-r-4 border-l-2 border-t-2 border-black h-20 flex items-center justify-center">
            <img src="https://via.placeholder.com/128x80" alt="Logo" className="w-full h-full object-cover" /> {/* Insert your logo here */}
          </div>
        </div>

        {/* Profile Icon (shown on mobile/tablet, hidden on desktop) */}
        <div className="block navbar:hidden order-1 navbar:order-none">
        <button className="relative 
                    block navbar:flex items-center mb-4 navbar:mb-0 
                    before:content-[''] before:absolute before:inset-0 before:border-b-4 before:border-r-4 before:border-l-2 
                    before:border-t-2 before:border-black before:transition before:duration-200 
                    hover:before:border-b-2 hover:before:border-r-2 hover:scale-95 
                    hover:bg-transparent" 
                    aria-label="Profile"
                    onClick={() => {
                        //Your navigation or render logic goes here
                     }}
                 >                 
                 <img src="https://via.placeholder.com/80" alt="Logo" className="w-full h-full object-cover" /> {/* Profile photo or icon goes here */}
            </button>
        </div>

        {/* Navigation Buttons Wrapper */}
        <div className="flex flex-col navbar:flex-row navbar:space-x-20 navbar:justify-center navbar:items-center navbar:flex-grow mt-4 navbar:mt-0 order-2 navbar:order-none flex-grow">
            <div className="flex flex-col navbar:flex-row navbar:space-x-20 navbar:justify-center navbar:items-center navbar:flex-grow">

                    {/* Copy + Paste buttons as needed [Remember to change navbar breakpoint in tailwind.config.js for responsive design] */}
                    <button className="relative 
                        font-julius-sans-one text-2xl font-bold
                        block navbar:flex items-center px-4 py-2 mb-4 navbar:mb-0 
                        before:content-[''] before:absolute before:inset-0 before:border-b-4 before:border-r-4 before:border-l-2 
                        before:border-t-2 before:border-black before:transition before:duration-200 
                        hover:before:border-b-2 hover:before:border-r-2 hover:scale-95 
                        hover:bg-white hover:bg-opacity-20"
                        style={{ color: textColor }} 
                        aria-label="Home"
                        onClick={() => {
                            //Your navigation or render logic goes here
                        }}
                    >
                    Home
                    </button>

                    <button className="relative 
                        font-julius-sans-one text-2xl font-bold
                        block navbar:flex items-center px-4 py-2 mb-4 navbar:mb-0 
                        before:content-[''] before:absolute before:inset-0 before:border-b-4 before:border-r-4 before:border-l-2 
                        before:border-t-2 before:border-black before:transition before:duration-200 
                        hover:before:border-b-2 hover:before:border-r-2 hover:scale-95 
                        hover:bg-white hover:bg-opacity-20"
                        style={{ color: textColor }} 
                        aria-label="About"
                        onClick={() => {
                            //Your navigation or render logic goes here
                        }}
                    >
                    About
                    </button>

                    <button className="relative 
                        font-julius-sans-one text-2xl font-bold
                        block navbar:flex items-center px-4 py-2 mb-4 navbar:mb-0 
                        before:content-[''] before:absolute before:inset-0 before:border-b-4 before:border-r-4 before:border-l-2 
                        before:border-t-2 before:border-black before:transition before:duration-200 
                        hover:before:border-b-2 hover:before:border-r-2 hover:scale-95 
                        hover:bg-white hover:bg-opacity-20"
                        style={{ color: textColor }} 
                        aria-label="Services"
                        onClick={() => {
                            //Your navigation or render logic goes here
                        }}
                    >
                    Services
                    </button>

                    <button className="relative 
                        font-julius-sans-one text-2xl font-bold
                        block navbar:flex items-center px-4 py-2 mb-4 navbar:mb-0 
                        before:content-[''] before:absolute before:inset-0 before:border-b-4 before:border-r-4 before:border-l-2 
                        before:border-t-2 before:border-black before:transition before:duration-200 
                        hover:before:border-b-2 hover:before:border-r-2 hover:scale-95 
                        hover:bg-white hover:bg-opacity-20"
                        style={{ color: textColor }} 
                        aria-label="Contact"
                        onClick={() => {
                            //Your navigation or render logic goes here
                        }}
                    >
                    Contact
                    </button>
                
            </div>
        </div>

        {/* Profile Icon (hidden on mobile/tablet, shown on desktop) */}
        <div className="hidden navbar:block">
            <button className="relative 
                    block navbar:flex items-center mb-4 navbar:mb-0 
                    before:content-[''] before:absolute before:inset-0 before:border-b-4 before:border-r-4 before:border-l-2 
                    before:border-t-2 before:border-black before:transition before:duration-200 
                    hover:before:border-b-2 hover:before:border-r-2 hover:scale-95" 
                    aria-label="Profile"
                    onClick={() => {
                        //Your navigation or render logic goes here
                     }}
                 >                 
                 <img src="https://via.placeholder.com/80" alt="Logo" className="w-full h-full object-cover" /> {/* Profile photo or icon goes here */}
            </button>
        </div>
      </div>
    </nav>
  );
};

SimpleNav.propTypes = {
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
  };

export default SimpleNav;