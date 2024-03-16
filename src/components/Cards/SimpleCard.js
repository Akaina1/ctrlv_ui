import React from 'react';
import PropTypes from 'prop-types';

// TODO: Accessibility features
// Button: https://www.w3.org/WAI/ARIA/apg/patterns/button/
// Figure out what other ARIA roles are needed

const SimpleCard = ({ photo, title, description, button, buttonLabel, bgColor, onButtonClick }) => {
  return (
    <div className={`border border-black border-t-4 border-l-4 border-b-8 border-r-8 p-4 max-w-80 flex flex-col justify-between`} style={{ backgroundColor: bgColor }}>
      <div>
        <h2 className="text-black text-3xl font-bold mb-1 font-aldrich">{title}</h2>
        <div className="flex justify-center">
          <div className="w-full h-full flex-shrink-0 relative">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden">
              <img src={photo} alt={title} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
        <p className="mb-4 text-black text-xl font-aldrich">{description}</p>
      </div>
      <div className="flex justify-start"> {/* Ensure the button is always at the bottom */}
        <button className={`relative font-julius-sans-one text-lg lg:text-xl font-bold
        text-black block navbar:flex items-center px-4 py-2 mb-4 
        navbar:mb-0 before:content-[''] before:absolute before:inset-0 
        before:border-b-4 before:border-r-4 before:border-l-2 before:border-t-2 
        before:border-black before:transition before:duration-200 hover:before:border-b-2 
        hover:before:border-r-2 hover:scale-95 hover:bg-white hover:bg-opacity-20`} 
        aria-label={buttonLabel} 
        onClick={onButtonClick}>
          {button}
        </button>
      </div>
    </div>
  );
};



SimpleCard.propTypes = {
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
};

SimpleCard.defaultProps = {
  bgColor: 'white',
};

export default SimpleCard;