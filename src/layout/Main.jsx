import React from "react";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import background from "../assets/background.png";

const Main = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="w-full bg-cover relative"
    >
      <div style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
        <NavigationBar></NavigationBar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
