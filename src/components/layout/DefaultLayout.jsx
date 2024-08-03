import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import { useStateContext } from "../../contexts/ContextProvider";

function DefaultLayout() {
  const { user, token } = useStateContext()

  if (!token) {
    return <Navigate to="/login" />
  }

  return (
    <div>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  );
}

export default DefaultLayout;
