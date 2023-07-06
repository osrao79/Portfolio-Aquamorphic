import React from "react";
import './hamMenu.css'
import { FaHome, FaBriefcase, FaCode, FaUser, FaEnvelope } from 'react-icons/fa';



const HamMenu = (props) => {
 const {handleToggle, isOpen}= props

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
    <div className="hamburger-icon" onClick={handleToggle}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="menu-items">
        <a href="/" onClick={handleToggle}>
          <FaHome/>
          Home</a>
        <a href="/#experience" onClick={handleToggle}>
          <FaBriefcase/>
          Experience</a>
        <a href="/#work" onClick={handleToggle}>
          <FaCode/>
          Work</a>
        <a href="/#about-me" onClick={handleToggle}>
          <FaUser/>
          About</a>
        <a href="/#contact" onClick={handleToggle}>
          <FaEnvelope/>
          Contact</a>
    </div>
  </div>
  );
};

export default HamMenu;

// <div className="HamMenu">
    //   <div className={`menu ${isOpen ? "open" : ""}`}>
    //     <div className="hamburger" onClick={handleToggle}>
    //       <div className="line"></div>
    //       <div className="line"></div>
    //       <div className="line"></div>
    //     </div>
    //   </div>
    //   <Sidebar />
    //   <div className="content">
    //     <h1>Welcome to My HamMenu</h1>
    //     <p>This is the main content of the HamMenu.</p>
    //   </div>
    // </div>