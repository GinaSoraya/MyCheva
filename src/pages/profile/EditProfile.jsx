import React, { useState } from "react";
import "./EditProfile.css"
import { useNavigate } from "react-router-dom";

function EditProfile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsModalOpen(true);
      };

    const closeModal = () => {
        setIsModalOpen(false);
        navigate('/profile')
      };
    
  return (
    <div className="edit-profile-item">
      <div className="background-edit-profile">
        <img src="background.png" alt="background" />
      </div>
      <div className="edit-profile">
        <img src="profile (3).png" alt="profile" />
        <form className="profile-akun">
          <div className="edit-nama">
            <label>Username</label>
            <input type="text" id="edit-username" name="" />
          </div>
          <div className="edit-divisi">
            <label>Divisi</label>
            <input type="text" id="edit-divisi" name="" />
          </div>
        </form>
      </div>
      <button className="simpan-edit" onClick={handleSubmit}>Simpan</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="header-done">
              <img src="Done.png" alt="jadwal-berhasil" />
            </div>
            <div className="text-done">
              <h1>Akun berhasil diubah</h1>
            </div>
            <button onClick={closeModal}>Iya</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditProfile;
