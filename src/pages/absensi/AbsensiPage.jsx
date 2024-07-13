import React from 'react';
import CustomTable from './TableAbsensi';

const absensi = () => {
  const data = [
    { nama: 'sipa', fakultas: 'Teknik Informatika', jurusan: 'Rekayasa Perangat Lunak', divisi: 'UI/UX', status: 'active'},
    { nama: 'sipa', fakultas: 'Teknik Informatika', jurusan: 'Rekayasa Perangat Lunak', divisi: 'UI/UX', status: 'active'},
    { nama: 'sipa', fakultas: 'Teknik Informatika', jurusan: 'Rekayasa Perangat Lunak', divisi: 'UI/UX', status: 'active'},
    { nama: 'sipa', fakultas: 'Teknik Informatika', jurusan: 'Rekayasa Perangat Lunak', divisi: 'UI/UX', status: 'active'},
    { nama: 'sipa', fakultas: 'Teknik Informatika', jurusan: 'Rekayasa Perangat Lunak', divisi: 'UI/UX', status: 'active'},
    { nama: 'sipa', fakultas: 'Teknik Informatika', jurusan: 'Rekayasa Perangat Lunak', divisi: 'UI/UX', status: 'active'},
    { nama: 'sipa', fakultas: 'Teknik Informatika', jurusan: 'Rekayasa Perangat Lunak', divisi: 'UI/UX', status: 'active'},
    { nama: 'sipa', fakultas: 'Teknik Informatika', jurusan: 'Rekayasa Perangat Lunak', divisi: 'UI/UX', status: 'active'},
    { nama: 'sipa', fakultas: 'Teknik Informatika', jurusan: 'Rekayasa Perangat Lunak', divisi: 'UI/UX', status: 'active'},
    { nama: 'sipa', fakultas: 'Teknik Informatika', jurusan: 'Rekayasa Perangat Lunak', divisi: 'UI/UX', status: 'active'},
    { nama: 'sipa', fakultas: 'Teknik Informatika', jurusan: 'Rekayasa Perangat Lunak', divisi: 'UI/UX', status: 'active'},
    // Tambahkan lebih banyak data sesuai kebutuhan
  ];

  const columns = [
    { header: 'Nama', accessor: 'nama' },
    { header: 'Fakultas', accessor: 'fakultas' },
    { header: 'Jurusan', accessor: 'jurusan' },
    { header: 'Divisi', accessor: 'divisi' },
    { header: 'Status', accessor: 'status' },
  ];

  return (
    <div className='App'>
      <h4>10 April</h4>
      <CustomTable data={data} columns={columns} rowsPerPage={10} />
    </div>
  );
};

export default absensi;
