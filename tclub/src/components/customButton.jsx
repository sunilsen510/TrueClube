import React from "react";
import { NavLink } from "react-router-dom";

const CustomButton = ({
  label,
  to = null,
  onClick,
  variant = "primary",
  className = "",
  icon = null,
  type = "button",
}) => {
  const baseStyles =
    "px-[45px] py-[18px] rounded-[60px] text-[18px] leading-[13px] tracking-[0] font-bold transition duration-200 text-center inline-flex items-center justify-center gap-4 mr-0"

  const variants = {
    primary: "border-0 bg-[#F5F7F9] text-[#0A2540] hover:bg-[#006AF2] hover:!text-white",
    outline:
      "border-transparent bg-outline text-outline-text hover:bg-[#F5F7F9] hover:text-black bg-[#006AF2] hover:text-white text-white",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <> 
      {icon && <img src={icon} alt="icon" className="w-5 h-4" />}
      {label}
    </>
  );

  return to ? (
    <NavLink to={to} className={classes}>
      {content}
    </NavLink>
  ) : (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
};

export default CustomButton;
