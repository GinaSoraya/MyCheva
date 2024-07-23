import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JadwalBaru.css";

const JadwalBaru = () => {
  const navigate = useNavigate();
  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingLocation, setMeetingLocation] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Jadwal baru:", {
      meetingTitle,
      meetingLocation,
      meetingTime,
      additionalInfo,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/pertemuan')
  };

  return (
    <div className="jadwal-baru-container">
      <div className="jadwal-content">
        <h1>Tambahkan Jadwal Baru</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Nama Acara</label>
              <input
                type="text"
                placeholder="Nama Acara"
                value={meetingTitle}
                onChange={(e) => setMeetingTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Lokasi / Link</label>
              <input
                type="text"
                placeholder="Lokasi atau link yang digunakan"
                value={meetingLocation}
                onChange={(e) => setMeetingLocation(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Waktu</label>
            <input
              type="text"
              placeholder="12:34 - 14:00 WIB"
              value={meetingTime}
              onChange={(e) => setMeetingTime(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Informasi Tambahan</label>
            <textarea
              placeholder="Masukan Informasi Tambahan"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
            />
          </div>
          <button type="submit">Tambahkan</button>
        </form>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="header-done">
              <img src="Done.png" alt="jadwal-berhasil" />
            </div>
            <div className="text-done">
              <h1>Jadwal Pertemuan</h1>
              <h1>berhasil diunggah</h1>
            </div>
            <button onClick={closeModal}>Iya</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JadwalBaru;
