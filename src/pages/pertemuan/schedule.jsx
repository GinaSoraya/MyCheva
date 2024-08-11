import React from "react";
import ScheduleItem from "./scheduleItem";

const Schedule = ({ currentMonth, schedules }) => {
  return (
    <div className="schedule">
      {schedules[currentMonth]?.map((schedule, index) => (
        <div className="schedule-date" key={index}>
          {schedule.dates.map((dateObj, dateIndex) => {
            const initialMonth = dateObj.month.toUpperCase().slice(0, 3);
            const initialDay = dateObj.day.toUpperCase().slice(0, 3);
            return (
              <div key={dateIndex} className="schedule-date-initial">
                <div className="initial-day">{dateObj.date}</div>
                <div className="initial-day">{initialDay},</div>
                <div className="initial-day">{initialMonth}</div>
              </div>
            );
          })}

          <div className="schedule-activity">
            {schedule.events.map((event, eventIndex) => (
              <ScheduleItem 
                key={event.id} 
                event={event} 
                dates={schedule.dates} 
                details={event.details}  
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
