import React, { useState } from 'react';
import PropTypes from 'prop-types';

// TODO: Accessibility features
// https://www.w3.org/WAI/ARIA/apg/patterns/accordion/

const SimpleAccordion = ({ bgColor, headerColor, contentColor, items }) => {
  const containerHeight = items.length * 100;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="w-4/5 border border-black border-t-4 border-l-4 border-b-8 border-r-8 p-8 grid grid-cols-1 gap-2"
      style={{ backgroundColor: bgColor, height: `${containerHeight}px`, overflow: 'hidden' }}
    >
      {items.map((item, index) => (
        <div key={index} className="grid auto-rows-min border-b-4 border-r-4 border-l-2 border-t-2 border-white border-opacity-50">
          <div
            className="cursor-pointer"
            onClick={() => toggleItem(index)}
            role="button"
            tabIndex={openIndex === index ? -1 : 0}
            aria-expanded={openIndex === index}
            aria-controls={`content-${index}`}
            aria-label={item.ariaLabel}
          >
            <div className="ml-2 text-sm sm:text-xl font-aldrich py-2 flex justify-between items-center hover:underline"
              style={{ color: headerColor }}>
              <span>{item.header}</span>
              <svg
                className={`mr-2 w-6 h-6 transition-transform transform ${openIndex === index ? 'rotate-270' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  d={
                    openIndex === index
                      ? 'M5 15l7-7 7 7'
                      : 'M19 9l-7 7-7-7'
                  }
                />
              </svg>
            </div>
          </div>
          <div
            id={`content-${index}`}
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
            role="region"
            aria-hidden={openIndex !== index}
          >
            <div className="p-4 text-xl sm:text-2xl font-darker-grotesque"
              style={{ color: contentColor }}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

SimpleAccordion.propTypes = {
  bgColor: PropTypes.string,
  headerColor: PropTypes.string,
  contentColor: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string.isRequired,
    })
  ).isRequired,
};

SimpleAccordion.defaultProps = {
  bgColor: 'white',
  headerColor: 'black',
  contentColor: 'black',
};

export default SimpleAccordion;