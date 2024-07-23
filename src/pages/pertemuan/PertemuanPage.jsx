import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./PertemuanPage.css";
import '../../components/schedule/ScheduleItem.css'
import '../../components/schedule/DailySchedule.css'

import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import DailySchedule from "../../components/schedule/DailySchedule";
import Jadwal from "./Jadwal";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const months = Object.keys(Jadwal);

function PertemuanPage() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(dayjs("2024-04-17"));

  const handleJadwalBaru = (event) => {
    event.preventDefault();
    navigate('/JadwalBaru');
  };

  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleNextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % months.length);
    setSelectedDay(null);
  };

  const handlePreviousMonth = () => {
    setCurrentMonthIndex(
      (prevIndex) => (prevIndex - 1 + months.length) % months.length
    );
    setSelectedDay(null);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const currentMonth = months[currentMonthIndex];
  const days = Object.keys(Jadwal[currentMonth]);

  return (
    <div className="container">
      <div className="buat-jadwal">
        <button className="jadwal-baru" onClick={handleJadwalBaru}>
          + Buat Pertemuan
        </button>
        <div className="calendar">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar", "DateCalendar"]}>
              <DemoItem className="date">
                <DateCalendar
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className="monthly-schedule">
          <div className="header">
          <h1>
              {currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)}
            </h1>
            <button onClick={handlePreviousMonth}><ArrowBackIosNewIcon /></button>
            <button onClick={handleNextMonth}><ArrowForwardIosIcon /></button>
          </div>
          <div className="calendar-schedule">
            {days.map((day) => (
              <div key={day} onClick={() => handleDayClick(day)}>
                {day}
              </div>
            ))}
          </div>
          {selectedDay && Jadwal[currentMonth][selectedDay] && (
            <DailySchedule
              day={`April ${selectedDay}`}
              Jadwal={Jadwal[currentMonth][selectedDay]}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PertemuanPage;
