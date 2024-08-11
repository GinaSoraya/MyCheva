import React, { useState } from "react";
import "./ForumDiskusiItem.css";

import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ForumDiskusiItem = ({
  profileImage,
  name,
  divisi,
  time,
  foto,
  content,
  comment,
}) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

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
          <button
            onClick={toggleLike}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              color: liked ? "#ef8619" : "black",
            }}
          >
            <span>
              {liked ? <FavoriteIcon /> : <FavoriteBorderRoundedIcon />}
            </span>
            <p>Like</p>
          </button>
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
