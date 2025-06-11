import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import mainLogo from '../assets/logo.svg';
import CustomButton from "./CustomButton";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Health", path: "/health" },
  { label: "Seminar", path: "/seminar" }, 
  { label: "News", path: "/news" },
  { label: "Contact Us", path: "/contact us"}
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-[#FFFFFF] fixed top-0 left-0 w-full z-50">
      <div className="container-fluid mx-auto relative flex items-center justify-between py-4 px-[50px] bg-white border-black">

        {/* Logo - Left */}
        <div className="text-xl font-bold text-blue-600">
          <NavLink to="/">
            <img src={mainLogo} alt={mainLogo} />
          </NavLink>
        </div>

        {/* Nav Links - Center */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Auth Buttons - Right */}
        <div className="hidden md:flex items-center space-x-3 ml-auto gap-2">
          <CustomButton label="Login" to="/login" variant="outline"  className="shadow-[8px_6px_15px_0px_#0061DE40]" />
          <CustomButton label="Sign Up" to="/signup" variant="primary" />
        </div>

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


