import React from "react";
import "./PengumumanItem.css";

import BookmarkIcon from "@mui/icons-material/Bookmark";

const PengumumanItem = ({ profileImage, name, time, title, content, link }) => {
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
        <BookmarkIcon className="icon-bookmark"/>
      </div>
    </div>
  );
};

export default PengumumanItem;
