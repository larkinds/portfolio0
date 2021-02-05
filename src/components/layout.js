import React from 'react';
import { Link } from 'gatsby';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="navbar" id="navbar">
        <Link to="/">LSD</Link>
        <Link to="/about/">About</Link>
        <Link to="/codingProjects">Coding Projects</Link>
        <Link to="/creativeProjects">Creative Projects</Link>
      </nav>
      {children}
      <footer>
        <a href="https://github.com/larkinds">Github</a>
        <a href="https://github.com/larkinds">Linkedin</a>
        <a href="mailto:larkinsmith.work@gmail.com">Email</a>
      </footer>
    </div>
  );
};

export default Layout;
