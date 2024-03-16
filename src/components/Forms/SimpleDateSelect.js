import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import SimpleCalendar from '../Calendar/SimpleCalendar';
import { ReactComponent as Calendar } from '../../IMG/calendar.svg';

// TODO: Accessibility features

const SimpleDateSelect = ({ title, description, onSubmit, descriptionTextColor, buttonTextColor, buttonColor, textBoxColor, titleColor }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDateSelect = (date) => {
      setSelectedDate(date);
      setIsModalOpen(false);
    };

    const handleSubmit = () => {
      if (onSubmit) {
        onSubmit(selectedDate);
      }
      setSelectedDate(null); // can clear the input field when submitted if you want or remove this line
    };

    const calendarRef = useRef(null);

    useEffect(() => {
    if (isModalOpen) {
        calendarRef.current.style.maxHeight = `${calendarRef.current.scrollHeight}px`;
    } else {
        calendarRef.current.style.maxHeight = '0px';
    }
    }, [isModalOpen]);

    return (
        <div className="relative"> {/* Add relative positioning to the parent container */}
        {title && (
            <h3 className='font-julius-sans-one text-lg' style={{ color: titleColor }}>
            {title}
            </h3>
        )}
        <div className="relative border-black border-t-4 border-l-4 border-b-8 border-r-8 w-70 sm:w-96">
            <input
            type="text"
            value={selectedDate ? selectedDate.toDateString() : ''}
            readOnly
            className="bg-blue-200 text-black py-4 px-6 shadow-md w-full pr-12"
            style={{ backgroundColor: textBoxColor }}
            />
            {/* Use the SVG calendar icon as the button */}
            <button onClick={() => setIsModalOpen(!isModalOpen)} className="absolute inset-y-0 right-0 flex items-center px-2 border-l">
            <Calendar className="h-5 w-5" /> {/* Adjust size as needed */}
            </button>
        </div>
        {/* Render the SimpleCalendar directly under the input field */}
        <div ref={calendarRef} className={`absolute z-10 left-[-60px] sm:left-0 calendar-dropdown-animation ${isModalOpen ? 'show' : ''}`}> {/* Add absolute positioning and dropdown styles */}
        <SimpleCalendar 
            onDateSelect={handleDateSelect}
            bgColor='#738FA7'
            dayColor='black'
            buttonColor='#C3CEDA'
            previousMonthColor='white'
        />
        </div>
        {description && (
            <p className='font-rajdhani text-lg font-bold' style={{ color: descriptionTextColor }}>
            {description}
            </p>
        )}
        {onSubmit && (
            <button
            className="relative font-julius-sans-one text-lg block 
            navbar:flex items-center px-4 py-2 mb-4 mt-2 navbar:mb-0 
            before:content-[''] before:absolute before:inset-0 
            before:border-b-4 before:border-r-4 before:border-l-2 
            before:border-t-2 before:border-black before:transition 
            before:duration-200 hover:before:border-b-2 hover:before:border-r-2 
            hover:scale-95 hover:bg-white hover:bg-opacity-20 cursor-pointer"
            style={{ color: buttonTextColor, backgroundColor: buttonColor }}
            aria-label="Submit"
            onClick={handleSubmit}
            disabled={!selectedDate}
            >
            Submit
            </button>
        )}
        </div>
      );
    };

  SimpleDateSelect.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    onSubmit: PropTypes.func,
    buttonTextColor: PropTypes.string,
    buttonColor: PropTypes.string,
    textBoxColor: PropTypes.string,
    titleColor: PropTypes.string,
    descriptionTextColor: PropTypes.string,
  };

  export default SimpleDateSelect;
