import React from "react";
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import CoPresentOutlinedIcon from '@mui/icons-material/CoPresentOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';

export const SidebarData = [
    {
        title: 'Absensi',
        icon: <ListAltOutlinedIcon />,
        link: '/'
    },
    {
        title: 'Pertemuan',
        icon: <CoPresentOutlinedIcon />,
        link: '/Pertemuan'
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
        link: '/Profil'
    }
]
    

