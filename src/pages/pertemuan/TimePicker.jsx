import React, { useState } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Stack, TextField } from "@mui/material";

function timePicker() {
    const [selectedTime, setSelectedTime] = useState(null)
  return (
    <Stack direction="row" spacing={4}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker label="Time Picker"
        value={selectedTime}
        onChange={(newValue) => setSelectedTime(newValue)}
        renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker label="Time Picker"
        value={selectedTime}
        onChange={(newValue) => setSelectedTime(newValue)}
        renderInput={(params) => <TextField {...params} />}
        />
      </DemoContainer>
    </LocalizationProvider>
    </Stack>
  );
}

export default timePicker
