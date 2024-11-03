import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <div className="h-screen">
        <Sidebar />
      </div>
      <div className="">
        {/* to perform conditional routing */}
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
