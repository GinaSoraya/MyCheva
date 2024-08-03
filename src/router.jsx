import { Navigate, createBrowserRouter } from "react-router-dom";

import LoginPage from "../src/pages/login/LoginPage";
import GuestLayout from "./components/layout/GuestLayout";
import DefaultLayout from "./components/layout/DefaultLayout";
import PertemuanPage from "./pages/pertemuan/PertemuanPage";
import PengumumanPage from "./pages/pengumuman/PengumumanPage";
import RoadmapPage from "./pages/roadmap/RoadmapPage";
import ProfilePage from "./pages/profile/ProfilePage";
import JadwalBaru from "./pages/pertemuan/JadwalBaru";
import ForumDiskusiPage from "./pages/forumDiskusi/ForumDiskusiPage";
import AbsensiPage from "./pages/absensi/AbsensiPage";
import BeritaBaru from "./pages/pengumuman/BeritaBaru";
import DiskusiBaru from "./pages/forumDiskusi/DiskusiBaru";
import EditProfile from "./pages/profile/EditProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/pertemuan" />,
      },
      {
        path: "pertemuan",
        element: <PertemuanPage />,
      },
      {
        path: "pengumuman",
        element: <PengumumanPage />,
      },
      {
        path: "roadmap",
        element: <RoadmapPage />,
      },
      {
        path: "forumdiskusi",
        element: <ForumDiskusiPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "JadwalBaru",
        element: <JadwalBaru />,
      },
      {
        path: "absensi",
        element: <AbsensiPage />,
      },
      {
        path: "BeritaBaru",
        element: <BeritaBaru />,
      },
      {
        path: "DiskusiBaru",
        element: <DiskusiBaru />
      },
      {
        path: "EditProfile",
        element: <EditProfile />
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
