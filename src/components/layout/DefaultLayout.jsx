import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../axios-client";

function DefaultLayout() {
  const { user, token, setUser, setToken } = useStateContext()

  if (!token) {
    return <Navigate to="/login" />
  }

  const onLogout = (event) => {
    event.preventDefault()

    axiosClient.post('/logut')
    .then(() => {
      setUser({})
      setToken(null)
    })
  }

  useEffect(() => {
    axiosClient.get('/user')
    .then(({data}) => {
      setUser(data)
    })
  }, [])

  return (
    <div>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  );
}

export default DefaultLayout;
