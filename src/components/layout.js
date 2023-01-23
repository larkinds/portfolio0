import React from 'react';
import { Link } from 'gatsby';
import {Helmet} from 'react-helmet'
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className="body-div">
      <Helmet><title>Larkin D Smith</title></Helmet>
      <nav className="navbar" id="navbar">
        <Link className="logo" to="/">
          Larkin D. Smith
        </Link>
        <div className="nav-item">
          <Link className="nav-item-text" to="/about">
            About
          </Link>
          <Link className="nav-item-text" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
