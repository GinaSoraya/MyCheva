import React from 'react';
import CustomTable from './TableAbsensi';
import './AbsensiPage.css'

const absensi = () => {
  return (
    <div className='absensi-container'>
      <CustomTable rowsPerPage={6} />
    </div>
  );
};

export default absensi;