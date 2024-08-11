import React, { useEffect, useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

function Calendar({ currentMonth, currentYear, setCurrentMonth, setCurrentYear, setSelectedDate }) {
  const [selectedDate, setSelectedDateLocal] = useState(null);
  const [displayedMonth, setDisplayedMonth] = useState(currentMonth);
  const [displayedYear, setDisplayedYear] = useState(currentYear);

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const handleClick = (day) => {
    const formattedDate = `${displayedYear}-${String(displayedMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setSelectedDate(formattedDate);
    setSelectedDateLocal(formattedDate);
  };

  const handlePrevMonth = () => {
    if (displayedMonth === 0) {
      setDisplayedMonth(11);
      setDisplayedYear(displayedYear - 1);
      setCurrentMonth(11);
      setCurrentYear(displayedYear - 1);
    } else {
      setDisplayedMonth(displayedMonth - 1);
      setCurrentMonth(displayedMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (displayedMonth === 11) {
      setDisplayedMonth(0);
      setDisplayedYear(displayedYear + 1);
      setCurrentMonth(0);
      setCurrentYear(displayedYear + 1);
    } else {
      setDisplayedMonth(displayedMonth + 1);
      setCurrentMonth(displayedMonth + 1);
    }
  };

  useEffect(() => {
    setDisplayedMonth(currentMonth);
    setDisplayedYear(currentYear);
  }, [currentMonth, currentYear]);

  const daysInMonth = getDaysInMonth(displayedYear, displayedMonth);
  const firstDayOfMonth = new Date(displayedYear, displayedMonth, 1).getDay();

  return (
    <div id="calendar">
      <div className="month-selector">
        <span>
          <h5>{monthNames[displayedMonth]} {displayedYear}</h5>
        </span>
      </div>
      <div className="days-of-week">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="day-of-week">
            {day}
          </div>
        ))}
      </div>
      <div className="days-grid">
        {[...Array(firstDayOfMonth).keys()].map((_, index) => (
          <div key={index} className="empty-day"></div>
        ))}
        {[...Array(daysInMonth).keys()].map((_, index) => {
          const day = index + 1;
          const formattedDate = `${displayedYear}-${String(displayedMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          return (
            <div
              key={day}
              className={`day ${selectedDate === formattedDate ? 'selected-day' : ''}`}
              onClick={() => handleClick(day)}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
