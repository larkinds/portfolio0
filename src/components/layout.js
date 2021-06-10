import React from 'react';
import { Link } from 'gatsby';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <body>
      <div className="bodyDiv">
        <nav className="navbar" id="navbar">
          <Link className="logo" to="/">
            Larkin
          </Link>
          <div className="nav-item">
            <Link className="nav-item-text" to="/about">
              About
            </Link>
            <Link className="nav-item-text" to="/codingProjects">
              Code
            </Link>
            <Link className="nav-item-text" to="/creativeProjects">
              Creative
            </Link>
            <Link className="nav-item-text" to="/contact">
              Contact
            </Link>
          </div>
        </nav>
        {children}
      </div>
    </body>
  );
};

export default Layout;
