import React from 'react';
import ProfileItem from './ProfileItem';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <ProfileItem
      background = "background.png"
      profile = "profile (3).png"
      name = "Sipaa"
      divisi = "UI/UX"
      />
    </div>
  );
};

export default ProfilePage;
