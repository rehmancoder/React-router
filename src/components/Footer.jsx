import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black p-5">
      <div className="flex">
        <h1 className="text-white font-medium text-2xl">React App</h1>
        <div className="text-white ml-36 mt-1">
          <h1 className="text-xl font-medium">Quick Links</h1>
          <ul className="mt-5 space-y-5">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
