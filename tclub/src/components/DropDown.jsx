import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  Video,
  LogOut,
  ChevronDown,
} from "lucide-react";

const DropDown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-transparent transition"
      >
        <span className="font-bold text-[18px] text-[#0A2540] cursor-pointer">Jane Cooper</span>
        <ChevronDown
          className={`w-5 h-5 text-[#0A2540] transform transition-transform duration-200 cursor-pointer ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
       <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 rounded-lg shadow-lg z-50">
        {/* Triangle */}
        <div className="absolute -top-2 right-2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200"></div>

        {/* Dropdown Content */}
        <div className="divide-y divide-gray-200 px-2">
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 px-4 py-3 text-[18px] text-[#0A2540] hover:bg-transparent"
            >
              <LayoutDashboard className="w-5 h-5 text-gray-600" />
              Dashboard
            </Link>
            <Link
              to="/admin/profile"
              className="flex items-center gap-3 px-4 py-3 text-[18px] text-[#0A2540]hover:bg-transparent"
            >
              <User className="w-5 h-5 text-gray-600" />
              Profile Settings
            </Link>
            <Link
              to="/admin/webinar"
              className="flex items-center gap-3 px-4 py-3 text-[18px] text-[#0A2540] hover:bg-transparent"
            >
              <Video className="w-5 h-5 text-gray-600" />
              Webinar
            </Link>
            <Link
              to="/admin/logout"
              className="flex items-center gap-3 px-4 py-3 text-[18px] text-[#0A2540] hover:bg-transparent"
            >
              <LogOut className="w-5 h-5 text-gray-600" />
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
