import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  console.log(location);
 
  if(loading){
    return <Loading></Loading>
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location} to={`/auth/login`}></Navigate>;
};

export default PrivateRoute;
