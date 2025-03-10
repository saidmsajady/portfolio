import React, { useState, useEffect } from "react";
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <a href='/' className="logo">Said</a>

      <nav className={`navbar ${menuOpen ? "open" : ""} ${isScrolled ? "scrolled" : ""}`}>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#contactme" onClick={() => setMenuOpen(false)}>Contact Me</a>
      </nav>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </header>
  );
};

export default Navbar;
