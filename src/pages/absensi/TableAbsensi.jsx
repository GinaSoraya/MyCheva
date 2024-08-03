import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./TableAbsensi.css";
import "./statusDropdown.css";
import StatusDropdown from "./statusDropdown";

import ArrowUp from "@mui/icons-material/ArrowUpward";
import ArrowDown from "@mui/icons-material/ArrowDownward";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const TableAbsensi = ({ rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState({ keyToSort: "nama", direction: "asc" });
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      ID: 1,
      profile: "profile (2).png",
      nama: "Sipa",
      email: "lahsipa@gmail.com",
      fakultas: "FIF",
      jurusan: "S1 RPL",
      divisi: "UI/UX",
      status: "Hadir",
    },
    {
      ID: 2,
      profile: "profile (2).png",
      nama: "Gina",
      email: "lahsipa@gmail.com",
      fakultas: "FIF",
      jurusan: "S1 RPL",
      divisi: "Webdev",
      status: "Izin",
    },
    {
      ID: 3,
      profile: "profile (2).png",
      nama: "Febry",
      email: "lahsipa@gmail.com",
      fakultas: "FIF",
      jurusan: "S1 RPL",
      divisi: "Webdev",
      status: "Sakit",
    },
    {
      ID: 4,
      profile: "profile (2).png",
      nama: "Raga",
      email: "lahsipa@gmail.com",
      fakultas: "FIF",
      jurusan: "S1 RPL",
      divisi: "Android",
      status: "Alpha",
    },
    {
      ID: 5,
      profile: "profile (2).png",
      nama: "Bella",
      email: "lahsipa@gmail.com",
      fakultas: "FIF",
      jurusan: "S1 RPL",
      divisi: "Webdev",
      status: "Hadir",
    },
    {
      ID: 6,
      profile: "profile (2).png",
      nama: "Bella",
      email: "lahsipa@gmail.com",
      fakultas: "FIF",
      jurusan: "S1 RPL",
      divisi: "Webdev",
      status: "Hadir",
    },
    {
      ID: 7,
      profile: "profile (2).png",
      nama: "Bella",
      email: "lahsipa@gmail.com",
      fakultas: "FIF",
      jurusan: "S1 RPL",
      divisi: "Webdev",
      status: "Hadir",
    },
  ]);

  const headers = [
    {
      id: 1,
      key: "nama",
      label: "Nama",
    },
    {
      id: 2,
      key: "fakultas",
      label: "Fakultas",
    },
    {
      id: 3,
      key: "jurusan",
      label: "Jurusan",
    },
    {
      id: 4,
      key: "divisi",
      label: "Divisi",
    },
    {
      id: 5,
      key: "status",
      label: "Status",
    },
  ];

  const filteredData = data.filter((index) => {
    return search.toLowerCase() === ""
      ? true
      : index.nama.toLowerCase().includes(search.toLowerCase());
  });

  const sortedData = getSortedArray(filteredData);

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const startRow = (currentPage - 1) * rowsPerPage;
  const endRow = startRow + rowsPerPage;
  const currentData = sortedData.slice(startRow, endRow);

  function handleHeaderClick(header) {
    setSort({
      keyToSort: header.key,
      direction:
        header.key === sort.keyToSort
          ? sort.direction === "asc"
            ? "desc"
            : "asc"
          : "desc",
    });
  }

  function getSortedArray(arrayToSort) {
    if (sort.direction === "asc") {
      return arrayToSort.sort((a, b) =>
        a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1
      );
    }
    return arrayToSort.sort((a, b) =>
      a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1
    );
  }

  const handleStatusChange = (id, newStatus) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.ID === id ? { ...row, status: newStatus } : row
      )
    );
  };

  const handlePertemuan = (event) => {
    event.preventDefault();
    navigate("/Pertemuan");
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <button className="table-back" onClick={handlePertemuan}>
          <span>
            <ArrowBackIcon />
          </span>
          <span>Kembali</span>
        </button>
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
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} onClick={() => handleHeaderClick(header)}>
                <div className="header-container">
                  <span>{header.label}</span>
                  {header.key === sort.keyToSort &&
                    (sort.direction === "asc" ? <ArrowUp className="arrow-up"/> : <ArrowDown className="arrow-down"/>)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
            <tr key={index}>
              {headers.map((header, index) => {
                return (
                  <td key={index}>
                    {header.key == "nama" ? (
                      <div className="nama-cell">
                        <img
                          src={row.profile}
                          alt={row.nama}
                          className="profile"
                          width={"40px"}
                          height={"40px"}
                        />
                        <div className="nama-email">
                          <div className="nama">
                            <p>{row.nama}</p>
                          </div>
                          <div className="email">
                            <p>{row.email}</p>
                          </div>
                        </div>
                      </div>
                    ) : header.key === "status" ? (
                      <StatusDropdown
                        currentStatus={row.status}
                        onChange={(newStatus) =>
                          handleStatusChange(row.ID, newStatus)
                        }
                      />
                    ) : (
                      row[header.key]
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Sebelumnya
        </button>
        <span>
          {currentPage} dari {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default TableAbsensi;
