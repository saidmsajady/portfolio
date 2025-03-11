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

  // Function to handle smooth scrolling with an offset for the navbar
  const handleScrollToSection = (e, targetId) => {
    e.preventDefault(); // Prevent the default anchor link behavior

    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.querySelector('.header').offsetHeight; // Get the height of the navbar
    let offsetTop = targetElement.offsetTop - navbarHeight; // Calculate the position with offset

    // Apply extra offset for the 'projects' section
    if (targetId === 'projects') {
      offsetTop -= 50; // Adjust this value to control the amount of space
    }

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth', // Smooth scroll behavior
    });
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <a href='/' className="logo">Said</a>

      <nav className={`navbar ${menuOpen ? "open" : ""} ${isScrolled ? "scrolled" : ""}`}>
        <a href="#projects" onClick={(e) => handleScrollToSection(e, 'projects')} >Projects</a>
        <a href="#education" onClick={(e) => handleScrollToSection(e, 'education')}>Education</a>
        <a href="#experience" onClick={(e) => handleScrollToSection(e, 'experience')}>Experience</a>
        <a href="#contactme" onClick={(e) => handleScrollToSection(e, 'contactme')}>Contact Me</a>
      </nav>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </header>
  );
};

export default Navbar;
