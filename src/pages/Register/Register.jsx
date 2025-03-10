import React, { useContext } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
       
        console.log(name,photo,email,password);

        // Create User
        createUser(email,password)
        .then(result=>{
            console.log(result.user);

            navigate(location?.state ? location.state : '/')

        })
        .catch(error=>{
            console.error(error)
        })

      };
    

    return (
        <div>
             <Navbar></Navbar>
      <div>
        <h2 className="text-3xl my-10 text-center">Register your account</h2>

        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
          <fieldset className="fieldset">
            <label className="fieldset-label">Your Name</label>
            <input
              type="text"
              required
              name="name"
              className="input"
              placeholder="Enter your name"
            />
            <label className="fieldset-label"> Photo URL </label>
            <input
             type="text"
              required
              name="photo"
              className="input"
              placeholder="Enter your Photo Url"
            />
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
          Already have an Account ?
          <Link
           className="underline text-blue-600" to="/login">
            Login
          </Link>
        </p>
      </div>
        </div>
    );
};

export default Register;