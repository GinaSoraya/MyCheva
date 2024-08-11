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
  const schedules = {
    3: [
      {
        dates: [
          {
            date: "19",
            month: "april",
            day: "friday",
          },
        ],
        events: [],
      },
      {
        dates: [
          {
            date: "26",
            month: "april",
            day: "friday",
          },
        ],
        events: [
          {
            id: 1,
            time: "7PM to 9PM",
            title: "Meet UI/UX",
            type: "orange",
            platform: "Meet.com",
            details: [
              {
                materi: "Prototyping",
                pemateri: "Kak Gari",
                location: "Google Meet",
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
                materi: "Prototyping",
                pemateri: "Kak Gari",
                location: "Google Meet",
              },
            ],
          },
        ],
      },
      {
        dates: [
          {
            date: "29",
            month: "april",
            day: "monday",
          },
        ],
        events: [
          {
            id: 3,
            time: "10AM to 12AM",
            title: "Workshop UI/UX",
            type: "blue",
            platform: "Meet.com",
            details: [
              {
                materi: "Prototyping",
                pemateri: "Pemateri: Kak Gari",
                location: "Google Meet",
              },
            ],
          },
        ],
      },
      {
        dates: [
          {
            date: "30",
            month: "april",
            day: "tuesday",
          },
        ],
        events: [
          {
            id: 4,
            time: "7PM to 9PM",
            title: "Meet UI/UX",
            type: "orange",
            platform: "Meet.com",
            details: [
              {
                materi: "Prototyping",
                pemateri: "Kak Gari",
                location: "Google Meet",
              },
            ],
          },
        ],
      },
    ],
  };

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
