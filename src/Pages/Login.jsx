import React, { useContext } from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { login,  setUser} = useContext(AuthContext)
  const location = useLocation()
  console.log(location);
  const navigate = useNavigate()
  console.log(navigate);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const password = form.get("password");
    const email = form.get("email");
 
    login(email,password).then(
      (userinfo) => {
        const loggedUser = userinfo.user
        setUser(loggedUser)
        navigate(location?.state? location.state : "/")
      }
    )
    .catch(error => alert(error.message))
    
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-[#131313] text-xl my-3 text-center">
            Login your account
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center text-lg my-3">
            Don't have an account?
            <Link className="btn btn-secondary" to={"/auth/register"}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
