import React, { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

function Calendar({ setSelectedDate }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDateLocal] = useState(null);

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

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  const handleClick = (day) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const formattedDate = `${year}-${String(month + 1).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;
    setSelectedDate(formattedDate);
    setSelectedDateLocal(formattedDate); 
  };

  const handlePrevMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    setCurrentDate(new Date(year, month - 1));
  };

  const handleNextMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    setCurrentDate(new Date(year, month + 1));
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  return (
    <div id="calendar">
      <div className="month-selector">
        <span>
          <h5>{monthNames[month]} {year}</h5>
        </span>
        <div className="month-button">
          <button onClick={handleNextMonth}>
            <KeyboardArrowUpRoundedIcon />
          </button>
          <button onClick={handlePrevMonth}>
            <KeyboardArrowDownRoundedIcon />
          </button>
        </div>
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
          const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
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
