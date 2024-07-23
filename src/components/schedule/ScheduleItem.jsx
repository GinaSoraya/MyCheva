import React from "react";
import './ScheduleItem.css'

const ScheduleItem = ({ time, activity, type, link }) => {
  return (
    <div className={`schedule-item ${type.toLowerCase()}`}>
      <div className="schedule-item-header">
        <div className="time">{time}</div>
        <div className="type">{type}</div>
      </div>
      <div className="activity">{activity}</div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Join Link
        </a>
      )}
    </div>
  );
};

export default ScheduleItem;
