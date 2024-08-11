import React, { useState } from "react";
import "./JadwalDropdown.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import { TbCalendarPlus } from "react-icons/tb";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";

const JadwalDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="jadwal-dropdown">
      <div className="menu-item" onClick={toggleDropdown}>
        {isDropdownOpen ? (
          <ArrowDropDownRoundedIcon className="arrow-icon" />
        ) : (
          <ArrowDropUpRoundedIcon className="arrow-icon" />
        )}
        <PermContactCalendarOutlinedIcon className="icon" />
        <span>Jadwal</span>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-jadwal">
          <div className="menu-item">
            <CheckCircleIcon className="icon routine" />
            <span>Rutinitas</span>
          </div>
          <div className="menu-item">
            <CheckCircleIcon className="icon events" />
            <span>Events</span>
          </div>
          <div className="menu-item">
            <TbCalendarPlus className="icon" />
            <span>Buat Jadwal Baru</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default JadwalDropdown;
