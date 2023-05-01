import React from 'react';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Register.css'

const Register = () => {
    return (
        <div className="mt-24">
        <div className="mx-auto w-1/3 px-12 py-9 border border-gray-400 rounded-md mb-6">
          <h1 className="text-2xl font-bold mb-12">Create an account</h1>
          <form action="">
            <input
              className="placeholder:text-gray-900 border-black border-b focus:border-blue-500 py-2 px-2 mb-12 w-full"
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
            <br />
            <input
              className="placeholder:text-gray-900 border-black border-b focus:border-blue-500 py-2 px-2 mb-12 w-full"
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
            <br />
            <input
              className="placeholder:text-gray-900 border-black border-b focus:border-blue-500 py-2 px-2 mb-12 w-full"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <br />
            <input
              className="placeholder:text-gray-900 border-black border-b focus:border-blue-500 py-2 px-2 mb-6 w-full "
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <br />
            <input
              className="placeholder:text-gray-900 border-black border-b focus:border-blue-500 py-2 px-2 mb-6 w-full "
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
            />
            <br />
            
            <span><input type="checkbox" id="remember" value="remember" />
            <label htmlFor="remember"> Accepts <Link className="text-warning underline" to='/terms'>Terms and conditions</Link></label></span>
            
           
           
            <input
              className="btn btn-warning mt-12 w-full"
              type="submit"
              value="Create an account"
            ></input>
  
            <p className="font-medium mt-4">Already have an account? <Link className="text-warning underline" to='/login'>Login</Link></p>
          </form>
        </div>
  
        <div className="mb-5 mx-auto w-1/4 ">
          {/* <div className='flex items-center m-2'>
                  <hr className='flex-grow h-[1px]' />
                  <span>or</span>
                  <hr />
              </div> */}
  
          <div className="text-container mb-5">
            <hr className="left-line" />
            <span className="text">Or</span>
            <hr className="right-line" />
          </div>
  
          <button className=" w-full text-center border-2 border-gray-500 text-gray-900 py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-red-200 focus:outline-none mb-2">
          <FaGoogle className="text-blue-600 font-bold"></FaGoogle>
          <span className="text-center font-medium">Continue with Google</span>
        </button>
          <button className=" w-full text-center border-2 border-gray-500 text-gray-900 py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-red-200 focus:outline-none">
          <FaGithub className="text-blue-600 font-bold"></FaGithub>
          <span className="text-center font-medium">Continue with GitHub</span>
        </button>
        </div>
      </div>
    );
};

export default Register;