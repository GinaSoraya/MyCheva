import React, { useState } from "react";
import ScheduleItem from "./scheduleItem";

const Schedule = ({ currentMonth }) => {
  const schedules = {
    3: [
      { date: "19 APR, FRI", events: [] },
      {
        date: "26 APR, FRI",
        events: [
          {
            id: 1,
            time: "7PM to 9PM",
            title: "Meet UI/UX",
            type: "orange",
            platform: "Meet.com",
            details: [
              {
                materi: "Materi: Prototyping",
                pemateri: "Pemateri: Kak Gari",
                location: "Tempat: Google Meet",
              },
            ],
          },
          {
            id: 2,
            time: "3PM to 5PM",
            title: "Webinar UI/UX",
            type: "blue",
            platform: "Meet.com",
            details: [
              {
                materi: "Materi: Prototyping",
                pemateri: "Pemateri: Kak Gari",
                location: "Tempat: Google Meet",
              },
            ],
          },
        ],
      },
      {
        date: "29 APR, MON",
        events: [
          {
            id: 3,
            time: "10AM to 12AM",
            title: "Workshop UI/UX",
            type: "blue",
            platform: "Meet.com",
            details: [
              {
                materi: "Materi: Prototyping",
                pemateri: "Pemateri: Kak Gari",
                location: "Tempat: Google Meet",
              },
            ],
          },
        ],
      },
      {
        date: "30 APR, TUE",
        events: [
          {
            id: 4,
            time: "7PM to 9PM",
            title: "Meet UI/UX",
            type: "orange",
            platform: "Meet.com",
            details: [
              {
                materi: "Materi: Prototyping",
                pemateri: "Pemateri: Kak Gari",
                location: "Tempat: Google Meet",
              },
            ],
          },
        ],
      },
    ],
    // ...jadwal untuk bulan lain
  };

  return (
    <div className="schedule">
      {schedules[currentMonth]?.map((day, index) => (
        <div className="schedule-date" key={index}>
          <span>{day.date}</span>
          <div className="schedule-activity">
            {day.events.map((event, idx) => (
              <ScheduleItem key={event.id} event={event}  />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
