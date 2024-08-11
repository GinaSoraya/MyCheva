import React from "react";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import CoPresentOutlinedIcon from '@mui/icons-material/CoPresentOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';

export const SidebarData = [
    {
        title: 'Pertemuan',
        icon: <CoPresentOutlinedIcon />,
        link: '/pertemuan'
    },
    {
        title: 'Pengumuman',
        icon: <NewspaperOutlinedIcon />,
        link: '/Pengumuman'
    },
    {
        title: 'Roadmap',
        icon: <TimelineOutlinedIcon />,
        link: '/Roadmap'
    },
    {
        title: 'Forum Diskusi',
        icon: <MessageOutlinedIcon />,
        link: '/ForumDiskusi'
    },
    {
        title: 'Profil',
        icon: <AccountCircleIcon />,
        link: '/profile'
    },
]
    

