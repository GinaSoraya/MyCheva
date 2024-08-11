import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JadwalBaru.css";
import CalendarPicker from "./CalendarPicker";
import TimePicker from "./TimePicker";

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
    navigate("/pertemuan");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="jadwal-baru-container">
      <div className="jadwal-content">
        <h1>Tambahkan Jadwal Baru</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Judul</label>
              <input
                type="text"
                placeholder="Masukkan Judul"
                value={meetingTitle}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Lokasi / Link</label>
              <input
                type="text"
                placeholder="Lokasi atau link yang digunakan"
                value={meetingLocation}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group date-picker-container">
              <label>Tanggal Mulai</label>
              <CalendarPicker />
            </div>
            <div className="form-group date-picker-container">
              <label>Tanggal Selesai</label>
              <CalendarPicker />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group time">
              <label>Jam</label>
              <input
                type="text"
                placeholder="Pilih Waktu Mulai"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Pilih Waktu Selesai"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Jenis Kegiatan</label>
              <select name="kegiatan">
                <option value="rutinitas">Rutinitas</option>
                <option value="event">Event</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Deskripsi</label>
            <textarea
              placeholder="Masukan Informasi Tambahan"
              value={additionalInfo}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-jadwal">
            Tambahkan
          </button>
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
