import React, { useEffect, useRef, useState } from "react";
import { Calendar } from "react-date-range";
import format from "date-fns/format";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const CalendarPicker = () => {
  const [calendar, setCalendar] = useState("");
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  useEffect(() => {
    setCalendar(format(new Date(), "MM/dd/yyyy"));
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutSide, true);
  }, []);

  const hideOnEscape = () => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const hideOnClickOutSide = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const handlePicker = (date) => {
    setCalendar(format(date, "MM/dd/yyyy"));
  };

  return (
    <div className="date-picker-container">
      <div className="date-content">
        <input
          value={calendar}
          readOnly
          className="input-date"
          onClick={() => setOpen((open) => !open)}
        />
        <span className="icon-open">
          {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </span>
      </div>

      <div ref={refOne}>
        {open && (
          <Calendar
            date={new Date()}
            onChange={handlePicker}
            className="calendar-element"
          />
        )}
      </div>
    </div>
  );
};

export default CalendarPicker;
