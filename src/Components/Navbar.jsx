import React, { useContext, useId } from "react";
import { Link } from "react-router-dom";
import usericon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, setUser, logout } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center my-3">
      <div>{user && user.email}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          {
            user && user?.email? <img className="w-[45px] object-cover h-[45px] rounded-full" src={user.photoURL} alt="usericon" /> : <img src={usericon} alt="usericon" />
          }
        </div>
        {user && user?.email ? (
          <button className="btn btn-neutral rounded" onClick={logout}>Log-out</button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-neutral rounded">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
