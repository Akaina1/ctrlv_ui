import React, { useState } from "react";
import PropTypes from "prop-types";

// TODO: Accessibility features
// Might use standards for tables: https://www.w3.org/WAI/ARIA/apg/patterns/table/

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const SimpleCalendar = ({ bgColor, monthColor, dayColor, previousMonthColor, buttonColor, onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const renderDaysOfWeek = () => {
    return (
      <div className="grid grid-cols-7 gap-1">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="border text-center text-black 
          border-black bg-black bg-opacity-20 mb-1 shadow-md  
          font-semibold font-rajdhani text-xs fold:text-sm"
          style={{ color: monthColor }}>
            {day}
          </div>
        ))}
      </div>
    );
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateSelect = (date) => {
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const renderDays = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const daysInMonth = getDaysInMonth(month, year);
    const firstDayOfMonth = getFirstDayOfMonth(month, year);
  
    // Get the total number of days in the previous month
    const prevMonthDays = getDaysInMonth(month - 1, year);
  
    // Render days from the previous month
    const prevMonthDaysArray = Array.from({ length: firstDayOfMonth }, (_, i) => prevMonthDays - i);
    
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
    const isToday = (day) => {
      const today = new Date();
      return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
    };
  
    const isSelected = (day) => {
      if (!selectedDate) return false;
      return selectedDate.getDate() === day && selectedDate.getMonth() === month && selectedDate.getFullYear() === year;
    };
  
    return (
        <div className="grid grid-cols-7 gap-1">
          {prevMonthDaysArray.map((day) => (
            <div key={day} className="p-1 text-gray-400 text-center font-major-mono-display text-xs fold:text-sm"
            style={{ color: previousMonthColor }}>
              {day}
            </div>
          ))}
          {days.map((day) => {
            const borderClass = isToday(day) || isSelected(day) ? "border-black" : "border-gray-400";
      
            return (
              <div
                key={day}
                className={`p-1 border text-center shadow-md font-major-mono-display text-xs fold:text-sm
                   hover:bg-white hover:bg-opacity-40 hover:border-black
                   ${isToday(day) ? "bg-[#ACEEF3] font-bold" : ""}
                   ${isSelected(day) ? "bg-black bg-opacity-30 font-bold" : ""}
                   ${borderClass}`}
                   onClick={() => {
                    setSelectedDate(new Date(year, month, day));
                    handleDateSelect(new Date(year, month, day));
                  }}
                  style={{ color: dayColor }}
                >
                {day}
              </div>
            );
          })}
        </div>
      );    
    };

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const renderCalendar = () => {
    return (
      <div className="flex flex-col">
        <div className="flex justify-between items-center p-4">
          <button
            onClick={handlePrevMonth}
            className="px-4 py-2 bg-blue-500 text-black font-bold text-xl font-major-mono-display 
            border-black border-l-2 border-t-2 border-r-4 border-b-4 
            hover:border-2 hover:brightness-110 hover:scale-90 relative w-14 -ml-4"
            style={{ backgroundColor: buttonColor }}>
            &lt;
          </button>
          <div className="fold:text-xl text-md font-bold text-black font-julius-sans-one ">
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </div>
          <button
            onClick={handleNextMonth}
            className="px-4 py-2 bg-blue-500 text-black font-bold text-xl font-major-mono-display 
            border-black border-l-2 border-t-2 border-r-4 border-b-4 
            hover:border-2 hover:brightness-110 hover:scale-90 relative w-14 -mr-4"
            style={{ backgroundColor: buttonColor }}>
            &gt;
          </button>
        </div>
        {renderDaysOfWeek()}
        {renderDays()}
      </div>
    );
  };

  return (
    <div className="simple-calendar w-96 p-4 border-black 
    border-l-4 border-t-4 border-r-8 border-b-8"
    style={{ backgroundColor: bgColor }}>
      {renderCalendar()}
    </div>
  );
};

SimpleCalendar.propTypes = {
  bgColor: PropTypes.string,
  monthColor: PropTypes.string,
  dayColor: PropTypes.string,
  buttonColor: PropTypes.string,
  previousMonthColor: PropTypes.string,
  handleDateSelect: PropTypes.func,
};

export default SimpleCalendar;