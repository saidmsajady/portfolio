import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Education />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
