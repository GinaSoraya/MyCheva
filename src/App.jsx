import React, { useState } from 'react'
import './App.css'
import './components/Sidebar.css'
import './pages/login/LoginPage'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import LoginPage from './pages/login/LoginPage'
import AbsensiPage from './pages/absensi/AbsensiPage'
import PertemuanPage from './pages/pertemuan/PertemuanPage'
import JadwalBaru from './pages/pertemuan/JadwalBaru'
import PengumumanPage from './pages/pengumuman/PengumumanPage'
import BeritaBaru from './pages/pengumuman/BeritaBaru'
import ForumDiskusiPage from './pages/forumDiskusi/ForumDiskusiPage'
import DiskusiBaru from './pages/forumDiskusi/DiskusiBaru'
import RoadmapPage from './pages/roadmap/RoadmapPage'
import ProfilePage from './pages/profile/ProfilePage'

const App = () => {
  return (
    <div className='App'>
      <Sidebar>
        <Routes>
            <Route path='/' element={<AbsensiPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/pertemuan' element={<PertemuanPage />}/>
            <Route path="/JadwalBaru" element={<JadwalBaru />} />
            <Route path='/pengumuman' element={<PengumumanPage />}/>
            <Route path='/BeritaBaru' element={<BeritaBaru />}/>
            <Route path='/forumdiskusi' element={<ForumDiskusiPage />}/>
            <Route path='/diskusibaru' element={<DiskusiBaru />}/>
            <Route path='/roadmap' element={<RoadmapPage />}/>
            <Route path='/profile' element={<ProfilePage />}/>
        </Routes>
      </Sidebar>
    </div>
  ) 
}

export default App
