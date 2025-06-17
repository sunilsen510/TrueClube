import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const DropDown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
       <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center  py-2 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
      >

        <svg
          className=" h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 origin-top-right bg-white border border-gray-100 rounded-[10px]">
          <div className="py-1">
            <Link
              to="/login"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
      </div>
    </>
  );
};


export default DropDown
