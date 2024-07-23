import React, { useState } from "react";
import "./TableAbsensi.css";

import ArrowUp from "@mui/icons-material/ArrowUpward";
import ArrowDown from "@mui/icons-material/ArrowDownward";
import SearchIcon from '@mui/icons-material/Search';

const TableAbsensi = ({ rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState({ keyToSort: "nama", direction: "asc" });
  const [search, setSearch] = useState('')

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

  const data = [
    {
      ID: 1,
      profile: 'profile (2).png',
      nama: "Sipa",
      email: "lahsipa@gmail.com",
      fakultas: "FIF",
      jurusan: "S1 RPL",
      divisi: "UI/UX",
      status: "active",
    },
    {
      ID: 2,
      nama: "Gina",
      fakultas: "FIF",
      jurusan: "S1 RPL",
      divisi: "Webdev",
      status: "active",
    },
    {
      ID: 3,
      nama: "Febry",
      fakultas: "FIF",
      jurusan: "S1 RPL",
      divisi: "Webdev",
      status: "active",
    },
    {
      ID: 4,
      nama: "Raga",
      fakultas: "FIF",
      jurusan: "S1 RPL",
      divisi: "Android",
      status: "active",
    },
    {
      ID: 5,
      nama: "Puri",
      fakultas: "FIF",
      jurusan: "S1 RPL",
      divisi: "UI/UX",
      status: "active",
    },
    {
      ID: 6,
      nama: "Bella",
      fakultas: "FIF",
      jurusan: "S1 RPL",
      divisi: "Webdev",
      status: "active",
    },
    {
      ID: 7,
      nama: "Faris",
      fakultas: "FIF",
      jurusan: "S1 RPL",
      divisi: "Android",
      status: "active",
    },
  ];

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const startRow = (currentPage - 1) * rowsPerPage;
  const endRow = startRow + rowsPerPage;
  const currentData = data.slice(startRow, endRow);

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

  return (
    <div className="table-container">
      <form>
        <input 
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Cari Akun" 
        id="search" 
        name="search"/>
      </form>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} onClick={() => handleHeaderClick(header)}>
                <div className="header-container">
                  <span>{header.label}</span>
                  {header.key === sort.keyToSort && (
                    <ArrowUp
                      direction={
                        sort.keyToSort === header.key ? sort.direction : "asc"
                      }
                    />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {getSortedArray(data).filter((index) => {
            return search.toLowerCase() === '' ? index : index.nama.toLowerCase().includes(search)
          }).map((row, index) => (
            <tr key={index}>
              {headers.map((header, index) => {
                return (
                <td key={index}>
                  {header.key == 'nama' ? (
                    <div className='nama-cell'>
                      <img src={row.profile} alt={row.nama} className='profile' width={'40px'} height={'40px'} />
                      <div className='nama-email'>
                        <p className='nama'>{row.nama}</p>
                        <p className='email'>{row.email}</p>
                      </div> 
                    </div>
                  ) : (
                    row[header.key]
                  )}
                </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TableAbsensi;
