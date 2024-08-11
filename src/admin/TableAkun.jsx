import React, { useState } from "react";
import "./TableAkun.css";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ArrowUp from "@mui/icons-material/ArrowUpward";
import ArrowDown from "@mui/icons-material/ArrowDownward";
import { Link } from "react-router-dom";

const TableAkun = ({ rowsPerPage, rows, deleteRow, search, headers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false)
  const [sort, setSort] = useState({ keyToSort: "nama", direction: "asc" });

  const filteredData = rows.filter((row) => {
    return search.toLowerCase() === ""
      ? true
      : row.nama.toLowerCase().includes(search.toLowerCase());
  });

  function getSortedArray(arrayToSort) {
    return arrayToSort.sort((a, b) =>
      sort.direction === "asc"
        ? a[sort.keyToSort] > b[sort.keyToSort]
          ? 1
          : -1
        : a[sort.keyToSort] > b[sort.keyToSort]
        ? -1
        : 1
    );
  }

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

  return (
    <div className="table-admin-container">
      <table className="table-admin">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} onClick={() => handleHeaderClick(header)}>
                <div className="header-container">
                  <span>{header.LABEL}</span>
                  {header.key === sort.keyToSort &&
                    (sort.direction === "asc" ? (
                      <ArrowUp className="arrow-up" />
                    ) : (
                      <ArrowDown className="arrow-down" />
                    ))}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        {loading && (
          <tbody>
            <tr>
              <td colSpan="5" className="text-center">
                Loading...
              </td>
            </tr>
          </tbody>
        )}
        {!loading && (
          <tbody>
            {currentData.map((row, index) => (
              <tr key={index}>
                {headers.map((header, index) => {
                  return (
                    <td key={index}>
                      {header.KEY == "nama" ? (
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
                      ) : header.KEY === "icon" ? (
                        <span className="edit-delete">
                          <DeleteOutlineRoundedIcon
                            className="delete-button"
                            onClick={() => deleteRow(startRow + index)}
                          />
                          <Link to={"/admin/" + row.id}>
                            <ModeEditOutlineOutlinedIcon className="edit-button" />
                          </Link>
                        </span>
                      ) : (
                        row[header.KEY]
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        )}
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

export default TableAkun;
