import React from "react";
import { NavLink } from "react-router-dom";
import LgNav from "../LgNav";
import MobNav from "./MobNav";

const Nav = () => {
  return (
    <>
    <div className="w-full hidden md:block">
      <LgNav />
    </div>
    <div className="w-full block md:hidden">
      <MobNav />
    </div>
    </>
  );
};

export default Nav;
