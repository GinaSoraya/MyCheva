import React from "react";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

const MonthSelector = ({ currentMonth, setCurrentMonth }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="month-selector-schedule">
      <h2>
        {months[currentMonth]} {new Date().getFullYear()}
      </h2>
      <button onClick={() => setCurrentMonth((currentMonth - 1 + 12) % 12)}>
        <ArrowBackIosRoundedIcon />
      </button>
      <button onClick={() => setCurrentMonth((currentMonth + 1) % 12)}>
        <ArrowForwardIosRoundedIcon />
      </button>
    </div>
  );
};

export default MonthSelector;
