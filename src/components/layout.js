import React from 'react';
import { Link } from 'gatsby';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <body>
      <div className="bodyDiv">
        <nav className="navbar" id="navbar">
          <Link className="logo" to="/">
            LSD
          </Link>
          <div className="nav-item">
            <Link to="/about/">About</Link>
            <Link to="/codingProjects">Coding Projects</Link>
            <Link to="/creativeProjects">Creative Projects</Link>
          </div>
        </nav>
        {children}
      </div>
    </body>
  );
};

export default Layout;
