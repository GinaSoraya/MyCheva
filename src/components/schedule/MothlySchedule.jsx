import React, { useState } from 'react';
import DailySchedule from './DailySchedule';
import schedules from '../Jadwal';

const months = Object.keys(schedules);

const MonthlySchedule = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleNextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % months.length);
    setSelectedDay(null);
  };

  const handlePreviousMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex - 1 + months.length) % months.length);
    setSelectedDay(null);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const currentMonth = months[currentMonthIndex];
  const days = Object.keys(schedules[currentMonth]);

  return (
    <div className="monthly-schedule">
      <div className="header">
        <button onClick={handlePreviousMonth}>Previous</button>
        <h1>{currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)}</h1>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      <div className="calendar">
        {days.map((day) => (
          <div key={day} onClick={() => handleDayClick(day)}>
            {day}
          </div>
        ))}
      </div>
      {selectedDay && schedules[currentMonth][selectedDay] && (
        <DailySchedule day={`April ${selectedDay}`} schedules={schedules[currentMonth][selectedDay]} />
      )}
    </div>
  );
};

export default MonthlySchedule;
