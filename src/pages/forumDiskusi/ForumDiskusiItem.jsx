import React from "react";
import "./ForumDiskusiItem.css";

import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";

const ForumDiskusiItem = ({
  profileImage,
  name,
  divisi,
  time,
  foto,
  content,
  comment,
}) => {
  return (
    <div className="forum-diskusi-item">
      <div className="forum-diskusi-header">
        <span className="profile-header">
          <img src={profileImage} alt="profile" className="profile-image" />
          <div>
            <h3>{name}</h3>
            <p>{divisi}</p>
          </div>
        </span>
        <div className="time-header">
          <p>{time}</p>
          <span>
            <ArrowDropDownRoundedIcon />
          </span>
        </div>
      </div>
      <div className="forum-diskusi-content">
          <img src={foto} alt="profile" className="profile-image" />
          <p>{content}</p>
        </div>
      <div className="forum-diskusi-footer">
        <div className="forum-icon">
          <span>
            <FavoriteBorderRoundedIcon />
          </span>
          <p>Like</p>
        </div>
        <div className="forum-icon">
          <span>
            <ChatBubbleOutlineRoundedIcon />
          </span>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ForumDiskusiItem;
