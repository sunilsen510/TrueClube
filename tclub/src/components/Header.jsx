import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from 'react-router-dom';
import mainLogo from '../assets/logo.svg';
import userLogo from '../assets/nlogo.svg';
import bellImg from '../assets/notification.svg';
import userImage from '../assets/man.svg';
import CustomButton from "./CustomButton";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Health", path: "/health" },
  { label: "Seminar", path: "/seminar" },
  { label: "Heroes", path: "/heroes" }, 
  { label: "News", path: "/blogs" },
  { label: "Contact Us", path: "/contact"}
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="bg-[#FFFFFF] fixed top-0 left-0 w-full z-50 border-b border-gray-200">
      <div className="container-fluid mx-auto relative flex items-center justify-between py-4 px-[50px] bg-white border-black">

        {/* Logo - Left */}
        <div className="text-xl font-bold text-blue-600">
          <NavLink to="/">
            <img
              src={isHome ? mainLogo : userLogo}
              alt="Logo"
              className={isHome ? 'h-16 w-[192px]' : 'h-16 w-[192px]'}
            />
          </NavLink>
        </div>

        {/* Nav Links - Center */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className="text-gray-700 hover:!text-blue-600 transition"
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {isHome ? (
        //  Auth Buttons on Home Page
        <div className="hidden md:flex items-center space-x-3 ml-auto gap-2">
          <CustomButton
            label="Login"
            to="/login"
            variant="outline"
            className="shadow-[8px_6px_15px_0px_#0061DE40]"
          />
          <CustomButton label="Sign Up" to="/signup" variant="primary" />
        </div>
      ) : (
        // Bell + User Info on Other Pages
        <div className="flex items-center gap-6 ml-auto">
          {/* Bell Icon with Blue Dot */}
          <div className="relative">
            <img src={bellImg} alt="Bell Icon" className="w-6 h-6" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-blue-600 ring-2 ring-white"></span>
          </div>

          {/* User Info */}
          <div className="flex items-center gap-4">
            <div>
              <img
                src={userImage}
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div className="text-sm text-gray-800">
              <ul>
                <li>Welcome</li>
                <li className="flex items-center gap-1 font-semibold">
                  Jane Copper
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
  
    

        {/* Mobile Menu Toggle */}
        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-3">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-blue-600"
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-2 space-y-2">
            {authButtons.map(({ label, path, style }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`block text-center rounded py-1 ${style}`}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


