import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import travelGuruBlack from "../../../assets/travel_guru_black.png";

const LoginNav = () => {
  return (
    <div className="navbar flex justify-between  bg-opacity-0">
      <div className="mr-20 flex-1">
        <Link to={"/"}>
          <img className="h-10 m-3" src={travelGuruBlack} alt="" />
        </Link>
      </div>
      <div className=" flex-1 justify-between  ">
        <div className="flex">
          <ul className="flex space-x-12 items-center px-1">
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/destination">Destination</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </li>
          </ul>

          <div className="dropdown dropdown-end ml-12">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginNav;
