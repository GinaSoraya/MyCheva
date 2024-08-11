import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DiskusiBaru.css";

const DiskusiBaru = () => {
  const navigate = useNavigate();
  const [forumcontent, setForumContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/ForumDiskusi");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="forum-diskusi-container-baru">
      <div className="forum-diskusi-content-baru">
        <h1>Tambahkan Forum Diskusi</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <textarea
              placeholder="Masukkan Teks"
              value={forumcontent}
              onChange={(e) => setForumContent(e.target.value)}
            />
          </div>
          <div className="add-foto">
            <label
              htmlFor="file-upload"
            >
              <span>+</span> Tambahkan Foto
            </label>
            <input
              id="file-upload"
              type="file"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit">Unggah</button>
        </form>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="header-done">
              <img src="Done.png" alt="forum-berhasil" />
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

export default DiskusiBaru;
