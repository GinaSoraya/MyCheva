import React from 'react';
import ScheduleItem from './ScheduleItem';
import Jadwal from '../../pages/pertemuan/Jadwal';
import './DailySchedule.css'

const DailySchedule = ({ day, Jadwal }) => {
  return (
    <div className="daily-schedule">
      <h2>{day}</h2>
      {Jadwal.map((Jadwal, index) => (
        <ScheduleItem key={index} {...Jadwal} />
      ))}
    </div>
  );
};

export default DailySchedule;