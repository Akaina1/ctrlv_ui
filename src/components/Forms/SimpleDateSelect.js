import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import SimpleCalendar from '../Calendar/SimpleCalendar';
import { ReactComponent as Calendar } from '../../IMG/calendar.svg';
import SimpleAlert from '../Alerts-Notifications/SimpleAlert';

// TODO: Accessibility features
// https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/
// https://www.w3.org/WAI/ARIA/apg/patterns/menubar/
// when the user opens the calendar, the calendar should be focused and each date should have a label and be selectable (Done in the Calendar component)

// TODO: Change calendar size on mobile

// TODO: Date Select does NOT work with FormSkeleton - id is passed correctly but value is always empty string for some reason

const SimpleDateSelect = ({ 
  id,
  title, 
  description, 
  onSubmit, 
  onDateChange, 
  descriptionTextColor, 
  buttonTextColor, 
  buttonColor, 
  textBoxColor, 
  titleColor, 
  type = 'textDate', 
  isRequired,
  showButton }) => {

    const [selectedDate, setSelectedDate] = useState(null); // Initialize selectedDate with the provided value or null
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAlert, setShowAlert] = useState(false); // State to control alert visibility

    const handleDateChange = (id, value) => {
      console.log(id, value);
      // Call the onDateChange prop to update the selected date in the parent component
      if (onDateChange) {
        onDateChange(id, value);
        console.log(id, value);
      }
    };
    const handleDateSelect = (date) => {
      setSelectedDate(date);
      setIsModalOpen(false);
      handleDateChange(id, date.toDateString());
    };

  const handleDateSubmit = () => {
      if (isRequired && !selectedDate) {
          setShowAlert(true); // Show the alert if the date is required but not selected
          return;
      }
      if (onSubmit) {
          onSubmit(selectedDate, id); // Pass the selected date to the onSubmit handler
      }
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
        {showAlert && isRequired && (
                <SimpleAlert
                    bgColor="red"
                    title="Incomplete Field"
                    description="Please select a date before submitting."
                    options={['OK']}
                    onSelect={() => setShowAlert(false)} // Hide the alert when the user clicks OK
                    ariaLabel="Incomplete Field Alert"
                />
            )}
            {title && (
            <h3 className='font-julius-sans-one text-lg' style={{ color: titleColor }}>
                {title} {isRequired && <span className="text-red-500">*</span>}
            </h3>
            )}
            <div className="relative border-black border-t-4 border-l-4 border-b-8 border-r-8 sm:w-96">
                <input
                    id={id}
                    onChange={() => {}}
                    type={type}
                    value={selectedDate ? selectedDate.toDateString() : ''}
                    readOnly
                    className="bg-blue-200 text-white py-4 px-6 shadow-md w-full pr-12"
                    style={{ backgroundColor: textBoxColor }}
                />
                {/* Use the SVG calendar icon as the button */}
                <button type="button" onClick={() => setIsModalOpen(!isModalOpen)} className="absolute inset-y-0 right-0 flex items-center px-2 border-l">
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
            {showButton && (
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
                    onClick={handleDateSubmit}
                >
                    Submit
                </button>
            )}
        </div>
    );
};

SimpleDateSelect.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    onSubmit: PropTypes.func,
    buttonTextColor: PropTypes.string,
    buttonColor: PropTypes.string,
    textBoxColor: PropTypes.string,
    titleColor: PropTypes.string,
    descriptionTextColor: PropTypes.string,
    type: PropTypes.string,
    isRequired: PropTypes.bool,
    showButton: PropTypes.bool,
    onDateChange: PropTypes.func,
};

export default SimpleDateSelect;