import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BeritaBaru.css";

const BeritaBaru = () => {
  const navigate = useNavigate();
  const [newsheadline, setNewsHeadline] = useState("");
  const [newscontent, setNewsContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/pengumuman')
  };

  return (
    <div className="berita-baru-container">
      <div className="berita-content">
        <h1>Tambahkan Pengumuman</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Judul</label>
              <input
                type="text"
                placeholder="Masukan Judul"
                value={newsheadline}
                onChange={(e) => setNewsHeadline(e.target.value)}
                required
              />
            </div>
          <div className="form-group">
            <label>Informasi Tambahan</label>
            <textarea
              placeholder="Masukan Pengumuman"
              value={newscontent}
              onChange={(e) => setNewsContent(e.target.value)}
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

export default BeritaBaru;
