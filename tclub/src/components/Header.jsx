import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import mainLogo from "../assets/logo.svg";
import userLogo from "../assets/nlogo.svg";
import bellImg from "../assets/notification.svg";
import userImage from "../assets/man.svg";
import CustomButton from "./CustomButton";
import DropDown from "./DropDown";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Health", path: "/healths" },
  { label: "Seminar", path: "/seminar" },
  { label: "Heroes", path: "/heroes" },
  { label: "News", path: "/blogs" },
  { label: "Contact Us", path: "/contact" },
];

const authButtons = [
  {
    label: "Login",
    path: "/login",
    style:
      "border border-[var(--btn-outline-border)] text-[var(--btn-outline-text)] hover:bg-[var(--btn-outline-hover)]",
  },
  {
    label: "Sign Up",
    path: "/signup",
    style:
      "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:bg-[var(--btn-primary-hover)]",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleNavigate = (route) => {
    const isValid = false;

    if (isValid) {
      navigate(route);
    } else {
      navigate("/error");
    }
  };

  return (
    <header className="bg-[var(--text-light)] fixed top-0 left-0 w-full z-50 border-b border-[var(--color-border)]">
      <div className="container-fluid md:px-4 lg:px-[50px] xl:px-[50px] px-4 mx-auto relative flex items-center justify-between py-4">
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img
              src={isHome ? mainLogo : userLogo}
              alt="Logo"
              className={`h-12 lg:w-[192px] lg:h-[60px] md:h-12 ${!isHome ? "max-w-[200px]" : ""}`}
            />
          </NavLink>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:hidden lg:flex justify-center">
          <ul className="flex justify-between items-center gap-2 md:gap-[25px] lg:gap-[15px] xl:gap-[50px] 2xl:gap-[65px]">
            {navLinks.map(({ label, path }) => (
              <li key={path} className="last:mr-0">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `text-[18px] leading-[27px] tracking-[0] transition font-${isActive ? "medium" : "normal"} ${
                      isActive
                        ? "text-[var(--btn-outline-text)] text-[18px]"
                        : "text-[var(--text-primary)] hover:text-[var(--btn-outline-text)]"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side */}
        {isHome ? (
          <div className="hidden lg:flex items-center gap-[15px] lg:gap-[15px] xl:gap-[30px]">
            <CustomButton
              label="Login"
              onClick={() => handleNavigate("/login")}
              variant="outline"
              className="shadow-[var(--btn-shadow)] hover:!text-[var(--text-primary)]"
            />
            <CustomButton
              label="Sign Up"
              onClick={() => handleNavigate("/signup")}
              variant="primary"
              className="!px-[36px]"
            />
          </div>
        ) : (
          <div className="hidden lg:flex items-center gap-6">
            {/* Notification Bell */}
            <div className="relative">
              <img src={bellImg} alt="Bell Icon" className="w-6 h-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-[var(--btn-outline-text)] ring-2 ring-white"></span>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={userImage}
                alt="User"
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <div className="text-sm text-[var(--text-primary)]">
                <ul>
                  <li className="font-normal text-[12px] text-[var(--text-secondary)]">
                    Welcome
                  </li>
                  <li className="flex items-center gap-1 font-semibold">
                    <DropDown />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu Icon */}
        <div className="block lg:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="text-[var(--text-muted)] focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {menuOpen && (
        <div className="block lg:hidden bg-[var(--text-light)] shadow-md px-4 py-4 space-y-3">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-1 px-2 rounded transition ${
                  isActive
                    ? "text-[var(--btn-outline-text)] font-semibold"
                    : "text-[var(--text-muted)] hover:text-[var(--btn-outline-text)]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Auth Buttons for mobile/tablet */}
          <div className="space-y-2 flex flex-col items-center gap-3 sm:flex-col md:flex-row md:w-[300px] w-[200px]">
            {authButtons.map(({ label, path, style }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`block text-center py-2 mb-0 w-full rounded ${style}`}
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
