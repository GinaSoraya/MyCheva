import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RoadmapBaru.css"

function RoadmapBaru() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    judul: "",
    materi: "",
    tugas: "",
    note: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/roadmap");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="roadmap-container">
      <div className="roadmap-content">
        <h1>Tambahkan Roadmap</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Judul</label>
            <input
              type="text"
              placeholder="Masukan Judul"
              value={formData.judul}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Materi</label>
            <textarea
              placeholder="Masukan materi"
              value={formData.materi}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Tugas</label>
            <textarea
              placeholder="Masukan tugas"
              value={formData.tugas}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Note</label>
            <input
                type="text"
              placeholder="Masukan note"
              value={formData.note}
              onChange={handleChange}
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
              <h1>Roadmap berhasil</h1>
              <h1>ditambah</h1>
            </div>
            <button onClick={closeModal}>Iya</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoadmapBaru;
