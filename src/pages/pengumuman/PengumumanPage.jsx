import React from 'react';
import { useNavigate } from "react-router-dom";
import PengumumanItem from './PengumumanItem';
import './PengumumanPage.css';

function PengumumanPage() {
  const navigate = useNavigate();
  
  const handleBeritaBaru = (event) => {
    event.preventDefault();
    navigate("/BeritaBaru");
  };

  return (
    <div className='pengumuman-container'>
      <PengumumanItem
        profileImage= "profile (2).png"
        name="Syifa"
        time="5 Hari yang lalu"
        title="PENDAFTARAN HACKATHON MAHASISWA SOFTWARE ENGINEERING!!!"
        content="Buat yang tertarik untuk ikut hackathon yang diselenggarakan di UMN bisa mendaftarkan dirinya di link berikut: https://forms.gle/xXbrNMHP9y8xwxHf6. Semangat dan sukSeS 💪🔥"
        link="https://forms.gle/xXbrNMHP9y8xwxHf6"
      />
      <PengumumanItem
        profileImage="profile (2).png"
        name="Arinza"
        time="5 Hari yang lalu"
        title="Temen-temen GDB, SWJ kelas ke 3 akhirnya HADIRR LHOO !!!"
        content="Ayo ikuti kelas GRATIS dan BERSERTIFIKAT dari Disparbud Jabar bekerjasama dengan Agate Academy dan Komunitas Gamedev Bandung! Di kelas ketiga ini, kita akan membedah game Citampi Stories, game lokal yang menjadi favorit para pemain Indonesia dan sudah diunduh oleh lebih dari 1 juta pemain! Ayo ikuti acaranya secara offline pada: Sabtu, 8 Juni 2024, 13.30-15.30 WIB di Gedung Disparbud Jabar, Bandung. Segera daftar di link ini: https://bit.ly/daftarGameBusinessSWJ3"
        link="https://bit.ly/daftarGameBusinessSWJ3"
      />
      <button className='buat-berita-baru' onClick={handleBeritaBaru}>+ Buat Berita Baru</button>
    </div>
  );
}

export default PengumumanPage;
