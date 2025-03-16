import React, { useState, useEffect } from "react";
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false); // New state for closing animation

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".navbar") && !event.target.closest(".menu-icon")) {
        closeMenuSmoothly();
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu with animation delay
  const closeMenuSmoothly = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 300); // Wait for animation duration (matches CSS transition time)
  };

  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.querySelector('.header').offsetHeight;
    let offsetTop = targetElement.offsetTop - navbarHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });

    closeMenuSmoothly(); // Close smoothly after clicking a menu item
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <a href="/" className="logo">Said</a>

      <nav className={`navbar ${menuOpen ? "open" : ""} ${closing ? "closing" : ""} ${isScrolled ? "scrolled" : ""}`}>
        <a href="#projects" onClick={(e) => handleScrollToSection(e, 'projects')}>Projects</a>
        <a href="#education" onClick={(e) => handleScrollToSection(e, 'education')}>Education</a>
        <a href="#experience" onClick={(e) => handleScrollToSection(e, 'experience')}>Experience</a>
        <a href="#contactme" onClick={(e) => handleScrollToSection(e, 'contactme')}>Contact Me</a>
      </nav>

      <div className="menu-icon" onClick={() => (menuOpen ? closeMenuSmoothly() : setMenuOpen(true))}>
        ☰
      </div>
    </header>
  );
};

export default Navbar;
