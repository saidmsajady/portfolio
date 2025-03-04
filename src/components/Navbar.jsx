import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
      <a href='/' className="logo">Said</a>

      <nav className="navbar">
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#technologies">Technologies</a>
          <a href="#contactme">Contact Me</a>
      </nav>
    </header>
  );
};

export default Navbar;