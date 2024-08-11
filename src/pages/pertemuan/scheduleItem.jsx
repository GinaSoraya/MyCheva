import React, { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import { Link } from "react-router-dom";

const ScheduleItem = ({ event, dates, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`schedule-item ${event.type}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="schedule-visible">
        <div
          className={`schedule-item-content ${
            isExpanded ? "hidden" : "visible"
          }`}
        >
          <div className="mark-item"></div>
          <div className="time">{event.time}</div>
          <div className="title">{event.title}</div>
          <div className="platform">
            <img src="google-meet.png" alt="Meet" className="platform-icon" />
            {event.platform}
          </div>
        </div>
        <div className="button-detail">
          {isExpanded ? (
            <KeyboardArrowUpRoundedIcon />
          ) : (
            <KeyboardArrowDownRoundedIcon />
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="details">
          <div className="mark-item"></div>
          <div className="details-content">
            <div className="title">{event.title}</div>
            <div className="dates">
              <div className="time">{event.time},</div>
              {dates.map((_date, _idx) => {
                const month =
                  _date.month.charAt(0).toUpperCase() + _date.month.slice(1);
                const day =
                  _date.day.charAt(0).toUpperCase() + _date.day.slice(1);
                return (
                  <div key={_idx} className="dates-component">
                    <div>{day},</div>
                    <div>{month}</div>
                    <div>{_date.date}</div>
                  </div>
                );
              })}
            </div>

            <div className="info-detail">
              {details.map((detail, index) => (
                <div key={index}>
                  <p>Materi: {detail.materi}</p>
                  <p>Pemateri: {detail.pemateri}</p>
                  <p>Tempat: {detail.location}</p>
                </div>
              ))}
            </div>

            <button className="invite-button">
              <ShareRoundedIcon className="icon" /> Invite with link
            </button>
            <div className="icons">
              <DeleteOutlineOutlinedIcon className="icon" />
              <Link to="/pertemuan/absensi">
                <ListAltOutlinedIcon className="icon" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleItem;
