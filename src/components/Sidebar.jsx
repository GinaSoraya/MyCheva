import React, { useState } from "react";

import './Sidebar.css'
import {SidebarData} from './SidebarData';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className="container">
            <nav className="navbar">
                <div className="open-sidebar" onClick={toggleSidebar}>
                    <MenuIcon  sx={{ fontSize: 40 }} ></MenuIcon>
                </div>
                <ul className="navbar-logo">
                    <li><img src="./public/chevalier logo 2.png" alt="Chevalier Logo" /></li>
                    <li><img src="./public/cheva logo 2.png" alt="Chevalier Lab" /></li>
                </ul>
                <ul className="navbar-link">
                    <li><a href="/"><NotificationsNoneIcon sx={{ fontSize: 40 }}></NotificationsNoneIcon></a></li>
                    <li><a href="/profil"><AccountCircleIcon sx={{ fontSize: 60 }}></AccountCircleIcon></a></li>
                </ul>
            </nav>
                <div className="Sidebar">
                    <ul className={`SidebarList ${isSidebarOpen ? 'open' : ''}`}>
                        {SidebarData.map((val, key) => (
                            <li key={key} 
                                className="row"
                                id={window.location.pathname == val.link ? "active" : ""}
                                onClick={() => {window.location.pathname = val.link}}> 
                                <div id="icon">{val.icon}</div>
                                <div id="title">{val.title}</div> 
                                </li>
                        ))}
                    </ul>
                </div>
                <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>
                    {children}
                </div>
        </div>

    )
}


export default Sidebar