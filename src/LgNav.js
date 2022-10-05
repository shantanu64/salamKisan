import React from "react";
import { NavLink } from "react-router-dom";

const LgNav = () => {
  return (
    <>
      <div className=" flex flex-row items-center justify-between px-6 h-20 bg-transparent w-full">
        <div className="w-1/5">
          <img src="logo_typo.png" className="w-42" />
        </div>
        <div className="flex flex-row items-center justify-around w-3/5 font-light">
          <NavLink to={"/"}>
            <button className="">Home</button>
          </NavLink>
          <NavLink to={"/aboutUs"}>
            <button className="">About Us</button>
          </NavLink>
          <NavLink to={"/ourTeam"}>
            <button className="">Our Team</button>
          </NavLink>
          {/* <NavLink to={"/industries"}>
            <button className="">Industries</button>
          </NavLink> */}
          <NavLink to={"/news"}>
            <button className="">News</button>
          </NavLink>
          <NavLink to={"/events"}>
            <button className="">Events</button>
          </NavLink>
          <NavLink to={"/contactUs"}>
            <button className="">Contact Us</button>
          </NavLink>
        </div>
        <div>
          <button
            style={{
              background:
                "linear-gradient(95.1deg, #115C3E 11.71%, #21A74D 113.94%)",
            }}
            className="font-light shadow-2xl px-6 py-0.5 rounded-full"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LgNav;
