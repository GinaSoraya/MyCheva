import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "./calendar";
import Schedule from "./schedule";
import MonthSelector from "./MonthSelector";
import "./PertemuanPage.css";

import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import JadwalDropdown from "./JadwalDropdown";
import axiosClient from "../../axios-client";

function PertemuanPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [schedules, setSchedules] = useState([])

  useEffect(() => {
    getSchedule();
  }, []);

  const getSchedule = () => {
    axiosClient
      .get("/pertemuan")
      .then(({ data }) => {
        console.log(data);
        setSchedules(data.data);
      })
      .catch((error) => {
        console.error("Error fetching schedules:", error);
      });
  };

  return (
    <div className="pertemuan-page">
      <div className="main-content">
        <div className="kiri-jadwal">
          <Link to='/pertemuan/JadwalBaru'>
            <button className="jadwal-baru">
              + Buat Pertemuan
            </button>
          </Link>
          <div className="calendar-content">
            <Calendar
              currentMonth={currentMonth}
              currentYear={currentYear}
              setCurrentMonth={setCurrentMonth}
              setCurrentYear={setCurrentYear}
              setSelectedDate={setSelectedDate}
            />
          </div>
          <div className="icon-jadwal">
            <JadwalDropdown />
          </div>
        </div>
        <div className="kanan-jadwal">
          <div className="schedule-header">
            <div className="day-icon">
              <span>
                <TodayRoundedIcon />
              </span>
              <p>Hari</p>
            </div>
            <div>
              <MonthSelector
                currentMonth={currentMonth}
                setCurrentMonth={setCurrentMonth}
              />
            </div>
          </div>
          <div className="schedule-content">
            <Schedule currentMonth={currentMonth} schedules={schedules} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PertemuanPage;
