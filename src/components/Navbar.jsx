import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white h-18 shadow-md flex justify-between items-center px-10">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="" className="h-20" />
        <h1 className="text-2xl font-medium">React Router</h1>
      </div>
      <ul className="flex gap-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
