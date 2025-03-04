import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
      <a href='/' className="logo">Logo</a>
      
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#contactme">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;