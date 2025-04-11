import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1 className="title">CivicRoutes - Authority Dashboard</h1>
    <nav className="nav">
      <Link to="/" className="nav-btn">Local Issues</Link>
      <Link to="/announcements" className="nav-btn">Announcements</Link>
    </nav>
  </header>
);

export default Header;
