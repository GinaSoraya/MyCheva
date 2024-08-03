import React, { useState } from "react";

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const ScheduleItem = ({ event, detail }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`schedule-item ${event.type}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="mark-item"></div>
      <div className="time">{event.time}</div>
      <div className="title">{event.title}</div>
      <div className="platform">
        <img
          src="google-meet.png"
          alt="Meet"
        />
        {event.platform}
      </div>
      <div className="button-detail">
      <KeyboardArrowDownRoundedIcon />
      </div>
      {isExpanded && (
        <div className="details">
          <p>{event.time}</p>
          <p>{event.details.pemateri}</p>
          <p>{event.details.location}</p>
          <button className="invite-button">Invite with link</button>
          <div className="icons">
            <i className="icon-delete">🗑️</i>
            <i className="icon-edit">✏️</i>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleItem;
