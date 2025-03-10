import React, { useContext } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  
  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email,password); 
    signIn(email,password)
    .then(result =>{
      console.log(result.user)
      navigate(location?.state ? location.state : '/');
    })
    .catch(error =>{
      console.log(error);
    })



    // console.log(form.get("email","password"));
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl my-10 text-center">Please Login</h2>

        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <fieldset className="fieldset">
            <label className="fieldset-label">Email</label>
            <input
              type="email"
              required
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="fieldset-label ">Password</label>
            <input
              type="password"
              required
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4 ">Login</button>
          </fieldset>
        </form>
        <p className="text-center mt-4">
          Don't have an account{" "}
          <Link className="underline text-blue-600" to="/register">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
