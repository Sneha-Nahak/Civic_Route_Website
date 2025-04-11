import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="brand-title">CivicRoutes</NavLink>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" onClick={() => setIsOpen(false)} className="nav-item">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/issue-form" onClick={() => setIsOpen(false)} className="nav-item">Report Issue</NavLink>
        </li>
        <li>
          <NavLink to="/authority-updates" onClick={() => setIsOpen(false)} className="nav-item">Authority Updates</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
