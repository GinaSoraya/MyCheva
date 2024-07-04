import React from "react"
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="open-sidebar">
                <MenuIcon sx={{ fontSize: 60 }} ></MenuIcon>
            </div>
            <div className="navbar-logo">
                <img src="./public/chevalier logo 2.png" alt="Chevalier Logo" />
                <img src="./public/cheva logo 2.png" alt="Chevalier Lab" />
            </div>
            <ul className="navbar-link">
                <li><a href="/"><NotificationsNoneIcon sx={{ fontSize: 50 }}></NotificationsNoneIcon></a></li>
                <li><a href="/profil"><AccountCircleIcon sx={{ fontSize: 70 }}></AccountCircleIcon></a></li>
            </ul>
        </nav>
    )
}

export default Navbar