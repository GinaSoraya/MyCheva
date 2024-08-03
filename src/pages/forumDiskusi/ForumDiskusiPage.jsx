import React from 'react';
import { useNavigate } from "react-router-dom";
import ForumDiskusiItem from './ForumDiskusiItem'
import './ForumDiskusiPage.css';

function ForumDiskusiPage() {
  const navigate = useNavigate();
  
  const handleDiskusiBaru = (event) => {
    event.preventDefault();
    navigate('/DiskusiBaru');
  };

  return (
    <div className='forum-diskusi-container'>
      <ForumDiskusiItem 
      profileImage = "profile (2).png"
      name = "Sipa"
      divisi = "Mentor UI/UX"
      time = "29 mins"
      foto = "Staged Scene02 1.png"
      content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam tortor nec arcu. Euismod neque ultricies eget adipiscing condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam tortor nec arcu. Euismod neque ultricies eget adipiscing condimentum."
      comment = "140"
      />
      <ForumDiskusiItem 
      profileImage = "profile (2).png"
      name = "Sipa"
      divisi = "Mentor UI/UX"
      time = "29 mins"
      foto = "Staged Scene02 1.png"
      content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam tortor nec arcu. Euismod neque ultricies eget adipiscing condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam tortor nec arcu. Euismod neque ultricies eget adipiscing condimentum."
      comment = "140"
      />
      <button className='diskusi-baru' onClick={handleDiskusiBaru}>+ Buat Diskusi Baru</button>
    </div>
  );
}

export default ForumDiskusiPage;
