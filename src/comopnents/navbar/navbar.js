import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import "../../responsive.css";
import { useMediaQuery } from "react-responsive";
import HamMenu from "../hamMenu/hamMenu";
import {
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaHome,
  FaUser,
} from "react-icons/fa";

const Navbar = (props) => {
  const { handleToggle, isOpen } = props;
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 990px)",
  });

  return (
    <div className='navbar'>
      <div className='nav-logo'></div>
      {isDesktopOrLaptop ? (
        <div className='routes'>
          <NavLink className='route' to={"/"}>
            <FaHome />
            Home
          </NavLink>
          <NavLink className='route' to={"/work"}>
            <FaCode />
            Work
          </NavLink>
          <NavLink className='route' to={"/experience"}>
            <FaBriefcase />
            Experience
          </NavLink>
          <NavLink className='route' to={"/about-me"}>
            <FaUser />
            About Me
          </NavLink>
          <NavLink className='route' to={"/contact"}>
            <FaEnvelope />
            Contact
          </NavLink>
        </div>
      ) : (
        <HamMenu handleToggle={handleToggle} isOpen={isOpen} />
      )}
    </div>
  );
};

export default Navbar;
