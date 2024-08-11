import React, { useEffect, useState } from "react";
import "./AdminPage.css";
import TableAkun from "./TableAkun";
import TambahAkun from "./TambahAkun";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import axiosClient from "../axios-client";

const AdminPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const rowsPerPage =  7;
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState([])

  const headers = [
    {
      ID: 1,
      KEY: "nama",
      LABEL: "Nama",
    },
    {
      ID: 2,
      KEY: "nim",
      LABEL: "NIM",
    },
    {
      ID: 3,
      KEY: "fakultas",
      LABEL: "Fakultas",
    },
    {
      ID: 4,
      KEY: "jurusan",
      LABEL: "Jurusan",
    },
    {
      ID: 5,
      KEY: "jabatan",
      LABEL: "jabatan",
    },
    {
      ID: 6,
      KEY: "icon",
      LABEL: "",
    },
  ];

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    setLoading(true)
    axiosClient.get('/admin')
    .then(({data}) => {
      setLoading(false)
      console.log(data)
      setFormData(data.data)
    })
    .catch(() => {
      setLoading(false)
    })
  }

  const handleDeleteRow = (targetIndex) => {
    if (!Window.confirm("Apakah anda yakin akan menghapus akun ini?")) {
      return
    }

    axiosClient.delete(`/admin/${targetIndex.id}`)
    .then(() => {
      getUsers()
    })
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <Link to="/admin/TambahAkun">
          <button>+ Tambah Akun</button>
        </Link>
        <div className="table-header">
          <form className="cari-akun">
            <span className="search-icon">
              <SearchIcon />
            </span>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari Akun"
              id="search"
              name="search"
            />
          </form>
        </div>
      </div>
      <TableAkun
        rows={rows}
        deleteRow={handleDeleteRow}
        search={search}
        rowsPerPage={rowsPerPage}
        headers={headers}
      />
    </div>
  );
};

export default AdminPage;
