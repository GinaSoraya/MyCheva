import React, { useState } from "react";
import "./statusDropdown.css";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StatusDropdown = ({ currentStatus, onChange }) => {
  const [open, setOpen] = useState(false);

  const options = ["Hadir", "Izin", "Sakit", "Alpha"];

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={() => setOpen(!open)}>
        {currentStatus}{" "}
        <span>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </span>
      </button>
      {open && (
        <div className="dropdown-content">
          {options.map((option, i) => (
            <div
              key={i}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatusDropdown;
