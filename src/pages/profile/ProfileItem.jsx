import React from "react";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { useNavigate } from "react-router-dom";

const ProfileItem = ({ background, profile, name, divisi }) => {
  const navigate = useNavigate();

  const handleEditProfile = (event) => {
    event.preventDefault();
    navigate('/EditProfile');
  };

  const handleLogout = (event) => {
    event.preventDevault()
    navigate()
  }

  return (
    <div className="profile-item">
      <div className="background-profile">
        <img src={background} alt="background" />
      </div>
      <div className="foto-profile">
        <img src={profile} alt="profile" />
        <button onClick={handleEditProfile}>
          <ModeEditOutlineOutlinedIcon sx={{ fontSize: 40 }} />
        </button>
      </div>
      <div className="identity-profile">
        <h3>{name}</h3>
        <p>{divisi}</p>
      </div>
      <button className="logout-button">Logout</button>
    </div>
  );
};

export default ProfileItem;
