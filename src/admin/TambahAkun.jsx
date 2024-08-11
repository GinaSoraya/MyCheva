import React, { useEffect, useState } from "react";

import "./TambahAkun.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios-client";

const TambahAkun = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    nama: "",
    profile: null,
    email: "",
    nim: "",
    fakultas: "",
    jurusan: "",
    username: "",
    divisi: "",
    jabatan: "",
  });

  if (id) {
    useEffect(() => {
      setLoading(true);
      axiosClient
        .get(`/admin/${id}`)
        .then(({ data }) => {
          setLoading(false);
          setFormData(data);
        })
        .catch(() => {
          setLoading(false);
        });
    }, []);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "profile") {
      setFormData({
        ...formData,
        profile: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleRoleChange = (jabatan) => {
    setFormData({
      ...formData,
      jabatan,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
    if (formData.id) {
      axiosClient
        .put(`/admin/${formData.id}`, formData)
        .then(() => {
          setIsModalOpen(true);
        })
        .catch((err) => {
          const response = err.response;
          if (response && response.status == 422) {
            if (response.data.errors) {
              setErrors(response.data.errors);
            } else {
              setErrors({
                username: [response.data.message],
              });
            }
          }
        });
    } else {
      axiosClient
        .post("/admin", formData)
        .then(() => {
          console.log("Form successfully submitted.");
          setIsModalOpen(true);
        })
        .catch((err) => {
          console.error("Error submitting form:", err);
          const response = err.response;
          if (response && response.status === 422) {
            setErrors({
              username: [response.data.message],
            });
          }
        });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/admin");
  };

  return (
    <>
      <div className="profile-form-container">
        <div className="card animated fadeInDown">
          {loading && <div className="text-center">Loading...</div>}
          {errors && (
            <div className="alert">
              {Object.keys(errors).map((key) => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          )}
          {!loading && (
            <form onSubmit={handleSubmit}>
              <div className="form-kiri">
                <div className="upload-photo">
                  <span className="upload-icon">
                    <CameraAltIcon sx={{ fontSize: 100 }} />
                    <p>Unggah Foto</p>
                  </span>
                  <label htmlFor="upload-photo">
                    <img src="upload-icon.png" alt="Upload" />
                  </label>
                  <input
                    id="upload-photo"
                    type="file"
                    name="profile"
                    style={{ display: "none" }}
                    onChange={handleChange}
                    placeholder="Unggah Foto"
                  />
                </div>
                <div className="form-fields">
                  <div className="form-group-kiri">
                    <label>Username</label>
                    <input
                      type="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Masukkan Username"
                    />
                  </div>
                  <div className="form-group-kiri">
                    <label>Divisi</label>
                    <input
                      type="text"
                      name="divisi"
                      value={formData.divisi}
                      onChange={handleChange}
                      placeholder="Masukkan Divisi"
                    />
                  </div>
                </div>
              </div>
              <div className="form-kanan">
                <div className="form-fields">
                  <div className="form-group-kanan">
                    <label>Nama</label>
                    <input
                      type="text"
                      name="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      placeholder="Masukkan Nama"
                    />
                  </div>
                  <div className="form-group-kanan">
                    <label>NIM</label>
                    <input
                      type="text"
                      name="nim"
                      value={formData.nim}
                      onChange={handleChange}
                      placeholder="Masukkan NIM"
                    />
                  </div>
                  <div className="form-group-kanan">
                    <label>Fakultas</label>
                    <input
                      type="text"
                      name="fakultas"
                      value={formData.fakultas}
                      onChange={handleChange}
                      placeholder="Masukkan Fakultas"
                    />
                  </div>
                  <div className="form-group-kanan">
                    <label>Jurusan</label>
                    <input
                      type="text"
                      name="jurusan"
                      value={formData.jurusan}
                      onChange={handleChange}
                      placeholder="Masukkan Jurusan"
                    />
                  </div>
                  <div className="form-group-kanan role-buttons">
                    <label>Jabatan</label>
                    <div>
                      <button
                        type="button"
                        id="mentor"
                        className={
                          formData.jabatan === "mentor" ? "active" : ""
                        }
                        onClick={() => handleRoleChange("mentor")}
                      >
                        Mentor
                      </button>
                      <button
                        type="button"
                        id="member"
                        className={
                          formData.jabatan === "member" ? "active" : ""
                        }
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
          )}
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
      </div>
    </>
  );
};

export default TambahAkun;
