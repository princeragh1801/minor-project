import React from "react";
import Button from '../Button'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"
import { selectUser, clearUser } from '../../store/userSlice'
import authServices from "../../services/userServices";

function Header() {
  const user = useSelector(selectUser)
  const authStatus = user != null;
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const navItems = [
    {
      name: 'Home',
      toPage: "/home",
      active: authStatus
    }, 
    {
      name: 'Profile',
      toPage: "/profile",
      active: authStatus
    }, 
    {
      name: "Learn",
      toPage: "/",
      active: !authStatus,
    },
    {
      name: "About Us",
      toPage: "/about-us",
      active: !authStatus,
    },
    {
      name: "Contact Us",
      toPage: "/contact",
      active: authStatus,
    },
    {
      name: "Add Project",
      toPage: "/add-project",
      active: authStatus,
    },
  ]

  const logoutHandler =() =>{
    authServices.logoutUser();
    dispatch(clearUser());
    navigate("/login");
  }
  return (
    <div className="relative w-full bg-white shadow-md py-2">
      <div className="mx-10 flex  items-center justify-between px-2 py-2 ">
        <div className="inline-flex items-center space-x-2">
          <span className="font-bold text-2xl">.DOT</span>
        </div>
        <div className=" grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {navItems.map((item) => 
            item.active ? 
              (
                <li key={item.name}>
              <NavLink
                to={item.toPage}
                className="text-lg font-semibold text-gray-800 hover:text-gray-900 hover:border-b-2 border-green-600"
              >
                {item.name}
              </NavLink>
            </li>
              ) : null
            )}

          </ul>
        </div>
        <div className="hidden sm:block mx-4">
        
        {authStatus ? (
          <Link to='/login' >
          <Button title="Logout" className="text-black border-2" onClick={logoutHandler} />
          </Link>
        ) : ( <>
        <Link to='/signup'>
        <Button title="Join Us" className="bg-green-500 text-white" />
        </Link>
        <Link to='/login'>
        <Button title="Sign In" className="text-black border-2" />
        </Link></>)
      }
         
        </div>
        
      </div>
    </div>
  );
}

export default Header;
