import React from "react";
import openimage from "../assets/open.png";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  let links = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/create",
      name: "Create Presentation",
    },
    {
      to: "/saved",
      name: "Saved",
    },
  ];
  return (
    <div className="navbar">
      <img src={openimage} alt="" />
      <div className="link">
        {links.map((ele) => (
          <NavLink key={ele.to} to={ele.to} className="navlink">
            {ele.name}
          </NavLink>
        ))}
      </div>
      <div className="sign">
        <button>Sign up</button>
        <button>Log In</button>
      </div>
    </div>
  );
};

export default Navbar;
