import React from "react";
import Button from '../Button'
import {Link, NavLink} from 'react-router-dom'
function Header() {
  return (
    <div className="relative w-full bg-white shadow-md py-2">
      <div className="mx-10 flex  items-center justify-between px-2 py-2 ">
        <div className="inline-flex items-center space-x-2">
          <span className="font-bold text-2xl">.DOT</span>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            <li>
              <NavLink
                to="/home"
                className="text-lg font-semibold text-gray-800 hover:text-gray-900"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-lg font-semibold text-gray-800 hover:text-gray-900"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="font-semibold text-gray-800 hover:text-gray-900 text-lg"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block mx-4">
        
        <Link to='/signup'>
        <Button title="Join Us" className="bg-green-500 text-white" />
        </Link>
        <Link to='/login'>
        <Button title="Sign In" className="text-black border-2" />
        </Link>
        
        </div>
        
      </div>
    </div>
  );
}

export default Header;
