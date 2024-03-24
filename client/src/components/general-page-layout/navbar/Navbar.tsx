// Library Imports
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Functions, Helpers, Utils, and Hooks
import useWindowWidth from "../../../hooks/useWindowWidth";
// Components
import { AnimatedNavLink } from "./dependents/AnimatedNavLink";
// CSS
import "./navbar.scss";
// Assets and Images
import logo from "../../../assets/images/logo/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const windowWidth = useWindowWidth();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Your Logo</Link>
        {windowWidth <= 768 && (
          <button className="navbar-toggle" onClick={toggleMenu}>
            <span className="navbar-toggle-icon">&#9776;</span>
          </button>
        )}
      </div>
      {(isOpen || windowWidth > 768) && (
        <div className="navbar-menu">
          <ul>
            <li>
              <AnimatedNavLink linkText="Home" url="/" />
            </li>
            <li>
              <AnimatedNavLink linkText="About" url="/about" />
            </li>
            <li>
              <AnimatedNavLink linkText="Contact Us" url="/contact-us" />
            </li>
            {/* Add more menu items */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
