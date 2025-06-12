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
    "px-[45px] py-[15px] rounded-3xl text-sm font-medium transition duration-200 text-center inline-flex items-center justify-center gap-2";

  const variants = {
    primary: "text-primary-text hover:bg-primary-hover border-0 bg-[#F5F7F9]",
    outline:
      "border-transparent bg-outline text-outline-text hover:!bg-outline-hover bg-[#006AF2] hover:text-white text-white",
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
