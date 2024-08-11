import React, { useEffect, useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useParams } from "react-router-dom";

const EditAkun = ({ rows }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams() 
  // useEffect(() => {
  //   axios.get('' + id)
  //   .then(res => setRows(res.rows))
  //   .catch(err => console.log(err))
  // }, [])

  const handleRoleChange = (jabatan) => {
    setFormData({
      ...formData,
      jabatan,
    });
  };
  return (
    <div className="profile-form-container">
      <form>
        <div className="form-kiri">
          <div className="upload-photo">
            <div className="upload-icon">
              <CameraAltIcon sx={{ fontSize: 100 }} />
              <p>Unggah Foto</p>
            </div>
            <label htmlFor="upload-photo">
              <img src="upload-icon.png" alt="Upload" />
            </label>
            <input
              id="upload-photo"
              type="file"
              style={{ display: "none" }}
              placeholder="Unggah Foto"
            />
          </div>
          <div className="form-fields">
            <div className="form-group-kiri">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Masukkan Username"
              />
            </div>
            <div className="form-group-kiri">
              <label>Divisi</label>
              <input type="text" name="divisi" placeholder="Masukkan Divisi" />
            </div>
          </div>
        </div>
        <div className="form-kanan">
          <div className="form-fields">
            <div className="form-group-kanan">
              <label>Nama</label>
              <input type="text" name="nama" placeholder="Masukkan Nama" />
            </div>
            <div className="form-group-kanan">
              <label>NIM</label>
              <input type="text" name="nim" placeholder="Masukkan NIM" />
            </div>
            <div className="form-group-kanan">
              <label>Fakultas</label>
              <input
                type="text"
                name="fakultas"
                placeholder="Masukkan Fakultas"
              />
            </div>
            <div className="form-group-kanan">
              <label>Jurusan</label>
              <input
                type="text"
                name="jurusan"
                placeholder="Masukkan Jurusan"
              />
            </div>
            <div className="form-group-kanan role-buttons">
              <label>Jabatan</label>
              <div>
                <button
                  type="button"
                  id="mentor"
                  onClick={() => handleRoleChange("mentor")}
                >
                  Mentor
                </button>
                <button
                  type="button"
                  id="member"
                  onClick={() => handleRoleChange("member")}
                >
                  Member
                </button>
              </div>
            </div>
          </div>
          <button type="submit" className="submit-button">
            Simpan
          </button>
        </div>
      </form>
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
}

export default EditAkun;
