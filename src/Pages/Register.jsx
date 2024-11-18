import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { setUser, createNewUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleSignup = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const password = form.get("password");
    const email = form.get("email");
    const photo = form.get("photo");

    createNewUser(email, password)
      .then((userInfo) => {
        const user = userInfo.user;
        setUser(user);
        updateUser({ displayName: name, photoURL: photo })
        .then(result => navigate('/'))
        .catch(err => console.log(err))

        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-full max-w-md px-4 py-3 shadow-2xl">
          <h2 className="text-[#131313] text-xl my-3 text-center">
            Register your account
          </h2>
          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="url"
                placeholder="Photo"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center text-lg my-3">
            Already have an account?
            <Link to={"/auth/login"}>Login Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
