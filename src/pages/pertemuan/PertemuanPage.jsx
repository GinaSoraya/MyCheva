import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Calendar from "./calendar";
import Schedule from "./schedule";
import MonthSelector from "./MonthSelector";
import "./PertemuanPage.css";

import TodayRoundedIcon from "@mui/icons-material/TodayRounded";

const schedulesData = {
  "2024-07-26": [
    {
      time: "7PM to 9PM",
      title: "Meet UI/UX",
      link: "Meet.com",
      type: "meeting",
    },
    {
      time: "3PM to 5PM",
      title: "Webinar UI/UX",
      link: "Meet.com",
      type: "webinar",
    },
  ],
  "2024-04-29": [
    {
      time: "10AM to 12PM",
      title: "Workshop UI/UX",
      link: "Meet.com",
      type: "workshop",
    },
  ],
  "2024-04-30": [
    {
      time: "7PM to 9PM",
      title: "Meet UI/UX",
      link: "Meet.com",
      type: "meeting",
    },
  ],
};

function PertemuanPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const navigate = useNavigate();

  const handleJadwalBaru = (event) => {
    event.preventDefault();
    navigate("/JadwalBaru");
  };

  return (
    <div className="pertemuan-page">
      <div className="main-content">
        <div className="kiri-jadwal">
          <button className="jadwal-baru" onClick={handleJadwalBaru}>
            + Buat Pertemuan
          </button>
          <div className="calendar-content">
            <Calendar setSelectedDate={setSelectedDate} />
          </div>
          <div className="icon-jadwal"></div>
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
            <Schedule currentMonth={currentMonth} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PertemuanPage;
