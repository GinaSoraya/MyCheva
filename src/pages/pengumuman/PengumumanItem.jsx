import React, { useState } from "react";
import "./PengumumanItem.css";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const PengumumanItem = ({ profileImage, name, time, title, content, link }) => {
  const [marked, setMarked] = useState(false);

  const toggleMark = () => {
    setMarked(!marked);
  };

  return (
    <div className="pengumuman-item">
      <div className="pengumuman-header">
        <span>
          <img src={profileImage} alt="profile" className="profile-image" />
          <div>
            <h3>{name}</h3>
            <p>{time}</p>
          </div>
        </span>
      </div>
      <hr />
      <div className="pengumuman-content">
        <h4>{title}</h4>
        <p>{content}</p>
        {link && (
          <a href={link} target="_blank" rel=" ">
            {link}
          </a>
        )}
      </div>
      <hr />
      <div className="pengumuman-footer">
      <button
            onClick={toggleMark}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              alignItems: "center",
              color: marked ? "black" : "black",
            }}
          >
            <span>
              {marked ? <BookmarkBorderOutlinedIcon /> : <BookmarkIcon className="icon-bookmark"/>}
            </span>
          </button>
      </div>
    </div>
  );
};

export default PengumumanItem;
