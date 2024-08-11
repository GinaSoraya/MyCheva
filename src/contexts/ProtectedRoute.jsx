// import React from "react";
// import { useStateContext } from "./ContextProvider";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children, roles }) => {
//   const { user, token } = useStateContext();

//     if(!token) {
//         return <Navigate to="/login" />
//     }

//   if (roles && roles.indexOf(user?.role) === -1) {
//     return <Navigate to="/" />;
//   }
//   return children;
// };

// export default ProtectedRoute;
