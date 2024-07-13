import React, { useState } from 'react'
import './App.css'
import './components/Sidebar.css'
import './pages/login/LoginPage'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import LoginPage from './pages/login/LoginPage'
import AbsensiPage from './pages/absensi/AbsensiPage'

const App = () => {
  return (
    <div className='App'>
      <Sidebar>
        <Routes>
            <Route path='/' element={<AbsensiPage />} />
            <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Sidebar>
    </div>
  ) 
}

export default App
